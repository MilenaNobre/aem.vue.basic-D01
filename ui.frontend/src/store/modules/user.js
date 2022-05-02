// import logins from '@/data/logins'

export default {
  state: {
    logins: [],
    userLogado: {
      name: null,
      password: null,
      location: '',
      active: false,
      errorMessage: ''
    }
  },
  mutations: {
    setResetUserLogado (state) {
      state.userLogado = {
        name: null,
        password: null,
        location: '',
        active: false,
        errorMessage: ''
      }
    },
    setLogins (state, logins) {
      state.logins = logins
    },
    setUserName (state, name) {
      state.userLogado.name = name
    },
    setUserPassword (state, password) {
      state.userLogado.password = password
    },
    setUserLocal (state, local) {
      state.userLogado.location = local
    },
    setUserActive (state) {
      state.userLogado.active = !state.userLogado.active
    },
    setUserAddMessage (state, message) {
      state.userLogado.errorMessage = message
    },
    setUserRemoveMessage (state) {
      state.userLogado.errorMessage = ''
    }
  },
  getters: {
    logins (state) {
      return state.logins
    },
    userLogado (state) {
      return state.userLogado
    },
    hasErrorMessage (state) {
      return state.userLogado.errorMessage !== ''
    },
    errorMessage (state) {
      return state.userLogado.errorMessage
    }
  }
}
