export default [{
  path: '/patientRegister',
  component: resolve =>
    require(['../PIX_PDQ/common/Header.vue'], resolve),
  children: [{
      path: '/',
      meta: {
        headerActive: 'patientRegister',
      },
      components: {
        default: () =>
          import ('../PIX_PDQ/page/PatientRegister.vue'),
        configHeader: () =>
          import ('../PIX_PDQ/common/PatientConfig.vue'),
      },
    },
    {
      path: '/patientUpdate',
      meta: {
        headerActive: 'patientUpdate',
      },
      components: {
        default: () =>
          import ('../PIX_PDQ/page/PatientUpdate.vue'),
        configHeader: () =>
          import ('../PIX_PDQ/common/PatientConfig.vue'),
      },
    },
    {
      path: '/patientList',
      meta: {
        headerActive: 'patientList',
      },
      components: {
        default: () =>
          import ('../PIX_PDQ/page/PatientList.vue'),
        configHeader: () =>
          import ('../PIX_PDQ/common/PatientConfig.vue'),
      },
    },
    {
      path: '/patientVisit',
      meta: {
        headerActive: 'patientVisit',
      },
      components: {
        default: () =>
          import ('../PIX_PDQ/page/PatientVisitList.vue'),
        configHeader: () =>
          import ('../PIX_PDQ/common/PatientConfig.vue'),
      },
    },
    {
      path: '/clientLog',
      meta: {
        headerActive: 'clientLog',
      },
      components: {
        default: () =>
          import ('../PIX_PDQ/page/ClientLog.vue'),
      },
    },
    {
      path: '/serverLog',
      meta: {
        headerActive: 'serverLog',
      },
      components: {
        default: () =>
          import ('../PIX_PDQ/page/ServerLog.vue'),
      },
    },
    {
      path: '/service',
      meta: {
        headerActive: 'service',
      },
      redirect: '/serviceConfig',
      component: () =>
        import ('../PIX_PDQ/common/serviceMenu.vue'),
      children: [{
          path: '/serviceConfig',
          meta: {
            headerActive: 'service',
            sidebarActive: 'serviceConfig',
          },
          component: () =>
            import ('../PIX_PDQ/page/serviceConfig.vue'),
        },
        {
          path: '/organizationAdd',
          meta: {
            headerActive: 'service',
            sidebarActive: 'organizationAdd',
          },
          component: () =>
            import ('../PIX_PDQ/page/organizationAdd.vue'),
        },
        {
          path: '/match',
          meta: {
            headerActive: 'service',
            sidebarActive: 'match',
          },
          component: () =>
            import ('../PIX_PDQ/page/match.vue'),
        }
      ]
    },
  ],
}]

