<template>
<div class="container-form">
    <div class="top-form">
        <h2>Paramètres de l'article</h2>
        <p>Ces champs ne seront pas directement visibles sur votre article, ils servent à mieux mettre en avant votre article et a aider les autres utilisateurs à le trouver.</p>

        <div class="form-group field">
          <input type="text" class="form-field" placeholder="Donnez un titre bref a votre article." name="title" id='title' required />
          <label for="title" class="form-label">Donnez un titre bref a votre article.</label>
        </div>

        <div class="form-group field">
          <textarea type="text" class="form-field" placeholder="Donnez une description breve a votre article." name="description" id='description' required />
          <label for="description" class="form-label">Donnez une description breve a votre article.</label>
        </div>


        <div class="form-group field">
          <select class="form-field" name="categorie" id="categorie">
            <option v-for="categorie in getCategoriesArticles" v-bind:key="categorie.id" v-bind:value="categorie.id">{{categorie.name}}</option>
          </select>
          <label for="categorie" class="form-label">Séléctionnez une catégorie pour votre article.</label>
        </div>

        <h2>Le contenu</h2>
    </div>
    <div class="text-editor">
        <div id="editor"></div>
        <div class="btn-ct">
          <button class="btn-first" type="submit">Soumettre l'article</button>
        </div>
    </div>
</div>
</template>

<script>
import {categoriesArticles, createArticleMutation} from '~/graphql/query'

export default {
  /*data({store}) {
  },*/
  data() {
    return {
      getCategoriesArticles:[]
    }
  },
  apollo:{
    getCategoriesArticles:{
      prefetch: true,
      query: categoriesArticles
    },
  },
  created() {
  },
  destroyed() {
  },
  mounted(){
      //Params for the toolbar
    var toolbarOptions = [
    ['bold', 'italic', 'underline'],        // toggled buttons
    ['blockquote', 'image'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

    [{ 'size': [false, 'large'] }],  // custom dropdown
    [{ 'header': [1, 2, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
    ];

    //Params for the editor
    let editorParams = {
        modules: {
            toolbar: toolbarOptions
        },
        placeholder: 'Écrivez votre meilleur article !',
        theme: 'snow'
    }

    //Text editor init
    var quill = new Quill('#editor', editorParams);

    document.querySelector('.btn-first').addEventListener('click', () => {
      let editor = document.querySelector('#editor');
      let article = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        content: editor.querySelector(".ql-editor").innerHTML,
        categorie_id: parseInt(document.querySelector('#categorie').value)
      }
      console.log(article);
      this.createArticle(article);
    })

  },
  methods: {
    createArticle ({title, description, content, categorie_id}) {
      this.$apollo.mutate({
        mutation: createArticleMutation,
        context: {
          uri: "http://localhost:3000/graphqlprotected"
        },
        variables: {
          title,
          description,
          content,
          categorie_id
        }
      })
    }
  }
}
</script>

<style scoped>

.ql-toolbar{
    width: 100%;
}
#editor {
    width: 100%;
}

.container-form{
    margin: auto;
    max-width: 1080px;
    display: grid;
    place-items: center;
}

.top-form{
    width: 90%;
    margin: auto;
    display: grid;
    place-items: center;
}
.top-form *{
    max-width: 900px;
    width: 100%;
}

.top-form p{
  margin-top: 0;
  font-weight: bold;
  font-style: oblique;
  color: rgb(128, 49, 255);
}

.text-editor{
  margin-top: 16px;
}

.btn-ct{
  width:100%;
  display: flex;
  justify-content: center;
}
</style>