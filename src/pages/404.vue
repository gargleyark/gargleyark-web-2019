<template>
  <Layout>
    <article class="artwork">
      <PageHeader :title="pageTitle" :image="image" :subtext="subtext"/>
    </article>
  </Layout>
</template>

<page-query>
  query ErrorPage {
    pageHeader: contentfulPageHeader (id: "41j7gvoE8qoluokGU5Vg1B") {
      pageTitle
      subtext
      headerImage {
        file {
          url
        }
      }
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'

export default {
  components: {
    PageHeader
  },
  metaInfo: {
    title: 'What?'
  },
  computed: { 
    pageTitle() {
      return this.$page.pageHeader.pageTitle
    },
    subtext() {
      return this.$page.pageHeader.subtext
    },
    image() {
      return this.$page.pageHeader.headerImage.file.url
    }
  }
}
</script>
