<template>
    <article class="gallery">
      <MultiBlock :blocks="imagesArray">
        <template v-slot:default="slot">
          <section class="cool-blocks"> {{ slot.data.location }} </section>
        </template>
      </MultiBlock>
    </article>
</template>

<script>
import MultiBlock from '~/components/MultiBlock'

export default {
  components: {
    MultiBlock
  },
  props: {
    images: Array
  },
  computed: { 
    imagesArray() {
      return this.images.map(image => image.fields)
    }
  }
}
</script>
