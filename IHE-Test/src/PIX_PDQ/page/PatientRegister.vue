<template>
  <div v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading">
    <el-form ref="submitForm"
             :model="submitForm"
             :rules="submitRules"
             label-width="100px"
             class="form-wrap"
             :status-icon='true'
             :show-message='true'
             style="padding-top:0">
      <el-row>
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>病人基本信息</span>
          </div>
          <el-col :span="6">
            <el-form-item label="病人ID号"
                          :show-message='false'
                          prop="patient.patientId">
              <el-input v-model="submitForm.patient.patientId">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="10">
                <el-form-item label="机构ID号"
                              prop="patient.namespaceId">
                  <el-select v-model="submitForm.patient.namespaceId"
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
                              prop="patient.universalId">
                  <el-input v-model="submitForm.patient.universalId">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label-width="10px"
                              prop="patient.oidType">
                  <el-input v-model="submitForm.patient.oidType">
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
                                  prop="patient.patFamilyName">
                      <el-input v-model="submitForm.patient.patFamilyName">
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label=""
                                  label-width="10px"
                                  prop="patient.patGivenName">
                      <el-input v-model="submitForm.patient.patGivenName">
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label=""
                                  label-width="10px"
                                  prop="patient.patNameInitials">
                      <el-input v-model="submitForm.patient.patNameInitials">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="12">
                <el-form-item label="性别"
                              prop="patient.sex">
                  <el-select v-model="submitForm.patient.sex"
                             placeholder="请选择">
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
                              prop="patient.birthDateTime">
                  <el-date-picker v-model="submitForm.patient.birthDateTime"
                                  type="date"
                                  placeholder="选择日期"
                                  format="yyyyMMdd"
                                  value-format="yyyyMMdd">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="商务电话"
                              prop="patient.bizTelNum">
                  <el-input v-model="submitForm.patient.bizTelNum">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-form-item label="病人账号"
                          prop="patient.patAccountNum">
              <el-input v-model="submitForm.patient.patAccountNum">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="社保号"
                          prop="patient.ssnNum">
              <el-input v-model="submitForm.patient.ssnNum">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="驾照号"
                          prop="patient.driverLicenseNum">
              <el-input v-model="submitForm.patient.driverLicenseNum">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="住址/街道"
                          prop="patient.streetAdd">
              <el-input v-model="submitForm.patient.streetAdd">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="城市"
                          prop="patient.city">
              <el-input v-model="submitForm.patient.city">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="省份"
                          prop="patient.province">
              <el-input v-model="submitForm.patient.province">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="邮编"
                          prop="patient.postalCode">
              <el-input v-model="submitForm.patient.postalCode">
              </el-input>
            </el-form-item>
          </el-col>
        </el-card>
      </el-row>
      <el-row>
        <el-card class="box-card"
                 style="border-right: none;">
          <div slot="header"
               class="clearfix">
            <span>病人就诊信息</span>
          </div>
          <el-col :span="4">
            <el-form-item label="病人类别"
                          prop="visitInfo.patClass">
              <el-input v-model="submitForm.visitInfo.patClass"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="就诊点"
                          prop="visitInfo.asgndPointOfCare">
              <el-input v-model="submitForm.visitInfo.asgndPointOfCare"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="房间"
                          prop="visitInfo.asgndRoom">
              <el-input v-model="submitForm.visitInfo.asgndRoom"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="床位"
                          prop="visitInfo.asgndBed">
              <el-input v-model="submitForm.visitInfo.asgndBed"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="住院楼"
                          prop="visitInfo.asgndBuild">
              <el-input v-model="submitForm.visitInfo.asgndBuild"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="楼层"
                          prop="visitInfo.asgndFloor">
              <el-input v-model="submitForm.visitInfo.asgndFloor"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-col :span="14">
              <el-form-item label="主治医生"
                            prop="visitInfo.aDoctorFname">
                <el-input v-model="submitForm.visitInfo.aDoctorFname"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label=""
                            label-width="10px"
                            prop="visitInfo.aDoctorGname">
                <el-input v-model="submitForm.visitInfo.aDoctorGname"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="6">
            <el-col :span="14">
              <el-form-item label="助理医生"
                            prop="visitInfo.rDoctorFname">
                <el-input v-model="submitForm.visitInfo.rDoctorFname"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label=""
                            label-width="10px"
                            prop="visitInfo.rDoctorGname">
                <el-input v-model="submitForm.visitInfo.rDoctorGname"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="6">
            <el-col :span="14">
              <el-form-item label="咨询医生"
                            prop="visitInfo.cDoctorFname">
                <el-input v-model="submitForm.visitInfo.cDoctorFname"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label=""
                            label-width="10px"
                            prop="visitInfo.cDoctorGname">
                <el-input v-model="submitForm.visitInfo.cDoctorGname"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="6">
            <el-col :span="14">
              <el-form-item label="入院医生"
                            prop="visitInfo.admDoctorFname">
                <el-input v-model="submitForm.visitInfo.admDoctorFname"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label=""
                            label-width="10px"
                            prop="visitInfo.admCdoctorGname">
                <el-input v-model="submitForm.visitInfo.admCdoctorGname"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="6">
            <el-form-item label="就诊号"
                          prop="visitInfo.visitNum">
              <el-input v-model="submitForm.visitInfo.visitNum"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-row>
              <el-col :span="10">
                <el-form-item label="就诊机构ID"
                              prop="visitInfo.visitNamespaceId">
                  <el-select v-model="submitForm.visitInfo.visitNamespaceId"
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
                               @click.native="visitNameSpaceChange(item)">
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
                              prop="visitInfo.visitOid">
                  <el-input v-model="submitForm.visitInfo.visitOid">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label-width="10px"
                              prop="visitInfo.visitOidType">
                  <el-input v-model="submitForm.visitInfo.visitOidType">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-form-item label="医院服务类型"
                          prop="visitInfo.hospService">
              <el-input v-model="submitForm.visitInfo.hospService"></el-input>
            </el-form-item>
          </el-col>
        </el-card>
      </el-row>
      <el-row>
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>儿科基本信息</span>
          </div>
          <el-col :span="6">
            <el-form-item label="母亲婚前姓名 姓"
                          label-width="120px"
                          prop="patient.motherMaidenFname">
              <el-input v-model="submitForm.patient.motherMaidenFname"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="名"
                          prop="patient.motherMaidenGname">
              <el-input v-model="submitForm.patient.motherMaidenGname"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="简写"
                          prop="patient.motherMaidenNinitial">
              <el-input v-model="submitForm.patient.motherMaidenNinitial"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="家庭电话"
                          prop="patient.homeTelNum">
              <el-input v-model="submitForm.patient.homeTelNum"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="出生标示"
                          label-width="120px"
                          prop="patient.multiBirthIndicator">
              <el-input v-model="submitForm.patient.multiBirthIndicator"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="出生次序"
                          prop="patient.birthOrder">
              <el-input v-model="submitForm.patient.birthOrder"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="上次就诊时间"
                          prop="patient.lastUpdtDate">
              <el-date-picker v-model="submitForm.patient.lastUpdtDate"
                              type="date"
                              placeholder="选择日期"
                              format="yyyyMMdd"
                              value-format="yyyyMMdd">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="上次就诊设施"
                          prop="patient.lastUpdtFacility">
              <el-input v-model="submitForm.patient.lastUpdtFacility"></el-input>
            </el-form-item>
          </el-col>
        </el-card>
      </el-row>
      <el-row>
        <el-col :span="24"
                style="padding:20px;text-align:center;border-bottom:1px solid #c0c4cc">
          <el-button type="primary"
                     style="width:140px;"
                     @click="patientRegister('submitForm')">登记入本地数据库</el-button>
          <el-button type="primary"
                     style="width:80px;margin-left:8px;"
                     @click="resetRegister('submitForm')">清空</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-form ref="patientIdForm"
             :model="patientIdForm"
             :rules="patientIdRules"
             label-width="100px"
             @submit.native.prevent
             status-icon
             style="padding:0 20px 20px 20px;">
      <el-row>
        <el-col :span="6">
          <el-form-item label="病人ID号"
                        prop="patientId">
            <el-input v-model="patientIdForm.patientId" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="16"
                >
          <el-form-item>
            <el-button type="primary"
                       style="width:120px;"
                       @click="queryPatInfo('patientIdForm')">查询病人信息</el-button>
            <el-button type="primary"
                       style="width:120px;"
                       @click="patIntoHospital('patientIdForm')">病人入院</el-button>
            <el-button type="primary"
                       style="width:120px;"
                       @click="patRegister('patientIdForm')">病人注册</el-button>
            <el-button type="primary"
                       style="width:120px;"
                       @click="orderSubmit('patientIdForm')">提交预约</el-button>
            <!-- <el-button type="primary"
                     style="width:120px;"
                     @click="SendFolder('submitForm')">儿科病人入院</el-button> -->
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { showLog, formatDay } from '../../utils/common';
import { mapGetters } from 'vuex';
import Apis from '../../utils/apisPIX';
import { configBus } from '../../utils/bus.js';
export default {
  data() {
    let date = new Date();
    return {
      loading: false,
      patientIdForm: {
        patientId: '',
      },
      submitForm: {
        patient: {
          patientId: '',
          namespaceId: '',
          universalId: '',
          oidType: '',
          patFamilyName: '',
          patGivenName: '',
          patNameInitials: '',
          sex: 'M',
          birthDateTime: formatDay(
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
          ),
          bizTelNum: '',
          patAccountNum: '',
          ssnNum: '',
          driverLicenseNum: '',
          streetAdd: '',
          city: '',
          province: '',
          postalCode: '',
          motherMaidenFname: '',
          motherMaidenGname: '',
          motherMaidenNinitial: '',
          homeTelNum: '',
          multiBirthIndicator: '',
          birthOrder: '',
          lastUpdtDate: formatDay(
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
          ),
          lastUpdtFacility: '',
        },
        visitInfo: {
          patClass: '',
          asgndPointOfCare: '',
          asgndRoom: '',
          asgndBed: '',
          asgndBuild: '',
          asgndFloor: '',
          aDoctorFname: '',
          aDoctorGname: '',
          rDoctorFname: '',
          rDoctorGname: '',
          cDoctorFname: '',
          cDoctorGname: '',
          admDoctorFname: '',
          admCdoctorGname: '',
          visitNum: '',
          visitNamespaceId: '',
          visitOid: '',
          visitOidType: '',
          hospService: '',
        },
      },
      patientIdRules: {
        patientId: [
          {
            required: true,
            message: '请输入病人ID号',
            tigger: 'blur',
          },
        ],
      },
      submitRules: {
        'patient.patientId': [
          {
            required: true,
            message: '请输入patientId',
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
    namespaceChange(item) {
      this.submitForm.patient.oidType = item.oidType;
      this.submitForm.patient.universalId = item.universal;
    },
    visitNameSpaceChange(item) {
      this.submitForm.visitInfo.visitOid = item.universal;
      this.submitForm.visitInfo.visitOidType = item.oidType;
    },
    patientRegister(formName) {
      //登入本地数据库
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = { ...this.submitForm };
          // params.patient = this.submitForm.patient;
          // params.visitInfo = this.submitForm.visitInfo;

          Apis.Client.savePatLocal(params)
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
    resetRegister(formName) {
      this.$refs[formName].resetFields();
    },
    queryPatInfo(formName) {
      //查询患者基本信息
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {};
          params.patientId = this.patientIdForm.patientId;
          Apis.Client.queryPatInfo(params)
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
    patIntoHospital(formName) {
      //病人入院
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
          console.log(this.serviceConfig);
          console.log(this.patientIdForm.patientId);
          let serviceConfig = this.serviceConfig,
            patientId = this.patientIdForm.patientId,
            params = { patientId, ...serviceConfig };

          Apis.Client.patIntoHospital(params)
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
    patRegister(formName) {
      //病人注册
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
          console.log(this.serviceConfig);
          console.log(this.patientIdForm.patientId);
          let serviceConfig = this.serviceConfig,
            patientId = this.patientIdForm.patientId,
            params = { patientId, ...serviceConfig };

          Apis.Client.patRegister(params)
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
    orderSubmit(formName) {
      // 提交预约
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
          console.log(this.serviceConfig);
          console.log(this.patientIdForm.patientId);
          let serviceConfig = this.serviceConfig,
            patientId = this.patientIdForm.patientId,
            params = { patientId, ...serviceConfig };

          Apis.Client.orderSubmit(params)
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
    // setLog(res) {
    //   //把返回的数据存储在showLog对象中
    //   showLog.config.data = res.config.data;
    //   showLog.config.headers = res.config.headers;
    //   showLog.config.method = res.config.method;
    //   showLog.data.date = res.data.date;
    //   showLog.headers = res.headers;
    //   showLog.request.responseURL = res.request.responseURL;
    //   showLog.status = res.status;
    //   showLog.statusText = res.statusText;
    // },
  },
};
</script>

<style scoped>

</style>


