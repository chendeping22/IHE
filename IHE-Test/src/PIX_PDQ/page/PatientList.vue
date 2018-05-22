<template>
  <div v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading">
    <el-form ref="searchForm"
             :model="searchForm"
             :rules="searchRules"
             label-width="100px"
             style="padding:0 20px">
      <el-row>
        <el-card class="box-card"
                 style="border-right: none;">
          <div slot="header"
               class="clearfix">
            <span>本地获取病人ID</span>
          </div>
          <el-col :span="4">
            <el-form-item label="病人ID"
                          prop="patientId">
              <el-input v-model="searchForm.patientId"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-row>
              <el-col :span="12">
                <el-form-item label="病人姓名"
                              prop="patFamilyName">
                  <el-input v-model="searchForm.patFamilyName">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label=""
                              label-width="10px"
                              prop="patGivenName">
                  <el-input v-model="searchForm.patGivenName">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label=""
                              label-width="10px"
                              prop="patNameInitials">
                  <el-input v-model="searchForm.patNameInitials">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-form-item label="性别"
                          prop="sex">
              <el-select v-model="searchForm.sex"
                         placeholder="请选择">
                <el-option label=""
                           value="">
                </el-option>
                <el-option label="M"
                           value="M">
                </el-option>
                <el-option label="F"
                           value="F">
                </el-option>
                <el-option label="Unknow"
                           value="Unknow">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="出生日期"
                          prop="birthDateTime">
              <el-date-picker v-model="searchForm.birthDateTime"
                              type="date"
                              placeholder="选择日期"
                              format="yyyyMMdd"
                              value-format="yyyyMMdd">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-button type="primary"
                       style="width:80px;margin-left:16px;"
                       @click="localSearchPatInfo('searchForm')">查询</el-button>
          </el-col>
          <!-- 查询到数据显示 -->
          <el-table :data="tableData"
                    height="200"
                    border
                    ref="singleTable"
                    header-row-class-name="header-row"
                    highlight-current-row
                    @current-change="handleCurrentChange"
                    style="width: 100%">
            <el-table-column prop="patientId"
                             width="180"
                             label="病人ID">
            </el-table-column>
            <el-table-column prop="patFamilyName"
                             label="姓"
                             width="80">
            </el-table-column>
            <el-table-column prop="patGivenName"
                             width="80"
                             label="名">
            </el-table-column>
            <el-table-column prop="patNameInitials"
                             width="80"
                             label="简写">
            </el-table-column>
            <el-table-column prop="sex"
                             width="120"
                             label="性别">
            </el-table-column>
            <el-table-column prop="birthDateTime"
                             width="160"
                             label="出生日期"
                             :formatter="birthDateFormatter">
            </el-table-column>
            <el-table-column prop="namespaceId"
                             label="机构名">
            </el-table-column>
            <el-table-column prop="universalId"
                             label="机构ID">
            </el-table-column>
            <el-table-column prop="oidType"
                             label="类型">
            </el-table-column>
            <el-table-column prop=""
                             label="ID列表">
            </el-table-column>
          </el-table>
        </el-card>
      </el-row>
    </el-form>
    <el-form ref="submitForm"
             :model="submitForm"
             :rules="submitRules"
             label-width="100px"
             status-icon
             :show-message='false'
             style="padding-top:0 20px">
      <el-row>
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>向PIX管理器获取病人ID列表</span>
          </div>
          <el-col :span="6">
            <el-form-item label="病人ID号"
                          prop="patientId">
              <el-input v-model="submitForm.patientId">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="10">
                <el-form-item label="机构ID号"
                              prop="namespaceId">
                  <el-select v-model="submitForm.namespaceId"
                             placeholder="请选择">
                    <el-option label=""
                               :value="-1"
                               :disabled="true">
                      <span class="pix-th-color">ID</span>
                      <span class="pix-margin pix-th-color">namespaceId</span>
                      <span class="pix-right pix-th-color">oidType</span>
                      <span class="pix-right pix-th-color">universal</span>
                    </el-option>
                    <el-option v-for=" item in organizations"
                               :key="item.id"
                               :label="item.namespaceId"
                               :value="item.namespaceId"
                               @click.native="namespaceChange(item)">
                      <span>{{ item.id }}</span>
                      <span class="pix-margin">{{ item.namespaceId }}</span>
                      <span class="pix-right">{{ item.oidType }}</span>
                      <span class="pix-right">{{ item.universal }}</span>
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label=""
                              label-width="10px"
                              prop="universalId">
                  <el-input v-model="submitForm.universalId">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label-width="10px"
                              prop="oidType">
                  <el-input v-model="submitForm.oidType">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-form-item label-width="16px">
              <!-- <el-button type="primary"
                         style="width:120px;"
                         @click="SendDocument('submitForm')">本地查询</el-button> -->
              <el-button type="primary"
                         style="width:120px;margin-left:16px;"
                         @click="getIDList('submitForm')">向PIX管理器查询</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="更多限制使用HL7字段"
                          label-width="160px"
                          prop="limitHL7">
              <el-input v-model="submitForm.limitHL7">
              </el-input>
            </el-form-item>
          </el-col>
          <el-table :data="tablePIXData"
                    height="200"
                    border
                    style="width: 100%">
            <el-table-column prop="patientId"
                             width="180"
                             label="病人ID">
            </el-table-column>
            <el-table-column prop="namespaceId"
                             label="机构名">
            </el-table-column>
            <el-table-column prop="universalId"
                             label="机构ID">
            </el-table-column>
            <el-table-column prop="oidType"
                             label="类型">
            </el-table-column>
          </el-table>
        </el-card>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { formatDay } from '../../utils/common';
