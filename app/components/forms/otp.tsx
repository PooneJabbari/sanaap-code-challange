import type { FC } from "react";

import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import { Box, Button, Stack, Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { CountDown } from "../countdown";
import z from "zod";

const data = {
  header: "کد تایید را وارد نمایید.",
  resend: "ارسال مجدد کد",
  CTA: "ادامه",
};

const formSchema = z.object({
  code: z.string().length(5),
});

type FormSchema = z.infer<typeof formSchema>;

type Props = {
  isLoading: boolean;
  phoneNumber: string;
  onResend: () => void;
  onSubmit: SubmitHandler<FormSchema>;
};

export const OtpForm: FC<Props> = ({
  onSubmit,
  isLoading,
  phoneNumber,
  onResend,
}) => {
  const { header, resend, CTA } = data;

  const { handleSubmit, control, watch } = useForm<FormSchema>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        width="100%"
        justifyContent="center"
        alignItems="center"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}>
        <Stack direction="column" gap={1} alignItems="center">
          <Typography
            variant="16"
            sx={{ color: "grey.500", fontWeight: "bold" }}>
            {header}
          </Typography>
          <Typography
            variant="12"
            sx={{ color: "grey.500", fontWeight: "light" }}>
            {phoneNumber}
          </Typography>
        </Stack>
        <Controller
          name="code"
          control={control}
          rules={{ validate: (value) => value.length === 5 }}
          render={({ field }) => (
            <MuiOtpInput dir="ltr" sx={{ gap: 1 }} {...field} length={5} />
          )}
        />
        <CountDown count={120} finishedText={resend} onClick={onResend} />
        <Button
          disabled={watch("code")?.length !== 5}
          variant="contained"
          fullWidth
          type="submit"
          loading={isLoading}>
          {CTA}
        </Button>
      </Box>
    </form>
  );
};
