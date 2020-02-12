<template>
  <article class="triple-block" :class="{reverse: reverse, row: row}">
    <section class="block" :class="'block' + ((index + 1) % 3)" v-for="(block, index) in blocks" :key="index">
      <slot :data="block"></slot>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    blocks: Array,
    reverse: Boolean,
    row: Boolean,
  }
}
</script>

<style scoped lang="scss">
.triple-block {
  flex-direction: column-reverse;
  display: flex;
  height: auto;

  &.row {
    @media only screen and (min-width: 768px) {
      flex-direction: row-reverse;
    }
  }

  &.reverse {
    flex-direction: column;
    &.row {
      @media only screen and (min-width: 768px) {
        flex-direction: row;
      }
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

