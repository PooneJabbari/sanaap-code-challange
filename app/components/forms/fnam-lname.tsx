import { Button, Stack, TextField } from "@mui/material";
import type { FC } from "react";
import { Controller, type SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const data = {
  fname: {
    label: "نام",
    error: "وارد کردن نام ضروری است.",
  },
  lname: {
    label: "نام خانوادگی",
    error: "وارد کردن نام خانوادگی ضروری است.",
  },
  CTA: "ادامه",
};

const formSchema = z.object({
  fname: z.string({ error: data.fname.error }).min(1, data.fname.error),
  lname: z.string({ error: data.lname.error }).min(1, data.lname.error),
});

type FormSchema = z.infer<typeof formSchema>;

type Props = {
  isLoading: boolean;
  onSubmit: SubmitHandler<FormSchema>;
};

export const FnamLnameForm: FC<Props> = ({ onSubmit, isLoading }) => {
  const { fname, lname, CTA } = data;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={5}>
        <Stack gap={3}>
          <Controller
            control={control}
            name="fname"
            render={({ field: { onChange, value } }) => (
              <TextField
                type="text"
                fullWidth
                label={fname.label}
                value={value}
                onChange={onChange}
                error={!!errors.fname}
                helperText={errors.fname?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="lname"
            render={({ field: { onChange, value } }) => (
              <TextField
                type="text"
                fullWidth
                label={lname.label}
                value={value}
                onChange={onChange}
                error={!!errors.lname}
                helperText={errors.lname?.message}
              />
            )}
          />
        </Stack>
        <Button variant="contained" fullWidth type="submit" loading={isLoading}>
          {CTA}
        </Button>
      </Stack>
    </form>
  );
};
