<template>
    <div class="input-icons">
      <input class="input-field" :type="typeInput" :placeholder="placeholder" @change="setValue()" value="" v-model="form[vModel]">
      <i :class="iconFar + ' icon'"></i>
    </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      form: []
    }
  },
  props: {
    typeInput: {
      type: String,
      default: 'text'
    },
    placeholder: { String },
    vModel: { String },
    iconFar: {
      type: String
    }
  },
  methods: {
    setValue () {
      if (this.typeInput !== '') {
        switch (this.typeInput) {
          case 'text':
            this.$store.commit('setUserName', this.form.name)
            break
          case 'password':
            this.$store.commit('setUserPassword', this.form.password)
            break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
