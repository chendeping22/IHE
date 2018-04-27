<template>
  <div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
    <div class="search-content">
      <el-form ref="searchForm" :model="searchForm" :rules="searchRules" label-width="200px">
        <el-row :gutter="12">
          <el-col :span="12">
            <el-form-item label="FolderEntryUUID" prop="folderEntryUUID">
              <el-input v-model="searchForm.folderEntryUUID" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="FolderUniqueId" prop="folderUniqueId">
              <el-input v-model="searchForm.folderUniqueId" placeholder=""></el-input>
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
            <el-form-item label="DocEntryConfidentialityCode" prop="DocumentEntryConfidentialityCode">
              <el-input v-model="searchForm.DocumentEntryConfidentialityCode" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="12">
            <el-form-item label="homeCommunityId" prop="homeCommunityId">
              <el-input v-model="searchForm.homeCommunityId" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="returnType" label-width="150px">
              <el-radio-group v-model="searchForm.returnType">
                <el-radio label="ObjectRef "></el-radio>
                <el-radio label="LeafClass"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="search-btn center">
        <el-button type="primary" @click="getFolderAndContents('searchForm')">确认</el-button>
        <el-button type="info" plain @click="cancelForm('searchForm')">重置</el-button>
      </div>
    </div>
    <div class="info-table">
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="文档" name="first">
          <el-table :data="extrinsicObjectList" border style="width:100%; text-align: left;" height="250">
            <el-table-column prop="creationTime" label="文档创建时间" width="120">
            </el-table-column>
            <el-table-column prop="mimeType" label="文档类型mineType" width="130">
            </el-table-column>
            <el-table-column prop="status" label="文档状态" width="100">
            </el-table-column>
            <el-table-column prop="uniqueId" label="文档唯一标识">
            </el-table-column>
            <el-table-column prop="repositoryUniqueId" label="文档库唯一标识">
            </el-table-column>
            <el-table-column prop="id" label="EntryID">
            </el-table-column>
            	<el-table-column fixed="right" label="操作" width="100">
							<template slot-scope="scope">
								<el-button type="text" size="small" @click="retrieveDocument(scope.row)">获取</el-button>
							</template>
						</el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="文件夹" name="second">
          <el-table :data="folderList" border style="width:100%; text-align: left;" height="250">
            <el-table-column prop="lastUpdateTime" label="文件夹需改时间" width="120">
            </el-table-column>
            <el-table-column prop="status" label="文件夹状态">
            </el-table-column>
            <el-table-column prop="uniqueId" label="文件夹唯一标识">
            </el-table-column>
            <el-table-column prop="id" label="EntryID">
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
      extrinsicObjectList: [],
      folderList: [],
      loading: false,
      activeName: "first",
      searchForm: {
        register_Url: "",
        repository_Url: "",
        folderEntryUUID: "",
        folderUniqueId: "",
        DocumentEntryFormatCode: "",
        DocumentEntryConfidentialityCode: "",
        homeCommunityId: "",
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
        this.searchForm.register_Url=baseInfo.register_Url;
  },
  methods: {
    getFolderAndContents(formName) {
      this.extrinsicObjectList = [];
      this.folderList = [];
      const self = this;
      this.searchForm.repository_Url = baseInfo.repository_Url;
      this.searchForm.register_Url=baseInfo.register_Url;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let url = self.$apis.consumer.getFolderAndContents
          //let url = "http://192.168.121.66:8080/consumer/getFolderAndContents";
          console.log(url);
          let params = JSON.parse(JSON.stringify(this.searchForm));
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res.data);
            //将返回的毫秒数转化为类似20071215132426格式
            for(let i=0;i<res.data.extrinsicObjectList.length;i++){
              res.data.extrinsicObjectList[i].creationTime = formatDuring(
              res.data.extrinsicObjectList[i].creationTime
            );
            }
            for(let i=0;i<res.data.folderList.length;i++){
              res.data.folderList[i].lastUpdateTime = formatDuring(
              res.data.folderList[i].lastUpdateTime
            );
            }
            this.extrinsicObjectList = res.data.extrinsicObjectList;
            this.folderList = res.data.folderList;
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

