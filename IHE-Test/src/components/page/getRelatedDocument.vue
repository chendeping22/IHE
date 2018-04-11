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
              <el-table-column prop="creationTime" label="文档创建时间"  width="120">
              </el-table-column>
              <el-table-column prop="mimeType" label="文档类型mineType"  width="130">
              </el-table-column>
              <el-table-column prop="status" label="文档状态">
              </el-table-column>
              <el-table-column prop="uniqueId" label="文档唯一标识" >
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
      tableData:[],
      loading: false,
      activeName:'first',
      searchForm: {
        repository_Url: "",
        creationTime:"",
        documentEntryEntryUUID: "urn:uuid:ac422915-62d3-414e-97e9-2dbe721b74d6",
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
  },
  methods: {
     getRelatedDocument(formName) {
       this.tableData=[];
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let url = "/consumer/getRelatedDocument";
          console.log(url);
          let params = JSON.parse(JSON.stringify(this.searchForm));
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res.data);
            //this.tableData.push(res.data)
            res.data.creationTime=formatDuring(res.data.creationTime)
               this.tableData.push(res.data);
          });
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

