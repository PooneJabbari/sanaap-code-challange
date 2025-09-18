import { Box } from "@mui/material";
import { PhoneNumberForm } from "~/components/forms/phone-number";
import { useCreateOtp } from "~/api/auth";
import { pushToast } from "~/components/toast";
import { useRegistrationStore } from "~/stores/registration";
import { useNavigate } from "react-router";

export default function PhoneNumber() {
  const navigate = useNavigate();
  const { set } = useRegistrationStore();

  const createOtpMutation = useCreateOtp({
    onSuccess: (_, data) => {
      pushToast({
        type: "success",
        content: "رمز یکبار مصرف به شما ارسال شد.",
      });
      set({ phone_number: data.phone_number });
      navigate("/register/otp");
    },
    onError: ({ response }) => {
      pushToast({
        type: "error",
        content: response.data.error_details.fa_details,
      });
    },
  });

  return (
    <Box sx={{ width: "100%" }}>
      <PhoneNumberForm
        onSubmit={(data) => createOtpMutation.mutate(data)}
        isLoading={createOtpMutation.isPending}
      />
    </Box>
  );
}
