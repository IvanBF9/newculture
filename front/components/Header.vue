<template>
  <header>
    <!--NAV PC-->
    <nav class="header pc">
      <div class="ct-hd">
        NeoCulture
        <div class="logo">

        </div>
      </div>
      <ul class="pc-ul">
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li><NuxtLink to="/Articles">Articles</NuxtLink></li>
        <li><NuxtLink to="/Evenements">Evénements</NuxtLink></li>
        <li><NuxtLink to="/Lives">Lives</NuxtLink></li>
        <li><NuxtLink to="/Produits">Produits</NuxtLink></li>
        <li><NuxtLink to="/Dons">Dons</NuxtLink></li>
      </ul>
      <div class="ct-hd">
        <img width="50px" height="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" 
        alt="profile">
      </div>
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
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style>
/*General*/

body{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
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
/*General*/
.dp-none{
  display: none;
}
</style>

