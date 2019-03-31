<template>
  <Layout>
    <article class="bookbinding">
      <PageHeader />
      <SideBlock :data="firstSideBlock" />
    </article>
  </Layout>
</template>

<page-query>
  query BookbindingPage {
    firstSideBlock: contentfulSideBlock (id: "4Q6W46MIcdricZdCQkpC6a") {
      alignment
      colour
      colourBackdropText
      whiteBackgroundContentType
      swapContent
    }
  }
</page-query>

<script>
import BookbindingWidget from '~/components/BookbindingWidget'
import PageHeader from '~/components/PageHeader'
import SideBlock from '~/components/SideBlock.vue'

export default {
  metaInfo: {
    title: 'Bookbinding'
  },
  components: {
    BookbindingWidget,
    PageHeader,
    SideBlock
  },
  computed: {
    firstSideBlock() {
      return this.$page.firstSideBlock
    }
  }
}
</script>

<style lang="scss">
</style>
