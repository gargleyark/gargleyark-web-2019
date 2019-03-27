<template>
  <article class="triple-block">
      <JobBlock v-for="(block, index) in blocks" :key="block.roleTitle" :job="block.fields" class="block" :class="'block' + index"/>
    </article>
</template>

<script>
import JobBlock from '~/components/JobBlock.vue'

export default {
  props: {
    blocks: Array
  },
  components: {
    JobBlock
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
  }
}
</style>

