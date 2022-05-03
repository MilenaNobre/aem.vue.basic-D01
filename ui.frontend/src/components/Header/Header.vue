<template>
  <header>
    <div class="nav">
      <img src="/content/dam/vue/LogoCompassoPreta.png" />
      <div class="timer">
        <h1>{{ date.getHours() }}:{{ date.getMinutes().toString().replace(/^(\d)$/, '0$1') }}</h1>
        <p>{{ week }}, {{ date.getDate() }} de {{ month }} de {{ date.getFullYear() }}</p>
      </div>
       <weather></weather>
    </div>
  </header>
</template>

<script>
import Weather from '@/components/Weather/Weather'
import DateEnum from '@/enums/modules/date'

export default {
  name: 'Header',
  components: { Weather },
  data () {
    return {
      week: '',
      month: ''
    }
  },
  computed: {
    date () {
      return new Date()
    }
  },
  mounted () {
    this.week = DateEnum.WEEKDAY[this.date.getDay()]
    this.month = DateEnum.MONTHS[this.date.getMonth()]
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
