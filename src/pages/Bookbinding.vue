<template>
  <Layout>
    <article>
      <div class="powr-instagram-feed" id="296e823c_1553989357"></div>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  },
  mounted() {
    const instagramScript = document.createElement('script')
    instagramScript.setAttribute('src', '//www.powr.io/powr.js?platform=html')
    document.head.appendChild(instagramScript)
  },
}
</script>
