const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString} = graphql;

const ArticleType = new GraphQLObjectType({
    name: "ArticleType",
    fields: () => ({
        title: { type: GraphQLString },
        description: { type: GraphQLString},
        content: { type: GraphQLString },
        categorie_id: { type: GraphQLInt},
        user_id: { type: GraphQLInt},
        id: { type: GraphQLInt },
    }),
});

module.exports = {ArticleType};