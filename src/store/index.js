import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import rights from './modules/rights'
import goods from './modules/goods'
import getters from './getter'
import login from './modules/login'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    login,
    rights,
    users,
    goods
  },
  plugins: [vuexLocal.plugin]
})
