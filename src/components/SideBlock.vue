<template>
  <article class="side-block" :class="{reverse: reverse}">
      <article class="side-block-colour" :class="colour" v-html="colourBackdropText">
         
      </article>
      <article class="side-block-text">
        <Skills v-if="whiteBackdropContent.length" :skills="whiteBackdropContent" size="large"/>
        <section v-else v-html="whiteBackdropContent"/>
      </article>
    </article>
</template>

<script>
import marked from 'marked'
import Skills from '~/components/Skills.vue'

export default {
  props: {
    data: Object
  },
  components: {
    Skills
  },
  computed: {
    reverse() { return this.data.alignment.match(/right/i) },
    colour() { return this.data.colour.toLowerCase() },
    colourBackdropText() { return marked(this.data.colourBackdropText) },
    whiteBackdropContent() { return this.getWhiteBackdropContent(this.data.whiteBackdropContent) }
  },
  methods: {
    getWhiteBackdropContent(data) {
      if (data.length) {
        return data.map(({
          fields: {name, icon: { fields: { file: { url }}}}
        }) => ({ name, image: url }))
      }

      return marked(data)
    }
  }
}
</script>

<style scoped lang="scss">
.side-block {
  flex-direction: column;
  display: flex;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    &.reverse {
      flex-flow: row-reverse;
    }
  }

  > article {
    padding: 10px;
  }
}
article {
  width: 100%;

  @media only screen and (min-width: 768px) {
    height: 768px;
    max-width: unset;
  }

  &.side-block-text {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (min-width: 768px) {
      width: 40%;
    }
  }

  &.side-block-colour {
    overflow: hidden;
    display: flex;
    padding: 0px;
    color: #444;
    flex-direction: column;
    padding: 40px;
    justify-content: center;

    &.blue {
      background-image: linear-gradient(to bottom right, #279df9, #30a9d8);
      color: white;
    }

    &.orange {
      background-image: linear-gradient(to bottom right, #f2b754, orange);
      color: white;
    }

    &.red {
      background-image: linear-gradient(to bottom right, #e53842, #cb242d);
      color: white;
    }

    &.grey {
      background-image: linear-gradient(to bottom right, #f4f3f3, #d9d8d8);
    }

    @media only screen and (min-width: 768px) {
      width: 60%;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: auto;
  }
}
</style>

