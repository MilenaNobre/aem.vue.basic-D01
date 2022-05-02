<template>
  <header>
    <div class="nav">
      <img src="/content/dam/vue/LogoCompassoPreta.png" />
      <div>
        <h1>{{ date.getHours() }}:{{ date.getMinutes() }}</h1>
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
      date: new Date(),
      week: '',
      month: ''
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
