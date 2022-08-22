const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLSchema,
} = graphql;

/*
 ██▓███   █    ██  ▄▄▄▄    ██▓     ██▓ ▄████▄  
▓██░  ██▒ ██  ▓██▒▓█████▄ ▓██▒    ▓██▒▒██▀ ▀█  
▓██░ ██▓▒▓██  ▒██░▒██▒ ▄██▒██░    ▒██▒▒▓█    ▄ 
▒██▄█▓▒ ▒▓▓█  ░██░▒██░█▀  ▒██░    ░██░▒▓▓▄ ▄██▒
▒██▒ ░  ░▒▒█████▓ ░▓█  ▀█▓░██████▒░██░▒ ▓███▀ ░
▒▓▒░ ░  ░░▒▓▒ ▒ ▒ ░▒▓███▀▒░ ▒░▓  ░░▓  ░ ░▒ ▒  ░
░▒ ░     ░░▒░ ░ ░ ▒░▒   ░ ░ ░ ▒  ░ ▒ ░  ░  ▒   
░░        ░░░ ░ ░  ░    ░   ░ ░    ▒ ░░        
            ░      ░          ░  ░ ░  ░ ░      
                        ░             ░       
No auth needed to access to this part
*/

//USERS
const {getAllUsers, createUser, connect} = require("./methods/Users");
//Categories
const {
    getCategoriesEvent,
    getCategoriesArticles,
    createCategorieArticle,
    editCategorieArticle,
    deleteCategorieArticle
} = require("./methods/Categories");
//Article
const {
    getArticles,
    createArticle,
    getArticle
} = require("./methods/Articles");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        //USERS
        getAllUsers: getAllUsers,
        getCategoriesArticles: getCategoriesArticles,
        getArticles: getArticles,
        getArticle: getArticle,
        //Make admin for this routes
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: createUser,
        connect: connect,
        createCategorieArticle: createCategorieArticle,
        editCategorieArticle: editCategorieArticle,
        deleteCategorieArticle: deleteCategorieArticle,
        createArticle: createArticle
        //Make admin for this routes
    },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });