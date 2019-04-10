<template>
    <article class="gallery">
      <section v-for="(row, index) in rows" :key="index">
        <MultiBlock :blocks="row" :reverse="index % 2 === 0">
          <template v-slot:default="slot">
            <section class="gallery-block">
              <p class="image" :style="{ backgroundImage: `url(${slot.data.image.fields.file.url})` }">
                <!-- <img :src="slot.data.image.fields.file.url" /> -->
              </p>
              <p class="description"> {{ slot.data.description }} </p>
              <p class="location"> {{ slot.data.location }}, {{ (slot.data.date || 'undated').split('-')[0] }} </p>
            </section>
          </template>
        </MultiBlock>
      </section>
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
    rows() {
      const rows = []
      let row = []
      this.images.forEach(image => {
        if (row.length < 3) {
          row.push(image.fields)
        } else {
          rows.push(row)
          row = [image.fields]
        }
      })
      if (row.length) {
        rows.push(row)
      }
      return rows
    }
  }
}
</script>

<style scoped lang="scss">
.gallery-block {
  .image {
    height: 380px;
    overflow: hidden;
    margin: 0px;
    text-align: center;
    // background-image: linear-gradient(to bottom right, #f4f3f3, #d9d8d8);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  img {
    width: 100%;
  }

  .description {
    margin-bottom: 0px;
  }

  .location {
    font-size: 14px;
    margin-top: 2px;
  }

  .description,
  .location {
    padding: 0px 15px;
  }
}
</style>
