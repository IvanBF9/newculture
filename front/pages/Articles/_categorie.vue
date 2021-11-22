<template>
<div class="app">

 <h1>Articles page {{categorie}}</h1>
</div>
</template>

<script>
export default {
  layout({ store }){
    return store.state.articlesLayout
  },
  asyncData ({ params }) {
    return {
      categorie: params.categorie
    }
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
    if (window.innerWidth > 1280){//PC
      this.$store.commit("setArticlesLayout", "articlespc")
    }else{
      this.$store.commit("setArticlesLayout", "articlespc");
    }
    $nuxt.setLayout(this.$store.state.articlesLayout)
    }
  }
}
</script>

<style scoped>
</style>