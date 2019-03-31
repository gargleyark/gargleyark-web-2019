<template>
  <Layout>
    <article class="artwork">
      <PageHeader :title="pageTitle" />
    </article>
  </Layout>
</template>

<page-query>
  query WritingPage {
    pageHeader: contentfulPageHeader (id: "2qtqZq4hxOAORjCfAZwngM") {
      pageTitle
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import SideBlock from '~/components/SideBlock.vue'

export default {
  components: {
    PageHeader,
    SideBlock
  },
  metaInfo: {
    title: 'Artwork'
  },
  computed: { 
    pageTitle() {
      return this.$page.pageHeader.pageTitle
    }
  }
}
</script>
