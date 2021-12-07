const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const Categorie = new GraphQLObjectType({
    name: "Categorie",
    fields: () => ({
        name: { type: GraphQLString },
        id: { type: GraphQLInt },
    }),
});

module.exports = {Categorie};