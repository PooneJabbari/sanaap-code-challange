import type { Route } from "./+types/phone-number";
import ExampleComponent from "../components/ExampleComponent";
import { Box, Typography } from "@mui/material";

export default function PhoneNumber() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="h6" sx={{ color: "grey.500" }}>
        شماره تلفن
      </Typography>
    </Box>
  );
}
