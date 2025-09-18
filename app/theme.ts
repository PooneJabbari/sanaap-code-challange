import { createTheme } from "@mui/material/styles";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { prefixer } from "stylis";

const theme = createTheme({
  direction: "rtl",
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
    success: {
      main: "#1CAE81",
      light: "#EBF7EE",
    },
    warning: {
      main: "#FC9C2E",
      light: "#FEF7EA",
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
    "12": {
      fontSize: "0.75rem", // 12px
      lineHeight: "1rem", // 16px
    },
    "14": {
      fontSize: "0.875rem", // 14px
      lineHeight: "1.25rem", // 20px
    },
    "16": {
      fontSize: "1rem", // 16px
      lineHeight: "1.5rem", // 24px
    },
    "18": {
      fontSize: "1.125rem", // 18px
      lineHeight: "1.75rem", // 28px
    },
    "20": {
      fontSize: "1.25rem", // 20px
      lineHeight: "1.75rem", // 28px
    },
    "24": {
      fontSize: "1.5rem", // 24px
      lineHeight: "2rem", // 32px
    },
    "30": {
      fontSize: "1.875rem", // 30px
      lineHeight: "2.25rem", // 36px
    },
    "36": {
      fontSize: "2.25rem", // 36px
      lineHeight: "2.5rem", // 40px
    },
    "48": {
      fontSize: "3rem", // 48px
      lineHeight: 1,
    },
    "60": {
      fontSize: "3.75rem", // 60px
      lineHeight: 1,
    },
    "72": {
      fontSize: "4.5rem", // 72px
      lineHeight: 1,
    },
    "96": {
      fontSize: "6rem", // 96px
      lineHeight: 1,
    },
  },
  shape: {
    borderRadius: 8,
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

// Add RTL plugin to the theme
(theme as any).stylisPlugins = [prefixer, rtlPlugin];

declare module "@mui/material/styles" {
  interface TypographyVariantsOptions {
    "12"?: React.CSSProperties;
    "14"?: React.CSSProperties;
    "16"?: React.CSSProperties;
    "18"?: React.CSSProperties;
    "20"?: React.CSSProperties;
    "24"?: React.CSSProperties;
    "30"?: React.CSSProperties;
    "36"?: React.CSSProperties;
    "48"?: React.CSSProperties;
    "60"?: React.CSSProperties;
    "72"?: React.CSSProperties;
    "96"?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "12": true;
    "14": true;
    "16": true;
    "18": true;
    "20": true;
    "24": true;
    "30": true;
    "36": true;
    "48": true;
    "60": true;
    "72": true;
    "96": true;
  }
}

export default theme;
