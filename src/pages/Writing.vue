<template>
  <Layout>
    <article class="writing">
      <PageHeader :title="pageTitle" />
    </article>
  </Layout>
</template>

<page-query>
  query WritingPage {
    pageHeader: contentfulPageHeader (id: "4IboIMV4KLkNwQDyVMpcqD") {
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
    title: 'Writing'
  },
  computed: { 
    pageTitle() {
      return this.$page.pageHeader.pageTitle
    }
  }
}
</script>
