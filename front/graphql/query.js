import gql from 'graphql-tag';

export const categoriesArticles = gql`
query{
    getCategoriesArticles{name, id}
}
`
//ARTICLES
//Create query
export const createArticleMutation = gql`
mutation createArticleMutation($title: String!, $description: String!, $content: String!, $categorie_id: Int!){
    createArticle(
            title: $title,
            description: $description,
            content: $content,
            categorie_id: $categorie_id,
        ){
            title
    }
}
`
//deleteArticleByUser
export const deleteUserArticle = gql`
mutation deleteUserArticle($id: Int!){
    deleteArticleByUser(
            id: $id,
        )
}
`
//Get articles query

export const getArticles = gql`
query getArticles($categorie_name : String){
    getArticles(categorie_name: $categorie_name){
        title,
        description,
        content,
        categorie_id,
        id
      }
}
`

//getMyArticles

export const getMyArticles = gql`
query {
    getMyArticles{
        title,
        description,
        content,
        categorie_id,
        id
      }
}
`

export const getArticleById = gql`
query GetArticle($id_article : Int!){
    getArticle(id_article : $id_article){
        title,
        description,
        content
    }
}
`

//USERS
//Register query
export const registerMutation = gql`
mutation registerMutation($username: String!, $firstname: String!, $lastname: String!, $email: String!, $pw: String!, $profile_picture: String!){
    createUser(
            username: $username,
            firstname: $firstname,
            lastname: $lastname,
            email: $email,
            pw: $pw,
            profile_picture: $profile_picture
        ){
            username
    }
}
`
//Log in query
export const connectUserMutation = gql`
mutation connectUserMutation($email: String!, $pw: String!){
    connect(
        email: $email,
        pw: $pw,
    ){
        bearer
    }
}
`

//get profile user with bearer
export const getUserWithBearer = gql`
query{
    getMyProfile{
        username,
        profile_picture,
    }
}
`