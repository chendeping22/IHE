<template>
  <div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" style="width:100%">
    <el-form ref="otherSetForm" :model="otherSetForm" label-width="120px">
      <el-row>
        <el-col :span="16">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>文档更新</span>
            </div>

            <el-form-item label="LId" prop="Lid">
              <el-input v-model="otherSetForm.Lid">
              </el-input>
            </el-form-item>
            <el-form-item label="DocumentId" prop="DocumentId">
              <el-input v-model="otherSetForm.DocumentId">
              </el-input>
            </el-form-item>

          </el-card>
        </el-col>
        <el-col :span="4" class="updateBtn">
          <el-button type="primary" icon="el-icon-document" @click="SendDocument('otherSetForm')">TypeCodeUpate</el-button>
          <el-button type="primary" icon="el-icon-document" @click="SendDocument('otherSetForm')">HealthcareFacility</el-button>
          <el-button type="primary" icon="el-icon-document" @click="SendDocument('otherSetForm')">LanguageCode</el-button>
        </el-col>
      </el-row>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>文档状态更新</span>
        </div>
        <el-row>
          <el-col :span="16">
            <el-form-item label="DocumentUUID" prop="DocumentUUID">
              <el-input v-model="otherSetForm.DocumentUUID">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" icon="el-icon-document" style="width:145px;float:right" @click="SendDocument('otherSetForm')">LanguageCode</el-button>
          </el-col>
        </el-row>

      </el-card>
      <el-row>
        <el-row>
          <el-col :span="12" class="radio1">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>OriginalStatus</span>
              </div>
              <el-form-item prop="OriginalStatus" class="radio">
                <el-radio-group v-model="OriginalStatus">
                  <el-radio label="Approved">Approved</el-radio>
                  <el-radio label="Deprecated">Deprecated</el-radio>
                  <el-radio label="Deleted">Deleted</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-card>
          </el-col>
          <el-col :span="12" class="radio2">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>NewStatus</span>
              </div>
              <el-form-item prop="OriginalStatus" class="radio">
                <el-radio-group v-model="OriginalStatus">
                  <el-radio label="Approved">Approved</el-radio>
                  <el-radio label="Deprecated">Deprecated</el-radio>
                  <el-radio label="Deleted">Deleted</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-card>
          </el-col>

        </el-row>

        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>文档ConfidentialityType</span>
            </div>

            <el-form-item prop="ConfidentialityType" class="radio">
              <el-radio-group v-model="ConfidentialityType">
                <el-radio label="Approved">Normal</el-radio>
                <el-radio label="Deprecated">Restricted</el-radio>
                <el-radio label="Deleted">Very Restricted</el-radio>
              </el-radio-group>
              <el-checkbox v-model="checked1" style="margin-left:30px">OPT-IN</el-checkbox>
            </el-form-item>

          </el-card>

        </el-col>

        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>查询returntype</span>
            </div>

            <el-form-item prop="OriginalStatus" class="radio">
              <el-radio-group v-model="returntype">
                <el-radio label="Approved">LeafClass</el-radio>
                <el-radio label="Deprecated">ObjectRef</el-radio>
              </el-radio-group>

            </el-form-item>

          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>二次查询returntype</span>
            </div>

            <el-form-item prop="OriginalStatus" class="radio">
              <el-radio-group v-model="returntype2">
                <el-radio label="Approved">LeafClass</el-radio>
                <el-radio label="Deprecated">ObjectRef</el-radio>
              </el-radio-group>

            </el-form-item>

          </el-card>

        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>异步转发设置</span>
            </div>
            <el-row>
              <el-col :span="20">
                <el-form-item label="转发地址" prop="NewStatus">
                  <el-input v-model="otherSetForm.Lid">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-checkbox v-model="checked2">Reply</el-checkbox>
              </el-col>
            </el-row>
            <el-form-item label="文件保存路径" prop="NewStatus">
                  <el-input v-model="otherSetForm.Lid">
                     <el-button slot="append" icon="el-icon-more"></el-button>
                  </el-input>
                </el-form-item>

          </el-card>
        </el-col>
  
          <el-row>
              <el-col :span="14">
                 <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>SSL/TLS Version</span>
            </div>
            <el-radio-group v-model="Version">
                <el-radio label="SSLv2">SSLv2</el-radio>
                <el-radio label="SSLv23">SSLv23</el-radio>
                 <el-radio label="SSLv3">SSLv3</el-radio>
                <el-radio label="TLSv1">TLSv1</el-radio>
                 <el-radio label="DTLSv1">DTLSv1</el-radio>
              </el-radio-group>

          </el-card>
              </el-col>
            </el-row>

 
      </el-row>
    </el-form>
  </div>

</template>
<script>
export default {
  data() {
    return {
      loading: false,
      checked1:true,
      checked2:true,
      returntype:"",
      returntype2:"",
      Version:"",
      ConfidentialityType:"",
      otherSetForm: {
        Lid: "",
        DocumentId: "",
        DocumentUUID: ""
      },
      OriginalStatus: "Deprecated",
      NewStatus: "Approved"
    };
  },
  methods: {}
};
</script>
<style scoped>
.updateBtn {
  margin-top: 20px;
}
.updateBtn .el-button {
  width: 145px;
  margin-left: 10px;
  margin-bottom: 10px;
}
</style>