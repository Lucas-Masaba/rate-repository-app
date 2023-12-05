import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

import theme from '../utils/theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

interface PropTypes {
  color: string,
  fontSize: string,
  fontWeight: string,
  style: StyleProp<TextStyle>,
  children: React.ReactNode;
}

const CustomText = ({color, fontSize, fontWeight, style, ...props}: PropTypes) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <Text style={textStyle} {...props} />;

};

export default CustomText;