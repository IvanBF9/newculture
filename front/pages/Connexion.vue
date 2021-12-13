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
import {connectUserMutation, getUserWithBearer} from '~/graphql/query'

export default {
  middleware:["checkState"],
  //Seting the route to use with graphql query
  apollo: {
    //$client: 'protectedRoute',
  },

  //This apollo thing works great ! :)


  /*data({store}) {
  },*/
  created() {
  },
  destroyed() {
  },
  mounted(){

    //Login
    document.querySelector('.btn-first').addEventListener('click', () => {
      let user = {
        email: document.querySelector('#email').value,
        pw: document.querySelector('#pw').value,
      }
      console.log(user);
      this.logIn(user)
    });

  },
  methods: {
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
    async logIn ({email, pw}) {
      try{
      let data = await this.$apollo.mutate({
        mutation: connectUserMutation,
        variables: {
          email,
          pw,
        }
      });
      await this.$apolloHelpers.onLogin(data.data.connect.bearer)

      console.log(this.$apolloHelpers.getToken('apollo-token'));
      this.$cookiz.set('bearer', data.data.connect.bearer, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'lax'
      })

      this.$store.commit("setHeaderKey", (this.$store.state.headerkey + 1));
      this.$router.push('/'); 
      }catch(err){ 
        console.log(`Erreur d'auth ! : ${err}`);
      }
    },
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