const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLSchema,
    buildSchema
} = graphql;

//USERS
const {getAllUsers} = require("./methods/Users");

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
    },
});

module.exports = new GraphQLSchema({ query: RootQueryProtected});