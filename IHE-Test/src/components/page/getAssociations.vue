<template>
  <!-- <div class="lw-container">
    <div class="lw-table"> -->
  <div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
    <div class="search-content">
      <el-form ref="searchForm" :model="searchForm" :rules="searchRules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="uuid" prop="uuid" label-width="100px">
              <el-input v-model="searchForm.uuid" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="homeCommunityId" prop="homeCommunityId" label-width="150px">
              <el-input v-model="searchForm.homeCommunityId" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Status" prop="associationType" label-width="100px">
              <el-select v-model="searchForm.associationType" placeholder="请选择" style="width:100%;">
                <el-option label="queryDocByFolder" value="queryDocByFolder"></el-option>
                <el-option label="queryRelatedByDoc" value="queryRelatedByDoc"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="returnType" label-width="150px">
              <el-radio-group v-model="searchForm.returnType">
                <el-radio label="ObjectRef "></el-radio>
                <el-radio label="LeafClas"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>

            <div class="search-btn center">
              <el-button type="primary" @click="getAssociations('searchForm')">确认</el-button>
              <el-button type="info" plain @click="cancelForm('searchForm')">重置</el-button>
            </div>
 
        </el-row>
      </el-form>
      <div class="info-table">
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
          <!-- <el-tab-pane label="文档" name="first">
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
              <el-table-column prop="associationType" label="associationType">
              </el-table-column>
              <el-table-column prop="id" label="id">
              </el-table-column>
              <el-table-column prop="sourceObject" label="提交集唯一标识">
              </el-table-column>
              <el-table-column prop="address" label="sourceId">
              </el-table-column>
              <el-table-column prop="address" label="EntryID">
              </el-table-column>
            </el-table>
          </el-tab-pane> -->
          <el-tab-pane label="关联表" name="first">
            <el-table :data="getAssociarionsData" border style="width:100%; text-align: left;" height="250">
              <el-table-column prop="associationType" label="AssociationType" width="115">
              </el-table-column>
              <el-table-column prop="id" label="Id">
              </el-table-column>
              <el-table-column prop="sourceObject" label="sourceObject">
              </el-table-column>
              <el-table-column prop="targetObject" label="targetObject">
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
  <!-- </div>
  </div> -->
</template>
<script>
import { baseInfo } from "../../utils/common";
export default {
  data() {
    return {
      activeName: "first",
      getAssociarionsData: [],
      tableData:[],
      loading: false,
      searchForm: {
        register_Url: "",
        repository_Url: "",
        associationType: "",
        uuid: "",
        homeCommunityId: "",
        returnType:""
      },
      searchRules: {
        uuid: [],
        homeCommunityId: []
      }
    };
  },
  created() {
    this.searchForm.repository_Url = baseInfo.repository_Url;
    this.searchForm.register_Url =baseInfo.register_Url;
  },
  methods: {
    getAssociations(formName) {
      const self = this;
      this.searchForm.repository_Url = baseInfo.repository_Url;
      this.searchForm.register_Url =baseInfo.register_Url;
      self.$refs[formName].validate(valid => {
        if (valid) {
          let url = self.$apis.consumer.getAssociations
          //let url = "/consumer/getAssociations";
          console.log(url);
          let params = JSON.parse(JSON.stringify(this.searchForm));
          console.log(params);
          self.$axios.post(url, params).then(res => {
            console.log(res.data);
            //this.tableData.push(res.data)
            this.getAssociarionsData = res.data;
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

