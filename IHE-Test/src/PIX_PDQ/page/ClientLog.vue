<template>
  <el-form ref="logForm"
           :model="logForm"
           label-width="48px"
           class="form-wrap">
    <el-row>
      <el-col :span="20">
        <p id="logContent" class="log">
          <template v-for="(item, index) in allLogs">
            <p :key="index">
              <template v-for="(value, key) in item">
                {{ key }}: {{ value }}
              </template>
            </p>
          </template>
        </p>
      </el-col>
      <el-col :span="4">
        <!-- <el-form-item label="Logger">
          <el-radio-group v-model="logForm.logParams">
            <el-radio :label="1">NoDebug</el-radio>
            <el-radio :label="2">GeneralDebug</el-radio>
            <el-radio :label="3">DetailDebug</el-radio>
            <el-radio :label="4">FullDebug</el-radio>
          </el-radio-group>
        </el-form-item> -->
        <el-form-item style="margin-top: 16px;">
          <el-button type="primary" @click="resetLogs">清空</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      logForm: {
        logParams: '',
      },
      data: '',
      configHeaders: '',
      date: '',
      headers: '',
      responseURL: '',
      status: '',
      statusText: '',
    };
  },
  computed: {
    ...mapGetters(['allLogs']),
  },
  created() {
    // console.log('日志测试');
    // console.log(this.allLogs);
  },
  methods:{
    ...mapMutations([
      'clearLogs',
    ]),
    resetLogs(){
      this.clearLogs();
    }
  }
};
</script>
<style scoped>
/* .el-radio-group {
  text-align: left;
}
.el-radio + .el-radio {
  margin-left: 0;
} */
#logContent {
  border: 1px dashed #ccc;
  height: 600px;
  overflow: auto;
  margin-left: 10px;
  font-size: 10px;
  text-align: left;
}
.log p{
  padding-left: 12px;
  padding-right: 12px;
}
</style>
