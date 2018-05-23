import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/404',
      meta: {
        requiresAuth: false,
      },
      component: resolve => require(['../components/error/404.vue'], resolve),
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve),
    },
    {
      path: '*',
      redirect: '/404',
    },
    {
      path: '/provideDocument',
      meta: {
        headerActive: 'provideDocument',
      },
      component: resolve =>
        require(['../components/common/Header.vue'], resolve),
      children: [
        {
          path: '/provideDocument',
          meta: {
            headerActive: 'provideDocument',
          },
          // component: resolve =>
          //   require(['../components/page/ProvideDocument.vue'], resolve),
          component: () => import('../components/page/ProvideDocument.vue'),
        },
        {
          path: '/query',
          meta: {
            headerActive: 'query',
          },
          redirect: '/findDocument',
          component: resolve =>
            require(['../components/page/QueryContainer.vue'], resolve),
          children: [
            {
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
          children: [
            {
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
    },
    {
      path: '/patientRegister',
      component: resolve =>
        require(['../PIX_PDQ/common/Header.vue'], resolve),
      children: [
        {
          path: '/',
          meta: {
            headerActive: 'patientRegister',
          },
          components: {
            default: () =>
              import('../PIX_PDQ/page/PatientRegister.vue'),
            configHeader: () =>
              import('../PIX_PDQ/common/PatientConfig.vue'),
          },
        },
        {
          path: '/patientUpdate',
          meta: {
            headerActive: 'patientUpdate',
          },
          components: {
            default: () =>
              import('../PIX_PDQ/page/PatientUpdate.vue'),
            configHeader: () =>
              import('../PIX_PDQ/common/PatientConfig.vue'),
          },
        },
        {
          path: '/patientList',
          meta: {
            headerActive: 'patientList',
          },
          components: {
            default: () =>
              import('../PIX_PDQ/page/PatientList.vue'),
            configHeader: () =>
              import('../PIX_PDQ/common/PatientConfig.vue'),
          },
        },
        {
          path: '/patientVisit',
          meta: {
            headerActive: 'patientVisit',
          },
          components: {
            default: () =>
              import('../PIX_PDQ/page/PatientVisitList.vue'),
            configHeader: () =>
              import('../PIX_PDQ/common/PatientConfig.vue'),
          },
        },
        {
          path: '/clientLog',
          meta: {
            headerActive: 'clientLog',
          },
          components: {
            default: () =>
              import('../PIX_PDQ/page/ClientLog.vue'),
          },
        },
        {
          path: '/serviceConfig',
          meta: {
            headerActive: 'serviceConfig',
          },
          components: {
            default: () =>
              import('../PIX_PDQ/page/serviceConfig.vue'),
          },
        },
        {
          path: '/organizationAdd',
          meta: {
            headerActive: 'organizationAdd',
          },
          components: {
            default: () =>
              import('../PIX_PDQ/page/organizationAdd.vue'),
          },
        },
        {
          path: '/match',
          meta: {
            headerActive: 'match',
          },
          components: {
            default: () =>
              import('../PIX_PDQ/page/match.vue'),
          },
        },
      ],
    },
  ],
});
