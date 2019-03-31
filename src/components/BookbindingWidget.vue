<template>
    <section class="instagram-wrapper">
        <div class="elfsight-app-03234ad5-3500-4266-be51-fd51d5ceebf5"></div>
    </section>
</template>

<script>
export default {
  mounted() {
    const instagramScript = document.createElement('script')
    instagramScript.setAttribute('src', '//apps.elfsight.com/p/platform.js')
    document.head.appendChild(instagramScript)
  },
}
</script>

<style lang="scss">
.instagram-wrapper {
  overflow: hidden;

  .eapps-instagram-feed-title-container {
    display: none;
  }

  .eapps-instagram-feed.eapps-widget {
    margin-bottom: -50px;
  }

  #eapps-instagram-feed-1 .eapps-instagram-feed-posts-grid-load-more,
  #eapps-instagram-feed-2 .eapps-instagram-feed-posts-grid-load-more {
    margin-bottom: 18px;
    margin-top: 18px;
    display: block;
    height: 50px;
    border: 2px solid #279df9;
    border-radius: 25px;
    transition: background-color 0.3s, color 0.3s;
    background-color: #ffffff;
    background: none;
    font-size: 16px;
    color: #279df9;
    padding: 0px 20px;
    cursor: pointer;
    line-height: 42px;

    &:hover {
      background-color: #279df9;
      color: white;
    }

    > div {
      background: none;
    }
  }
}
</style>
