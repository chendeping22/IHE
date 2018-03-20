<template>
  <!-- <div class='lw-container'>
    <div class="lw-table"> -->
      <div class="" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
        <div class="search-content">
          <el-form ref="searchForm" :model="searchForm" :rules="searchRules" label-width="200px">
            <el-row :gutter="12">
              <el-col :span="12">
                <el-form-item label="EntryUUID" prop="EntryUUID">
                  <el-input v-model="searchForm.EntryUUID" placeholder=""></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="UniqueId" prop="UniqueId">
                  <el-input v-model="searchForm.UniqueId" placeholder=""></el-input>
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
        <div class="info-table">
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
      searchForm: {
        EntryUUID: "",
        UniqueId: "",
        homeCommunityId: ""
      },
      searchRules: {
        EntryUUID: [],
        UniqueId: [],
        homeCommunityId: []
      }
    };
  },
  created() {},
  computed: {},
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
