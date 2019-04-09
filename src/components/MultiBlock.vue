<template>
  <article class="triple-block" :class="{reverse: reverse}">
    <section class="block" :class="'block' + index" v-for="(block, index) in blocks" :key="index">
      <slot :data="block"></slot>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    blocks: Array,
    reverse: Boolean
  }
}
</script>

<style scoped lang="scss">
.triple-block {
  flex-direction: column-reverse;
  display: flex;
  height: auto;

  @media only screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }

  &.reverse {
    flex-direction: column;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  .block {
    flex: 1;
    color: white;

    &.block2 {
      background-image: linear-gradient(to bottom right, #e53842, #cb242d);
    }

    &.block1 {
      background-image: linear-gradient(to bottom right, #f2b754, orange);
    }

    &.block0 {
      background-image: linear-gradient(to bottom right, #279df9, #30a9d8);
    }

    &.block4 {
      background-image: linear-gradient(to bottom right, #f4f3f3, #d9d8d8);
    }
  }
}
</style>

