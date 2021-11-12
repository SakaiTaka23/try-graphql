import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import { AuthenticationError } from 'apollo-server-errors';
import { Context } from './types/context';
import { Resolvers } from './types/generated/graphql';

const { ApolloServer } = require('apollo-server');

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const schema = loadSchemaSync('./schema/schema.graphql', {
  loaders: [new GraphQLFileLoader()],
});

const resolvers: Resolvers = {
  Query: {
    books: () => books,
  },
};

const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

const getUser = (token?: string): Context['user'] => {
  if (token === undefined) {
    throw new AuthenticationError('認証されていないユーザーはリソースにアクセスできません');
  }

  // TODO: Tokenからユーザー情報を取り出す処理

  return {
    name: 'dummy name',
    email: 'dummy@example.com',
    token,
  };
};

const server = new ApolloServer({
  schema: schemaWithResolvers,
  context: ({ req }) =>
    ({
      user: getUser(req.headers.authorization),
    } as Context),
  debug: true,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
