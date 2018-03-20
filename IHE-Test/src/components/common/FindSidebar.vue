<template>
    <el-aside width="168px">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" @select="selectMenu">
            <template v-for="item in items">
                <el-menu-item :index="item.index" :key="item.index">
                    <span slot="title">{{ item.title }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </el-aside>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          index: "findDocument",
          title: "findDocument"
        },
        {
          index: "findFolder",
          title: "findFolder"
        } ,
        {
          index: "findSubmissionSet",
          title: "findSubmissionSet"
        }
      ]
    };
  },
  created() {},
  computed: {
    onRoutes() {
      let str = "findDocument";
      for (let i = 0; i < this.items.length; i++) {
        let patt = new RegExp(this.items[i].index);
        if (patt.test(this.$route.path)) {
          str = this.items[i].index;
          break;
        }
      }
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
.sidebar {
  display:table-cell;
  width: 168px;
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
  text-align: center;
}

.el-menu {
  border-right: none;
  background-color: #fbfdff;
}
</style>
