<template>
    <div>
        <el-form ref="searchForm"
                 :model="searchForm"
                 status-icon
                 :rules="searchRules"
                 label-width="100px"
                 style="padding:0 20px">
            <el-row>
                <el-card class="box-card"
                         style="border-right: none;">
                    <div slot="header"
                         class="clearfix">
                        <span>服务配置添加</span>
                    </div>
                    <el-col :span="6">
                        <el-form-item label="ipAddress"
                                      prop="ipAddress">
                            <el-input v-model="searchForm.ipAddress"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="port"
                                      prop="port">
                            <el-input v-model="searchForm.port"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="外部系统"
                                      prop="outSystem">
                            <el-input v-model="searchForm.outSystem"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="外部描述"
                                      prop="outDesc">
                            <el-input v-model="searchForm.outDesc"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="内部系统"
                                      prop="inSystem">
                            <el-input v-model="searchForm.inSystem"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="内部描述"
                                      prop="inDesc">
                            <el-input v-model="searchForm.inDesc"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="备注"
                                      prop="remark">
                            <el-input v-model="searchForm.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary"
                                   style="width:80px;margin-left:16px;"
                                   @click="localSearchPatInfo('searchForm')">添加</el-button>
                    </el-col>
                    <!-- 查询到数据显示 -->
                    <el-table :data="allService"
                              v-loading="loading"
                              element-loading-text="拼命加载中"
                              element-loading-spinner="el-icon-loading"
                              element-loading-background="rgba(0, 0, 0, 0.5)"
                              height="420"
                              border
                              ref="singleTable"
                              highlight-current-row
                              style="width: 100%">
                        <el-table-column prop="id"
                                         width="180"
                                         label="id">
                        </el-table-column>
                        <el-table-column prop="ipAddress"
                                         width="180"
                                         label="ipAddress">
                        </el-table-column>
                        <el-table-column prop="port"
                                         label="port"
                                         width="80">
                        </el-table-column>
                        <el-table-column prop="outSystem"
                                         width="80"
                                         label="外部系统">
                        </el-table-column>
                        <el-table-column prop="outDesc"
                                         width="80"
                                         label="外部描述">
                        </el-table-column>
                        <el-table-column prop="inSystem"
                                         width="120"
                                         label="内部系统">
                        </el-table-column>
                        <el-table-column prop="inDesc"
                                         width="160"
                                         label="内部描述">
                        </el-table-column>
                        <el-table-column prop="remark"
                                         label="描述">
                        </el-table-column>
                        <el-table-column prop="operation"
                                         label="操作">
                            <template slot-scope="scope">
                                <el-button type="text"
                                           size="small"
                                           @click="clickUpdateBtn(scope.row)">修改</el-button>
                                <el-button type="text"
                                           size="small"
                                           @click="serviceDel(scope.row)">删除</el-button>
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
                <el-form-item label="ipAddress"
                              prop="ipAddress">
                    <el-input v-model="updateForm.ipAddress"></el-input>
                </el-form-item>
                <el-form-item label="port"
                              prop="port">
                    <el-input v-model="updateForm.port"></el-input>
                </el-form-item>
                <el-form-item label="外部系统"
                              prop="outSystem">
                    <el-input v-model="updateForm.outSystem"></el-input>
                </el-form-item>
                <el-form-item label="外部描述"
                              prop="outDesc">
                    <el-input v-model="updateForm.outDesc"></el-input>
                </el-form-item>
                <el-form-item label="内部系统"
                              prop="inSystem">
                    <el-input v-model="updateForm.inSystem"></el-input>
                </el-form-item>
                <el-form-item label="内部描述"
                              prop="inDesc">
                    <el-input v-model="updateForm.inDesc"></el-input>
                </el-form-item>
                <el-form-item label="备注"
                              prop="remark">
                    <el-input v-model="updateForm.remark"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer"
                 class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="serviceUpdate('updateForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { showLog, baseInfo, pathReset } from '../../utils/common';
import { mapGetters, mapActions } from 'vuex';
import Apis from '../../utils/apisPIX';
export default {
  data() {
    return {
      loading: false,
      dialogFormVisible: false,
      searchForm: {
        ipAddress: '',
        port: '',
        outSystem: '',
        outDesc: '',
        inSystem: '',
        inDesc: '',
        remark: '',
      },
      updateForm: {
        ipAddress: '',
        port: '',
        outSystem: '',
        outDesc: '',
        inSystem: '',
        inDesc: '',
        remark: '',
      },
      searchRules: {
        ipAddress: [
          {
            required: true,
            message: '不能为空',
            trigger: 'blur',
          },
        ],
        port: [
          {
            required: true,
            message: '不能为空',
            trigger: 'blur',
          },
        ],
        outSystem: [
          {
            required: true,
            message: '不能为空',
            trigger: 'blur',
          },
        ],
        outDesc: [
          {
            required: true,
            message: '不能为空',
            trigger: 'blur',
          },
        ],
        inSystem: [
          {
            required: true,
            message: '不能为空',
            trigger: 'blur',
          },
        ],
        inDesc: [
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
    ...mapGetters(['allService']),
  },
  created() {
    this.getServiceList();
  },
  methods: {
    ...mapActions(['getServiceAll']),
    getServiceList() {
      this.loading = true;
      this.getServiceAll()
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
    localSearchPatInfo(searchForm) {
      this.$refs[searchForm].validate(valid => {
        if (valid) {
          Apis.ServiceConfig.insert(this.searchForm)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: res.data.info,
                  type: 'success',
                });
                this.getServiceList();
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
    serviceUpdate(formname) {
      let params = { ...this.updateForm };

      this.$refs[formname].validate(valid => {
        if (valid) {
          Apis.ServiceConfig.update(params)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: res.data.info,
                  type: 'success',
                });
                this.getServiceList();
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
    serviceDel(row) {
      //   console.log(row.id);
      let params = {};
      params.id = row.id;
      Apis.ServiceConfig.delete(params)
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            this.$message({
              message: res.data.info,
              type: 'success',
            });
            this.getServiceList();
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error(err.message);
        });
    },
  },
};
</script>
<style scoped>
.el-form-item--mini.el-form-item {
  margin-bottom: 18px;
}
</style>
