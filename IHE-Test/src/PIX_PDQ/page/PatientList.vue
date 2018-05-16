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
    <el-form ref="submitForm"
             :model="submitForm"
             :rules="submitRules"
             label-width="100px"
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
                               value="">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label=""
                              label-width="10px"
                              prop="universalId">
                  <el-select v-model="submitForm.universalId"
                             placeholder="请选择">
                    <el-option label=""
                               value="">
                    </el-option>
                  </el-select>
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
              <el-button type="primary"
                         style="width:120px;"
                         @click="SendDocument('submitForm')">本地查询</el-button>
              <el-button type="primary"
                         style="width:120px;margin-left:16px;"
                         @click="SendDocument('submitForm')">向PIX管理器查询</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="更多限制使用HL7字段"
                          label-width="160px"
                          prop="namespaceIds">
              <el-input v-model="submitForm.namespaceIds">
              </el-input>
            </el-form-item>
          </el-col>
          <el-table :data="tablePIXData"
                    height="200"
                    border
                    style="width: 100%">
            <el-table-column prop=""
                             width="180"
                             label="病人ID">
            </el-table-column>
            <el-table-column prop=""
                             label="机构名">
            </el-table-column>
            <el-table-column prop=""
                             label="机构ID">
            </el-table-column>
            <el-table-column prop=""
                             label="类型">
            </el-table-column>
          </el-table>
        </el-card>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { showLog, baseInfo, pathReset } from '../../utils/common';
export default {
  data() {
    return {
      loading: false,
      tableData: [],
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
        namespaceIds:''
      },
      fileBlob: '',
      submitRules: {},
      // submitRules: {
      //   patientId: [
      //     {
      //       required: true,
      //       message: "请输入patientId",
      //       tigger: "blur"
      //     }
      //   ],
      //   existDocId: [
      //     {
      //       required: true,
      //       message: "请输入existDocId",
      //       tigger: "blur"
      //     }
      //   ],
      //   submissionSetUniqueId: [
      //     {
      //       required: true,
      //       message: "请输入submissionSetUniqueId",
      //       tigger: "blur"
      //     }
      //   ],
      //   submissionSetSourceId: [
      //     {
      //       required: true,
      //       message: "请输入submissionSetSourceId",
      //       tigger: "blur"
      //     }
      //   ],
      //   extrinsicUniqueId: [
      //     {
      //       required: true,
      //       message: "请输入extrinsicUniqueId",
      //       tigger: "blur"
      //     }
      //   ],
      //   extrinsicAssociate: [
      //     {
      //       required: true,
      //       message: "extrinsicAssociate",
      //       tigger: "blur"
      //     }
      //   ],
      //   extrinsicFileName: [
      //     {
      //       required: true,
      //       message: "请输入extrinsicFileName",
      //       tigger: "blur"
      //     }
      //   ],
      //   folderId: [
      //     {
      //       required: true,
      //       message: "参数FolderId和ExistFolderId二选一",
      //       tigger: "blur"
      //     }
      //   ],
      //   existFolderId: [
      //     {
      //       required: true,
      //       message: "参数FolderId和ExistFolderId二选一",
      //       tigger: "blur"
      //     }
      //   ]
      // },
    };
  },
  created() {
    //将baseInfo的值传入表单
    this.submitForm.repository_Url = baseInfo.repository_Url;
    this.submitForm.patientId = baseInfo.patientId;
  },
  methods: {
    SendDocument(formName) {
      //提交文档
      const self = this;
      this.submitForm.fileName = pathReset(this.submitForm.fileName); //将正斜杠/替换成反斜杠\
      this.submitForm.repository_Url = baseInfo.repository_Url; //手写配置参数更新表单数据
      this.submitForm.patientId = baseInfo.patientId;
      self.$refs[formName].validate(valid => {
        if (valid) {
          if (this.submitForm.associate === '') {
            //到文档操作值为空时，调用提交文档接口
            //let url = "http://192.168.121.66:8080/source/sendDoc";
            let url = self.$apis.source.sendDoc;
            let params = JSON.parse(JSON.stringify(this.submitForm)); //拷贝一份参数
            //移除整个表单内本接口不需要提交的字段
            params.existed_Uuid = undefined;
            params.associate = undefined;
            params.existedDocId = undefined;
            console.log(params);
            self.$axios.post(url, params).then(res => {
              console.log(res);
              this.setLog(res); //把返回的数据存储在showLog对象中
              if (res.data === 'success') {
                console.log(res.status);
                this.$message({
                  message: res.data,
                  type: 'success',
                });
              } else {
                this.$message.error('提交失败！');
              }
            });
          } else {
            //当文档操作值不为空时，调用文档操作的接口
            //let url = "http://192.168.121.66:8080/source/sendDoc";
            //console.log(url);
            let url = self.$apis.source.sendDoc;
            let params = JSON.parse(JSON.stringify(this.submitForm));
            //delete params.existed_Uuid;
            console.log(params);
            //console.log("文件操作");
            self.$axios.post(url, params).then(res => {
              console.log(res);
              this.setLog(res); //把返回的数据存储在showLog对象中
              if (res.data === 'success') {
                console.log(res.status);
                this.$message({
                  message: res.data,
                  type: 'success',
                });
              } else {
                this.$message.error('提交失败！');
              }
            });
          }
        }
      });
    },
    SendFolder(formName) {
      //提交文件夹
      const self = this;
      this.submitForm.repository_Url = baseInfo.repository_Url;
      this.submitForm.patientId = baseInfo.patientId;
      self.$refs[formName].validate(valid => {
        if (valid) {
          //let url = "http://192.168.121.66:8080/source/sendFolder";
          let url = self.$apis.source.sendFolder;
          let params = JSON.parse(JSON.stringify(self.submitForm));
          params.existed_Uuid = undefined;
          params.associate = undefined;
          params.existedDocId = undefined;
          params.fileName = undefined;
          params.extrinsic_Author_Person = undefined;
          params.extrinsicConfidentialityCode = undefined;
          params.extrinsic_Author_Institution = undefined;
          params.extrinsic_Author_Role = undefined;
          params.extrinsic_Author_Specialty = undefined;
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res);
            this.setLog(res); //把返回的数据存储在showLog对象中
            if (res.data === 'success') {
              console.log(res.status);
              this.$message({
                message: res.data,
                type: 'success',
              });
            } else {
              this.$message.error('提交失败！');
            }
          });
        }
      });
    },
    SendFolderDocument(formName) {
      //往文件夹里提交文档
      const self = this;
      this.submitForm.repository_Url = baseInfo.repository_Url;
      this.submitForm.patientId = baseInfo.patientId;

      self.$refs[formName].validate(valid => {
        if (valid) {
          console.log(url);
          let url = self.$apis.source.sendDocToFolder;
          let params = JSON.parse(JSON.stringify(this.submitForm));
          params.associate = undefined;
          params.existedDocId = undefined;
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res);
            this.setLog(res); //把返回的数据存储在showLog对象中
            if (res.data === 'success') {
              console.log(res.status);
              this.$message({
                message: res.data,
                type: 'success',
              });
            } else {
              this.$message.error(res.data);
            }
          });
        }
      });
    },
    setLog(res) {
      //把返回的数据存储在showLog对象中
      showLog.config.data = res.config.data;
      showLog.config.headers = res.config.headers;
      showLog.config.method = res.config.method;
      showLog.data.date = res.data.date;
      showLog.headers = res.headers;
      showLog.request.responseURL = res.request.responseURL;
      showLog.status = res.status;
      showLog.statusText = res.statusText;
    },
  },
};
</script>




