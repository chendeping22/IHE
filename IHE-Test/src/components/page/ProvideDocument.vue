
<template>
  <div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
    <el-form ref="submitForm" :model="submitForm" :rules="submitRules" label-width="100px" class="form-wrap" style="padding-top:0">
      <el-row>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>病人信息</span>
          </div>
          <el-col :span="12">
            <el-form-item label="patientId" prop="patientId">
              <el-input v-model="submitForm.patientId">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="12">
                <el-form-item label="姓名" prop="patientName">
                  <el-input v-model="submitForm.patientName">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="性别" prop="patientSex">
                  <el-select v-model="submitForm.patientSex" placeholder="请选择">
                    <el-option label="男" value="M">
                    </el-option>
                    <el-option label="女" value="W">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-form-item label="地址" prop="address">
              <el-input v-model="submitForm.address">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-row>
              <!-- <el-col :span="12">
                <el-form-item label="测试" prop="repository_Url">
                  <el-input v-model="submitForm.repository_Url">
                  </el-input>
                </el-form-item>
              </el-col> -->
              <el-col :span="12">
                <el-form-item label="生日" prop="birthday">
                  <el-date-picker v-model="submitForm.birthday" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyyMMdd">
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-card>
      </el-row>
      <el-row>
        <el-card class="box-card" style="border-right: none;">
          <div slot="header" class="clearfix">
            <span>文档作者信息</span>
          </div>
          <el-col :span="6">
            <el-form-item label="姓名" prop="extrinsic_Author_Person">
              <el-input v-model="submitForm.extrinsic_Author_Person"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="机构" prop="extrinsic_Author_Institution">
              <el-input v-model="submitForm.extrinsic_Author_Institution"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="角色" prop="extrinsic_Author_Role">
              <el-input v-model="submitForm.extrinsic_Author_Role"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="专业" prop="extrinsic_Author_Specialty">
              <el-input v-model="submitForm.extrinsic_Author_Specialty"></el-input>
            </el-form-item>
          </el-col>
        </el-card>
      </el-row>
      <el-row>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>提交集作者信息</span>
          </div>
          <el-col :span="6">
            <el-form-item label="姓名" prop="submissionSet_Author_Person">
              <el-input v-model="submitForm.submissionSet_Author_Person"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="机构" prop="submissionSet_Author_Institution">
              <el-input v-model="submitForm.submissionSet_Author_Institution"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="角色" prop="submissionSet_Author_Role">
              <el-input v-model="submitForm.submissionSet_Author_Role"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="专业" prop="submissionSet_Author_Specialty">
              <el-input v-model="submitForm.submissionSet_Author_Specialty"></el-input>
            </el-form-item>
          </el-col>
        </el-card>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-card class="box-card" body-style="padding-right: 0;">
            <div slot="header" class="clearfix">
              <span>文档</span>
            </div>
            <el-row>
              <el-col :span="20">
                <el-tabs type="border-card">
                  <el-tab-pane label="文件名" style="padding: 12px;">
                    <!-- <el-upload class="upload-demo" ref="upload" drag name="xdsbFile" action="urlName.document.sendDocument" :auto-upload="false" :show-file-list="true" :data="xdsJson" :on-error="onError" :before-remove="beforeRemove" :before-upload="beforeUpload" multiple>
                  <div class="el-upload__text">将文件拖到此处，或
                    <em>点击上传</em>
                  </div>
                </el-upload> -->
                    <el-input v-model="submitForm.fileName">
                    </el-input>
                  </el-tab-pane>
                  <el-tab-pane label="存在文档ID" style="padding: 12px;">
                    <el-input v-model="submitForm.existedDocId">
                    </el-input>
                  </el-tab-pane>
                </el-tabs>
              </el-col>
              <el-col :span="4">
                <el-button type="primary" style="width:80px;margin-top:30px" @click="SendDocument('submitForm')">CreateKO</el-button>
                <el-button type="primary" style="width:80px;margin-left:0;margin-top:30px" @click="SendDocument('submitForm')">OpenKO</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="11">
                <el-radio-group v-model="submitForm.associate" style="float:left;margin-top:8px">
                  <el-radio label="APND">APND</el-radio>
                  <el-radio label="RPLC">RPLC</el-radio>
                  <el-radio label="XFRM">XFRM</el-radio>
                </el-radio-group>
              </el-col>
              <el-col :span="6">
                <el-button type="primary" icon="el-icon-document" style="width:140px;margin-top:8px;float:right;" @click="SendDocument('submitForm')">SendDocument</el-button>
              </el-col>
              <el-col :span="7">
                <el-button type="primary" icon="el-icon-document" style="width:140px;margin-top:8px;float:right;" @click="SendDocument('submitForm')">SendDocument-I</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card" body-style="padding-left: 0;">
            <div slot="header" class="clearfix">
              <span>文件夹</span>
            </div>
            <el-row>
              <el-col :span="16">
                <el-form-item label="文件夹ID" prop="folderId">
                  <el-input v-model="submitForm.folderId">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-button type="primary" icon="el-icon-document" style="width:170px;float: right;" @click="SendFolder('submitForm')">SendFolder</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="16">
                <el-form-item label="已存在文件ID" prop="existed_Uuid">
                  <el-input v-model="submitForm.existed_Uuid"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-button type="primary" icon="el-icon-document" style="width:170px;float: right;" @click="SendFolderDocument('submitForm')">SendFolderDocument</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { showLog, baseInfo, pathReset } from "../../utils/common";
