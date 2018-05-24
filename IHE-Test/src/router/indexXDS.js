export default [{
  path: '/provideDocument',
  meta: {
    headerActive: 'provideDocument',
  },
  component: resolve =>
    require(['../components/common/Header.vue'], resolve),
  children: [{
      path: '/provideDocument',
      meta: {
        headerActive: 'provideDocument',
      },
      // component: resolve =>
      //   require(['../components/page/ProvideDocument.vue'], resolve),
      component: () =>
        import ('../components/page/ProvideDocument.vue'),
    },
    {
      path: '/query',
      meta: {
        headerActive: 'query',
      },
      redirect: '/findDocument',
      component: resolve =>
        require(['../components/page/QueryContainer.vue'], resolve),
      children: [{
          path: '/findDocument',
          meta: {
            headerActive: 'query',
            sidebarActive: 'findDocument',
          },
          component: resolve =>
            require(['../components/page/FindDocument.vue'], resolve),
        },
        {
          path: '/findFolder',
          meta: {
            headerActive: 'query',
            sidebarActive: 'findFolder',
          },
          component: resolve =>
            require(['../components/page/FindFolder.vue'], resolve),
        },
        {
          path: '/findSubmissionSet',
          meta: {
            headerActive: 'query',
            sidebarActive: 'findSubmissionSet',
          },
          component: resolve =>
            require(['../components/page/FindSubmissionSet.vue'], resolve),
        },
        {
          path: '/getAll',
          meta: {
            headerActive: 'query',
            sidebarActive: 'getAll',
          },
          component: resolve =>
            require(['../components/page/GetAll.vue'], resolve),
        },
        {
          path: '/getDocument',
          meta: {
            headerActive: 'query',
            sidebarActive: 'getDocument',
          },
          component: resolve =>
            require(['../components/page/GetDocument.vue'], resolve),
        },
        {
          path: '/getAssociations',
          meta: {
            headerActive: 'query',
            sidebarActive: 'getAssociations',
          },
          component: resolve =>
            require(['../components/page/getAssociations.vue'], resolve),
        },
        {
          path: '/getFolderAndContents',
          meta: {
            headerActive: 'query',
            sidebarActive: 'getFolderAndContents',
          },
          component: resolve =>
            require([
              '../components/page/getFolderAndContents.vue',
            ], resolve),
        },
        {
          path: '/getRelatedDocument',
          meta: {
            headerActive: 'query',
            sidebarActive: 'getRelatedDocument',
          },
          component: resolve =>
            require(['../components/page/getRelatedDocument.vue'], resolve),
        },
      ],
    },
    {
      path: '/systemSet',
      meta: {
        headerActive: 'systemSet',
      },
      redirect: '/serverList',
      component: resolve =>
        require(['../components/page/systemContainer.vue'], resolve),
      children: [{
          path: '/serverList',
          meta: {
            headerActive: 'systemSet',
            sidebarActive: 'serverList',
          },
          component: resolve =>
            require(['../components/page/serverList.vue'], resolve),
        },
        {
          path: '/submitSet',
          meta: {
            headerActive: 'systemSet',
            sidebarActive: 'submitSet',
          },
          component: resolve =>
            require(['../components/page/submitSet.vue'], resolve),
        },
        {
          path: '/otherSet',
          meta: {
            headerActive: 'systemSet',
            sidebarActive: 'otherSet',
          },
          component: resolve =>
            require(['../components/page/otherSet.vue'], resolve),
        },
      ],
    },
    {
      path: '/registryData',
      meta: {
        headerActive: 'registryData',
      },
      component: resolve =>
        require(['../components/page/registryData.vue'], resolve),
    },
    {
      path: '/log',
      meta: {
        headerActive: 'log',
      },
      component: resolve =>
        require(['../components/page/log.vue'], resolve),
    },
  ],
}]

