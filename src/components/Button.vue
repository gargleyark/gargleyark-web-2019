<template>
  <button @click="clickEvent" type="button">{{ value }}</button>
</template>

<script>
export default {
  props: {
    value: String,
    clickEvent: Function
  },
}
</script>

<style scoped lang="scss">
button {
  margin-bottom: 18px;
  margin-top: 18px;
  display: block;
  height: 50px;
  border: 2px solid #279df9;
  border-radius: 25px;
  transition: background-color 0.3s, color 0.3s;
  background-color: #ffffff;
  font-size: 16px;
  color: #279df9;
  padding: 0px 20px;
  cursor: pointer;

  &:hover {
    background-color: #279df9;
    color: white;
  }
}
</style>

