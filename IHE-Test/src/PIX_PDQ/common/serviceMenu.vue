<template>
  <div class="lw-wrap">
    <div class="lw-menu">
    <el-menu :default-active="onRoutes"
             @select="selectMenu"
             class="menu"
             unique-opened>
      <template v-for="item in items">
        <el-menu-item :key="item.index"
                      :index="item.index">
          {{ item.title }}
        </el-menu-item>
      </template>
    </el-menu>
    </div>
    <router-view  class="lw-content" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          index: 'serviceConfig',
          title: '服务配置',
        },
        {
          index: 'organizationAdd',
          title: '添加机构',
        },
        {
          index: 'match',
          title: '查询匹配',
        },
      ],
    };
  },
  computed: {
    onRoutes() {
      let str = '';
      str = this.$route.meta.sidebarActive;
      return str;
    },
  },
  methods: {
    //选择菜单跳转
    selectMenu(index, indexPath) {
      this.$router.replace('/' + index);
    },
  },
};
</script>
<style scoped>
.lw-wrap {
 zoom: 1;
 
}
.lw-wrap::after{
  clear: both;
  display: block;
  content: '.';
  visibility: hidden;
  height: 0;
}
.lw-content {
  width: calc(100% - 200px);
  float: left;
}
.lw-menu {
  width: 200px;
  float: left;
  
}
.menu{
  min-height: 680px;
}
</style>

