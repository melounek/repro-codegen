const graphql = require("graphql");

var userType = new graphql.GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) },
    name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
  }),
});

var viewer = {
  type: graphql.GraphQLNonNull(userType),
  resolve: () => {},
};

const query = new graphql.GraphQLObjectType({
  name: "Query",
  fields: () => ({ viewer }),
});

const mutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: () => ({}),
});

module.exports = new graphql.GraphQLSchema({ query, mutation });
