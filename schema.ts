import { GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql";
import { thisIsNOThotUpdating } from "./thisIsNOThotUpdating";

const thisIsHotUpdating = {
  type: new GraphQLObjectType({
    name: "IsHotUpdating",
    fields: () => ({ name: { type: GraphQLString } }),
  }),
  resolve: () => {},
};

const query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({ thisIsHotUpdating, thisIsNOThotUpdating }),
});

export default new GraphQLSchema({ query });
