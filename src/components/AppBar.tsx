import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import { useApolloClient, useQuery } from '@apollo/client';
import { IsSignedIn } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    padding: 11,
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    paddingRight: 20,
  },
});

const AppBar = () => {
  const { data } = useQuery(IsSignedIn);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signout = async () => {
    authStorage && await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {data?.me ? (
          <TouchableOpacity onPress={signout}>
            <Text style={styles.text}>Sign Out</Text>
          </TouchableOpacity>
        ) : (
          <Link to='/signin'>
            <Text style={styles.text}>Sign In</Text>
          </Link>
          
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
