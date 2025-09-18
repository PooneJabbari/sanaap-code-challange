import { Outlet } from "react-router";
import { Logo } from "./icons";
import { Box, Container, Paper } from "@mui/material";

export default function Layout() {
  return (
    <Box className="relative flex h-svh w-full flex-col gap-y-5 overflow-auto">
      <Box className="bg-primary absolute top-0 left-0 h-52 w-full rounded-b-2xl" />
      <Box className="relative flex items-center justify-center p-4">
        <Logo />
      </Box>
      <Container maxWidth="sm">
        <Paper>
          <Outlet />
        </Paper>
      </Container>
    </Box>
  );
}
