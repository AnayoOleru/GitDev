import { 
    ApolloClient, 
    HttpLink, 
    InMemoryCache 
} from 'apollo-boost';
const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: 'bearer 7a90be6343f9e8fd1c5ce4e8c172e7f72779ffb7'
      }
    }),
    cache: new InMemoryCache()
  });

export default client;
