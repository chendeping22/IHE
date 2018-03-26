<template>
  <el-aside style="width: 202px;">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" @select="selectMenu">
          <el-menu-item v-for="item in items" :index="item.index" :key="item.index">
            <i :class="item.navIcon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      items: [

            {
              index: "serverList",
              title: "服务器列表",
              navIcon:"el-icon-tickets"
            },
            {
              index: "submitSet",
              title: "提交设置",
              navIcon:"el-icon-setting"
            },
            {
              index: "otherSet",
              title: "其他配置",
              navIcon:"el-icon-star-off"
            }
          
        
      ]
    };
  },
  created() {},
  computed: {
    onRoutes() {
      return this.$route.meta.sidebarActive;
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
.sidebar {
  display: table-cell;
  width: 200px;
  height: 100%;
  background-color: #fbfdff;
  border-right: solid 1px #e1e4e8;
  box-sizing: border-box;
}
.el-aside {
  border-right: solid 1px #e1e4e8;
  box-sizing: border-box;
  min-height: 100%;
}

.el-menu-item.is-active {
  color: #457bc7;
}

.el-menu-item {
  font-size: 14px;
  color: #768394;
  text-align: left;
}

.el-menu {
  border-right: none;
  background-color: #fbfdff;
}
</style>
