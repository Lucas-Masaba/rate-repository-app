import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    mainBackground: '#e1e4e8',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
  }),
  fontWeights: {
    normal: '400' as 'normal',
    bold: '700' as 'bold',
  },
};

export default theme;