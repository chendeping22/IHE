
<template>

  <div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
    <v-param v-on:message="recieveMessage"></v-param>
    <el-form ref="submitForm" :model="submitForm" :rules="submitRules" label-width="100px" class="form-wrap" style="padding-top:0">
      <el-row>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>病人信息</span>
          </div>
          <el-col :span="12">
            <el-form-item label="病人Id" prop="patientId">
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
                  <el-input v-model="submitForm.patientSex">
                  </el-input>
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
              <el-col :span="12">
                
              </el-col>
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
                  <el-tab-pane label="文件名">
                    <!-- <el-upload class="upload-demo" ref="upload" drag name="xdsbFile" action="urlName.document.sendDocument" :auto-upload="false" :show-file-list="true" :data="xdsJson" :on-error="onError" :before-remove="beforeRemove" :before-upload="beforeUpload" multiple>
                  <div class="el-upload__text">将文件拖到此处，或
                    <em>点击上传</em>
                  </div>
                </el-upload> -->
                    <el-input v-model="submitForm.fileName">
                    </el-input>
                  </el-tab-pane>
                  <el-tab-pane label="存在文档ID" style="padding: 12px;">
                    <el-input v-model="submitForm.existDocId">
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
                <el-radio-group v-model="submitForm.extrinsicAssociate" style="float:left;margin-top:8px">
                  <el-radio :label="3">APND</el-radio>
                  <el-radio :label="6">RPLC</el-radio>
                  <el-radio :label="9">XFRM</el-radio>
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
                <el-form-item label="已存在文件ID" prop="existFolderId">
                  <el-input v-model="submitForm.existFolderId"></el-input>
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
import vParam from "../common/param";
import { config, urlName } from "../../utils/config";
import { urlTool } from "../../utils/common";
export default {
  data() {
    return {
      url: config.url,
      urlName: urlName,
      urlTool: urlTool,
      loading: false,
      fileList: [],
      submitForm: {
        repository_Url: "",
        fileName:
          "E:\/xds_doc_from\/111.txt,E:\/xds_doc_from\/222.txt,E:\/xds_doc_from\/333.txt",
        patientId: "",
        patientName: "",
        patientSex: "",
        birthday: "",
        address: "",
        submissionSet_Author_Person: "",
        submissionSet_Author_Institution: "",
        submissionSet_Author_Role: "",
        submissionSet_Author_Specialty: "",
        extrinsic_Author_Person: "",
        extrinsic_Author_Institution: "",
        extrinsic_Author_Role: "",
        extrinsic_Author_Specialty: ""
      },
      // submitForm: {
      //   patientId: "", //注册的病人ID,必须为注册库中已有的ID提交才有效
      //   patientInfo: "", //病人基本信息
      //   existDocId: "", //已存在的文档UniqueId，界面输入，初值为“”，当对某一个文档进行追加、替换、或者转换操作时，传入已存在的文档的唯一标识
      //   submissionSetUniqueId: "", //提交集UniqueId，不能重复
      //   submissionSetSourceId: "", //提交集SourceId，根据对方厂商注册库给出的信息配置，每个厂商的可能不一样，我们的和大会的是一致的，默认值1.3.6.1.4.1.21367.2.2
      //   submissionSetAuthorPerson: "", //姓名
      //   submissionSetAuthorInstitution: "", //所在机构名
      //   submissionSetAuthorRole: "", //职业
      //   submissionSetAuthorSpecialty: "", //专长
      //   extrinsicUniqueId: "", //文档UniqueId，不能重复
      //   extrinsicConfidentialityCode: "", //文档ConfidentialityCode,默认值2.16.840.1.113883.5.25，一般不会手动去改，所以此致可以后台定义也前台传入
      //   extrinsicAssociate: "", //文档的关联性，三种APND,RPLC,XFRM，从界面获取。值为“APND”（追加）或“RPLC”（替换）或“XFRM”（查找）或者“”（一般提交）
      //   extrinsicAuthorPerson: "", //姓名
      //   extrinsicAuthorInstitution: "", //所在机构名
      //   extrinsicAuthorRole: "", //职业
      //   extrinsicAuthorSpecialty: "", //专长
      //   extrinsicFileName: "", //提交的文档名称（全路径名）
      //   versionInfo: "soap1.2", //SOAP版本号；0：soap 1.1; 1:soap1.2，前台可以传一个版本控制的参数给后台，后台自己决定要不要用这个参数。我们测试默认的版本是soap1.2
      //   folderId: "", //创建的新文件夹的UniqueId，不能重复
      //   existFolderId: "" //已存在的文件夹UniqueId，往已存在的文件夹提交文档时必填，参数FolderId和ExistFolderId二选一
      // },
      xdsJson: {},
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
  methods: {
    recieveMessage(repository_Url,patientId){
      this.submitForm.repository_Url=repository_Url;
      this.submitForm.patientId=patientId;
    },
    formatDate(param){

    },
    onError(err, file, fileList) {
      return this.$confirm(`文件上传失败`);
    },
    beforeUpload(file) {
      console.log(file);
      //分离出文件的blob对象（文件的二进制流数据）
      if (window.createObjcectURL != undefined) {
        this.fileBlob = window.createOjcectURL(file);
      } else if (window.URL != undefined) {
        this.fileBlob = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        this.fileBlob = window.webkitURL.createObjectURL(file);
      }
      console.log("fileBlob");
      console.log(this.fileBlob);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    SendDocument(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          // console.log(self.$refs);
          // let url = "/xdsb/sendDocument";
          // self.$refs.upload.submit();
          // //深拷贝，改变params对象属性，submitForm不受影响
          // let params = JSON.parse(JSON.stringify(this.submitForm));
          // params.extrinsicFileName = this.fileBlob;
          // console.log(this.submitForm.extrinsicFileName);
          // delete params.folderId;
          // delete params.existFolderId;
          // this.xdsJson = params;
          // console.log(this.xdsJson);
          // console.log("SendDocument");
          // self.$axios.post(url, this.xdsJson).then(res => {
          //   console.log(res);
          // });
          let url = "/source/sendDoc";
          let params = JSON.parse(JSON.stringify(this.submitForm));
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res);
          });
        }
      });
    },
    SendFolder(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let url = "/source/sendFolder";
          let params = JSON.parse(JSON.stringify(self.submitForm));
          delete params.fileName;
          delete params.extrinsic_Author_Person;
          delete params.extrinsicConfidentialityCode;
          delete params.extrinsic_Author_Institution;
          delete params.extrinsic_Author_Role;
          delete params.extrinsic_Author_Specialty;
          self.$axios.post(url, this.params).then(res => {
            console.log(res);
          });
        }
      });
    },
    SendFolderDocument(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let url = self.urlTool(self.url, urlName.document.sendFolderDocumnet);
          self.$refs.upload.submit();
          let params = JSON.parse(JSON.stringify(self.submitForm));
          this.xdsJson = params;
          console.log(this.xdsJson);
          self.$axios.post(url, this.xdsJson).then(res => {
            console.log(res);
          });
        }
      });
    }
  },
  components: {
    vParam
  }
};
</script>




