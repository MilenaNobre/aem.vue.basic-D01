<template>
  <div>
    <button :class='typeButton' @click="action"><span> {{ titleButton }} </span></button>
  </div>
</template>

<script>
export default {
  name: 'ActionButton',
  data () {
    return {
      dataLogins: [],
      hasError: false
    }
  },
  props: {
    titleButton: {
      type: String,
      default: 'back to homepage'
    },
    typeButton: { String },
    url: { String },
    urlNotFound: { String }
  },
  created () {
    this.$http('logins.json').then(resp => {
      if (resp.data) {
        this.$store.commit('setLogins', resp.data)
        this.dataLogins = this.$store.getters.logins
      }
    })
  },
  methods: {
    action () {
      switch (this.typeButton) {
        case 'btn-primary':
          this.validateInput()
          break
        case 'btn':
          this.goToHomePage()
          break
      }
    },
    validateInput () {
      this.$store.commit('setUserRemoveMessage') // clear objet errorMessage
      const user = this.$store.getters.userLogado

      if (user.name === null) {
        this.$store.commit('setUserAddMessage', 'O campo usuário é obrigatório')
      } else if (user.password === null) {
        this.$store.commit('setUserAddMessage', 'O campo senha é obrigatório')
      } else {
        const search = this.dataLogins.find(el => el.login === user.name)
        if (!search) {
          this.$store.commit('setUserAddMessage', 'Ops, usuário inválido. Tente novamente!')
        } else {
          if (user.password !== String(search.password)) {
            this.$store.commit('setUserAddMessage', 'Ops, senha inválida. Tente novamente!')
          }
        }
        if (!this.$store.getters.hasErrorMessage) {
          this.$store.commit('setUserActive')
          this.$store.commit('setUserLocal', search.local)
          // this.$router.push(this.url + '.html')
          // document.location.reload(true)
          window.location = this.url + '.html'
        }
      }
    },
    goToHomePage () {
      console.log('goToHomePage')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
