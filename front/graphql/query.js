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