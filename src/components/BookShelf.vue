<template>
    <article class="writing">
      <section v-for="(row, index) in rows" :key="index" class="shelf">
        <MultiBlock :blocks="row" :reverse="index % 2 === 0">
          <template v-slot:default="slot">
            <section class="writing-block" @click="() => open(slot.data.text, slot.data.externalLink)">
              <div class="book">
                <span>{{slot.data.title}}</span>
                <img :src="slot.data.coverImage.file.url" />
              </div>
              <p class="description"> {{ slot.data.description }} </p>
              <p class="author"> {{ slot.data.author.join(', ') }}</p>
            </section>
          </template>
        </MultiBlock>
      </section>
      <section  v-if="text" class="book-view" id="book-viewer">
        <article v-html="text" />
      </section>
    </article>
</template>

<script>
import MultiBlock from '~/components/MultiBlock'
import marked from 'marked'

export default {
  components: {
    MultiBlock
  },
  props: {
    books: Array
  },
  data() {
    return {
      text: ''
    }
  },
  computed: { 
    rows() {
      const rows = []
      let row = []
      this.books.forEach(book => {
        if (row.length < 3) {
          row.push(book)
        } else {
          rows.push(row)
          row = [book]
        }
      })
      if (row.length) {
        rows.push(row)
      }
      return rows
    }
  },
  updated() {
    const book = this.$el.querySelector("#book-viewer")
    if (book) {
      const top = book.offsetTop

      window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  methods: {
    open(text, link) {
      if (link) {
        window.open(link, '_blank')
      } else {
        this.text = marked(text)
      }
    }
  }
}
</script>

<style lang="scss">
.writing-block {
  .book {
    height: 260px;
    overflow: hidden;
    margin: 0px;
    text-align: center;
    position: relative;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    align-items: center;

    > span {
      font-size: 24px;
      display: block;
      width: 50%;
      padding: 10%;

      @media only screen and (min-width: 768px) {
        padding: 0%;
      }

      @media only screen and (min-width: 1024px) {
        padding: 10%;
      }
    }

    img {
      margin-top: 40px;
    }
  }

  .description {
    margin-bottom: 0px;
    width: 90%;
    max-width: 400px;
    margin: auto;
  }

  .author {
    font-size: 14px;
    margin: auto;
    margin-top: 2px;
    width: 90%;
    max-width: 400px;
    margin-bottom: 26px;
  }

  .description,
  .author {
    padding: 0px 15px;
  }
}

.writing {
  .shelf {
    @media only screen and (min-width: 768px) {
      border-bottom: 32px solid #f4f3f3;
    }
  }

  .book-view {
    background-image: linear-gradient(to bottom right, #e53842, #cb242d);
    padding: 20px 0px;

    > article {
      background-image: linear-gradient(to bottom right, #f4f3f3, #d9d8d8);
      padding: 20px;
      width: 90%;
      max-width: 768px;
      margin: auto;

      h1 {
        margin: 0px;
      }

      ul {
        list-style: none;
        padding: 0px;

        li:after {
          content: '';
          margin: 10px;
        }

        p {
          margin: 0px;
        }
      }
    }
  }
}
</style>
