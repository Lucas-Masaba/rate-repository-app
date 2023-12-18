import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to='/signin'>
          <Text style={styles.text}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
