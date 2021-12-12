<template>
  <header>
    <!--NAV Mobile-->
    <div class="header">
      <div class="ct-hd">
        <NuxtLink to="/">
          NeoCulture
          <img width="1.4rem" height="1.4rem" class="logo-header" src="/logo.png" alt="neo culture logo">
        </NuxtLink>
      </div>
      <button class="hamburger hamburger--slider" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <nav class="header-nav">
      <ul>
        <li id="drop-articles"><a>Articles</a> <div class="triangle"></div></li>
        <div class="dropdown-articles">
          <li><NuxtLink to="/Articles">Tous</NuxtLink></li>
          <li v-for="categorie in getCategoriesArticles" v-bind:key="categorie.id"><NuxtLink v-bind:to="`/Articles/${categorie.name}`">{{categorie.name}}</NuxtLink></li>
        </div>
        <li><NuxtLink to="/Evenements">Evénements</NuxtLink></li>
        <li><NuxtLink to="/Lives">Lives</NuxtLink></li>
        <li><NuxtLink to="/Produits">Produits</NuxtLink></li>
        <li><NuxtLink to="/Creation">Création</NuxtLink></li>
        <li><NuxtLink to="/Dons">Dons</NuxtLink></li>
        <!--a Retaffer-->
        
        <li v-if="auth == true"><NuxtLink to="/Dons">{{username}}</NuxtLink><img width="40px" height="40px" v-bind:src="profilepicture" v-bind:alt="username" ></li>
        <li v-if="auth == true"><NuxtLink to="/deconnexion">Deconnexion</NuxtLink></li>
       
        <li v-if="auth == false"><NuxtLink to="/connexion">Connexion</NuxtLink></li>
        <li v-if="auth == false"><NuxtLink to="/inscription">Inscription</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import {categoriesArticles} from '~/graphql/query'

export default {
  data() {
    return {
      getCategoriesArticles:[],
      auth: this.$store.state.auth,
      username: this.$store.state.username,
      profilepicture: this.$store.state.profilepicture
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
  watch: {
    $route() {
      console.log("change route");
      this.removeActiveHeader()
    },
  },
  mounted() {
    //Toggle dropdown articles
    document.querySelector('#drop-articles').addEventListener("click", this.dropArticlesCategorie);
    //Toggle Burger menu
    document.querySelector(".hamburger").addEventListener("click", this.menuClick);
  },
  methods: {
      col () {
        console.log("aaaa")
      },
      menuClick(){
        document.querySelector(".hamburger").classList.toggle("is-active");
        document.querySelector(".header-nav").classList.toggle("toggled");
      },
      dropArticlesCategorie(){
        document.querySelector(".dropdown-articles").classList.toggle("toggled");
        document.querySelector('#drop-articles').children[1].classList.toggle("rotate");
      },
      removeActiveHeader(){
        console.log("Removing active header")
        if(document.querySelector(".hamburger").classList.contains("is-active")){
          document.querySelector(".hamburger").classList.remove("is-active");
          document.querySelector(".header-nav").classList.remove("toggled");
        }
      }
  }
}
</script>

<style scoped>

  img{
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  .logo-header{
    width: 1.4rem;
    height: 1.4rem;
    vertical-align: middle;
  }
  .header{
    display: flex;
    background: #2e2a26;
    color: white;
    justify-content: space-between;
  }
  .dropdown-articles{
    overflow: hidden;
    max-height: 0px;
    -webkit-transition: max-height 200ms cubic-bezier(1, 0, 1, 0);
    transition: max-height 200ms cubic-bezier(1, 0, 1, 0);
    margin-left: 32px;
  }
  /*-------------------------------  Header  -------------------------------*/
  .logo{
    background-image: url("static/logo.png");
    width: 1.5rem;
    height: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .header-nav{
    -webkit-transition: max-height 200ms cubic-bezier(0.38, -0.03, 0.74, 1.1);
    transition: max-height 200ms cubic-bezier(0.38, -0.03, 0.74, 1.1);
    background: rgb(46,42,38);
    background: linear-gradient(0deg, rgba(46,42,38,1) 50%, rgba(28,26,25,1) 100%);
    overflow: hidden;
    max-height: 0px;
  }
  .header-nav ul {
    padding: 0;
  }
  .header-nav li {
    width: calc(100% - 24px);
    cursor: pointer;
  }

  /*------------------------------- Burger Menu -------------------------------*/
  .hamburger {
    padding: 15px 15px;
    height: 58px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }
  .hamburger:hover {opacity: 0.7;}
  .hamburger.is-active:hover {opacity: 0.7; }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: rgb(255, 255, 255);
  }
  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }
  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before, .hamburger-inner::after {content: "";display: block;}
  .hamburger-inner::before {top: -10px;}
  .hamburger-inner::after {bottom: -10px;}
  .hamburger--slider .hamburger-inner {top: 2px;}
  .hamburger--slider .hamburger-inner::before {top: 10px;transition-property: transform, opacity;transition-timing-function: ease;transition-duration: 0.15s;}
  .hamburger--slider .hamburger-inner::after {top: 20px;}
  .hamburger--slider.is-active .hamburger-inner {transform: translate3d(0, 10px, 0) rotate(45deg);}
  .hamburger--slider.is-active .hamburger-inner::before {transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);opacity: 0;}
  .hamburger--slider.is-active .hamburger-inner::after {transform: translate3d(0, -20px, 0) rotate(-90deg);}
  /*mobile*/

  .ul-toggle{
    display: grid;
  }
  .dp-none{
    display: none;
  }
  .triangle {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid rgb(255, 255, 255);
    -webkit-transition: transform 200ms cubic-bezier(1, 0, 1, 0);
    transition: transform 200ms cubic-bezier(1, 0, 1, 0);
  }
  .rotate{
    transform: rotate(180deg);
  }
  .toggled{
    max-height: 2000px;
  }
</style>
