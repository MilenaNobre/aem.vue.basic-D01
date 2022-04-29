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
</script>

<style scoped>

.input-icons {
  display: flex;
  align-items: center;
  margin-bottom: 5%;
  position: relative;
}

.icon {
  position: absolute;
  right: 42%;
  color: #FFFFFF
}

.input-field {
  width: 62%;
  height: 30px;
  padding: 20px;
  text-align: left;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 50px;
  background: transparent;
  color: #FFFFFF
}
</style>
