import { ApolloClient, InMemoryCache } from '@apollo/client';
import { APOLLO_URI } from '@env';
const createApolloClient = () => {
  return new ApolloClient({
    uri: APOLLO_URI,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;