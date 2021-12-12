import gql from 'graphql-tag';

export const categoriesArticles = gql`
query{
    getCategoriesArticles{name, id}
}
`
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