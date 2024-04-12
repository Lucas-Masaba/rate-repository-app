import { AUTHENTICATE_USER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import useAuthStorage from './useAuthStorage';
import { useApolloClient } from '@apollo/client';

interface AuthenticateType {
  accessToken: string;
}
interface DataType {
  data: AuthenticateType;
}

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE_USER);

  const signIn = async ({ username, password }: {username: string, password: string}): Promise<DataType> => {
    const { data } = await mutate({ variables: { username, password } });
    authStorage && await authStorage.setAccessToken(data?.authenticate.accessToken);
    apolloClient.resetStore();
    return data;
  };

  return {signIn, result};
};

export default useSignIn;