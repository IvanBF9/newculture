<template>
<div class="app">
  <h1 class="title-page">Mes articles</h1>
  <div v-if="getArticles.length > 0">
  <div  style=" max-height: 400px; max-width: 1080px; box-shadow: 0px 0px 8px 8px rgb(0 0 0 / 20%); border-radius: 8px; margin: 32px auto; overflow: hidden; cursor: pointer;" v-for="article in myArticles" v-bind:key="article.id">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <h2 style="margin-left:15px">{{article.title}}</h2>
      <button type="button" style="height: 32px; margin-right: 16px; color: black; background: #d40101; border-radius: 4px; font-weight: bold; border: 1px solid black;" v-on:click="deleteArticle(article.id)">Supprimer</button>
    </div>
    <div class="ql-container ql-snow" style="cursor:pointer" v-on:click="$router.push(`/Article/${article.id}`);" >
    <div class="ql-editor"  v-html="JSON.parse(article.content).content">
      
    </div>
  </div>
  </div>
  </div>
  <div v-else style="max-width: 1080px; display: flex; justify-content: center" ><img src="/empty.svg" width="50%"/></div>
  
</div>
</template>

<script>
import {getMyArticles, deleteUserArticle} from '~/graphql/query'
export default {
  data() {
    return {
      getArticles: [],
    }
  },
  fetchOnServer: true,
  async asyncData({app}){
    const client = app.apolloProvider.clients.protectedRoute;
    const result = await client.query({
          fetchPolicy: "no-cache",
          query: getMyArticles,
          context: {
            headers: {
              //authorization: `Bearer ${token}`//app.$cookiz.get('bearer')
            },
            errorPolicy: "all",
            persisting: false,
        }
    });
    return {
      myArticles : result.data.getMyArticles
    }

  },/*
  async fetch({app}) {
    const client = app.apolloProvider.clients.protectedRoute;
    const result = await client.query({
          fetchPolicy: "no-cache",
          query: getMyArticles,
          context: {
            headers: {
              //authorization: `Bearer ${token}`//app.$cookiz.get('bearer')
            },
            errorPolicy: "all",
            persisting: false,
        }
    });
    //values of the request
    console.log(result.data.getMyArticles)
    this.getArticles = result.data.getMyArticles;
  },
 /* apollo:{
   /* getArticles:{
      route: 'http://localhost:3000/graphqlprotected',
      prefetch: true,
      query: getMyArticles
    },
  },*/
  created() {
  },
  destroyed() {
  },
  mounted(){
    console.log(this.getArticles);
  },
  methods: {
    deleteArticle (id) {
      console.log(id)
     
      try{
        this.$apollo.mutate({
        mutation: deleteUserArticle,
        context: {
          uri: "http://localhost:3000/graphqlprotected"
        },
        variables: {
          id : id,
        }
        
      })
      return this.$router.push(`/MesArticles`);
      }catch(err){
        return alert(err)
      }
    }

  }
}
</script>

<style scoped>
.ql-container div{cursor: pointer}
.ql-container{border: none;}
</style>