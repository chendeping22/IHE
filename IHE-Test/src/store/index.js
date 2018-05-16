import Vue from 'vue'
import Vuex from 'vuex'
import pix from './modules/pixConfig' 

Vue.use(Vuex)

const debug = process.env.NODE_ENV !=='production'

export default new Vuex.Store({
    modules: {
      pix
    },
    strict: debug,
})