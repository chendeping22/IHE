<template>
  <!-- <div class="lw-container">
    <div class="lw-table"> -->
      <div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
        <div class="search-content">
          <el-form ref="searchForm" :model="searchForm" :rules="searchRules" label-width="200px">
            <el-row :gutter="12">
              <el-col :span="12">
                <el-form-item label="FolderEntryUUID" prop="FolderEntryUUID">
                  <el-input v-model="searchForm.FolderEntryUUID" placeholder=""></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="FolderUniqueId" prop="FolderUniqueId">
                  <el-input v-model="searchForm.FolderUniqueId" placeholder=""></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="12">
              <el-col :span="12">
                <el-form-item label="DocumentEntryFormatCode" prop="DocumentEntryFormatCode">
                  <el-input v-model="searchForm.DocumentEntryFormatCode" placeholder=""></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="DocEntryConfidentialityCode" prop="DocEntryConfidentialityCode">
                  <el-input v-model="searchForm.DocEntryConfidentialityCode" placeholder=""></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="12">
              <el-col :span="12">
                <el-form-item label="homeCommunityId" prop="homeCommunityId">
                  <el-input v-model="searchForm.homeCommunityId" placeholder=""></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <div class="search-btn center">
            <el-button type="primary" @click="search">确认</el-button>
            <el-button type="info" plain @click="cancelForm('searchForm')">重置</el-button>
          </div>
        </div>
      <!-- </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      searchForm: {
        FolderEntryUUID: "",
        FolderUniqueId:"",
        DocumentEntryFormatCode:"",
        DocEntryConfidentialityCode:"",
        homeCommunityId: ""
      },
      searchRules: {
        FolderEntryUUID: [],
        FolderUniqueId:[],
        DocumentEntryFormatCode:[],
        DocEntryConfidentialityCode:[],
        homeCommunityId:[]
      }
    };
  },
  methods: {
    search() {},
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

