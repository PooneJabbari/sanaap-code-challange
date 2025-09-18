import { Box } from "@mui/material";
import { PhoneNumberForm } from "~/components/forms/phone-number";

export default function PhoneNumber() {
  return (
    <Box sx={{ width: "100%" }}>
      <PhoneNumberForm onSubmit={() => {}} isLoading={false} />
    </Box>
  );
}
