const graphql = require("graphql");
const jwt_decode = require('jwt-decode');
const {
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = graphql;

//Sequelize models
const {Article} = require('../../models');
const {CategorieArticle} = require('../../models');
//model for graphql
const {ArticleType} = require("../Types/ArticleType");
/*
Publics functions
- this functions can be accessed by public root
*/


const getArticles = {
    type: new GraphQLList(ArticleType),
    args: {
        categorie_name: { type: GraphQLString },
    },
    async resolve(parent, args) {
        const cateName = args.categorie_name;
        try{
            //If no categorie is defined return all
            if (cateName == "" || cateName == undefined){
                let articles = await Article.findAll();

                articles.map(article => {
                    article.content = JSON.stringify(article.content);
                })

                return articles;
            }
            //get categorie id
            const cate = await CategorieArticle.findOne({where: {name: cateName}});
            const {id} = cate.dataValues;
            //return articles for this categorie
            let articles = await Article.findAll({ where: {categorie_id : id}});

            articles.map(article => {
                article.content = JSON.stringify(article.content);
            })

            return articles;
        }catch(e){
            console.log(e);
        }
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
        try{
            let {id} = jwt_decode(parent);
            let content = args.content;
            let article = {
                title: args.title,
                description: args.description,
                content: {content : content},
                categorie_id: args.categorie_id,
                valide: true,//Temporaire
                user_id: id,
            }
            let newArticle = new Article(article);
            newArticle.save();
        }catch(err){

        }
    }
}

//Events

//You can create a func like logout where you remove user token from db to revoke it 

module.exports = {
    getArticles,
    createArticle
};