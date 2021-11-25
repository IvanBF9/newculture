<template>
  <header>
    <!--NAV PC-->
    <nav class="header-nav">
      <div class="ct-hd">
        <NuxtLink to="/">
          NeoCulture
          <img width="1.4rem" height="1.4rem" class="logo-header" src="/logo.png" alt="neo culture logo">
        </NuxtLink>
      </div>
      <ul>
        <li><NuxtLink to="/Articles">Articles</NuxtLink></li>
        <li><NuxtLink to="/Evenements">Evénements</NuxtLink></li>
        <li><NuxtLink to="/Lives">Lives</NuxtLink></li>
        <li><NuxtLink to="/Produits">Produits</NuxtLink></li>
        <li><NuxtLink to="/Creation">Création</NuxtLink></li>
        <li><NuxtLink to="/Dons">Dons</NuxtLink></li>
      </ul>
      <div class="ct-hd profile">
        <div class="dropdown">
          <p>jeanmicheldu7889</p>
        <div class="dropdown-content">
              <div><NuxtLink to="/Donateurs">Profile</NuxtLink></div>
              <div><NuxtLink to="/Donateurs">Deconnexion</NuxtLink></div>
          </div>
        </div>
        <img width="50px" height="50px" src="https://lumiere-a.akamaihd.net/v1/images/ct_belle_upcportalreskin_20694_e5816813.jpeg?region=0,0,330,330" alt="profile">
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

<style scoped>
  /*  Header  */
  .profile p{
    margin: 8px;
    font-size: 1rem;
  }
  img{
    border-radius: 25px;
    width: 50px;
    height: 50px;
  }
  .logo-header{
    width: 1.4rem;
    height: 1.4rem;
    vertical-align: middle;
  }
  .logo{
    background-image: url("static/logo.png");
    width: 1.5rem;
    height: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  .header-nav{
    display: flex;
    background: #2e2a26;
    color: white;
    justify-content: space-between;
}
.dropdown {
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    color: black;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
  }

  .dropdown-content a{
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
  }

  .dropdown-content div{
    margin: 8px;
  }

  .dropdown-content a:hover{
    text-decoration: none;
    color: rgb(128, 49, 255);

  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }

  .active-nav:after{
    width: 100% !important; 
    left: 0 !important;
  }

  @media (max-width: 1439px) {
    .header-nav ul li a {
      padding: 15px 8px;
    }
  }

  @media (max-width: 1279px) {
    .header-nav ul li a {
      padding: 15px 4px;
    }
  }
  
</style>