const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

/*
 █    ██  ██████▓█████ ██▀███ ▄▄▄█████▓██   ██▓██▓███ ▓█████ 
 ██  ▓██▒██    ▒▓█   ▀▓██ ▒ ██▓  ██▒ ▓▒▒██  ██▓██░  ██▓█   ▀ 
▓██  ▒██░ ▓██▄  ▒███  ▓██ ░▄█ ▒ ▓██░ ▒░ ▒██ ██▓██░ ██▓▒███   
▓▓█  ░██░ ▒   ██▒▓█  ▄▒██▀▀█▄ ░ ▓██▓ ░  ░ ▐██▓▒██▄█▓▒ ▒▓█  ▄ 
▒▒█████▓▒██████▒░▒████░██▓ ▒██▒ ▒██▒ ░  ░ ██▒▓▒██▒ ░  ░▒████▒
░▒▓▒ ▒ ▒▒ ▒▓▒ ▒ ░░ ▒░ ░ ▒▓ ░▒▓░ ▒ ░░     ██▒▒▒▒▓▒░ ░  ░░ ▒░ ░
░░▒░ ░ ░░ ░▒  ░ ░░ ░  ░ ░▒ ░ ▒░   ░    ▓██ ░▒░░▒ ░     ░ ░  ░
 ░░░ ░ ░░  ░  ░    ░    ░░   ░  ░      ▒ ▒ ░░ ░░         ░   
   ░          ░    ░  ░  ░             ░ ░               ░ 
*/

const UserPrivate = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLInt },
        profile_picture: { type: GraphQLString },
        username: { type: GraphQLString },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        pw: { type: GraphQLString },
        postal_code: { type: GraphQLInt },
        adress: { type: GraphQLString },
        city: { type: GraphQLString },
        bearer: { type: GraphQLString },
        level: { type: GraphQLString },
        rights_level: { type: GraphQLString },
    }),
});

const UserPublic = new GraphQLObjectType({
    name: "UserSearch",
    fields: () => ({
        id: { type: GraphQLInt },
        profile_picture: { type: GraphQLString },
        username: { type: GraphQLString },
        bearer: { type: GraphQLString },
        level: { type: GraphQLString },
        rights_level: { type: GraphQLString },
    }),
});

module.exports = {UserPrivate, UserPublic};