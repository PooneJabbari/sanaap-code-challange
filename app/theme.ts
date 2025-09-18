import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#017785",
      light: "#bfd5d8",
    },
    secondary: {
      main: "#f86534",
    },
    error: {
      main: "#e14856",
      light: "#f8dee1",
    },
    grey: {
      50: "#f6f6f8",
      500: "#505050",
      600: "#909090",
      300: "#d2d1d1",
    },
  },
  typography: {
    fontFamily: "IRANSansFaNum",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "IRANSansFaNum",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          position: "relative",
          display: "flex",
          flex: 1,
          overflowY: "hidden",
          paddingLeft: "24px",
          paddingRight: "24px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 3px 6px 0px #1C487029",
          height: "fit-content",
          maxHeight: "calc(100svh - 180px)",
          width: "100%",
          overflowY: "auto",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      },
    },
  },
});

export default theme;