import Apis from '../../utils/apisPIX';
import { mapGetters } from 'vuex';
import { configBus } from '../../utils/bus.js';
export default {
  data() {
    return {
      loading: false,
      tableData: [],
      currentRow: null,
      searchForm: {
        patientId: '', //病人ID（所有必填）
        patFamilyName: '', //姓名
        patGivenName: '',
        patNameInitials: '',
        sex: '', //性别
        birthDateTime: '', //出生日期
      },
      searchRules: {},
      tablePIXData: [],
      submitForm: {
        patientId: '', //病人ID（所有必填）
        namespaceId: '',
        universalId: '',
        oidType: '',
        limitHL7: '',
      },
      submitRules: {
        patientId: [
          {
            required: true,
            message: '请输入patientId',
            tigger: 'blur',
          },
        ],
        namespaceId: [
          {
            required: true,
            message: '请输入namespaceId',
            tigger: 'blur',
          },
        ],
        universalId: [
          {
            required: true,
            message: '请输入universalId',
            tigger: 'blur',
          },
        ],
        oidType: [
          {
            required: true,
            message: '请输入oidType',
            tigger: 'blur',
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(['serviceConfig', 'organizations']),
  },
  methods: {
    birthDateFormatter(row, column) {
      let date = new Date(row.birthDateTime);
      return formatDay(date.getFullYear(), date.getMonth() + 1, date.getDate());
    },
    handleCurrentChange(val) {
      this.currentRow = val;
      for (let item in this.submitForm) {
        this.submitForm[item] = this.currentRow[item]
          ? this.currentRow[item]
          : '';
      }
    },
    namespaceChange(item) {
      this.submitForm.oidType = item.oidType;
      this.submitForm.universalId = item.universal;
    },
    localSearchPatInfo(formName) {
      //根据查询条件本地检索患者信息
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {};
          for (let item in this.searchForm) {
            params[item] = this.searchForm[item]
              ? this.searchForm[item]
              : undefined;
          }

          this.currentRow = null;
          Apis.BasicInfo.localSearchPatInfo(params)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: res.data.info,
                  type: 'success',
                });
                if (typeof res.data.data !== undefined) {
                  this.tableData = res.data.data;
                } else {
                  this.tableData = [];
                }
              }
            })
            .catch(err => {
              console.log(err);
              this.$message.error(err.message);
            });
        }
      });
    },
    getIDList(formName) {
      // this.$refs['paramSetform'].validate(valid =>{
      //   if(valid){
      //     console.log(valid);
      //   }else{
      //     console.log(valid);
      //   }
      // });

      this.$refs[formName].validate(valid => {
        if (
            this.serviceConfig.pixAdminIp === '' ||
            this.serviceConfig.pixAdminPort === '' ||
            this.serviceConfig.receiveApp === '' ||
            this.serviceConfig.receiveFacility === ''
          ) {
            configBus.$emit('paramSetform');
            return;
        }

        if (valid) {
          let params = { ...this.serviceConfig };
          for (let item in this.submitForm) {
            params[item] = this.submitForm[item]
              ? this.submitForm[item]
              : undefined;
          }

          Apis.BasicInfo.getIdList(params)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: res.data.info,
                  type: 'success',
                });
                if (typeof res.data.data !== undefined) {
                  this.tablePIXData = res.data.data;
                } else {
                  this.tablePIXData = [];
                }
              }
            })
            .catch(err => {
              console.log(err);
              this.$message.error(err.message);
            });
        }
      });
    },
  },
};
</script>




