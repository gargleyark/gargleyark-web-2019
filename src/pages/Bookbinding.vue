<template>
  <Layout>
    <article class="bookbinding">
      <BookbindingWidget />
    </article>
  </Layout>
</template>

<script>
import BookbindingWidget from '~/components/BookbindingWidget'

export default {
  metaInfo: {
    title: 'About us'
  },
  components: {
    BookbindingWidget
  },
}
</script>

<style lang="scss">
</style>