export default {
  data() {
    return {
      loading: false,
      fileList: [],
      submitForm: {
        repository_Url: "", //文档库作者（所有接口必填）
        fileName:
          "E:/xds_doc_from/111.txt,E:/xds_doc_from/222.txt,E:/xds_doc_from/333.txt", //文件路径（提交文档、往文件夹提交文档以及文档的追加替换转换接口必填）
        patientId: "", //病人ID（所有必填）
        patientName: "", //姓名
        patientSex: "", //性别
        birthday: "", //出生日期
        address: "", //地址
        submissionSet_Author_Person: "", //提交集作者姓名
        submissionSet_Author_Institution: "", //提交集作者机构
        submissionSet_Author_Role: "", //提交集作者职业
        submissionSet_Author_Specialty: "", //提交集作者专长
        extrinsic_Author_Person: "", //文档作者姓名
        extrinsic_Author_Institution: "", //文档作者机构
        extrinsic_Author_Role: "", //文档作者职业
        extrinsic_Author_Specialty: "", //文档作者专长
        existed_Uuid: "", //已存在文件夹ID
        associate: "", //文档操作（文件的追加替换转换必填）
        existedDocId: "", //已存在文档ID（文件的追加替换转换必填）
        folderId: ""
      },
      fileBlob: "",
      submitRules: {}
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
    // //上传文件出错时的钩子
    // onError(err, file, fileList) {
    //   return this.$confirm(`文件上传失败`);
    // },
    // //上传文件之前的钩子
    // beforeUpload(file) {
    //   console.log(file);
    //   //分离出文件的blob对象（文件的二进制流数据）
    //   if (window.createObjcectURL != undefined) {
    //     this.fileBlob = window.createOjcectURL(file);
    //   } else if (window.URL != undefined) {
    //     this.fileBlob = window.URL.createObjectURL(file);
    //   } else if (window.webkitURL != undefined) {
    //     this.fileBlob = window.webkitURL.createObjectURL(file);
    //   }
    //   console.log("fileBlob");
    //   console.log(this.fileBlob);
    // },
    // //移除文件之前的钩子
    // beforeRemove(file, fileList) {
    //   return this.$confirm(`确定移除 ${file.name}？`);
    // },
    SendDocument(formName) {
      //提交文档
      const self = this;
      this.submitForm.fileName = pathReset(this.submitForm.fileName); //将正斜杠/替换成反斜杠\
      this.submitForm.repository_Url = baseInfo.repository_Url; //手写配置参数更新表单数据
      this.submitForm.patientId = baseInfo.patientId;
      self.$refs[formName].validate(valid => {
        if (valid) {
          if (this.submitForm.associate === "") {
            //到文档操作值为空时，调用提交文档接口
            //let url = "http://192.168.121.66:8080/source/sendDoc";
            //console.log(this.submitForm.repository_Url)
            let url = self.$apis.source.sendDoc
            let params = JSON.parse(JSON.stringify(this.submitForm));//拷贝一份参数
            //移除整个表单内本接口不需要提交的字段
            delete params.existed_Uuid;
            delete params.associate;
            delete params.existedDocId;
            console.log(params);
            self.$axios.post(url, params).then(res => {
              console.log(res);
              this.setLog(res); //把返回的数据存储在showLog对象中
              if (res.data === "success") {
                console.log(res.status);
                this.$message({
                  message: res.data,
                  type: "success"
                });
              } else {
                this.$message.error("提交失败！");
              }
            });
          } else {
            //当文档操作值不为空时，调用文档操作的接口
            //let url = "http://192.168.121.66:8080/source/sendDoc";
            //console.log(url);
            let url = self.$apis.source.sendDoc
            let params = JSON.parse(JSON.stringify(this.submitForm));
            delete params.existed_Uuid;
            console.log(params);
            //console.log("文件操作");
            self.$axios.post(url, params).then(res => {
              console.log(res);
               this.setLog(res); //把返回的数据存储在showLog对象中
              if (res.data === "success") {
                console.log(res.status);
                this.$message({
                  message: res.data,
                  type: "success"
                });
              } else {
                this.$message.error("提交失败！");
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
          let url = self.$apis.source.sendFolder
          let params = JSON.parse(JSON.stringify(self.submitForm));
          delete params.existed_Uuid;
          delete params.associate;
          delete params.existedDocId;
          delete params.fileName;
          delete params.extrinsic_Author_Person;
          delete params.extrinsicConfidentialityCode;
          delete params.extrinsic_Author_Institution;
          delete params.extrinsic_Author_Role;
          delete params.extrinsic_Author_Specialty;
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res);
             this.setLog(res); //把返回的数据存储在showLog对象中
              if (res.data === "success") {
                console.log(res.status);
                this.$message({
                  message: res.data,
                  type: "success"
                });
              } else {
                this.$message.error("提交失败！");
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
          //let url = "http://192.168.121.66:8080/source/sendDocToFolder";
          console.log(url);
          let url = self.$apis.source.sendDocToFolder
          let params = JSON.parse(JSON.stringify(this.submitForm));
          delete params.associate;
          delete params.existedDocId;
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res);
             this.setLog(res); //把返回的数据存储在showLog对象中
              if (res.data === "success") {
                console.log(res.status);
                this.$message({
                  message: res.data,
                  type: "success"
                });
              } else {
                this.$message.error("提交失败！");
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
    }
  }
};
</script>




