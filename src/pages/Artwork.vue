<template>
  <Layout>
    <article class="artwork">
      <PageHeader :title="pageTitle" />
      <Gallery :images="images" />
    </article>
  </Layout>
</template>

<page-query>
  query WritingPage {
    pageHeader: contentfulPageHeader (id: "2qtqZq4hxOAORjCfAZwngM") {
      pageTitle
    }
    gallery: contentfulGallery (id: "5xaoiFwKiQ2gyiMO8wnvpk") {
      images {
        fields {
          date
          description
          location
          image {
            fields {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import SideBlock from '~/components/SideBlock.vue'
import Gallery from '~/components/Gallery.vue'

export default {
  components: {
    PageHeader,
    SideBlock,
    Gallery
  },
  metaInfo: {
    title: 'Artwork'
  },
  computed: { 
    pageTitle() {
      return this.$page.pageHeader.pageTitle
    },
    images() {
      return this.$page.gallery.images
    }
  }
}
</script>
