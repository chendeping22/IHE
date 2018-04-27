<template>
  <div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
    <div class="search-content">
      <el-form ref="searchForm" :model="searchForm" :rules="searchRules" label-width="200px">
        <el-row :gutter="12">
          <el-col :span="12">
            <el-form-item label="DocumentEntryEntryUUID" prop="documentEntryEntryUUID">
              <el-input v-model="searchForm.documentEntryEntryUUID" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="DocumentEntryUniqueId" prop="documentEntryUniqueId">
              <el-input v-model="searchForm.documentEntryUniqueId" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="12">
            <el-form-item label="AssociationTypes" prop="associationTypes">
              <el-select v-model="searchForm.associationTypes" placeholder="请选择" style="width:100%;">
                <el-option label="APND" value="urn:ihe:iti:2007:AssociationType:APND"></el-option>
                <el-option label="RPLC" value="urn:ihe:iti:2007:AssociationType:RPLC"></el-option>
                <el-option label="XFRM" value="urn:ihe:iti:2007:AssociationType:XFRM"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="returnType">
              <el-radio-group v-model="searchForm.returnType">
                <el-radio label="ObjectRef "></el-radio>
                <el-radio label="LeafClass"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="search-btn center">
        <el-button type="primary" @click="getRelatedDocument('searchForm')">确认</el-button>
        <el-button type="info" plain @click="cancelForm('searchForm')">重置</el-button>
      </div>
    </div>
    <div class="info-table">
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="文档" name="first">
          <el-table :data="tableData" border style="width:100%; text-align: left;" height="250">
            <el-table-column prop="creationTime" label="文档创建时间" width="120">
            </el-table-column>
            <el-table-column prop="mimeType" label="文档类型mineType" width="130">
            </el-table-column>
            <el-table-column prop="status" label="文档状态">
            </el-table-column>
            <el-table-column prop="uniqueId" label="文档唯一标识">
            </el-table-column>
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
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
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
      activeName: "first",
      searchForm: {
        register_Url: "",
        repository_Url: "",
        creationTime: "",
        documentEntryEntryUUID: "urn:uuid:baa7170c-a80a-426e-88e2-39d56be9e1f8",
        documentEntryUniqueId: "",
        associationTypes: "",
        returnType: "LeafClass"
      },
      searchRules: {
        FolderEntryUUID: [],
        FolderUniqueId: [],
        DocumentEntryFormatCode: [],
        DocEntryConfidentialityCode: [],
        homeCommunityId: []
      }
    };
  },
  created() {
    this.searchForm.repository_Url = baseInfo.repository_Url;
    this.searchForm.register_Url = baseInfo.register_Url;
  },
  methods: {
    getRelatedDocument(formName) {
      this.tableData = [];
      const self = this;
      this.searchForm.repository_Url = baseInfo.repository_Url;
      this.searchForm.register_Url = baseInfo.register_Url;
      self.$refs[formName].validate(valid => {
        if (valid) {
          //let url = "/consumer/getRelatedDocument";
          let url = self.$apis.consumer.getRelatedDocument
          console.log(url);
          let params = JSON.parse(JSON.stringify(this.searchForm));
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res.data);
            //将返回的毫秒数转化为类似20071215132426格式
            for (let i = 0; i < res.data.length; i++) {
              res.data[i].creationTime = formatDuring(res.data[i].creationTime);
            }
            this.tableData=res.data;
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
                  message: "获取成功",
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
    },
    handleClick() {}
  }
};
</script>

