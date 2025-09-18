import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#017785',
      light: '#bfd5d8',
    },
    secondary: {
      main: '#f86534',
    },
    error: {
      main: '#e14856',
      light: '#f8dee1',
    },
    grey: {
      50: '#f6f6f8',
      500: '#505050',
      600: '#909090',
      300: '#d2d1d1',
    },
  },
  typography: {
    fontFamily: '"IRANSansFaNum", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"IRANSansFaNum", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        },
      },
    },
  },
});

export default theme;
