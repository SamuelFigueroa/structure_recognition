import { host, port }  from './config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import path from 'path';

const app = express();

app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render('index');
});
app.use(express.static(path.join(__dirname, 'public')));

app.all( /^\/(?!graphql)(.*)\/?$/i, (req, res) => {
  res.render('index');
});

app.listen(port, host, () => {
  console.info('Express listening on', `http://${host}:${port}`);
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});

server.applyMiddleware({ app });
