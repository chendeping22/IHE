<template>
  <div>
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
            <span>本地检索病人信息</span>
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
                    v-loading="loading"
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0, 0, 0, 0.5)"
                    height="200"
                    border
                    ref="singleTable"
                    header-row-class-name="header-row"
                    :highlight-current-row="true"
                    @current-change="handleCurrentChange"
                    style="width: 100%">
            <el-table-column type="index"
                             width="48">
            </el-table-column>
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
             :status-icon='true'
             :show-message='true'
             style="padding-top:0 20px">
      <el-row>
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>病人基本信息</span>
          </div>
          <el-col :span="6">
            <el-form-item label="病人ID号"
                          :show-message='false'
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
          <el-col :span="12">
            <el-row>
              <el-col :span="12">
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="病人姓名"
                                  prop="patFamilyName">
                      <el-input v-model="submitForm.patFamilyName">
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label=""
                                  label-width="10px"
                                  prop="patGivenName">
                      <el-input v-model="submitForm.patGivenName">
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label=""
                                  label-width="10px"
                                  prop="patNameInitials">
                      <el-input v-model="submitForm.patNameInitials">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-form-item label="性别"
                              prop="sex">
                  <el-select v-model="submitForm.sex"
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
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="12">
                <el-form-item label="出生日期"
                              prop="birthDateTime">
                  <el-date-picker v-model="submitForm.birthDateTime"
                                  type="date"
                                  placeholder="选择日期"
                                  format="yyyyMMdd"
                                  value-format="yyyyMMdd">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="商务电话"
                              prop="bizTelNum">
                  <el-input v-model="submitForm.bizTelNum">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-form-item label="病人账号"
                          prop="patAccountNum">
              <el-input v-model="submitForm.patAccountNum">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="社保号"
                          prop="ssnNum">
              <el-input v-model="submitForm.ssnNum">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="驾照号"
                          prop="driverLicenseNum">
              <el-input v-model="submitForm.driverLicenseNum">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="家庭电话"
                          prop="homeTelNum">
              <el-input v-model="submitForm.homeTelNum"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="住址/街道"
                          prop="streetAdd">
              <el-input v-model="submitForm.streetAdd">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="城市"
                          prop="city">
              <el-input v-model="submitForm.city">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="省份"
                          prop="province">
              <el-input v-model="submitForm.province">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="邮编"
                          prop="postalCode">
              <el-input v-model="submitForm.postalCode">
              </el-input>
            </el-form-item>
          </el-col>
        </el-card>
      </el-row>
      <el-row>
        <el-col :span="24"
                style="padding:20px;text-align:center;border-bottom:1px solid #c0c4cc">
          <el-button type="primary"
                     style="width:120px;"
                     @click="localUpdate('submitForm')">本地修改</el-button>
          <el-button type="primary"
                     style="width:120px;margin-left:8px;"
                     @click="submitUpdate('submitForm')">提交修改</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-form ref="combineForm"
             :model="combineForm"
             :rules="combineRules"
             status-icon
             label-width="100px"
             class="form-wrap"
             style="padding-top:0">
      <el-row>
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>病人ID号合并</span>
          </div>
          <el-col :span="6">
            <el-form-item label="源病人ID号"
                          prop="sourcePatientId"
                          style="margin-bottom:16px">
              <el-input v-model="combineForm.sourcePatientId">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6"
                  :offset="1">
            <el-form-item label="目标病人ID号"
                          label-width="120px"
                          prop="targetPatientId">
              <el-input v-model="combineForm.targetPatientId">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10"
                  :offset="1">
            <el-button type="primary"
                       style="width:120px;"
                       @click="localCombine('combineForm')">本地合并操作</el-button>
            <el-button type="primary"
                       style="width:120px;"
                       @click="submitCombine('combineForm')">提交合并</el-button>
          </el-col>
        </el-card>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { showLog, formatDay } from '../../utils/common';
