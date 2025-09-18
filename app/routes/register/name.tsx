import { Box } from "@mui/material";
import { FnamLnameForm } from "~/components/forms/fnam-lname";
import { useRegistrationStore } from "~/stores/registration";
import { useNavigate } from "react-router";

export default function Name() {
  const navigate = useNavigate();
  const { set } = useRegistrationStore();

  return (
    <Box sx={{ width: "100%" }}>
      <FnamLnameForm
        onSubmit={({ fname, lname }) => {
          set({ first_name: fname, last_name: lname });
          navigate("/register/details");
        }}
        isLoading={false}
      />
    </Box>
  );
}
