<template>
<div class="app">
  <h1 v-if="categorie == undefined" class="title-page">Tous les Articles</h1>
  <h1 v-else class="title-page">Articles {{categorie}}</h1>

  <div style=" max-height: 400px; max-width: 1080px;
  box-shadow: 0px 0px 8px 8px rgb(0 0 0 / 20%);
    border-radius: 8px;
    margin: 32px auto;
    overflow: hidden; cursor: pointer;" v-for="article in getArticles" v-bind:key="article.id">
    <h2 style="margin-left:15px">{{article.title}}</h2>
    <div   class="ql-container ql-snow" style="cursor:pointer" v-on:click="$router.push(`/Article/${article.id}`);" >
    <div class="ql-editor"  v-html="JSON.parse(article.content).content">
      
    </div>
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
    console.log(this.getArticles);
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
.ql-container div{cursor: pointer}
.ql-container{border: none;}
</style>