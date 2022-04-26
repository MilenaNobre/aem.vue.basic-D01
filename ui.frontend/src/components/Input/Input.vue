<template>
    <div class="input-icons">
      <input class="input-field" :type="typeInput" :placeholder="placeholder">
      <i :class="iconFar + ' icon'"></i>
    </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    typeInput: {
      type: String,
      default: 'text'
    },
    placeholder: { String },
    iconFar: {
      type: String
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
