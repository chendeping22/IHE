<template>
  <el-container>
    <div size="medium" style="width:100%"  v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
      <el-button type="primary" @click="newServer" style="float:left;margin-bottom:20px">新增</el-button>
      <el-button type="primary" @click="openKView">高级阅片</el-button>
      <el-dialog title="服务端地址配置" :visible.sync="dialogFormVisible">
        <el-form ref="serviceForm" :model="serviceForm" :rules="infoRules" label-width="110px">
          <el-form-item label="厂家" prop="manuFacturer">
            <el-input v-model="serviceForm.manuFacturer"></el-input>
          </el-form-item>
          <el-form-item label="文档库-http" prop="DocLibraryHttp">
            <el-input v-model="serviceForm.DocLibraryHttp"></el-input>
          </el-form-item>
          <el-form-item label="注册库-http" prop="regLibraryHttp">
            <el-input v-model="serviceForm.regLibraryHttp"></el-input>
          </el-form-item>
          <el-form-item label="文档库-https" prop="DocLibraryHttps">
            <el-input v-model="serviceForm.DocLibraryHttps"></el-input>
          </el-form-item>
          <el-form-item label="注册库-https" prop="regLibraryHttps">
            <el-input v-model="serviceForm.regLibraryHttps"></el-input>
          </el-form-item>
          <el-form-item label="病人ID" prop="patientID">
            <el-input v-model="serviceForm.patientID"></el-input>
          </el-form-item>
          <el-form-item label="文档库ID" prop="DocLibraryID">
            <el-input v-model="serviceForm.DocLibraryID"></el-input>
          </el-form-item>
          <el-form-item label="SourceID" prop="SourceID">
            <el-input v-model="serviceForm.SourceID"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="info" @click="cancelForm('serviceForm')">重置</el-button>
          <el-button type="primary" @click="SaveServer">保存</el-button>
        </div>
      </el-dialog>

      <template>
        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="manuFacturer" label="厂家" width="100">
          </el-table-column>

          <el-table-column prop="DocLibraryHttp" label="文档库-http" width="200">
          </el-table-column>
          <el-table-column prop="regLibraryHttp" label="注册库-http" width="200">
          </el-table-column>
          <el-table-column prop="DocLibraryHttps" label="文档库-https" width="200">
          </el-table-column>
          <el-table-column prop="regLibraryHttps" label="注册库-https" width="200">
          </el-table-column>
          <el-table-column prop="patientID" label="病人ID" width="120">
          </el-table-column>
          <el-table-column prop="DocLibraryID" label="文档库ID" width="120">
          </el-table-column>
          <el-table-column prop="SourceID" label="SourceID" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="140">
            <template slot-scope="scope">
              <el-button @click="changeInfo(scope.$index,scope.row)" type="text">修改</el-button>
              <el-button @click="delInfo(scope.$index,scope.row)" type="text">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格end -->
      </template>

    </div>
  </el-container>

</template>



<script>
export default {
  data() {
    return {
      tableData: [
        {
          manuFacturer: "蓝网",
          patientID: "65231256",
          DocLibraryID: "575663",
          SourceID: "822333",
          DocLibraryHttp: "http://fanyi.youdao.com/",
          regLibraryHttp: "http://fanyi.youdao.com/",
          DocLibraryHttps: "http://fanyi.youdao.com/",
          regLibraryHttps: "http://fanyi.youdao.com/"
        },
        {
          manuFacturer: "联影",
          patientID: "65231256",
          DocLibraryID: "575663",
          SourceID: "822333",
          DocLibraryHttp: "http://fanyi.youdao.com/",
          regLibraryHttp: "http://fanyi.youdao.com/",
          DocLibraryHttps: "http://fanyi.youdao.com/",
          regLibraryHttps: "http://fanyi.youdao.com/"
        }
      ],
      serviceForm: {
        manuFacturer: "",
        patientID: "",
        DocLibraryID: "",
        SourceID: "",
        DocLibraryHttp: "",
        regLibraryHttp: "",
        DocLibraryHttps: "",
        regLibraryHttps: ""
      },
      infoRules: {
        manuFacturer: [
          {
            required: true,
            message: "请输入厂家名称",
            tigger: "blur"
          }
        ],
        patientID: [
          {
            required: true,
            message: "请输入病人ID",
            tigger: "blur"
          }
        ],
        DocLibraryID: [
          {
            required: true,
            message: "请输入文件文档库ID",
            tigger: "blur"
          }
        ],
        SourceID: [
          {
            required: true,
            message: "请输入SourceID",
            tigger: "blur"
          }
        ],
        DocLibraryHttp: [
          {
            required: true,
            message: "请输入文档库HTTP",
            tigger: "blur"
          }
        ],
        regLibraryHttp: [
          {
            required: true,
            message: "请输入注册库HTTP",
            tigger: "blur"
          }
        ],
        DocLibraryHttps: [
          {
            required: true,
            message: "请输入文档库HTTPS",
            tigger: "blur"
          }
        ],
        regLibraryHttps: [
          {
            required: true,
            message: "请输入注册库HTTPS",
            tigger: "blur"
          }
        ]
      },
      dialogFormVisible: false
    };
  },
  methods: {
    changeInfo(index, row) {
      this.dialogFormVisible = true;
      const self = this;
      self.serviceForm.manuFacturer = row.manuFacturer;
      self.serviceForm.patientID = row.patientID;
      self.serviceForm.DocLibraryID = row.DocLibraryID;
      self.serviceForm.SourceID = row.SourceID;
      self.serviceForm.DocLibraryHttp = row.DocLibraryHttp;
      self.serviceForm.regLibraryHttp = row.regLibraryHttp;
      self.serviceForm.DocLibraryHttps = row.DocLibraryHttps;
      self.serviceForm.regLibraryHttps = row.regLibraryHttps;
    },
    openKView() {
      let str =
        "KView:////info=studyuid=1.2.826.0.1.3680043.2.461.9781923.2589951579<<|>>userid=666666<<|>>pacssvrip=192.168.171.229<<|>>pacssvrport=7008<<|>>pacssvrip1=<<|>>pacssvrport1=<<|>>security=1";
      window.open(str, "_self");
    },
    delInfo(index, row) {},
    SaveServer() {
      this.dialogFormVisible = false;
    },
    cancelForm(cancelForm) {
      dialogFormVisible = false;
      const self = this;
      this.$refs[cancelForm].resetFields();
    },
    newServer() {
      this.dialogFormVisible = true;
    }
  }
};
</script>
<style scoped>

</style>


