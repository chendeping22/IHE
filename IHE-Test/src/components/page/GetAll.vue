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
            <el-table-column prop="creationTime" label="文档创建时间" width="110">
            </el-table-column>
            <el-table-column prop="mimeType" label="文档类型mineType" width="130">
            </el-table-column>
            <!-- <el-table-column prop="status" label="文档状态">
                </el-table-column> -->
            <el-table-column prop="id" label="EntryID">
            </el-table-column>
            <el-table-column prop="uniqueId" label="UniqueId">
            </el-table-column>
            <!-- <el-table-column prop="address" label="EntryID">
                </el-table-column> -->
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="文件夹" name="second">
          <el-table :data="folderListTable" border style="text-align: left;" height="250">
            <el-table-column prop="lastUpdateTime" label="文件夹需改时间" width="110">
            </el-table-column>
            <el-table-column prop="id" label="EntryID">
            </el-table-column>
            <el-table-column prop="uniqueId" label="UniqueId">
            </el-table-column>
            <!-- <el-table-column prop="address" label="EntryID">
                </el-table-column> -->
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="提交集" name="third">
          <el-table :data="submissionSetListTable" border style="text-align: left;" height="250">
            <!-- <el-table-column prop="date" label="提交时间">
                </el-table-column> -->
            <!-- <el-table-column prop="name" label="提交集状态">
                </el-table-column> -->
            <el-table-column prop="sourceId" label="SourceId" width="140">
            </el-table-column>
            <el-table-column prop="id" label="EntryID">
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
export default {
  data() {
    return {
      docListTable: [],
      folderListTable: [],
      submissionSetListTable: [],
      loading: false,
      activeName: "first",
      searchForm: {
        repository_Url: "",
        patientId: "",
        documentEntryStatus: "",
        submissionSetStatus: "",
        folderStatus: "",
        documentEntryFormatCode: "",
        documentEntryConfidentialityCode: ""
      },
      searchRules: {
        PatientId: [],
        DocumentEntryStatus: [],
        SubmissionSetStatus: [],
        FolderStatus: [],
        DocumentEntryFomatCode: [],
        DocEntryConfidentialityCode: []
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    getAll(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let url = "/consumer/getAll";
          console.log(url);
          let params = JSON.parse(JSON.stringify(this.searchForm));
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res.data);
            this.docListTable = res.data.docList;
            this.folderListTable = res.data.folderList;
            this.submissionSetListTable = res.data.submissionSetList;
          });
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

