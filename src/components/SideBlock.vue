<template>
  <article class="side-block" :class="{reverse: reverse}">
      <article class="" :class="[colour, {'side-block-colour': !swapContent}, {'side-block-text': swapContent}]" v-html="colourBackdropText">
         
      </article>
      <article class="side-block-text" :class="[{'side-block-colour': swapContent}, {'side-block-text': !swapContent}]">
        <whiteBackdropComponent :is="whiteBackdropComponent" :data="whiteBackdropContent" v-if="whiteBackdropComponent" size="large" />
      </article>
    </article>
</template>

<script>
import marked from 'marked'

export default {
  props: {
    data: Object
  },
  data() {
    return {
      whiteBackdropComponent: null,
    }
  },
  computed: {
    swapContent() { return this.data.swapContent && this.data.swapContent.match(/white/i) },
    reverse() { return this.data.alignment.match(/right/i) },
    colour() { return this.data.colour.toLowerCase() },
    colourBackdropText() { return marked(this.data.colourBackdropText) },
    whiteBackdropContent() { return this.getWhiteBackdropContent(this.data.whiteBackdropContent) },
    whiteBackgroundContentType() { 
      const componentName = this.data.whiteBackgroundContentType.replace(/\s/, '')
      return () => import(`~/components/${componentName}`)
    }
  },
  methods: {
    getWhiteBackdropContent(content) {
      if (this.data.whiteBackgroundContentType === 'Skills') {
        return content.map(({
          fields: {name, icon: { fields: { file: { url }}}}
        }) => ({ name, image: url }))
      }

      try {
        return marked(content[0])
      } catch (e) {
        try {
          return content[0]
        } catch (e) {
          return ''
        }
      }
    }
  },
  mounted() {
    this.whiteBackgroundContentType()
      .then(() => {
        this.whiteBackdropComponent = () => this.whiteBackgroundContentType()
      }).catch(() => {
        this.whiteBackdropComponent = () => import('~/components/Text')
      })
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
    justify-content: flex-start;

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

    @media only screen and (min-width: 768px) {
      width: 60%;
    }
  }

  .blue {
    background-image: linear-gradient(to bottom right, #279df9, #30a9d8);
    color: white;
  }

  .orange {
    background-image: linear-gradient(to bottom right, #f2b754, orange);
    color: white;
  }

  .red {
    background-image: linear-gradient(to bottom right, #e53842, #cb242d);
    color: white;
  }

  .grey {
    background-image: linear-gradient(to bottom right, #f4f3f3, #d9d8d8);
  }

  @media only screen and (min-width: 1024px) {
    height: auto;
  }
}
</style>

