const graphql = require("graphql");
const {
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = graphql;

//Sequelize models
const {CategorieEvent, CategorieArticle} = require('../../models');
//model for graphql
const {Categorie} = require("../Types/CategorieTypes");
/*
Publics functions
- this functions can be accessed by public root
*/

const getCategoriesEvent = {
    type: new GraphQLList(Categorie),
    resolve(parent, args) {
        return CategorieEvent.findAll()
    },
}

const getCategoriesArticles = {
    type: new GraphQLList(Categorie),
    resolve(parent, args) {
        return CategorieArticle.findAll()
    },
}

/*
Admin functions
*/
//Articles
const createCategorieArticle =  {
    type: Categorie,
    args: {
        name: { type: GraphQLString},
    },
    resolve(parent, args) {
        let newCategorie = new CategorieArticle(args);
        newCategorie.save();
    }
}

const editCategorieArticle =  {
    type: Categorie,
    args: {
        name: { type: GraphQLString},
        id: { type: GraphQLInt }
    },
    resolve(parent, args) {
        return CategorieArticle.update(args, { where: {id : args.id} });
    }
}

const deleteCategorieArticle = {
    type: Categorie,
    args: {
        id: { type: GraphQLInt }
    },
    resolve(parent, args) {
        return CategorieArticle.destroy({ where: {id : args.id} });
    }
}
//Events

//You can create a func like logout where you remove user token from db to revoke it 

module.exports = {
    getCategoriesEvent,
    getCategoriesArticles,
    createCategorieArticle,
    editCategorieArticle,
    deleteCategorieArticle
};