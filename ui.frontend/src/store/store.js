import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from './modules/user'
Vue.use(Vuex)
Vue.config.productionTip = false

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    user
  }
})
