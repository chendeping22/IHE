<template>
    <div>
        <el-form ref="addForm"
                 :model="addForm"
                 status-icon
                 :rules="searchRules"
                 label-width="100px"
                 style="padding:0 20px">
            <el-row>
                <el-card class="box-card"
                         style="border-right: none;">
                    <div slot="header"
                         class="clearfix">
                        <span>添加机构</span>
                    </div>
                    <el-col :span="6">
                        <el-form-item label="namespaceId"
                                      prop="namespaceId">
                            <el-input v-model="addForm.namespaceId"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="universal"
                                      prop="universal">
                            <el-input v-model="addForm.universal"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="oidType"
                                      prop="oidType">
                            <el-input v-model="addForm.oidType"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary"
                                   style="width:80px;margin-left:16px;"
                                   @click="organizationAdd('addForm')">添加</el-button>
                    </el-col>
                    <!-- 查询到数据显示 -->
                    <el-table v-loading="loading"
                              element-loading-text="拼命加载中"
                              element-loading-spinner="el-icon-loading"
                              element-loading-background="rgba(0, 0, 0, 0.5)"
                              :data="organizations"
                              height="420"
                              border
                              ref="singleTable"
                              highlight-current-row
                              style="width: 100%">
                        <el-table-column prop="id"
                                         width="180"
                                         label="id">
                        </el-table-column>
                        <el-table-column prop="namespaceId"
                                         label="namespaceId"
                                         width="180">
                        </el-table-column>
                        <el-table-column prop="oidType"
                                         width="80"
                                         label="oidType">
                        </el-table-column>
                        <el-table-column prop="universal"
                                         label="universal">
                        </el-table-column>
                        <el-table-column prop="operation"
                                         label="操作">
                            <template slot-scope="scope">
                                <el-button type="text"
                                           size="small"
                                           @click="clickUpdateBtn(scope.row)">修改</el-button>
                                <el-button type="text"
                                           size="small"
                                           @click="organizationDel(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-row>
        </el-form>
        <el-dialog title="修改"
                   :visible.sync="dialogFormVisible">
            <el-form ref="updateForm"
                     :model="updateForm"
                     status-icon
                     :rules="searchRules">
                <el-form-item label="namespaceId"
                              prop="namespaceId">
                    <el-input v-model="updateForm.namespaceId"></el-input>
                </el-form-item>
                <el-form-item label="universal"
                              prop="universal">
                    <el-input v-model="updateForm.universal"></el-input>
                </el-form-item>
                <el-form-item label="oidType"
                              prop="oidType">
                    <el-input v-model="updateForm.oidType"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer"
                 class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="organizationUpdate('updateForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Apis from '../../utils/apisPIX';
export default {
  data() {
    return {
      loading: false,
      dialogFormVisible: false,
      addForm: {
        namespaceId: '',
        universal: '',
        oidType: '',
      },
      updateForm: {
        namespaceId: '',
        universal: '',
        oidType: '',
      },
      searchRules: {
        namespaceId: [
          {
            required: true,
            message: '不能为空',
            trigger: 'blur',
          },
        ],
        universal: [
          {
            required: true,
            message: '不能为空',
            trigger: 'blur',
          },
        ],
        oidType: [
          {
            required: true,
            message: '不能为空',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(['organizations']),
  },
  created() {
    this.getOrganizationList();
  },
  methods: {
    ...mapActions(['getOrganizationAll']),
    getOrganizationList() {
      this.loading = true;
      this.getOrganizationAll()
        .then(res => {
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          this.$message.error(err.message);
        });
    },
    clickUpdateBtn(row) {
      this.dialogFormVisible = true;
      this.updateForm = { ...row };
    },
    organizationAdd(addForm) {
      this.$refs[addForm].validate(valid => {
        if (valid) {
          Apis.Organization.add(this.addForm)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: res.data.info,
                  type: 'success',
                });
                this.getOrganizationList();
              }
            })
            .catch(err => {
              console.log(err);
              this.$message.error(err.message);
            });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    organizationDel(row) {
      let params = {};
      params.id = row.id;
      Apis.Organization.delete(params)
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            this.$message({
              message: res.data.info,
              type: 'success',
            });
            this.getOrganizationList();
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err.message);
        });
    },
    organizationUpdate(formname) {
      let params = { ...this.updateForm };

      this.$refs[formname].validate(valid => {
        if (valid) {
          Apis.Organization.update(params)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: res.data.info,
                  type: 'success',
                });
                this.getOrganizationList();
                this.dialogFormVisible = false;
              }
            })
            .catch(err => {
              console.log(err);
              this.$message.error(err.message);
            });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>