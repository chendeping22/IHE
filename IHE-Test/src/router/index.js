import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/404',
      meta: {
        requiresAuth: false,
      },
      component: resolve => require(['../components/error/404.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/',
      meta: {
        headerActive: 'provideDocument'
      },
      redirect: '/provideDocument',
      component: resolve => require(['../components/common/Header.vue'], resolve),
      children: [
        {
          path: '/provideDocument',
          meta: {
            headerActive: 'provideDocument'
          },
          component: resolve => require(['../components/page/ProvideDocument.vue'], resolve),
        },
        {
          path: '/query',
          meta: {
            headerActive: 'query',
          },
          redirect: '/findDocument',
          component: resolve => require(['../components/page/QueryContainer.vue'], resolve),
          children: [
            {
              path: '/findDocument',
              meta: {
                headerActive: 'query',
                sidebarActive: 'findDocument',
              },
              component: resolve => require(['../components/page/FindDocument.vue'], resolve),
            },
            {
              path: '/findFolder',
              meta: {
                headerActive: 'query',
                sidebarActive: 'findFolder',
              },
              component: resolve => require(['../components/page/FindFolder.vue'], resolve),
            },
            {
              path: '/findSubmissionSet',
              meta: {
                headerActive: 'query',
                sidebarActive: 'findSubmissionSet',
              },
              component: resolve => require(['../components/page/FindSubmissionSet.vue'], resolve),
            },
            {
              path: '/getAll',
              meta: {
                headerActive: 'query',
                sidebarActive: 'getAll',
              },
              component: resolve => require(['../components/page/GetAll.vue'], resolve),
            },
            {
              path: '/getDocument',
              meta: {
                headerActive: 'query',
                sidebarActive: 'getDocument',
              },
              component: resolve => require(['../components/page/GetDocument.vue'], resolve),
            },
            {
              path: '/getFolder',
              meta: {
                headerActive: 'query',
                sidebarActive: 'getFolder',
              },
              component: resolve => require(['../components/page/GetFolder.vue'], resolve),
            },
            {
              path: '/getSubmissionSet',
              meta: {
                headerActive: 'query',
                sidebarActive: 'getSubmissionSet',
              },
              component: resolve => require(['../components/page/GetSubmissionSets.vue'], resolve),
            },
            {
              path: '/getAssociations',
              meta: {
                headerActive: 'query',
                sidebarActive: 'getAssociations',
              },
              component: resolve => require(['../components/page/getAssociations.vue'], resolve),
            },
            {
              path: '/getDocumentsAndAssociations',
              meta: {
                headerActive: 'query',
                sidebarActive: 'getDocumentsAndAssociations',
              },
              component: resolve => require(['../components/page/getDocumentsAndAssociations.vue'], resolve),
            },
            {
              path: '/getSubmissionSetAndContents',
              meta: {
                headerActive: 'query',
                sidebarActive: 'getSubmissionSetAndContents',
              },
              component: resolve => require(['../components/page/getSubmissionSetAndContents.vue'], resolve),
            },
            {
              path: '/getFolderAndContents',
              meta: {
                headerActive: 'query',
                sidebarActive: 'getFolderAndContents',
              },
              component: resolve => require(['../components/page/getFolderAndContents.vue'], resolve),
            },
            {
              path: '/getFoldersForDocument',
              meta: {
                headerActive: 'query',
                sidebarActive: 'getFoldersForDocument',
              },
              component: resolve => require(['../components/page/getFoldersForDocument.vue'], resolve),
            },
            {
              path: '/getRelatedDocuments',
              meta: {
                headerActive: 'query',
                sidebarActive: 'getRelatedDocuments',
              },
              component: resolve => require(['../components/page/getRelatedDocuments.vue'], resolve),
            },
          ]
        },
        {
          path: '/systemSet',
          meta: {
            headerActive: 'systemSet'
          },
          redirect: '/serverList',
          component: resolve => require(['../components/page/systemContainer.vue'], resolve),
          children:[
            {
              path: '/serverList',
              meta: {
                headerActive: 'systemSet',
                sidebarActive: 'serverList',
              },
              component: resolve => require(['../components/page/serverList.vue'], resolve),
            },
            {
              path: '/submitSet',
              meta: {
                headerActive: 'systemSet',
                sidebarActive: 'submitSet',
              },
              component: resolve => require(['../components/page/submitSet.vue'], resolve),
            },
            {
              path: '/otherSet',
              meta: {
                headerActive: 'systemSet',
                sidebarActive: 'otherSet',
              },
              component: resolve => require(['../components/page/otherSet.vue'], resolve),
            },
          ]
        },
        {
          path: '/registryData',
          meta: {
            headerActive: 'registryData'
          },
          component: resolve => require(['../components/page/registryData.vue'], resolve),
        },
        {
          path: '/log',
          meta: {
            headerActive: 'log'
          },
          component: resolve => require(['../components/page/log.vue'], resolve),
        },
        {
          path: '/imageFile',
          meta: {
            headerActive: 'imageFile'
          },
          component: resolve => require(['../components/page/imageFile.vue'], resolve),
        },
        {
          path: '/wado',
          meta: {
            headerActive: 'wado'
          },
          component: resolve => require(['../components/page/wado.vue'], resolve),
        },
      ]
    },
  ]
})
