<template>
    <nav>
      <ul>
        <li><NuxtLink to="/Articles">Tous</NuxtLink></li>
        <li v-for="categorie in getCategoriesArticles" v-bind:key="categorie.id"><NuxtLink v-bind:to="`/Articles/${categorie.name}`">{{categorie.name}}</NuxtLink></li>
       <!-- <li><NuxtLink to="/Articles">Tous</NuxtLink></li>
        <li><NuxtLink to="/Articles/Art">Art</NuxtLink></li>
        <li><NuxtLink to="/Articles/Philosophie">Philosophie</NuxtLink></li>
        <li><NuxtLink to="/Articles/Histoire">Histoire</NuxtLink></li>
        <li><NuxtLink to="/Articles/Sociologie">Sociologie</NuxtLink></li>
        <li><NuxtLink to="/Articles/Actualité">Actualité</NuxtLink></li>-->
      </ul>
    </nav>
</template>

<script>
import {categoriesArticles} from '~/graphql/query'

export default {
  data() {
    return {
      getCategoriesArticles:[]
    }
  },
  apollo:{
    getCategoriesArticles:{
      prefetch: true,
      query: categoriesArticles
    }
  },
  created() {
  },
  destroyed() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>
  nav{
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0 4px 6px -2px rgb(112, 112, 112);
  }
  ul{
    display: flex;
    padding: 0;
    margin: 0;
  }
  li{
    display: flex;
    list-style: none;
    padding: 8px;
    align-items: center;
  }
  a{
    color: rgb(0, 0, 0);
    font-size: 1.2rem;
    text-decoration: none;
  }
  a:hover{
    color: rgb(128, 49, 255);
  }
</style>