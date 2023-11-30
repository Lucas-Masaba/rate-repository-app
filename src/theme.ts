// interface ThemeType {
//   colors: {
//     textPrimary: string;
//     textSecondary: string;
//     primary: string;
//   };
//   fontSizes: {
//     body: number;
//     subheading: number;
//   };
//   fonts: {
//     main: string;
//   };
//   fontWeights: {
//     normal: string;
//     bold: string;
//   };

// }

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400' as 'normal',
    bold: '700' as 'bold',
  },
};

export default theme;