const graphql = require("graphql");
const {
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = graphql;

//Sequelize models
const {Article} = require('../../models');
//model for graphql
const {ArticleType} = require("../Types/ArticleType");
/*
Publics functions
- this functions can be accessed by public root
*/


const getArticles = {
    type: new GraphQLList(ArticleType),
    resolve(parent, args) {
        return Article.findAll();
    }
}
/*
Admin functions
*/
//Articles

const createArticle = {
    type: ArticleType,
    args: {
        title: { type: GraphQLString},
        description: { type: GraphQLString},
        content: { type: GraphQLString},
        categorie_id: { type: GraphQLInt},
    },
    resolve(parent, args) {
        let content = args.content;
        let article = {
            title: args.title,
            description: args.description,
            content: JSON.stringify({pc : content}),
            categorie_id: args.categorie_id,
            user_id: 1,
        }
        let newArticle = new Article(article);
        newArticle.save();
    }
}

//Events

//You can create a func like logout where you remove user token from db to revoke it 

module.exports = {
    getArticles,
    createArticle
};