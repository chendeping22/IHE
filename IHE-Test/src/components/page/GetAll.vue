<template>
  <!-- <div class='lw-container'>
    <div class="lw-table"> -->
  <div class="" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
    <div class="search-content">
      <el-form ref="searchForm" :model="searchForm" :rules="searchRules" label-width="200px">
        <el-row :gutter="12">
          <el-col :span="12">
            <el-form-item label="PatientId" prop="patientId">
              <el-input v-model="searchForm.patientId" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="DocumentEntryStatus" prop="documentEntryStatus">
              <el-input v-model="searchForm.documentEntryStatus" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="12">
            <el-form-item label="SubmissionSetStatus" prop="submissionSetStatus">
              <el-input v-model="searchForm.submissionSetStatus" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="FolderStatus" prop="folderStatus">
              <el-input v-model="searchForm.folderStatus" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="12">
            <el-form-item label="DocumentEntryFomatCode" prop="documentEntryFormatCode">
              <el-input v-model="searchForm.documentEntryFormatCode" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="DocEntryConfidentialityCode" prop="documentEntryConfidentialityCode">
              <el-input v-model="searchForm.documentEntryConfidentialityCode" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="search-btn center">
        <el-button type="primary" @click="getAll('searchForm')">确认</el-button>
        <el-button type="info" plain @click="cancelForm('searchForm')">重置</el-button>
      </div>
    </div>
    <div class="info-table">
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="文档" name="first">
          <el-table :data="docListTable" border style="text-align: left;" height="250">
            <el-table-column prop="creationTime" label="CreationTime">
            </el-table-column>
            <el-table-column prop="mimeType" label="MineType">
            </el-table-column>
            <el-table-column prop="id" label="Id">
            </el-table-column>
            <el-table-column prop="uniqueId" label="UniqueId">
            </el-table-column>
            <el-table-column prop="repositoryUniqueId" label="repositoryUniqueId">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
							<template slot-scope="scope">
								<el-button type="text" size="small" @click="retrieveDocument(scope.row)">获取</el-button>
							</template>
						</el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="文件夹" name="second">
          <el-table :data="folderListTable" border style="text-align: left;" height="250">
            <el-table-column prop="lastUpdateTime" label="LastUpdateTime">
            </el-table-column>
            <el-table-column prop="id" label="ID">
            </el-table-column>
            <el-table-column prop="uniqueId" label="UniqueId">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="提交集" name="third">
          <el-table :data="submissionSetListTable" border style="text-align: left;" height="250">
            <el-table-column prop="sourceId" label="SourceId" width="140">
            </el-table-column>
            <el-table-column prop="id" label="ID">
            </el-table-column>
            <el-table-column prop="uniqueId" label="UniqueId">
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
  <!-- </div>
  </div> -->
</template>

<script>
import { formatDuring,baseInfo } from "../../utils/common";
export default {
  data() {
    return {
      retrieveData: {
        repository_Url: "",
        uniqueId: "",
        repositoryUniqueId: ""
      },
      docListTable: [],
      folderListTable: [],
      submissionSetListTable: [],
      loading: false,
      activeName: "first",
      searchForm: {
        register_Url:"",
        repository_Url: "",
        patientId: "",
        documentEntryStatus: "",
        submissionSetStatus: "",
        folderStatus: "",
        documentEntryFormatCode: "",
        documentEntryConfidentialityCode: ""
      },
      searchRules: {
        // patientId: [
        //   {
        //     required: true,
        //     message: "请输入patientId",
        //     tigger: "blur"
        //   }
				// ],
      }
    };
  },
   created() {
    this.searchForm.patientId = baseInfo.patientId;
    this.searchForm.repository_Url = baseInfo.repository_Url;
    this.searchForm.register_Url = baseInfo.register_Url;
  },
  computed: {},
  methods: {
    getAll(formName) {
      const self = this;
      this.searchForm.repository_Url = baseInfo.repository_Url;
      this.searchForm.patientId = baseInfo.patientId;
      this.searchForm.register_Url = baseInfo.register_Url;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let url = self.$apis.consumer.getAll
          //let url = "/consumer/getAll";
          console.log(url);
          let params = JSON.parse(JSON.stringify(this.searchForm));
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res.data);
            //将返回的毫秒数转化为类似20071215132426格式
            for(let i=0;i<res.data.docList.length;i++){
              res.data.docList[i].creationTime = formatDuring(
              res.data.docList[i].creationTime
            );
            }
            for(let i=0;i<res.data.folderList.length;i++){
              res.data.folderList[i].lastUpdateTime = formatDuring(
              res.data.folderList[i].lastUpdateTime
            );
            }
            res.data.docList.lastUpdateTime=formatDuring(res.data.docList.lastUpdateTime);
            this.docListTable = res.data.docList;
            this.folderListTable = res.data.folderList;
            this.submissionSetListTable = res.data.submissionSetList;
          });
        }
      });
    },
      retrieveDocument(row) {
      const self = this;
      this.retrieveData.repository_Url = baseInfo.repository_Url;
      this.retrieveData.uniqueId = row.uniqueId;
      this.retrieveData.repositoryUniqueId = row.repositoryUniqueId;
      let url = self.$apis.consumer.retrieveDocument
      //let url = "http://192.168.121.66:8080/consumer/retrieveDocument";
      console.log(url);
      let params = JSON.parse(JSON.stringify(this.retrieveData));
      console.log(params);
      self.$axios.post(url, params).then(res => {
        console.log(res);
				 if (res.data === "获取成功") {
                console.log(res.status);
                this.$message({
                  message: res.data,
                  type: "success"
                });
              } else {
                this.$message.error("获取失败！");
              }
      });
    },
    handleClick(tab, event) {},
    cancelForm(formName) {
      //取消编辑机构
      // this.tableData = [];
      this.reset(formName);
    },
    reset(form) {
      //重置表单
      this.$refs[form].resetFields();
    }
  }
};
</script>

