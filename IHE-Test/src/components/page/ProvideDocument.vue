
<template>
  <div>
    <el-form ref="infoForm" :model="infoForm" :rules="infoRules" label-width="90px" class="form-wrap">
      <el-row>
        <el-col :span="24">
          <el-card class="box-card" body-style="padding:10px">
            <el-row>
              <el-col :span="12">
                <el-form-item label="systemAddr" prop="systemAddr" style="margin-bottom:0">
                  <!-- <el-input v-model="infoForm.systemAddr"></el-input> -->
                  <el-select v-model="value" placeholder="请选择" style="width:100%">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="SOAP" prop="versionInfo" style="margin-bottom:0">
                  <el-radio-group v-model="infoForm.versionInfo">
                    <el-radio label="soap1.1">soap 1.1</el-radio>
                    <el-radio label="soap1.2">soap 1.2</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>

          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"  style="padding-right:10px">
          <el-card class="box-card">
            <!-- <div slot="header" class="clearfix">
              <span>Patient</span>
            </div> -->
            <el-form-item label="PatientId" prop="patientId">
              <el-input  v-model="infoForm.patientId"></el-input>
            </el-form-item>
            <el-form-item label="PatientInfo" prop="patientInfo">
              <el-input v-model="infoForm.patientInfo">
              </el-input>
            </el-form-item>
          </el-card>
          <el-card class="box-card clearmarginleft">
            <div slot="header" class="clearfix">
              <span>ExtrinsicObject</span>
              <!-- <el-button type="primary" icon="el-icon-refresh" style="float:right;padding: 4px 8px;width:50px"></el-button> -->
            </div>
            <template>
              <el-tabs type="border-card" style="margin-bottom:16px">
                <el-tab-pane label="FileName">

                  <el-upload class="upload-demo" ref="upload" name="xdsbFile" :action="urlName.document.sendDocument" :auto-upload="false" :show-file-list="true" :data="xdsJson" :before-remove="beforeRemove" :before-upload="beforeUpload" multiple>
                    <el-button type="primary">点击上传</el-button>
                  </el-upload>
                </el-tab-pane>
                <el-tab-pane label="UniqueId">
                  <el-form-item prop="extrinsicUniqueId">
                    <el-input v-model="infoForm.extrinsicUniqueId" type="textarea" :autosize="{ minRows: 4, maxRows: 16}" placeholder="UniqueId">
                    </el-input>
                  </el-form-item>

                </el-tab-pane>
                <el-tab-pane label="ConfidentialityCode">
                  <el-form-item prop="ConfidentialityCode">
                    <el-input v-model="infoForm.ConfidentialityCode" type="textarea" :autosize="{ minRows: 4, maxRows: 16}" placeholder="ConfidentialityCode">
                    </el-input>
                  </el-form-item>

                </el-tab-pane>
                <el-tab-pane label="ExistDocID">
                  <el-form-item prop="existDocId">
                    <el-input v-model="infoForm.existDocId" type="textarea" :autosize="{ minRows: 4, maxRows: 16}" placeholder="ExistDocID">
                    </el-input>
                  </el-form-item>

                </el-tab-pane>
                <el-tab-pane label="Associate">
                  <el-form-item prop="extrinsicAssociate">
                    <el-radio-group v-model="infoForm.extrinsicAssociate" style="margin-left:-90px">
                      <el-radio label="APND">APND</el-radio>
                      <el-radio label="RPLC">RPLC</el-radio>
                      <el-radio label="XFRM">XFRM</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-button type="primary" >清除</el-button>
                </el-tab-pane>
              </el-tabs>
            </template>

            <el-collapse v-model="activeNames">
              <el-collapse-item title="AuthorExernal" name="1">
                <el-form-item label="Person" prop="extrinsicAuthorPerson">
                  <el-input v-model="infoForm.extrinsicAuthorPerson"></el-input>
                </el-form-item>
                <el-form-item label="Institution" prop="extrinsicAuthorInstitution">
                  <el-input v-model="infoForm.extrinsicAuthorInstitution"></el-input>
                </el-form-item>
                <el-form-item label="Role" prop="extrinsicAuthorRole">
                  <el-input v-model="infoForm.extrinsicAuthorRole"></el-input>
                </el-form-item>
                <el-form-item label="Specialty" prop="extrinsicAuthorSpecialty">
                  <el-input v-model="infoForm.extrinsicAuthorSpecialty"></el-input>
                </el-form-item>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </el-col>
        <el-col :span="12" style="padding-left:10px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>SubmissionSet</span>
              <el-checkbox v-model="checked" style="float:right">Accessory</el-checkbox>
            </div>
            <el-form-item label="UniqueId" prop="submissionSetUniqueId">
              <el-input v-model="infoForm.submissionSetUniqueId">
                <el-button slot="append" icon="el-icon-refresh"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item label="SourceID" prop="submissionSetSourceId">
              <el-input v-model="infoForm.submissionSetSourceId">
              </el-input>
            </el-form-item>
            <el-collapse v-model="activeNames1">
              <el-collapse-item title="AuthorExernal" name="1">
                <el-form-item label="Person" prop="submissionSetAuthorPerson">
                  <el-input v-model="infoForm.submissionSetAuthorPerson"></el-input>
                </el-form-item>
                <el-form-item label="Institution" prop="submissionSetAuthorInstitution">
                  <el-input v-model="infoForm.submissionSetAuthorInstitution"></el-input>
                </el-form-item>
                <el-form-item label="Role" prop="submissionSetAuthorRole">
                  <el-input v-model="infoForm.submissionSetAuthorRole"></el-input>
                </el-form-item>
                <el-form-item label="Specialty" prop="submissionSetAuthorSpecialty">
                  <el-input v-model="infoForm.submissionSetAuthorSpecialty"></el-input>
                </el-form-item>
              </el-collapse-item>
            </el-collapse>

          </el-card>

          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Folder</span>
            </div>
            <el-form-item label="UniqueId" prop="folderId">
              <el-input v-model="infoForm.folderId">
                <el-button slot="append" icon="el-icon-refresh"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item label="ExistFolderId" prop="existFolderId">
              <el-input v-model="infoForm.existFolderId"></el-input>
            </el-form-item>

          </el-card>
          <el-form-item>
            <el-button type="primary" icon="el-icon-document" style="margin-left: -90px;width:160px" @click="SendDocument('infoForm')">SendDocument</el-button>
            <el-button type="primary" icon="el-icon-document" style="width:120px" @click="SendFolder('infoForm')">SendFolder</el-button>
            <el-button type="primary" icon="el-icon-document" style="width:200px" @click="SendFolderDocument('infoForm')">SendFolderDocument</el-button>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
    <el-dialog title="imageFile" :visible.sync="centerDialogVisible" width="90%" append-to-body center>
      <iframe id="container">
      </iframe>
    </el-dialog>

  </div>
