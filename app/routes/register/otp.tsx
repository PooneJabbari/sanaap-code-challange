import { Box } from "@mui/material";
import { OtpForm } from "~/components/forms/otp";
import { useValidateOtp } from "~/api/auth";
import { pushToast } from "~/components/toast";
import { useRegistrationStore } from "~/stores/registration";
import { useNavigate } from "react-router";

export default function Otp() {
  const navigate = useNavigate();
  const { phone_number, set } = useRegistrationStore();

  const validateOtpMutation = useValidateOtp({
    onSuccess: () => {
      pushToast({
        type: "success",
        content: "کد تایید با موفقیت اعتبارسنجی شد.",
      });
      navigate("/register/name");
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
      <OtpForm
        phoneNumber={phone_number}
        onResend={() => console.log("ارسال مجدد کد")}
        onSubmit={(formData) => {
          validateOtpMutation.mutate({
            phone_number,
            code: formData.code,
          });
        }}
        isLoading={validateOtpMutation.isPending}
      />
    </Box>
  );
}
