// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import '../static/css/normalize.css'
import '../static/theme/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import apis from './utils/apis'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$apis = apis

Vue.use(ElementUI,{size:'mini'})


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
