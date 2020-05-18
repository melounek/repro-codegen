import { GraphQLObjectType, GraphQLString } from "graphql";

export const thisIsNOThotUpdating = {
  type: new GraphQLObjectType({
    name: "IsNOThotUpdating",
    fields: () => ({ name: { type: GraphQLString } }),
  }),
  resolve: () => {},
};
