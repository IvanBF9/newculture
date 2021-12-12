<template>
<div class="app">
  <h1 class="title-page">Partie Création</h1>
  <div class="ct-content">
    <div class="heading-text">
      <p>Bienvenu sur la partie création, vous pouvez créer différents types de contenus, nous vous remercions d'avance de contribuer a la plateforme.</p>
      <p>Important, vos créations devront être validées avant d'être mis publiquement sur la page (il n'y aura pas de censure d'avis, la validation est la uniquement pour vérifier qu'il n'y a pas de contenus illégaux ou de liens d'hameçonnage sur les articles).</p>
      <p>Nous essayons de valider les créations le plus rapidement possible, nous nous donnons un délai de 48 heures maximum.</p>
      <p>Notre priorité est que tous les utilisateurs puissent exprimer leurs avis dans différents sujets mais nous voulons aussi une plateforme seine et sécurisée pour nos utilisateurs.</p>
    </div>
    <h2>Que voulez-vous créer ?</h2>
    <div class="btns-ct">
      <NuxtLink to="/CreationArticle" class="btn-first" type="submit">Article</NuxtLink>
      <NuxtLink to="/Evenements" class="btn-first" type="submit">Evenement</NuxtLink>
      <NuxtLink to="/Evenements" class="btn-first" type="submit">Live</NuxtLink>
    </div>
  </div>
</div>
</template>

<script>
export default {
  head () {
    return {
      title: "Création d'article", // Other meta information
      script: [
        { hid: 'quill', src: 'quill.min.js', defer: true }
      ]
    }
  },
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

.btns-ct{
  display: flex;
  justify-content: center;
  width: 100%;
}

.ct-content h2{
  text-align: center;
}

.heading-text p{
  font-size: 1.1rem;
}

</style>