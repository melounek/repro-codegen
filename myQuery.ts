import { GraphQLObjectType, GraphQLString } from "graphql";

export const myType = new GraphQLObjectType({
  name: "MyType",
  fields: () => ({
    // if I change this type (e.g. name->rename) it breaks:
    //   Unable to load from file "**/schema.ts": Schema must contain uniquely named types but contains multiple types named "MyType".
    // which is probably by refreshing only part of a cache
    name: { type: GraphQLString },
  }),
});

export const myQuery = {
  type: myType,
  resolve: () => {},
};
