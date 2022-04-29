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
      const user = this.$store.getters.userLogado

      if (!user.name) {
        console.log('informe o nome')
        this.hasError = true
      }
      if (!user.password) {
        console.log('informe o password')
        this.hasError = true
      }

      const search = this.dataLogins.find(el => el.login === user.name)
      if (!search) {
        console.log('Usuário não existe')
        this.hasError = true
      } else {
        if (user.password !== String(search.password)) {
          console.log('senha incorreta', user.password, search.password)
          this.hasError = true
        }
      }
      if (!this.hasError) {
        this.$router.push(this.url + '.html')
        this.$store.commit('setUserActive', true)
        document.location.reload(true)
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
