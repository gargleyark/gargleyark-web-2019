<template>
  <article class="page-header">
    <article class="header-description">
      <section class="links">
        <p>{{ title }}</p>
      </section>
    </article>
    <article class="header-image">

    </article>
  </article>
</template>


<script>
import marked from 'marked'

export default {
  components: {
  },
  props: {
    title: String
  },
  computed: {
  }
}
</script>


    

<style scoped lang="scss">
.page-header {
  flex-direction: column;
  display: flex;
  margin: unset;
  flex-direction: row;

  > article {
    padding: 10px;
  }
}

article {
  width: 100%;
  max-width: 500px;

  &.header-image {
    padding: 20px;
    display: none;
    > img {
      height: 350px;
    }
  }

  &.header-description {
    padding: 20px;
  }

  @media only screen and (min-width: 768px) {
    max-width: unset;

    &.header-description {
      width: 40%;
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
      a {
        color: white;
      }

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
      font-size: 52px;

      @media only screen and (min-width: 1024px) {
        font-size: 68px;
      }

      color: #333;
      border-bottom: 5px solid #f2b754;
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

