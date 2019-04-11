<template>
  <article class="footer">
    <section class="copyright">
      <p>© Mike Steel, 2019</p>
    </section>
    <section class="scroll">
      <ScrollButton scrollAmount="0" direction="up" />
    </section>
    <section class="social">
      <SocialButtons :socialMediaButtons="socialIcons" />
    </section>
  </article>
</template>

<script>
import ScrollButton from '~/components/ScrollButton'
import SocialButtons from '~/components/SocialButtons'

export default {
  props: {
    socialIcons: Array
  },
  components: {
    ScrollButton,
    SocialButtons
  }
}
</script>

<style scoped lang="scss">
.footer {
  color: white;
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  > section {
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  > .scroll {
    width: 20%;
  }

  > .social,
  .copyright {
    width: 40%;

    > section,
    p {
      margin: auto;
    }
  }

  .copyright {
    background-image: linear-gradient(to bottom right, #f4f3f3, #d9d8d8);
    color: #333;
  }
}
</style>

