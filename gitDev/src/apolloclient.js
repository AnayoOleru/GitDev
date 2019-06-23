import { 
    ApolloClient, 
    HttpLink, 
    InMemoryCache 
} from 'apollo-boost';
const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: 'bearer fd1bcb4fdae73655c08367a2bee6e75154448763'
      }
    }),
    cache: new InMemoryCache()
  });

export default client;
