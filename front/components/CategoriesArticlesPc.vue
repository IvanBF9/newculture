<template>
    <nav>
      <ul>
        <li><NuxtLink to="/Dons">Tous</NuxtLink></li>
        <li><NuxtLink to="/">Art</NuxtLink></li>
        <li><NuxtLink to="/Articles">Philosophie</NuxtLink></li>
        <li><NuxtLink to="/Evenements">Histoire</NuxtLink></li>
        <li><NuxtLink to="/Lives">Sociologie</NuxtLink></li>
        <li><NuxtLink to="/Produits">Actualité</NuxtLink></li>
      </ul>
    </nav>
</template>

<script>
export default {
  data() {
    return {
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