import React from 'react';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { View, Button, GestureResponderEvent } from 'react-native';


interface ValueTypes {
  name: string;
  password: string;
}

const values: ValueTypes = {
  name: '',
  password: '',
};

const onSubmit = (values: ValueTypes) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <View>
      <Formik initialValues={values} onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <View>
            <FormikTextInput name='Username' placeholder='Username' />
            <FormikTextInput name='Password' placeholder='Password' secureTextEntry={true} />
            <Button title='Sign In' onPress={handleSubmit as (e?: GestureResponderEvent) => void} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
