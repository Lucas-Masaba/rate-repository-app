import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(private namespace: string = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken(): Promise<string | null> {
    const accessToken = await AsyncStorage.getItem(`${this.namespace}:accessToken`);
    return accessToken ? JSON.parse(accessToken) : '';
  }

  async setAccessToken(accessToken: string): Promise<void> {
    await AsyncStorage.setItem(`${this.namespace}:accessToken`, JSON.stringify(accessToken));
  }

  async removeAccessToken(): Promise<void> {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;