<template>
  <Layout>
    <article class="bookbinding">
      <PageHeader :title="pageTitle" />
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
    pageHeader: contentfulPageHeader (id: "1s5b10glRIco4XerC6UKeJ") {
      pageTitle
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
    },
    pageTitle() {
      return this.$page.pageHeader.pageTitle
    }
  }
}
</script>

<style lang="scss">
</style>
