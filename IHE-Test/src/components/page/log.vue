<template>
  <el-form ref="logForm" :model="logForm" label-width="100px" class="form-wrap">
    <el-row>
      <el-col :span="4">
        <el-form-item label="Logger">
          <el-radio-group v-model="logForm.logParams">
            <el-radio :label="1">NoDebug</el-radio>
            <el-radio :label="2">GeneralDebug</el-radio>
            <el-radio :label="3">DetailDebug</el-radio>
            <el-radio :label="4">FullDebug</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item style="text-align:left">
          <el-button type="primary">清空</el-button>
        </el-form-item>
      </el-col>
      <el-col :span="20">
        <div class="logContent">

        </div>
      </el-col>
    </el-row>

  </el-form>
</template>

<script>
export default {
  data() {
    return {
      logForm:{
        logParams:""
      }
    };
  }
};
</script>
<style scoped>
.el-radio-group {
  text-align: left;
}
.el-radio + .el-radio {
  margin-left: 0;
}
.logContent {
  border: 1px dashed #ccc;
  height: 600px;
  overflow: hidden;
  margin-left: 10px
}
</style>
