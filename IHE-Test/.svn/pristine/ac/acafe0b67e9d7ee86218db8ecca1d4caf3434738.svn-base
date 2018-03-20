<template>
  <!-- <div class='lw-container'>
    <div class="lw-table"> -->
      <div class="" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
        <div class="search-content">
          <el-form ref="searchForm" :model="searchForm" :rules="searchRules" label-width="200px">
            <el-row :gutter="12">
              <el-col :span="12">
                <el-form-item label="PatientId" prop="PatientId">
                  <el-input v-model="searchForm.PatientId" placeholder="" ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="DocumentEntryStatus" prop="DocumentEntryStatus">
                  <el-input v-model="searchForm.DocumentEntryStatus" placeholder=""></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="12">
              <el-col :span="12">
                <el-form-item label="SubmissionSetStatus" prop="SubmissionSetStatus">
                  <el-input v-model="searchForm.SubmissionSetStatus" placeholder=""></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="FolderStatus" prop="FolderStatus">
                  <el-input v-model="searchForm.FolderStatus" placeholder=""></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="12">
              <el-col :span="12">
                <el-form-item label="DocumentEntryFomatCode" prop="DocumentEntryFomatCode">
                  <el-input v-model="searchForm.DocumentEntryFomatCode" placeholder=""></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="DocEntryConfidentialityCode" prop="DocEntryConfidentialityCode">
                  <el-input v-model="searchForm.DocEntryConfidentialityCode" placeholder=""></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <div class="search-btn center">
            <el-button type="primary" @click="search">确认</el-button>
            <el-button type="info" plain @click="cancelForm('searchForm')">重置</el-button>
          </div>
        </div>
        <div class="info-table">
          <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
            <el-tab-pane label="文档" name="first">
              <el-table :data="tableData" border style="width:100%; text-align: left;" height="250">
                <el-table-column prop="date" label="文档创建时间">
                </el-table-column>
                <el-table-column prop="name" label="文档类型mineType">
                </el-table-column>
                <el-table-column prop="address" label="文档状态">
                </el-table-column>
                <el-table-column prop="address" label="文档唯一标识">
                </el-table-column>
                <el-table-column prop="address" label="文档库唯一标识">
                </el-table-column>
                <el-table-column prop="address" label="EntryID">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="文件夹" name="second">
              <el-table :data="tableData" border style="width:100%; text-align: left;" height="250">
                <el-table-column prop="date" label="文件夹需改时间">
                </el-table-column>
                <el-table-column prop="name" label="文件夹状态">
                </el-table-column>
                <el-table-column prop="address" label="文件夹唯一标识">
                </el-table-column>
                <el-table-column prop="address" label="EntryID">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="提交集" name="third">
              <el-table :data="tableData" border style="width:100%; text-align: left;" height="250">
                <el-table-column prop="date" label="提交时间">
                </el-table-column>
                <el-table-column prop="name" label="提交集状态">
                </el-table-column>
                <el-table-column prop="address" label="提交集唯一标识">
                </el-table-column>
                <el-table-column prop="address" label="sourceId">
                </el-table-column>
                <el-table-column prop="address" label="EntryID">
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
      tableData: [],
      loading: false,
      activeName: "first",
      searchForm: {
        PatientId: "",
        DocumentEntryStatus: "",
        SubmissionSetStatus: "",
        FolderStatus: "",
        DocumentEntryFomatCode: "",
        DocEntryConfidentialityCode: ""
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
    search() {},
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
