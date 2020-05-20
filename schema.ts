import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { myQuery } from "./myQuery";
import { myQuery2 } from "./myQuery2";

const query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({ myQuery, myQuery2 }),
});

export default new GraphQLSchema({ query });
