import { Box } from "@mui/material";
import { FnamLnameForm } from "~/components/forms/fnam-lname";

export default function Name() {
  return (
    <Box sx={{ width: "100%" }}>
      <FnamLnameForm
        onSubmit={({ fname, lname }) => {
          console.log(fname, lname);
        }}
        isLoading={false}
      />
    </Box>
  );
}
