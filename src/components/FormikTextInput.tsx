import React from 'react';
import { StyleSheet, StyleProp, TextStyle } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import CustomText from './CustomText';

interface InputTypes {
  name: string,
  children?: React.ReactNode,
  onChangeText?: (value: string) => void,
  onBlur?: () => void,
  value?: string,
  placeholder?: string,
  secureTextEntry?: boolean; 
  style?: StyleProp<TextStyle>,
}

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
});

const FormikTextInput = ({ name, ...props }: InputTypes) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value: string) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={!!showError}
        {...props}
      />
      {showError && <CustomText style={styles.errorText}>{meta.error}</CustomText>}
    </>
  );
};

export default FormikTextInput;