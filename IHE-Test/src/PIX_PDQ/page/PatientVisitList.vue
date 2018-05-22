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
             style="padding-top:0;padding-bottom:0">
      <el-row>
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>查询条件为基本信息</span>
          </div>
          <el-row>
            <el-col :span="6">
              <el-form-item label="病人ID号"
                            :show-message='false'
                            prop="patient.patientId">
                <el-input v-model="submitForm.patient.patientId">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
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
            <el-col :span="4">
              <el-form-item label="性别"
                            prop="patient.sex">
                <el-select v-model="submitForm.patient.sex"
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
            <el-col :span="4">
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
            <el-col :span="4">
              <el-form-item label="病人账号"
                            prop="patient.patAccountNum">
                <el-input v-model="submitForm.patient.patAccountNum">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
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
          </el-row>

          <el-row>
            <el-col :span="6">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="母亲婚前姓名 "
                                label-width="120px"
                                prop="patient.motherMaidenFname">
                    <el-input v-model="submitForm.patient.motherMaidenFname"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label=""
                                label-width="10px"
                                prop="patient.motherMaidenGname">
                    <el-input v-model="submitForm.patient.motherMaidenGname"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label=""
                                label-width="10px"
                                prop="patient.motherMaidenNinitial">
                    <el-input v-model="submitForm.patient.motherMaidenNinitial"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-form-item label="家庭电话"
                            prop="patient.homeTelNum">
                <el-input v-model="submitForm.patient.homeTelNum"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="社保号"
                            prop="patient.ssnNum">
                <el-input v-model="submitForm.patient.ssnNum">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="4">
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
            <el-col :span="4">
              <el-form-item label=""
                            label-width="10px"
                            prop="patient.universalId">
                <el-input v-model="submitForm.patient.universalId">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2">
              <el-form-item label-width="10px"
                            prop="patient.oidType">
                <el-input v-model="submitForm.patient.oidType">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-form-item label="更多限制使用HL7字段"
                            label-width="160px"
                            prop="limtHL7">
                <el-input v-model="submitForm.limtHL7">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="一次最多返回记录数"
                            label-width="160px"
                            prop="backCount">
                <el-input v-model="submitForm.backCount">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10"
                    :offset="1">
              <el-button type="primary"
                         style="width:140px;"
                         @click="baseInfoSearch('submitForm')">基本查询</el-button>
              <el-button type="primary"
                         style="width:140px;margin-left:8px;"
                         :disabled = "!baseInfoTag"
                         @click="residueSearch('submitForm')">查询余下记录</el-button>
              <!-- <el-button type="primary"
                         style="width:140px;margin-left:8px;"
                         @click="resetRegister('submitForm')">取消查询余下记录</el-button> -->
                          <!-- <el-form-item prop="PDSTLS"
                          label-width="20px"> -->
              <el-checkbox   style="margin-left:16px;" v-model="baseInfoTag"></el-checkbox>
            <!-- </el-form-item> -->
            </el-col>
          </el-row>
        </el-card>
      </el-row>
    </el-form>

    <el-form ref="submitForm"
             :model="submitForm"
             :rules="submitRules"
             label-width="100px"
             :status-icon='true'
             style="padding:0 20px 20px 20px;">
      <el-row>
        <el-card class="box-card"
                 style="border-right: none;">
          <div slot="header"
               class="clearfix">
            <span>查询条件为就诊信息</span>
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
          <el-row>
            <el-col :span="6">
              <el-form-item label="就诊号"
                            prop="visitInfo.visitNum">
                <el-input v-model="submitForm.visitInfo.visitNum"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
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
            <el-col :span="6">
              <el-form-item label=""
                            label-width="10px"
                            prop="visitInfo.visitOid">
                <el-input v-model="submitForm.visitInfo.visitOid">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2">
              <el-form-item label-width="10px"
                            prop="visitInfo.visitOidType">
                <el-input v-model="submitForm.visitInfo.visitOidType">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-col :span="6">
            <el-form-item label="医院服务类型"
                          prop="visitInfo.hospService">
              <el-input v-model="submitForm.visitInfo.hospService"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10"
                  :offset="1">
            <el-button type="primary"
                       style="width:140px;"
                       >就诊查询</el-button>
            <el-button type="primary"
                       style="width:140px;margin-left:8px;"
                       :disabled="!visitTag"
                       >查询余下记录</el-button>
            <!-- <el-button type="primary"
                       style="width:140px;margin-left:8px;"
                       @click="resetRegister('submitForm')">取消查询余下记录</el-button> -->
             <el-checkbox   style="margin-left:16px;" v-model="visitTag"></el-checkbox>
          </el-col>
        </el-card>
      </el-row>
      <el-row>
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>查询结果</span>
          </div>
          <!-- 查询到数据显示 -->
          <el-table :data="tableData"
                    height="200"
                    border
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
                             label="出生日期">
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
  </div>
