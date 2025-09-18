import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";

import "./app.css";
import type { Route } from "./+types/root";
import { ReactQueryClientProvider } from "./api/provider";
import { ToastContainer } from "./components/toast";
import theme from "./theme";

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
  prepend: true,
});
const Providers = ({ children }: { children: React.ReactNode }) => (
  <CacheProvider value={rtlCache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReactQueryClientProvider>
        <ToastContainer>{children}</ToastContainer>
      </ReactQueryClientProvider>
    </ThemeProvider>
  </CacheProvider>
);

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa-IR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Providers>{children}</Providers>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 4, pt: 16 }}>
      <Typography variant="h1">{message}</Typography>
      <Typography>{details}</Typography>
      {stack && (
        <Box component="pre" sx={{ width: "100%", overflowX: "auto", p: 4 }}>
          <code>{stack}</code>
        </Box>
      )}
    </Box>
  );
}
