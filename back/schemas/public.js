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

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        //USERS
        getAllUsers: getAllUsers,
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: createUser,
        connect: connect
    },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });