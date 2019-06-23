import { 
    ApolloClient, 
    HttpLink, 
    InMemoryCache 
} from 'apollo-boost';
const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: 'bearer a6b21fd8447bff3e0d2156d67bd9db8e7c86792d'
      }
    }),
    cache: new InMemoryCache()
  });

export default client;
