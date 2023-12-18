import React from 'react';
// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../utils/theme';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />}></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </View>
  );
};

export default Main;