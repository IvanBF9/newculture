<template>
<div class="app">
  <section>
    <h1 class="title-page">Bienvenue sur Neoculture</h1>
    <p class="pres"><strong>Neoculture</strong> est une plateforme de partage de connaissances, un nouveau moyen d'acquérir du savoir.
      Sur ce site web, vous pourrez consulter et écrire des articles sur tout type de sujet, notre but est que toutes et tous puissent s'exprimer.
Vous aurez aussi la possibilité de lancer des lives et de créer des événements sur la plateforme si votre niveau de confiance le permet.
Notre but à terme est de donner la possibilité aux créateurs de contenu sur la plateforme de recevoir des dons et d'instaurer un système de récompense pour les plus gros contributeurs.
    </p>
    <div class="ct-text">
      <img src="/read.svg" width="50%">
      <p>Lisez les articles disponibles sur la plateforme gratuitement et sans pub.</p>
    </div>
    <div class="ct-text">
      <p>Écrivez vos articles pour transmettre votre savoir ou vos idées sans censure.</p>
      <img src="/write.svg" width="50%">
      
    </div>
  </section>
</div>
</template>

<script type="module">

//import * as THREE from "three";
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default {
  //middleware: ['checkState'],
  /*data({store}) {
  },*/
  created() {
  },
  destroyed() {
  },
  mounted(){
   
  },
  methods: {
  }
}
</script>

<style scoped>
.ct-text{
  max-width: 560px;
  padding:32px;
  margin: auto;
  display: flex;
  align-items: center;
}
p{
      
    text-decoration: none;
    letter-spacing: 0.1em;
}
.ct-text p {padding: 8px;text-transform: uppercase;}
.pres{
      padding: 16px;
    text-align: center;
    max-width: 1080px;
    margin: auto;
}
.ct-text img {padding: 8px}
</style>