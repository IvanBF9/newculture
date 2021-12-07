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
  layout({ store }){
    return store.state.layout
  },
  /*data({store}) {
  },*/
  created() {
  },
  destroyed() {
  },
  mounted(){
    window.addEventListener('resize', this.selectHeader);
    this.selectHeader();
  },
  methods: {
    selectHeader(){
    if (window.innerWidth > 1124){//PC
      this.$store.commit("setLayout", "pc")
    }else{
      this.$store.commit("setLayout", "default");
    }
    $nuxt.setLayout(this.$store.state.layout)
    }
  }
}
</script>

<style scoped>
</style>