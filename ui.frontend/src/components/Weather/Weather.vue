<template>
  <div>
    <div className="weather-icon">
      <img :src="'http://openweathermap.org/img/w/' + this.state.icon + '.png'"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Weather',
  data () {
    return {
      state: {}
    }
  },
  created () {
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: 'Brazil,br',
        lat: '-31.396646856036423',
        lon: '-52.67586252253379',
        callback: 'weather',
        id: '2172797',
        lang: 'Portuguese - pt',
        units: 'metric',
        mode: 'json'
      },
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '120b4f968emshfc00f8d20f1bf32p1914edjsneb3b43fd630d'
      }
    }
    axios.request(options).then((response) => {
      const data = response.data
      this.state = data.weather
      console.error(this.state)
    }).catch(function (error) {
      console.error(error)
    })
  }
}
</script>

<style scoped>
img {
  width: 70px
}
</style>
