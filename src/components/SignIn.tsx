import React from 'react';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { View, Button, GestureResponderEvent, StyleSheet } from 'react-native';


interface ValueTypes {
  name: string;
  password: string;
}

const values: ValueTypes = {
  name: '',
  password: '',
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#ffffff',
  },
  input: {
    height: 40,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    borderColor: '#e1e4e8',
    placeholderTextColor: '#e1e4e8',
    borderRadius: 5,
  },
  button: {
    height: 40,
  }
});

const onSubmit = (values: ValueTypes) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <View>
      <Formik initialValues={values} onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <View style={styles.container}>
            <FormikTextInput name='Username' placeholder='Username' style={styles.input} />
            <FormikTextInput name='Password' placeholder='Password' secureTextEntry={true} style={styles.input} />
            <Button title='Sign In' onPress={handleSubmit as (e?: GestureResponderEvent) => void} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