import Apis from '../../utils/apisPIX';
import { mapGetters } from 'vuex';
import { configBus } from '../../utils/bus.js';
export default {
  data() {
    let date = new Date();
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
      submitForm: {
        patientId: '', //病人ID（所有必填）
        namespaceId: '',
        universalId: '',
        oidType: '',
        patFamilyName: '',
        patGivenName: '',
        patNameInitials: '',
        sex: '',
        birthDateTime: '',
        bizTelNum: '',
        homeTelNum: '',
        patAccountNum: '',
        ssnNum: '',
        driverLicenseNum: '',
        streetAdd: '',
        city: '',
        province: '',
        postalCode: '',
        // motherMaidenFname: '',
        // motherMaidenGname: '',
        // motherMaidenNinitial: '',
        homeTelNum: '',
        // multiBirthIndicator: '',
        // birthOrder: '',
        // lastUpdtDate: '',
        // lastUpdtFacility: '',
      },
      submitRules: {
        patientId: [
          {
            required: true,
            message: '请输入patientId',
            tigger: 'blur',
          },
        ],
      },
      combineForm: {
        sourcePatientId: '',
        targetPatientId: '',
      },
      combineRules: {
        sourcePatientId: [
          {
            required: true,
            message: '请输入源病人ID号',
            tigger: 'blur',
          },
        ],
        targetPatientId: [
          {
            required: true,
            message: '请输入目标病人ID号',
            tigger: 'blur',
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(['serviceConfig', 'organizations']),
  },
  created() {},
  methods: {
    birthDateFormatter(row, column) {
      let date = new Date(row.birthDateTime);
      return formatDay(date.getFullYear(), date.getMonth() + 1, date.getDate());
    },
    handleCurrentChange(val) {
      this.currentRow = val;
      for (let item in this.submitForm) {
        if (item === 'birthDateTime') {
          let date = new Date(this.currentRow[item]);
          this.submitForm[item] = formatDay(
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
          );
          continue;
        }
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
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      let params = {};
      for (let item in this.searchForm) {
        params[item] = this.searchForm[item]
          ? this.searchForm[item]
          : undefined;
      }

      this.currentRow = null;
      this.loading = true;
      Apis.BasicInfo.localSearchPatInfo(params)
        .then(res => {
          this.loading = false;
          console.log(res);
          if (res.status === 200) {
            this.$message({
              message: res.data.info,
              type: 'success',
            });
            if (
              typeof res.data.data !== undefined &&
              res.data.data.length > 0
            ) {
              this.tableData = res.data.data;
            }
          }
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
          this.$message.error(err.message);
        });
      //   }
      // });
    },
    localUpdate(formName) {
      //根据查询出来的信息进行患者信息的修改
      if (!this.currentRow) {
        this.$message.error('请在表格中选择一条数据进行修改');
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = { ...this.submitForm };
          Apis.BasicInfo.localUpdate(params)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: res.data.info,
                  type: 'success',
                });
                this.localSearchPatInfo('searchForm');
              }
            })
            .catch(err => {
              console.log(err);
              this.$message.error(err.message);
            });
        }
      });
    },
    submitUpdate(formName) {
      //根据查询出来的信息进行患者信息的修改
      if (!this.currentRow) {
        this.$message.error('请在表格中选择一条数据进行修改');
      }

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
          let params = {};
          let serviceConfig = this.serviceConfig;
          params.connectionInfo = { ...this.serviceConfig };
          params.patient = { ...this.submitForm };
          Apis.BasicInfo.submitUpdate(params)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: res.data.info,
                  type: 'success',
                });
              }
            })
            .catch(err => {
              console.log(err);
              this.$message.error(err.message);
            });
        }
      });
    },
    localCombine(formName) {
      //本地合并患者信息
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = { ...this.combineForm };
          Apis.BasicInfo.localCombine(params)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: res.data.info,
                  type: 'success',
                });
                this.localSearchPatInfo('searchForm');
              }
            })
            .catch(err => {
              console.log(err);
              this.$message.error(err.message);
            });
        }
      });
    },
    submitCombine(formName) {
      //提交合并患者信息到服务端
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
          let params = {};
          let serviceConfig = this.serviceConfig;
          params = { ...this.combineForm, ...this.serviceConfig };
          Apis.BasicInfo.submitCombine(params)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: res.data.info,
                  type: 'success',
                });
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
<style >
.header-row {
  color: #606266;
}

</style>





