<template>
  <Layout>
    <article>
      <iframe src="//lightwidget.com/widgets/8e788a9fdeff58c28f636619c758f953.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>
    </article>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'About us'
  },
  mounted() {
    const lightwidgetScript = document.createElement('script')
    lightwidgetScript.setAttribute('src', '//cdn.lightwidget.com/widgets/lightwidget.js')
    document.head.appendChild(lightwidgetScript)
  },
}
</script>
