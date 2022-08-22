<template>
<div class="app">

  <div style="text-align:center;" v-for="article in getArticle" v-bind:key="article.title">
    <h1>{{article.title}}</h1>
    <div class="ql-container ql-snow" style="margin-bottom: 32px;">
    <div class="ql-editor" v-html="JSON.parse(article.content)">
    </div>
      
    </div>
  </div>
</div>
</template>

<script>
import {getArticleById} from '~/graphql/query'
import gql from 'graphql-tag';
export default {
  asyncData ({ params }) {
    return {
      articleid: parseInt(params.id)
    }
  },
  data() {
    return {
      getArticle: []
    }
  },
  apollo:{
    getArticle:{
      prefetch: true,
      variables() {
        return {
          id_article: this.articleid
        };
      },
      query: getArticleById
    },
  },
  created() {
  },
  destroyed() {
  },
  mounted(){
    console.log(parseInt(this.articleid))
    console.log(this.getArticle)
  },
  methods: {
  }
}
</script>

<style scoped>
</style>