</template>
<script>
import { formatDay } from '../../utils/common';
import { mapGetters } from 'vuex';
import Apis from '../../utils/apisPIX';
import { configBus } from '../../utils/bus.js';
export default {
  data() {
    let date = new Date();
    return {
      loading: false,
      tableData: [],
      baseInfoTag:true,
      visitTag:true,
      submitForm: {
        backCount:'',
        limtHL7:'',
        residueCount:'0',
        patient: {
          patientId: '',
          patFamilyName: '',
          patGivenName: '',
          patNameInitials: '',
          sex: '',
          birthDateTime: '',
          patAccountNum: '',
          streetAdd: '',
          city: '',
          province: '',
          postalCode: '',
          motherMaidenFname: '',
          motherMaidenGname: '',
          motherMaidenNinitial: '',
          homeTelNum: '',
          ssnNum: '',
          namespaceId: '',
          universalId: '',
          oidType: '',
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
      submitRules: {
        // 'patient.patientId': [
        //   {
        //     required: true,
        //     message: '请输入patientId',
        //     tigger: 'blur',
        //   },
        // ],
      },
    };
  },
  computed: {
    ...mapGetters(['serviceConfig','organizations']),
  },
  created() {
  },
  methods: {
    namespaceChange(item) {
      this.submitForm.patient.oidType = item.oidType;
      this.submitForm.patient.universalId = item.universal;
    },
    visitNameSpaceChange(item) {
      this.submitForm.visitInfo.visitOid = item.universal;
      this.submitForm.visitInfo.visitOidType = item.oidType;
    },
    baseInfoSearch(formName) {
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
          let params = {},
              backCount = this.submitForm.backCount,
              limtHL7  = this.submitForm.limtHL7;
          let patient = this.submitForm.patient
          for (let item in patient) {
            patient[item] = patient[item]
              ? patient[item]
              : undefined;
          }


          params.patient = patient;
          params.connectionInfo = { ...this.serviceConfig }
          params.connectionInfo.backCount = backCount?backCount:undefined;
          params.connectionInfo.limtHL7 = limtHL7?limtHL7:undefined;

          Apis.BasicInfo.getPatientinfo(params)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: res.data.info,
                  type: 'success',
                });
                 this.tableData = res.data.data;
              }
              
            })
            .catch(err => {
              console.log(err);
              this.$message.error(err.message);
            });
        }
      });
    },
    residueSearch(formName){
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
          let params = {},
              backCount = this.submitForm.backCount,
              limtHL7  = this.submitForm.limtHL7,
              residueCount = this.submitForm.residueCount;
          let patient = this.submitForm.patient
          for (let item in patient) {
            patient[item] = patient[item]
              ? patient[item]
              : undefined;
          }

          params.patient = patient;
          params.connectionInfo = { ...this.serviceConfig }
          params.connectionInfo.backCount = backCount?backCount:undefined;
          params.connectionInfo.limtHL7 = limtHL7?limtHL7:undefined;
          params.connectionInfo.residueCount = residueCount?residueCount:undefined;

          Apis.BasicInfo.getPatientinfo(params)
            .then(res => {
              console.log(res);
              if (res.status === 200) {
                this.$message({
                  message: res.data.info,
                  type: 'success',
                });
                this.tableData = res.data.data;
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
  },
};
</script>

<style scoped>
.pix-th-color {
  color: #8492a6;
}
.pix-right {
  float: right;
  margin-right: 8px;
}

.pix-margin {
  margin-left: 8px;
  margin-right: 8px;
}
</style>


