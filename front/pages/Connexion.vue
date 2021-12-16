<template>
    <div class="app">
        <div class="form">
            <h2>Connexion</h2>
            <form id="login">
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
            </form>
        </div>
    </div>
</template>

<script>
import {connectUserMutation} from '~/graphql/query'

export default {
  //Seting the route to use with graphql query
  apollo: {
    //$client: 'protectedRoute',
  },
  created() {
  },
  destroyed() {
  },
  mounted(){
    var tis = this;
    const form = document.querySelector('#login');
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let user = {
        email: document.querySelector('#email').value,
        pw: document.querySelector('#pw').value,
      }
      console.log(user);
      tis.logIn(user)
    });

/*
    //Login
    document.querySelector('.btn-first').addEventListener('click', () => {
      let user = {
        email: document.querySelector('#email').value,
        pw: document.querySelector('#pw').value,
      }
      console.log(user);
      this.logIn(user)
    });*/

  },
  methods: {
    async logIn ({email, pw}) {
      try{
        //Request
        const data = await this.$apollo.mutate({
          mutation: connectUserMutation,
          variables: {
            email,
            pw,
          }
        });
        //Login we give the bearer to apollo cookies
        await this.$apolloHelpers.onLogin(data.data.connect.bearer)
        //We increment the headerKey to force update the header after the redirect !
        this.$store.commit("setHeaderKey", (this.$store.state.headerkey + 1));
        //Redirect
        this.redirect();
      }catch(err){ 
        //Auth failed !
        console.log(`Erreur d'auth ! : ${err}`);
      }
    },
    redirect(){
      if(this.$route.query.from != undefined){
        return this.$router.push(this.$route.query.from);
      }
      return this.$router.push('/');
    },
    authError(){

    }
  }
}
//Query example
    /*async applyLog(bearer){
      try {
        let result = await this.$apollo.query({
          query: getUserWithBearer,
          context: {
            headers: {
              authorization: `Bearer ${bearer}`
            },
            fetchPolicy: 'no-cache',
            uri: "http://localhost:3000/graphqlprotected"
          }
        })
        let {username, profile_picture} = result.data.getMyProfile[0];
        console.log('TESTASTOS ' + username)
        this.$store.commit('setAuthState', true);
        this.$store.commit('setUserName', username);
        console.log("DONE")
        return this.$store.commit('setProfilePic', profile_picture);
      } catch (err) {
        return this.$store.commit('setAuthState', false);
      }
    },*/
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