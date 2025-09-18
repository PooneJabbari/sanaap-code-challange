"use client";

import type { FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { mobileRegex } from "~/utils/regex";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const data = {
  header: "شماره موبایل خود را وارد نمایید.",
  subheader: "کد تایید برای شما ارسال خواهد شد.",
  phoneNumber: {
    label: "تلفن همراه",
    placeholder: "مثال: 09123456789",
    error: "شماره موبایل را به درستی وارد کنید.",
  },
  CTA: "ورود",
};

const formSchema = z.object({
  phone_number: z.string().regex(mobileRegex, data.phoneNumber.error),
});

type FormSchema = z.infer<typeof formSchema>;

type Props = {
  isLoading: boolean;
  onSubmit: SubmitHandler<FormSchema>;
};

export const PhoneNumberForm: FC<Props> = ({ onSubmit, isLoading }) => {
  const { header, subheader, CTA, phoneNumber } = data;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: { phone_number: "" },
    resolver: zodResolver(formSchema),
  });

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
            {subheader}
          </Typography>
        </Stack>
        <Controller
          control={control}
          name="phone_number"
          render={({ field: { onChange, value } }) => (
            <TextField
              type="tel"
              fullWidth
              label={phoneNumber.label}
              placeholder={phoneNumber.placeholder}
              value={value}
              onChange={onChange}
              error={!!errors.phone_number}
              helperText={errors.phone_number?.message}
            />
          )}
        />
        <Button variant="contained" fullWidth type="submit" loading={isLoading}>
          {CTA}
        </Button>
      </Box>
    </form>
  );
};
