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
    <router-view></router-view>
  </div>
</template>
<script>
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
      ]
    };
  },
  created() {},
  computed: {
    onRoutes() {
      let str = "";
      str = this.$route.meta.headerActive;
      console.log(str);
      return str;
    }
  },
  methods: {
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
</style>
