<template>
    <div class="app">
        <div class="form">
            <h2>Inscription</h2>
            <div class="form-group field">
                <input type="text" class="form-field" placeholder="Nom d'utilisateur" name="username" id='username' required />
                <label for="username" class="form-label">Nom d'utilisateur</label>
            </div>
            <div class="form-group field">
                <input type="text" class="form-field" placeholder="Nom" name="nom" id='nom' required />
                <label for="nom" class="form-label">Nom</label>
            </div>
            <div class="form-group field">
                <input type="text" class="form-field" placeholder="Prénom" name="prenom" id='prenom' required />
                <label for="prenom" class="form-label">Prénom</label>
            </div>

            <div class="image-form d-flex">
                <div class="d-grid">
                    <label for="profile-picture">Photo de profil</label>
                    <input type="file" accept="image/*" name="profile-picture" id="profile-picture">
                </div>
                <div class="d-flex">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/ct_belle_upcportalreskin_20694_e5816813.jpeg?region=0,0,330,330" class="pp-preview" width="50px" height="50px">
                </div>
            </div>

            <div class="form-group field">
                <input type="email" class="form-field" placeholder="Email" name="email" id='email' required />
                <label for="email" class="form-label">Email</label>
            </div>
            <div class="form-group field">
                <input type="password" class="form-field" placeholder="Mot de passe" name="pw" id='pw' required />
                <label for="pw" class="form-label">Mot de passe</label>
            </div>
            <div class="form-group field">
                <input type="password" class="form-field" placeholder="Mot de passe" name="pw-confirm" id='pw-confirm' required />
                <label for="pw-confirm" class="form-label">Confirmez votre mot de passe</label>
            </div>
            <p>Vous avez déja un compte ? <NuxtLink to="/Connexion">connexion</NuxtLink></p>
            <div class="btn-ct">
                <button class="btn-first" type="submit">S’inscrire</button>
            </div>
        </div>
    </div>
</template>

<script>
import {registerMutation} from '~/graphql/query'

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

    //change image 
    function changeImg() {
        let inputFile = document.querySelector('#profile-picture');
        var reader = new FileReader();
        reader.readAsDataURL(inputFile.files[0]);
        reader.onload = function ({target}){
            document.querySelector('.pp-preview').src = target.result;
            console.log(document.querySelector('.pp-preview').src)
        };
    }
    document.querySelector('#profile-picture').addEventListener('change', changeImg);

    //Register part
    document.querySelector('.btn-first').addEventListener('click', () => {
        let newUser = {
            username: document.querySelector('#username').value,
            firstname: document.querySelector('#prenom').value,
            lastname: document.querySelector('#nom').value,
            email: document.querySelector('#email').value,
            pw: document.querySelector('#pw').value,
            profile_picture: document.querySelector('.pp-preview').src,
        };

        this.registerUser(newUser)
    });
  },
  methods: {
    selectHeader(){
        if (window.innerWidth > 1124){//PC
            this.$store.commit("setLayout", "pc")
        }else{
            this.$store.commit("setLayout", "default");
        }
        $nuxt.setLayout(this.$store.state.layout)
    },
    registerUser ({username, firstname, lastname, email, pw, profile_picture}) {
      this.$apollo.mutate({
        mutation: registerMutation,
        variables: {
          username,
          firstname,
          lastname,
          email,
          pw,
          profile_picture
        }
      })
      .then(data => {
          //do thomething here
          console.log(data)
      })
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
    .d-grid{
        display: grid;
    }
    .d-grid label{
        color: #5b5b5b;
    }
    .d-flex{
        display: flex;
    }
    #profile-picture{
        padding-top: 8px;
    }
    .pp-preview{
        border-radius: 25px;
        width: 50px;
        height: 50px;
    }
    .image-form{
        margin-top: 10px;
    }
</style>