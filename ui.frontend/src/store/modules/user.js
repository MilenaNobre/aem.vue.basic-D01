// import logins from '@/data/logins'

export default {
  state: {
    logins: [],
    userLogado: {
      name: '',
      password: '',
      active: false
    }
  },
  mutations: {
    setLogins (state, logins) {
      state.logins = logins
    },
    setUserName (state, name) {
      state.userLogado.name = name
    },
    setUserPassword (state, password) {
      state.userLogado.password = password
    },
    setUserActive (state, active) {
      state.userLogado.active = active
    }
  },
  getters: {
    logins (state) {
      return state.logins
    },
    userLogado (state) {
      return state.userLogado
    }
  }
}
