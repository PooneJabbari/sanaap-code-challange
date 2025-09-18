import { Outlet } from "react-router";
import { Logo } from "./icons";
import { Box, Container, Paper } from "@mui/material";

export default function Layout() {
  return (
    <Box
      sx={{
        bgcolor: "grey.50",
        position: "relative",
        display: "flex",
        height: "100svh",
        width: "100%",
        flexDirection: "column",
        gap: 2.5,
        overflow: "auto",
      }}>
      <Box
        sx={{
          bgcolor: "primary.main",
          position: "absolute",
          top: 0,
          left: 0,
          height: 208,
          width: "100%",
          borderRadius: "0 0 16px 16px",
        }}
      />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}>
        <Logo />
      </Box>
      <Container maxWidth="xs">
        <Paper>
          <Outlet />
        </Paper>
      </Container>
    </Box>
  );
}
