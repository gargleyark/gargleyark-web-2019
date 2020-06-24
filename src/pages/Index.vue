<template>
  <Layout>
    <HomeHeader :data="homeHeaderData" />
    <SideBlock :data="firstSideBlock" />
    <MultiBlock :blocks="firstMultiBlock" id="jobs">
      <template v-slot:default="slot"
        ><JobBlock :job="slot.data.fields"
      /></template>
    </MultiBlock>
    <SideBlock :data="secondSideBlock" />
  </Layout>

  <!--  -->
</template>

<page-query>
  query HomePage {
    contentfulHomePageHeader (id: "6Qg6LelX8jFNAxRyTTqfS7") {
      seeMoreButtonText
      subText
      mainLinks {
        fields {
          linkName
          linkUrl
        }
      }
      socialMediaButtons {
        fields {
          name
          icon {
            fields {
              title
              description
              file {
                url
              }
            }
          }
          link
        }
      }
      mainImage {
        fields {
          title
          description
          file {
            url
          }
        }
      }
      spaceImage {
        fields {
          title
          description
          file {
            url
          }
        }
      }
    }
    firstSideBlock: contentfulSideBlock (id: "1WpDRFUkPwCDqeFZZFlQzp") {
      alignment
      colour
      colourBackdropText
      whiteBackgroundContentType
      swapContent
      whiteBackdropContent {
        fields {
          title
          emailPlaceholder
          messagePlaceholder
          buttonValue
          name
          icon {
            fields {
              title
              file {
                url
              }
            }
          }
        }
      }
    }
    secondSideBlock: contentfulSideBlock (id: "XqUxI3ElLzDcsghRFNwlV") {
      alignment
      colour
      colourBackdropText
      whiteBackgroundContentType
      swapContent
      whiteBackdropContent {
        fields {
          title
          namePlaceholder
          emailPlaceholder
          messagePlaceholder
          buttonValue
          name
          icon {
            fields {
              title
              file {
                url
              }
            }
          }
        }
      }
    }
    contentfulTripleBlock (id: "4DfGP6JoQoC9QP13V0uWDv") {
      blocks {
        fields {
          roleTitle
          startDate
          endDate
          description
          companyIcon {
            fields {
              title
              file {
                url
              }
            }
          }
          skills {
            fields {
              name
              icon {
                fields {
                  title
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import HomeHeader from '~/components/HomeHeader.vue';
import SideBlock from '~/components/SideBlock.vue';
import MultiBlock from '~/components/MultiBlock.vue';
import JobBlock from '~/components/JobBlock.vue';

export default {
  metaInfo: {
    title: 'Home',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'home',
    },
  },
  components: {
    HomeHeader,
    SideBlock,
    MultiBlock,
    JobBlock,
  },
  computed: {
    homeHeaderData() {
      return this.$page.contentfulHomePageHeader;
    },
    firstSideBlock() {
      return this.$page.firstSideBlock;
    },
    secondSideBlock() {
      return this.$page.secondSideBlock;
    },
    firstMultiBlock() {
      return this.$page.contentfulTripleBlock.blocks;
    },
  },
};
</script>

<style scoped lang="scss"></style>
