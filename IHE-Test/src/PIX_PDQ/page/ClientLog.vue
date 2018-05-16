<template>
  <el-form ref="logForm" :model="logForm" label-width="100px" class="form-wrap" >
    <el-row>
      <el-col :span="20">
        <div id="logContent">
          <!-- <p style="color:red">{{data}}</p>
          <p style="color:blue">{{configHeaders}}</p>
          <p style="color:yellow">{{date}}</p>
          <p style="color:orange">{{headers}}</p>
          <p style="color:red">{{responseURL}}</p>
          <p style="color:red">{{status}}</p>
          <p style="color:red">{{statusText}}</p> -->
          <p>{{data}}</p>
          <p>{{configHeaders}}</p>
          <p>{{date}}</p>
          <p>{{headers}}</p>
          <p>{{responseURL}}</p>
          <p>{{status}}</p>
          <p>{{statusText}}</p>
        </div>
      </el-col>
      <el-col :span="4"> 
        <el-form-item label="Logger" >
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
    </el-row>

  </el-form>
</template>

<script>
import { showLog } from "../../utils/common";
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      logForm: {
        logParams: ""
      },
      data: "",
      configHeaders: "",
      date: "",
      headers: "",
      responseURL: "",
      status: "",
      statusText: ""
    };
  },
  computed:{
    ...mapGetters(['getLogs'])
  },
  created() {
    console.log("日志测试");
    console.log(showLog.data);
    console.log(this.getLogs);
    this.data = showLog.config.data;
    this.configHeaders = showLog.config.headers;
    this.method = showLog.config.method;
    this.date = showLog.data.date;
    this.headers = showLog.headers;
    this.responseURL = showLog.request.responseURL;
    this.status = showLog.status;
    this.statusText = showLog.statusText;
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
#logContent {
  border: 1px dashed #ccc;
  height: 600px;
  overflow: hidden;
  margin-left: 10px;
  font-size: 10px;
  text-align: left;
}
</style>
