import { 
    ApolloClient, 
    HttpLink, 
    InMemoryCache 
} from 'apollo-boost';
const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.github.com/users',
      headers: {
        authorization: '2fa894be83dcbbd7d998c1bf11bb55f12dba83ef'
      }
    }),
    cache: new InMemoryCache()
  });

export default client;
