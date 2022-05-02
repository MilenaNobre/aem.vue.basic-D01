<template>
  <div class="container-weather">
    <p class="region">{{ state.city }} - {{ state.sigla }}</p>
    <div class="weather-icon">
      <img :src="state.icon"/>
      <p class="temperature">{{ state.temp }}</p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Weather',
  data () {
    return {
      state: {
        city: '',
        region: '',
        sigla: '',
        icon: '',
        temp: ''
      },
      userLogado: this.$store.getters.userLogado
    }
  },
  mounted () {
    const params = new URLSearchParams({ key: 'b1f8dcd7a82042f48e6171105222804', q: this.userLogado.location, aqi: 'no' })
    this.$weather.get(`/current.json?${params}`).then(resp => {
      this.state.icon = resp.data.current.condition.icon
      this.state.temp = resp.data.current.temp_c + 'º'
      this.state.city = resp.data.location.name
      this.state.region = resp.data.location.region
      this.$location.get('/localidades/estados').then(resp => {
        this.state.sigla = resp.data.find((state) => state.nome === this.state.region).sigla
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
