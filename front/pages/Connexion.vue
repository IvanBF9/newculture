<template>
    <div class="app">
        <div class="form">
            <h2>Connexion</h2>
            <div class="form-group field">
                <input type="email" class="form-field" placeholder="Email" name="email" id='email' required />
                <label for="email" class="form-label">Email</label>
            </div>
            <div class="form-group field">
                <input type="password" class="form-field" placeholder="Mot de passe" name="pw" id='pw' required />
                <label for="pw" class="form-label">Mot de passe</label>
            </div>
            <p>Vous n'avez pas de compte ? <NuxtLink to="/Inscription">inscription</NuxtLink></p>
            <div class="btn-ct">
                <button class="btn-first" type="submit">Se connecter</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  layout({ store }){
    return store.state.layout
  },
  /*data({store}) {
  },*/
  created() {
  },
  destroyed() {
  },
  mounted(){
    window.addEventListener('resize', this.selectHeader);
    this.selectHeader();
  },
  methods: {
    selectHeader(){
    if (window.innerWidth > 1124){//PC
      this.$store.commit("setLayout", "pc")
    }else{
      this.$store.commit("setLayout", "default");
    }
    $nuxt.setLayout(this.$store.state.layout)
    }
  }
}
</script>

<style scoped>
    h2{
        text-align: center
    }
    .form{
        display: grid;
        max-width: 360px;
        margin: auto;
        padding:8px;
    }
    .btn-ct{
        width: 100%;
        display: flex;
        padding: 16px 0;
        justify-content: center;
    }
</style>