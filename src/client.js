import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
 import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink =  new HttpLink({
  uri: '/graphql',
  credentials: 'include'
});

const cache = new InMemoryCache();

const link = ApolloLink.from([httpLink]);

const client = new ApolloClient({
  link,
  cache
});

export default client;
