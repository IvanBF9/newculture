<template>
  <header>
    <!--NAV Mobile-->
    <nav class="header mobile">
      <div class="ct-hd" id="logo-ct">
        NeoCulture
        <div class="logo">
        </div>
      </div>
      <ul class="mobile-ul">
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li id="drop-articles"><a>Articles</a></li>
        <div class="dropdown-articles dp-none">
          <li><NuxtLink to="/Articles">Cate 1</NuxtLink></li>
          <li><NuxtLink to="/Articles">Cate 2</NuxtLink></li>
          <li><NuxtLink to="/Articles">Cate 3</NuxtLink></li>
        </div>
        <li><NuxtLink to="/Evenements">Evénements</NuxtLink></li>
        <li><NuxtLink to="/Lives">Lives</NuxtLink></li>
        <li><NuxtLink to="/Produits">Produits</NuxtLink></li>
        <li><NuxtLink to="/Dons">Dons</NuxtLink></li>
      </ul>
      <button class="hamburger hamburger--slider" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>  
    </nav>
  </header>
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
    document.querySelector(".hamburger").removeEventListener('click', this.menuClick);
  },
  mounted() {
    //a modifier vori meilleure methode ...
    document.querySelector('#drop-articles').addEventListener("click", function open(){
      document.querySelector(".dropdown-articles").classList.toggle("dp-none");
    });

    document.querySelector(".hamburger").addEventListener("click", this.menuClick);

    
  },
  methods: {
      menuClick(){
        document.querySelector(".hamburger").classList.toggle("is-active");
        document.querySelector("#logo-ct").classList.toggle("dp-none");
        document.querySelector(".mobile-ul").classList.toggle("ul-toggle");
      }
  }
}
</script>

<style scoped>
  .dropdown-articles{
    margin-left: 32px;
  }
  /*  Header  */
  .logo{
    background-image: url("static/logo.png");
    width: 1.5rem;
    height: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .header{
    display: flex;
    background: #2e2a26;
    color: white;
    justify-content: space-between;
  }

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
  .hamburger:hover {
  opacity: 0.7; }
  .hamburger.is-active:hover {
  opacity: 0.7; }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
  background-color: rgb(255, 255, 255); }

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative; }

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; }
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease; }
  .hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block; }
  .hamburger-inner::before {
    top: -10px; }
  .hamburger-inner::after {
    bottom: -10px; }
  .hamburger--slider .hamburger-inner {
  top: 2px; }
  .hamburger--slider .hamburger-inner::before {
    top: 10px;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s; }
  .hamburger--slider .hamburger-inner::after {
    top: 20px; }

.hamburger--slider.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(45deg); }
  .hamburger--slider.is-active .hamburger-inner::before {
    transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
    opacity: 0; }
  .hamburger--slider.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(-90deg); }

/*
   * Slider Reverse
   */
.hamburger--slider-r .hamburger-inner {
  top: 2px; }
  .hamburger--slider-r .hamburger-inner::before {
    top: 10px;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s; }
  .hamburger--slider-r .hamburger-inner::after {
    top: 20px; }

.hamburger--slider-r.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(-45deg); }
  .hamburger--slider-r.is-active .hamburger-inner::before {
    transform: rotate(45deg) translate3d(5.71429px, -6px, 0);
    opacity: 0; }
  .hamburger--slider-r.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(90deg); }

  
  .ct-hd {
    font-size: 1.5rem;
    display: flex;
    padding: 8px;
    padding-right: 16px;
    align-items: center;
  }

  .pc-ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  .header ul li {
    display: flex;
    list-style: none;
    padding: 8px;
    align-items: center;
  }

  .header ul li a {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  
  display: inline-block;
  padding: 15px 20px;
  position: relative;
  cursor: pointer;
}
.header ul li a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: rgb(128, 49, 255);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.header ul li a:hover:after { 
  width: 100%; 
  left: 0; 
}
/*mobile*/
  .mobile-ul{
    display: none;
  }

  .ul-toggle{
    display: grid;
  }
  .dp-none{
    display: none;
  }
</style>

