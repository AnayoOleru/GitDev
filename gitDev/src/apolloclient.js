import { 
    ApolloClient, 
    HttpLink, 
    InMemoryCache 
} from 'apollo-boost';
const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: 'bearer 5fca7cbd157fcba7237500b52a7f353d753e5837'
      }
    }),
    cache: new InMemoryCache()
  });

export default client;
