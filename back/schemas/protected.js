const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLSchema,
} = graphql;

//USERS
const {getAllUsers, getOneUser, getMyProfile} = require("./methods/Users");
//Article
const {
    getArticles,
    createArticle
} = require("./methods/Articles");

/*
 ██▓███   ██▀███   ▒█████  ▄▄▄█████▓▓█████  ▄████▄  ▄▄▄█████▓▓█████ ▓█████▄ 
▓██░  ██▒▓██ ▒ ██▒▒██▒  ██▒▓  ██▒ ▓▒▓█   ▀ ▒██▀ ▀█  ▓  ██▒ ▓▒▓█   ▀ ▒██▀ ██▌
▓██░ ██▓▒▓██ ░▄█ ▒▒██░  ██▒▒ ▓██░ ▒░▒███   ▒▓█    ▄ ▒ ▓██░ ▒░▒███   ░██   █▌
▒██▄█▓▒ ▒▒██▀▀█▄  ▒██   ██░░ ▓██▓ ░ ▒▓█  ▄ ▒▓▓▄ ▄██▒░ ▓██▓ ░ ▒▓█  ▄ ░▓█▄   ▌
▒██▒ ░  ░░██▓ ▒██▒░ ████▓▒░  ▒██▒ ░ ░▒████▒▒ ▓███▀ ░  ▒██▒ ░ ░▒████▒░▒████▓ 
▒▓▒░ ░  ░░ ▒▓ ░▒▓░░ ▒░▒░▒░   ▒ ░░   ░░ ▒░ ░░ ░▒ ▒  ░  ▒ ░░   ░░ ▒░ ░ ▒▒▓  ▒ 
░▒ ░       ░▒ ░ ▒░  ░ ▒ ▒░     ░     ░ ░  ░  ░  ▒       ░     ░ ░  ░ ░ ▒  ▒ 
░░         ░░   ░ ░ ░ ░ ▒    ░         ░   ░          ░         ░    ░ ░  ░ 
            ░         ░ ░              ░  ░░ ░                  ░  ░   ░    
                                           ░                         ░
*/

//This route is protected by jwt token
const RootQueryProtected = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: getAllUsers,
        getOneUser: getOneUser,
        getMyProfile: getMyProfile
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createArticle: createArticle
        //Make admin for this routes
    },
});

module.exports = new GraphQLSchema({ query: RootQueryProtected, mutation: Mutation});