</template>
<script>
import { config, urlName } from "../../utils/config";
import { urlTool } from "../../utils/common";
export default {
  data() {
    return {
      url: config.url,
      urlName: urlName,
      urlTool: urlTool,
      flag: true,
      fileList: [],
      centerDialogVisible: false,
      activeNames: [],
      activeNames1: [],
      options: [
        {
          value: "选项1",
          label: "http://192.168.121.66:8080/wadoImage/upload"
        },
        {
          value: "选项2",
          label: "https://192.168.121.66:8080/wadoImage/upload"
        }
      ],
      value: "",
      infoForm: {
        // xdsJson:{
        patientId: "", //注册的病人ID,必须为注册库中已有的ID提交才有效
        patientInfo: "", //病人基本信息
        existDocId: "", //已存在的文档UniqueId，界面输入，初值为“”，当对某一个文档进行追加、替换、或者转换操作时，传入已存在的文档的唯一标识
        submissionSetUniqueId: "", //提交集UniqueId，不能重复
        submissionSetSourceId: "", //提交集SourceId，根据对方厂商注册库给出的信息配置，每个厂商的可能不一样，我们的和大会的是一致的，默认值1.3.6.1.4.1.21367.2.2
        submissionSetAuthorPerson: "", //姓名
        submissionSetAuthorInstitution: "", //所在机构名
        submissionSetAuthorRole: "", //职业
        submissionSetAuthorSpecialty: "", //专长
        extrinsicUniqueId: "", //文档UniqueId，不能重复
        extrinsicConfidentialityCode: "", //文档ConfidentialityCode,默认值2.16.840.1.113883.5.25，一般不会手动去改，所以此致可以后台定义也前台传入
        extrinsicAssociate: "", //文档的关联性，三种APND,RPLC,XFRM，从界面获取。值为“APND”（追加）或“RPLC”（替换）或“XFRM”（查找）或者“”（一般提交）
        extrinsicAuthorPerson: "", //姓名
        extrinsicAuthorInstitution: "", //所在机构名
        extrinsicAuthorRole: "", //职业
        extrinsicAuthorSpecialty: "", //专长
        extrinsicFileName: "", //提交的文档名称（全路径名）
        versionInfo: "soap1.2", //SOAP版本号；0：soap 1.1; 1:soap1.2，前台可以传一个版本控制的参数给后台，后台自己决定要不要用这个参数。我们测试默认的版本是soap1.2
        folderId: "", //创建的新文件夹的UniqueId，不能重复
        existFolderId: "", //已存在的文件夹UniqueId，往已存在的文件夹提交文档时必填，参数FolderId和ExistFolderId二选一
        systemAddr: "http://192.168.121.66:8080/wadoImage/upload"
        // }
      },
      xdsJson: {},
      infoRules: {},
      // infoRules: {
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
      // activeName: "FileName",
      checked: true
    };
  },
  methods: {
    // uploadError(err, file, fileList) {
    //   console.log(err, file, fileList);
    // },
    // handleAvatarSuccess(response, file, fileList) {
    //   console.log(response, file, fileList);
    //   this.centerDialogVisible = true;
    //   this.$nextTick(function(){
    //     document.getElementById("container").contentDocument.body.innerHTML=response
    //   });
    // },
    beforeUpload(file) {
      console.log(file);
      //this.infoForm.extrinsicFileName=file.name;
      console.log(this.infoForm.extrinsicFileName);
      var url = null;
      if (window.createObjcectURL != undefined) {
        url = window.createOjcectURL(file);
      } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
      }
      let params = JSON.parse(JSON.stringify(this.infoForm));
      this.infoForm.extrinsicFileName = url;
      console.log(this.infoForm.extrinsicFileName);
      delete params.folderId;
      delete params.existFolderId;
      // this.xdsJson['xdsJson'] = JSON.stringify(params);
      this.xdsJson = params;
      console.log(this.xdsJson);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    onEeceed(files, fileList) {
      this.$message.warning(`一次只能上传一个文件！`);
    },
    SendDocument(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          console.log(self.$refs);

          // let url = "/xdsb/sendDocument";
          // let params = JSON.parse(JSON.stringify(self.infoForm));
          // console.log(this.infoForm.extrinsicFileName);
          // delete params.folderId;
          // delete params.existFolderId;
          // this.xdsJson = params
          // console.log(this.xdsJson);
          self.$refs.upload.submit();
          // console.log("SendDocument")
          // self.$axios.post(url,this.xdsJson).then((res)=>{
          //   console.log(res)
          // })
        }
      });
    },
    SendFolder(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let url = self.urlTool(self.url, urlName.document.sendFolder);
          let params = JSON.parse(JSON.stringify(self.infoForm));
          delete params.existDocId;
          delete params.extrinsicUniqueId;
          delete params.extrinsicConfidentialityCode;
          delete params.extrinsicAssociate;
          delete params.extrinsicAuthorPerson;
          delete params.extrinsicAuthorInstitution;
          delete params.extrinsicAuthorRole;
          delete params.extrinsicAuthorSpecialty;
          delete params.extrinsicFileName;
          delete params.existFolderId;
          console.log(params);
          // self.$axios.post(url,params).then((res)=>{

          // })
        }
      });
    },
    SendFolderDocument(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let url = self.urlTool(self.url, urlName.document.sendFolderDocumnet);
          let params = JSON.parse(JSON.stringify(self.infoForm));
          console.log(params);
          // self.$axios.post(url,params).then((res)=>{

          // })
        }
      });
    }
  }
};
</script>
<style scoped>
/* .el-card__header {
  padding: 0;
  text-align: left;
} */

.clearmarginleft .el-textarea {
  margin-left: -90px;
  width: 120%;
}
/* .el-col {
  padding-right: 10px;
  padding-left: 10px;
} */
.el-form-item {
  margin-bottom: 8px;
}
.el-collapse-item__header{
  height: 36px;
  line-height: 36px
}
</style>
<style>
.el-tabs--border-card>.el-tabs__content{
  height: 110px;
}
.el-collapse-item__header{
  height: 36px;
  line-height: 36px
}
</style>



