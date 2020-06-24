<template>
  <article class="footer">
    <section class="copyright">
      <p>© Mike Steel, {{ year }}</p>
    </section>
    <section class="scroll">
      <RocketButton scrollAmount="0" direction="up" />
    </section>
    <section class="social">
      <SocialButtons :socialMediaButtons="socialIcons" />
    </section>
  </article>
</template>

<script>
import RocketButton from '~/components/RocketButton';
import SocialButtons from '~/components/SocialButtons';

export default {
  props: {
    socialIcons: Array,
  },
  components: {
    RocketButton,
    SocialButtons,
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped lang="scss">
.footer {
  color: white;
  height: 180px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }

  > section {
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  > .scroll {
    width: 100%;

    @media only screen and (min-width: 768px) {
      width: 20%;
    }
  }

  > .social,
  .copyright {
    width: 100%;

    @media only screen and (min-width: 768px) {
      width: 40%;
    }

    > section,
    p {
      margin: auto;
    }
  }

  > .social {
    display: none;

    @media only screen and (min-width: 768px) {
      display: flex;
    }
  }

  .copyright {
    background-image: linear-gradient(to bottom right, #f4f3f3, #d9d8d8);
    color: #333;
    margin-top: 20px;

    @media only screen and (min-width: 768px) {
      margin-top: 0px;
    }
  }
}
</style>
