import { 
    ApolloClient, 
    HttpLink, 
    InMemoryCache 
} from 'apollo-boost';
const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: 'bearer 74dc3f169e64b4551e3a3cb9172221dbedb8dab5'
      }
    }),
    cache: new InMemoryCache()
  });

export default client;
