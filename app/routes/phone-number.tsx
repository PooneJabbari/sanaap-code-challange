import { Box } from "@mui/material";
import { PhoneNumberForm } from "~/components/forms/phone-number";
import { useCreateOtp, useValidateOtp } from "~/api/auth";
import { pushToast } from "~/components/toast";
import { useState } from "react";
import { OtpForm } from "~/components/forms/otp";
import { useNavigate } from "react-router";

export default function PhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
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

  const validateOtpMutation = useValidateOtp({
    onSuccess: () => {
      pushToast({
        type: "success",
        content: "کد تایید با موفقیت اعتبارسنجی شد.",
      });
      navigate("/name");
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
      {!phoneNumber ? (
        <PhoneNumberForm
          onSubmit={(data) => createOtpMutation.mutate(data)}
          isLoading={createOtpMutation.isPending}
        />
      ) : (
        <OtpForm
          phoneNumber={phoneNumber}
          onResend={() => console.log("ارسال مجدد کد")}
          onSubmit={(data) =>
            validateOtpMutation.mutate({
              phone_number: phoneNumber,
              code: data.code,
            })
          }
          isLoading={validateOtpMutation.isPending}
        />
      )}
    </Box>
  );
}
