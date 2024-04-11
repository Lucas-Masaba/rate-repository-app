import { AUTHENTICATE_USER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import AuthStorage from '../utils/authStorage';

interface AuthenticateType {
  accessToken: string;
}
interface DataType {
  data: AuthenticateType;
}

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE_USER);

  const signIn = async ({ username, password }: {username: string, password: string}): Promise<DataType> => {
    const { data } = await mutate({ variables: { username, password } });
    await new AuthStorage().setAccessToken(data?.authenticate.accessToken);
    return data;
  };

  return {signIn, result};
};

export default useSignIn;