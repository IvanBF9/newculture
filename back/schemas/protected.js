const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLSchema,
} = graphql;

//USERS
const {getAllUsers, getOneUser, getMyProfile} = require("./methods/Users");

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

module.exports = new GraphQLSchema({ query: RootQueryProtected});