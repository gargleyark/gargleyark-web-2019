<template>
  <article class="home-page-header">
      <article class="header-description">
        <section v-for="(link, i) in pageHeader" :index="link.linkName" class="links">
          <p><g-link :to="link.linkUrl">{{ link.linkName }}</g-link><span v-if="i === pageHeader.length - 2"> &</span></p>
        </section>
        <section>
          <p class="subtext" v-html="subText"></p>
        </section>
        <section class="social">
          <a  v-for="(button, i) in socialMediaButtons" :index="button.name" :href="button.link" class="social-media-button">
            <g-image :alt="button.name" :src="button.image" />
          </a>
        </section>
        <DownButton class="down-button-header" scrollAmount="768"/>
      </article>
      <article class="header-image">
        <g-image alt="oh look it's Mike" :src="mainImage" />
      </article>
    </article>
</template>


<script>
import Break from '~/components/Break.vue'
import DownButton from '~/components/DownButton.vue'
import marked from 'marked'

export default {
  components: {
    Break,
    DownButton,
  },
  props: {
    data: Object
  },
  computed: {
    pageHeader() { return this.data.mainLinks.map(link => link.fields) },
    subText() { return marked(this.data.subText) },
    seeMoreButtonText() { return this.data.seeMoreButtonText },
    socialMediaButtons() { return this.data.socialMediaButtons.map(({
      fields: {name, link, icon: { fields: { file: { url }}}}
    }) => ({ name, link, image: url }))},
    mainImage() { return this.data.mainImage.fields.file.url },
  }
}
</script>


    

<style scoped lang="scss">
.home-page-header {
  flex-direction: column;
  display: flex;
  margin: auto;

  @media only screen and (min-width: 768px) {
    margin: unset;
    flex-direction: row;
  }

  > article {
    padding: 10px;
  }
}

.social {
  text-align: center;
  margin-bottom: 50px;

  @media only screen and (min-width: 768px) {
    text-align: left;
    margin-bottom: auto;
  }
}

article {
  width: 100%;
  max-width: 500px;

  &.header-image {
    display: none;
    > img {
      height: 350px;
    }
  }

  height: 768px;

  @media only screen and (min-width: 768px) {
    max-width: unset;

    &.header-description {
      width: 40%;
      padding: 150px 40px 0px 40px;
      border-bottom: 5px solid #666;
      display: flex;
      flex-direction: column;
    }

    &.header-image {
      width: 60%;
      background-image: linear-gradient(to bottom right, #f2b754, orange);
      overflow: hidden;
      display: flex;
      padding: 0px;
      // flex-flow:

      > img {
        margin-top: auto;
        display: block;
        height: 740px;
        margin-bottom: -2px;
      }
    }
  }

  .links {
    p {
      font-family: 'Neuton', serif;
      margin: 0px;
      font-weight: 700;
      font-size: 52px;
      line-height: 1;
      color: #333;

      > a {
        font-size: 52px;
      }

      @media only screen and (min-width: 1024px) {
        font-size: 68px;

        > a {
          font-size: 68px;
        }
      }

      > a {
        color: #333;
        border-bottom: 5px solid #f2b754;
        transition: color 0.3s;

        &:hover {
          color: #f2b754;
        }
      }
    }
  }
}

.subtext {
  margin: 40px 0px;
  max-width: 500px;
}

.social-media-button {
  border-bottom: none;
  margin-right: 20px;

  > img {
    width: 32px;
    opacity: 0.7;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }
}

.down-button-header {
  margin: auto;
  margin-bottom: 30px;
}
</style>

