import Vue from 'vue';
import Router from 'vue-router';
import routerPIX from './indexPIX'
import routerXDS from './indexXDS'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/404',
      meta: {
        requiresAuth: false,
      },
      component: resolve => require(['../404.vue'], resolve),
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: resolve => require(['../Login.vue'], resolve),
    },
    {
      path: '*',
      redirect: '/404',
    },
    ...routerXDS,
    ...routerPIX
  ],
});
