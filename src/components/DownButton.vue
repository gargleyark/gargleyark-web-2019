<template>
  <a @click="scroll"/>
</template>

<script>
export default {
  props: {
    scrollAmount: [String, Number]
  },
  methods: {
    scroll() {
      window.scrollTo({
        top: this.scrollAmount,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped lang="scss">
a {
  margin: auto;
  margin-bottom: 18px;
  display: block;
  width: 50px;
  height: 50px;
  border: 2px solid #279df9;
  border-radius: 25px;
  transition: background-color 0.3s;
  background-color: #ffffff;

  &:after,
  &:before {
    content: '';
    border-style: solid;
    border-width: 10px;
    width: 0;
    height: 0;
    position: absolute;
    margin-left: 13px;
    margin-top: 20px;
    transition: border-color 0.3s;
  }

  &:before {
    border-color: #279df9 transparent transparent;
  }

  &:after {
    margin-top: 17px;
    border-color: #ffffff transparent transparent;
  }

  &:hover {
    background-color: #279df9;

    &:after {
      border-color: #279df9 transparent transparent;
    }

    &:before {
      border-color: #ffffff transparent transparent;
    }
  }
}
</style>

