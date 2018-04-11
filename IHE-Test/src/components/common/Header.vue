<template>
  <div>
    <div class="header-wrap">
      <el-row>
        <el-col :span="5">
          <div class="logo">蓝网科技</div>
        </el-col>
        <el-col :span="18">
          <el-menu :default-active="onRoutes" class="lw-menu" mode="horizontal" @select="selectMenu" unique-opened>
            <template v-for="item in items">
              <el-menu-item :key="item.index" :index="item.index">
                {{ item.title }}
              </el-menu-item>
            </template>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <el-collapse v-model="activeNames" id="params">
      <el-collapse-item title="通讯参数配置" name="1">
        <el-form ref="paramSetform" :model="paramSetform" label-width="100px">
          <el-col :span="8">
            <el-form-item label="文档库" prop="repository_Url" style="text-align:left;">
              <el-input v-model="paramSetform.repository_Url">
              </el-input>
              <!-- <el-select v-model="paramSetform.repository_Url" placeholder="请选择文档库">
                <el-option v-for="item in documentUrlOption" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select> -->

            </el-form-item>
            <el-form-item label="注册库" prop="registered_Url" style="text-align:left">
              <el-input v-model="paramSetform.registered_Url">
              </el-input>
              <!-- <el-select v-model="paramSetform.registered_Url" placeholder="请选择注册库">
                <el-option v-for="item in registryUrlOption" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>-->
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="PatientId" prop="patientId" style="text-align:left;">
              <el-input v-model="paramSetform.patientId">
              </el-input>
            </el-form-item>
            <el-form-item label="sourceID" prop="sourceID">
              <el-input v-model="paramSetform.sourceID">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-row>
              <el-col :span="8" :offset="1">
                <el-form-item label="SOAP版本">
                  <el-radio-group v-model="paramSetform.soap">
                    <el-radio label="1">soap 1.1</el-radio>
                    <el-radio label="2">soap 1.2</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="TLS版本">
                  <el-radio-group v-model="paramSetform.tls">
                    <el-radio label="1">Version1</el-radio>
                    <el-radio label="2">Version2</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <!-- <el-button @click="testD">测试F</el-button>
              <el-button @click="testS">测试D</el-button> -->
            </el-row>

          </el-col>

        </el-form>
      </el-collapse-item>
    </el-collapse>
    <router-view v-bind:message=[paramSetform.registered_Url,paramSetform.patientId]></router-view>
  </div>
</template>
<script>
import {serverListbus,FindDocumentBus,FindSubmissionBus,FindFolder} from "../../utils/bus";
export default {
  data() {
    return {
      items: [
        {
          index: "provideDocument",
          title: "提交"
        },
        {
          index: "query",
          title: "查询"
        },
        {
          index: "log",
          title: "日志"
        },
        {
          index: "registryData",
          title: "注册库数据"
        },
        {
          index: "systemSet",
          title: "系统设置"
        }
      ],
      activeNames: ["1"],
      paramSetform: {
        repository_Url: "",
        registered_Url: "",
        patientId: "",
        sourceID: "",
        soap: "2",
        tls: "2"
      },
      documentUrlOption: [
        {
          value: "http://192.168.121.66:89",
          label: "蓝网http"
        },
        {
          value: "选项2",
          label: "蓝网https"
        },
        {
          value: "选项3",
          label: "大会http"
        },
        {
          value: "选项4",
          label: "大会https"
        }
      ],
      registryUrlOption: [
        {
          value: "选项1",
          label: "蓝网http"
        },
        {
          value: "选项2",
          label: "蓝网https"
        },
        {
          value: "选项3",
          label: "大会http"
        },
        {
          value: "选项4",
          label: "大会https"
        }
      ]
    };
  },

  created() {
    serverListbus.$on("repositoryHttpChild", data => {
      this.repositoryHttpParent(data);
    });
    serverListbus.$on("repositoryHttpsChild", data => {
      this.repositoryHttpsParent(data);
    });
    serverListbus.$on("registerHttpChild", data => {
      this.registerHttpParent(data);
    });
    serverListbus.$on("registerHttpsChild", data => {
      this.registerHttpsParent(data);
    });
  },
  // beforeUpdate(){
  //   FindDocumentBus.$emit("queryDocument", [this.paramSetform.repository_Url,this.paramSetform.patientId]);
  //   FindSubmissionBus.$emit("querySubmission", [this.paramSetform.repository_Url,this.paramSetform.patientId]);
  //   FindFolder.$emit("queryFolder", [this.paramSetform.repository_Url,this.paramSetform.patientId]);
  // },
  computed: {
    onRoutes() {
      let str = "";
      str = this.$route.meta.headerActive;
      console.log(str);
      return str;
    }
  },
  methods: {
    // testD:function(){
    //    FindDocumentBus.$emit("queryDocument", [this.paramSetform.repository_Url,this.paramSetform.patientId]);
    // },
    //  testS:function(){
    //    FindSubmissionBus.$emit("querySubmission", [this.paramSetform.repository_Url,this.paramSetform.patientId]);
    // },
    repositoryHttpParent: function(data) {
      console.log(data);
      this.paramSetform.repository_Url = data;
    },
    repositoryHttpsParent: function(data) {
      console.log(data);
      this.paramSetform.repository_Url = data;
    },
    registerHttpParent: function(data) {
      console.log(data);
      this.paramSetform.registered_Url = data[0];
      this.paramSetform.patientId = data[1];
      this.paramSetform.sourceID = data[2];
    },
    registerHttpsParent: function(data) {
      console.log(data);
      this.paramSetform.registered_Url = data[0];
      this.paramSetform.patientId = data[1];
      this.paramSetform.sourceID = data[2];
    },
    selectMenu(index, indexPath) {
      this.$router.replace("/" + index);
    }
  }
};
</script>
<style scoped>
.header-wrap {
  background-color: #457bc7;
}
.logo {
  float: left;
  width: 100%;
  color: #fff;
  text-align: center;
  line-height: 48px;
  font-size: 20px;
}
.lw-menu {
  float: left;
  height: 48px;
  box-sizing: border-box;
  border-bottom-width: 0px;
  background-color: #457bc7;
  width: 100%;
  padding-left: 50px;
}
.el-menu--horizontal > .el-menu-item.is-active,
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  color: #fff;
  height: 48px;
  line-height: 48px;
  border-bottom: 4px solid #7baef6;
}
.el-menu--horizontal .el-menu-item {
  color: #b3cff6;
  transition: color 0.2s;
  height: 48px;
  line-height: 48px;
}
.el-menu--horizontal .el-menu-item:focus,
.el-menu--horizontal .el-menu-item:hover {
  color: #fff;
  background-color: #457bc7;
}
.el-radio + .el-radio {
  margin-left: 0;
}
</style>
