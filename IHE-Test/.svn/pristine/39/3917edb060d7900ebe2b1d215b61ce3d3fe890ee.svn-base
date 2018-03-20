<template>
<div class="form-wrap">
<el-button type="primary">刷新</el-button>
<el-button type="primary">删除当前表数据</el-button>
<el-tabs type="border-card">
  <el-tab-pane label="患者信息">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="PatientID"
      label="PatientID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="PatientName"
      label="PatientName"
      width="180">
    </el-table-column>
    <el-table-column
      prop="PatientIDList"
      label="PatientIDList">
    </el-table-column>
  </el-table>
  </el-tab-pane>
  <el-tab-pane label="文档信息">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="Id"
      label="Id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="MimeType"
      label="MimeType"
      width="180">
    </el-table-column>
    <el-table-column
      prop="CreationTime"
      label="CreationTime">
    </el-table-column>
    <el-table-column
      prop="PatientID"
      label="PatientID">
    </el-table-column>
    <el-table-column
      prop="UniqueId"
      label="UniqueId">
    </el-table-column>
    <el-table-column
      prop="Status"
      label="Status">
    </el-table-column>
    <el-table-column
      prop="confidentialityCode"
      label="confidentialityCode">
    </el-table-column>
  </el-table>
  </el-tab-pane>
  <el-tab-pane label="联系表">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sourceObject"
      label="sourceObject"
      width="180">
    </el-table-column>
    <el-table-column
      prop="associationType"
      label="associationType">
    </el-table-column>
        <el-table-column
      prop="targetObject"
      label="targetObject">
    </el-table-column>
  </el-table>
  </el-tab-pane>
  <el-tab-pane label="文件夹">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="Id"
      label="Id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="patientID"
      label="patientID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="uniqueId"
      label="uniqueId">
    </el-table-column>
    <el-table-column
      prop="LastUpdateTime"
      label="LastUpdateTime">
    </el-table-column>
    <el-table-column
      prop="status"
      label="status">
    </el-table-column>
  </el-table>
  </el-tab-pane>
   <el-tab-pane label="提交集">
     <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="Id"
      label="Id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="submissionTime"
      label="submissionTime"
      width="180">
    </el-table-column>
    <el-table-column
      prop="uniqueId"
      label="uniqueId">
    </el-table-column>
    <el-table-column
      prop="sourceId"
      label="sourceId">
    </el-table-column>
    <el-table-column
      prop="patientID"
      label="patientID">
    </el-table-column>
        <el-table-column
      prop="status"
      label="status">
    </el-table-column>
  </el-table>
   </el-tab-pane>
</el-tabs>
</div>

</template>
<script>
export default {
 data() {
      return {
        tableData: []
      }
    }
}
</script>
<style scoped>
.el-tabs{
  clear: both;
}
.el-button{
  float: left;
  margin-bottom: 20px;
}
</style>

