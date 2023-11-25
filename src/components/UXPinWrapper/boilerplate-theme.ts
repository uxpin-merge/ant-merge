// import { createTheme } from '@mui/material/styles';

/**
 * Use module augmentation to add new variables to the theme and themeOptions
 * https://mui.com/material-ui/customization/theming/#custom-variables
 */
// declare module '@mui/material/styles' {
//   interface Theme {
//     mode: string;
//     primary: colorScheme;
//     secondary: colorScheme;
//   }

//   interface ThemeOptions {
//     mode?: string;
//     primary?: colorScheme;
//     secondary?: colorScheme;
//   }
// }

// type colorScheme = {
//   main: string;
//   light: string;
//   dark: string;
//   contrastText: string;
// };

/**
 * To further customize this theme,
 * please see the full theme object here: https://mui.com/customization/default-theme/
 */
export const theme = {
  button: {
    color: {
      primary: 'bg-red-500 hover:bg-red-600',
    },
  },
};
