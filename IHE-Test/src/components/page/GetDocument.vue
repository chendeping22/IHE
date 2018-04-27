<template>
  <!-- <div class='lw-container'>
    <div class="lw-table"> -->
  <div class="" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
    <div class="search-content">
      <el-form ref="searchForm" :model="searchForm" :rules="searchRules" label-width="200px">
        <el-row :gutter="12">
          <el-col :span="12">
            <el-form-item label="EntryUUID" prop="entryUUID">
              <el-input v-model="searchForm.entryUUID" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="UniqueId" prop="uniqueId">
              <el-input v-model="searchForm.uniqueId" placeholder=""></el-input>
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
        <el-button type="primary" @click="getDocuments('searchForm')">确认</el-button>
        <el-button type="info" plain @click="cancelForm('searchForm')">重置</el-button>
      </div>
    </div>
    <div class="info-table">
      <el-table :data="tableData" border style="width:100%; text-align: left;" height="250">
        <el-table-column prop="creationTime" label="CreationTime" width="120">
        </el-table-column>
        <el-table-column prop="mimeType" label="MineType" width="130">
        </el-table-column>
        <el-table-column prop="status" label="Status">
        </el-table-column>
        <el-table-column prop="uniqueId" label="UniqueId">
        </el-table-column>
        <!-- <el-table-column prop="address" label="文档库唯一标识">
            </el-table-column> -->
        <el-table-column prop="id" label="EntryID">
        </el-table-column>
        <el-table-column prop="repositoryUniqueId" label="repositoryUniqueId">
        </el-table-column>
        	<el-table-column fixed="right" label="操作" width="100">
							<template slot-scope="scope">
								<el-button type="text" size="small" @click="retrieveDocument(scope.row)">获取</el-button>
							</template>
						</el-table-column>
      </el-table>
    </div>
  </div>
  <!-- </div>
  </div> -->
</template>

<script>
import { formatDuring, baseInfo } from "../../utils/common";
export default {
  data() {
    return {
      retrieveData: {
        repository_Url: "",
        uniqueId: "",
        repositoryUniqueId: "",
        status:""
      },
      tableData: [],
      loading: false,
      searchForm: {
        register_Url: "",
        repository_Url: "",
        entryUUID: "",
        UniqueId: "",
        homeCommunityId: ""
      },
      searchRules: {
        EntryUUID: [],
        uniqueId: [],
        homeCommunityId: []
      }
    };
  },
  created() {
    this.searchForm.repository_Url = baseInfo.repository_Url;
    this.searchForm.register_Url = baseInfo.register_Url;
  },
  computed: {},
  methods: {
    getDocuments(formName) {
      this.tableData = [];
      const self = this;
      this.searchForm.repository_Url = baseInfo.repository_Url;
      this.searchForm.register_Url = baseInfo.register_Url;
      self.$refs[formName].validate(valid => {
        if (valid) {
          // "http://192.168.121.66:8080/consumer/getDocuments";
          let url = self.$apis.consumer.getDocuments
          console.log(url);
          let params = JSON.parse(JSON.stringify(this.searchForm));
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res.data);
            res.data.creationTime = formatDuring(res.data.creationTime);
            this.tableData.push(res.data);
            //this.tableData = res.data;
          });
        }
      });
    },
     retrieveDocument(row) {
      const self = this;
      this.retrieveData.repository_Url = baseInfo.repository_Url;
      this.retrieveData.uniqueId = row.uniqueId;
      this.retrieveData.repositoryUniqueId = row.repositoryUniqueId;
      this.retrieveData.status=row.status;
      let url = self.$apis.consumer.retrieveDocument
      //let url = "http://192.168.121.66:8080/consumer/retrieveDocument";
      console.log(url);
      let params = JSON.parse(JSON.stringify(this.retrieveData));
      console.log(params);
      self.$axios.post(url, params).then(res => {
        console.log(res);
				 if (res.data === "success") {
                console.log(res.status);
                this.$message({
                  message: res.data,
                  type: "success"
                });
              } else {
                this.$message.error(res.data);
              }
      });
    },
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
