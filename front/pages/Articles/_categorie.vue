<template>
<div class="app">
  <h1 v-if="categorie == undefined" class="title-page">Tous les Articles</h1>
  <h1 v-else class="title-page">Articles {{categorie}}</h1>

  <div class="ql-container ql-snow" v-for="article in getArticles" v-bind:key="article.id">
    <div class="ql-editor" v-html="JSON.parse(article.content).content">
      
    </div>
  </div>
</div>
</template>

<script>
import {getArticles} from '~/graphql/query'
export default {
  layout({ store }){
    return store.state.articlesLayout
  },
  asyncData ({ params }) {
    return {
      categorie: params.categorie
    }
  },
  data() {
    return {
      getArticles: []
    }
  },
  apollo:{
    getArticles:{
      prefetch: true,
      variables() {
        return {
          categorie_name: this.categorie,
        }
      },
      query: getArticles
    },
  },
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
      this.$store.commit("setArticlesLayout", "articlespc")
    }else{
      this.$store.commit("setArticlesLayout", "default");
    }
    $nuxt.setLayout(this.$store.state.articlesLayout)
    }
  }
}
</script>

<style scoped>
</style>