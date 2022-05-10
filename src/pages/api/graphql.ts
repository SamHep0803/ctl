import "reflect-metadata";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import Cors from "micro-cors";
import { buildSchema } from "type-graphql";
import { createContext } from "../../../graphql/context";
import { EventResolver, UserResolver } from "../../../graphql/types";

const cors = Cors();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  const apolloServer = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    schema: await buildSchema({
      resolvers: [EventResolver, UserResolver],
    }),
    context: async ({ req }: { req: MicroRequest }) => {
      return createContext(req);
    },
  });
  await apolloServer.start();

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
