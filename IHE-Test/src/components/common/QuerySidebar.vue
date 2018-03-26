<template>
  <el-aside style="width: 202px;">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" @select="selectMenu">
      <template v-for="item in items">
        <template v-if="item.flag">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item v-for="subItem in item.children" :index="subItem.index" :key="subItem.index">
              <span slot="title">{{ subItem.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item v-for="subItem in item.children" :index="subItem.index" :key="subItem.index">
            <i :class="subItem.navIcon"></i>
            <span slot="title">{{ subItem.title }}</span>
          </el-menu-item>
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
          index: "Find",
          title: "Find",
          flag: false,
          children: [
            {
              index: "findDocument",
              title: "findDocument",
              navIcon:"el-icon-document"
            },
            {
              index: "findFolder",
              title: "findFolder",
              navIcon:"el-icon-date"
            },
            {
              index: "findSubmissionSet",
              title: "findSubmissionSet",
              navIcon:"el-icon-news"
            },
            {
              index: "getAssociations",
              title: "getAssociations",
              navIcon:"el-icon-printer"
            }
          ]
        },

        {
          title: "更多",
          index: "Get",
          flag: true,
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
