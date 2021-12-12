<template>
<div class="app">
  <h1 class="title-page">Création d'article</h1>
  <ArticleForm />
</div>
</template>

<script>
export default {
  head () {
    return {
      title: "Création d'article", // Other meta information
      script: [
        { hid: 'quill', src: 'quill.min.js', defer: true }
      ]
    }
  },
  /*data({store}) {
  },*/
  created() {
  },
  destroyed() {
  },
  mounted(){
  },
  methods: {
  }
}
</script>

<style scoped>
</style>