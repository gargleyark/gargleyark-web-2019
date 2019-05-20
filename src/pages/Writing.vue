<template>
  <Layout>
    <article class="writing">
      <PageHeader :title="pageTitle" />
      <BookShelf :books="books"/>
    </article>
  </Layout>
</template>

<page-query>
  query WritingPage {
    pageHeader: contentfulPageHeader (id: "4IboIMV4KLkNwQDyVMpcqD") {
      pageTitle
    }
    books: allContentfulBook {
      edges {
        node {
          title
          coverImage {
            file {
              url
            }
          }
          text
          author
          description
          externalLink
        }
      }
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import BookShelf from '~/components/BookShelf.vue'

export default {
  components: {
    PageHeader,
    BookShelf
  },
  metaInfo: {
    title: 'Writing'
  },
  computed: { 
    pageTitle() {
      return this.$page.pageHeader.pageTitle
    },
    books() {
      return this.$page.books.edges.map(edge => edge.node)
    }
  }
}
</script>
