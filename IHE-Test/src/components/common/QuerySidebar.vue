<template>
  <el-aside style="width: 217px;">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" @select="selectMenu">
      <template v-for="item in items">
        <template v-if="item.children">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item v-for="subItem in item.children" :index="subItem.index" :key="subItem.index">
              <span slot="title">{{ subItem.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template>

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
          title: "Find",
          index: "Find",
          children: [
            {
              index: "findDocument",
              title: "findDocument"
            },
            {
              index: "findFolder",
              title: "findFolder"
            },
            {
              index: "findSubmissionSet",
              title: "findSubmissionSet"
            }
          ]
        },
        {
          title: "Get",
          index: "Get",
          children: [
            {
              index: "getAll",
              title: "getAll"
            },
            {
              index: "getDocument",
              title: "getDocuments"
            },
            {
              index: "getFolder",
              title: "getFolders"
            },
            {
              index: "getSubmissionSet",
              title: "getSubmissionSet"
            }
            // {
            //   index:'getAssociations',
            //   title:'getAssociations'
            // },
            // {
            //   index:'getDocumentsAndAssociations',
            //   title:'getDocumentsAndAssociations'
            // },
            // {
            //   index:'getSubmissionSetAndContents',
            //   title:'getSubmissionSetAndContents'
            // },
            // {
            //   index:'getFolderAndContents',
            //   title:'getFolderAndContents'
            // },
            //  {
            //   index:'getFoldersForDocument',
            //   title:'getFoldersForDocument'
            // },
            //  {
            //   index:'getRelatedDocuments',
            //   title:'getRelatedDocuments'
            // },
          ]
        }
      ]
    };
  },
  created() {},
  computed: {
    onRoutes() {
      // let str = "findDocument";
      // for (let i = 0; i < this.items.length; i++) {
      //   let patt = new RegExp(this.items[i].index);
      //   if (patt.test(this.$route.path)) {
      //     str = this.items[i].index;
      //     break;
      //   }else{}
      // }
      // console.log(this.$route.meta.sidebarActive);
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
  text-align: center;
}

.el-menu {
  border-right: none;
  background-color: #fbfdff;
}
</style>
