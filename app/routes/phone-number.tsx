import { Box } from "@mui/material";
import { PhoneNumberForm } from "~/components/forms/phone-number";
import { useCreateOtp } from "~/api/auth";
import { pushToast } from "~/components/toast";
import { useState } from "react";

export default function PhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const createOtpMutation = useCreateOtp({
    onSuccess: (_, data) => {
      pushToast({
        type: "success",
        content: "رمز یکبار مصرف به شما ارسال شد.",
      });
      setPhoneNumber(data.phone_number);
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
