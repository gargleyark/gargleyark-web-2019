<template>
  <section class="social">
    <g-link  v-for="button in socialMediaButtons" :key="button.name" :to="button.link" class="social-media-button">
      <img :alt="button.name" :src="button.image" />
    </g-link>
  </section>
</template>

<script>
export default {
  props: {
    socialMediaButtons: Array
  },
}
</script>

<style scoped lang="scss">
.social {
  text-align: center;
  margin-bottom: 50px;

  @media only screen and (min-width: 768px) {
    text-align: left;
    margin-bottom: auto;
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
}
</style>

