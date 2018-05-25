<template>
  <el-form ref="logForm"
           :model="logForm"
           label-width="48px"
           class="form-wrap">
    <el-row>
      <el-col :span="20">
        <p id="logContent"
           class="log">
          <template v-for="(item, index) in allServerLogs">
            <p :key="index">
               {{ item }}
            </p>
          </template>
        </p>
      </el-col>
      <el-col :span="4">
        <el-form-item style="margin-top: 16px;">
          <el-button type="primary"
                     @click="resetLogs">清空</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
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
      clearVal:null,
    };
  },
  computed: {
    ...mapGetters(['allServerLogs']),
  },
  methods: {
    ...mapMutations(['clearServerLogs']),
    ...mapActions(['getServerLogs']),
    resetLogs() {
      this.clearServerLogs();
    },
    getServerLogPolling() {
      // this.getServerLogs().then(res => {
      //   this.getServerLogPolling();
      // });
      let t = setInterval(() => {  
        this.getServerLogs()  
      },3000);
      return t; 
    },
  },
  created() {
    // console.log(this.allServerLogs);
    this.clearVal = this.getServerLogPolling();
  },
  beforeDestroy(){
    clearInterval(this.clearVal)
  }
};
</script>
<style scoped>
#logContent {
  border: 1px dashed #ccc;
  height: 600px;
  overflow: auto;
  margin-left: 10px;
  font-size: 10px;
  text-align: left;
}
.log p {
  padding-left: 12px;
  padding-right: 12px;
}
</style>
