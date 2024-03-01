import React from 'react';
import { TextInput as NativeTextInput, StyleProp, StyleSheet, TextStyle } from 'react-native';

export interface TextInputTypes {
  style?: StyleProp<TextStyle>,
  error?: boolean,
}

const styles = StyleSheet.create({
  errorBorder: {
    borderColor: '#d73a4a',
  },
});

const TextInput = ({ style, error, ...props }: TextInputTypes) => {
  const textInputStyle = [style, error ? styles.errorBorder : null];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;