<template>
  <div class="lw-main">
    <div class="header-wrap">
      <el-row>
        <el-col :span="5">
          <div class="logo">蓝网科技</div>
        </el-col>
        <el-col :span="18">
          <div class="header">
            <el-menu :default-active="onRoutes" class="el-menu-demo  lw-menu" mode="horizontal" @select="selectMenu" unique-opened>
              <template v-for="item in items">
                <el-menu-item :key="item.index" :index="item.index" class="lw-menu-item">
                  {{ item.title }}
                </el-menu-item>
              </template>
            </el-menu>
          </div>
        </el-col>
      </el-row>
    </div>
    <router-view class="lw-main-container"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // defaultActive: "provideDocument",
      items: [
        {
          index: "provideDocument",
          title: "文档"
        },
        {
          index: "query",
          title: "查询"
        },
        {
          index: "serviceList",
          title: "服务列表"
        },
        {
          index: "registryData",
          title: "注册数据"
        },
        {
          index: "imageFile",
          title: "解析Dicom"
        },
        {
          index: "wado",
          title: "WADO"
        }
      ]
    };
  },
  // watch: {
  //   $route: function(to, from) {
  //     console.log(to, from);
  //     this.defaultActive = this.$route.meta.headerActive;
  //   }
  // },
  created() {
  },
  computed: {
    onRoutes() {
      let str = "";
      // for (let i = 0; i < this.items.length; i++) {
      //   let patt = new RegExp(this.items[i].index);
      //   console.log(this.$route.meta.headerActive)
      //   if (patt.test(this.$route.meta.headerActive)) {
      //     str = this.items[i].index;
      //     break;
      //   }
      // }
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

/* .header {
  width: 1100px;
  margin: 0 auto;
} */
.lw-menu {
  float: left;
  height: 100%;
  box-sizing: border-box;
  border-bottom-width: 0px;
  background-color: #457bc7;
}

.el-menu--horizontal > .el-menu-item.is-active,
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  color: #fff;
  height: 100%;
  border-bottom: 4px solid #7baef6;
}

.el-menu--horizontal .el-menu-item {
  color: #b3cff6;
  transition: color 0.2s;
}

.el-menu--horizontal .el-menu-item:focus,
.el-menu--horizontal .el-menu-item:hover {
  color: #fff;
  background-color: #457bc7;
}

.logo {
  float: left;
  width: 100%;
  color: #fff;
  text-align: center;
  line-height: 64px;
  font-size: 28px;
}
</style>
