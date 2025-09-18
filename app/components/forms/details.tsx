"use client";

import type { FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useDebounceCallback } from "usehooks-ts";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { SelectMenu } from "../select";
import { TickIcon } from "../icons/tick";
import theme from "~/theme";

const data = {
  agent_code: {
    label: "کد نمایندگی",
    error: "کد نمایندگی الزامی است",
  },
  province: {
    label: "استان",
    error: "انتخاب استان الزامی است",
  },
  city: {
    label: "شهر",
    error: "انتخاب شهر الزامی است",
  },
  address: {
    label: "آدرس",
    error: "آدرس الزامی است",
  },
  insurance: {
    label: "شعبه بیمه",
    error: "شعبه بیمه الزامی است",
  },
  phone: {
    label: "تلفن ثابت",
    error: "شماره تلفن ثابت را به درستی وارد کنید",
  },
  agency_type: {
    label: "نوع نمایندگی",
    error: "نوع نمایندگی الزامی است",
  },
  name: {
    label: "نام نمایندگی",
  },
  real: {
    label: "حقوقی",
  },
  legal: {
    label: "حقیقی",
  },
  CTA: "ثبت نام",
} as const;

const formSchema = z.object({
  agent_code: z
    .string({ error: data.agent_code.error })
    .min(1, data.agent_code.error),
  province: z
    .string({ error: data.province.error })
    .min(1, data.province.error),
  city: z.string({ error: data.city.error }).min(1, data.city.error),
  address: z.string({ error: data.address.error }).min(1, data.address.error),
  insurance: z
    .string({ error: data.insurance.error })
    .min(1, data.insurance.error),
  phone: z
    .string({ error: data.phone.error })
    .min(10, data.phone.error)
    .max(10, data.phone.error),
  agency_type: z.enum(["real", "legal"], {
    error: data.agency_type.error,
  }),
  name: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

type Option = {
  value: string;
  label: string;
};

type Props = {
  isLoading: boolean;
  onSubmit: SubmitHandler<FormSchema>;
  provinceOptions: Option[];
  cityOptions: Option[];
  wopOptions: Option[];
  checkAgentCode: (agentCode: string) => void;
  isAgentCodeValid: boolean | null;
  onChangeProvinceId: (provinceId: string) => void;
  onChangeWopName: (wopName: string) => void;
};

export const DetailsForm: FC<Props> = ({
  onSubmit,
  isLoading,
  provinceOptions,
  cityOptions,
  wopOptions,
  checkAgentCode,
  isAgentCodeValid,
  onChangeProvinceId,
  onChangeWopName,
}) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: {
      agent_code: "",
      province: "",
      city: "",
      address: "",
      insurance: "",
      phone: "",
      agency_type: undefined,
    },
    resolver: zodResolver(formSchema),
  });

  const selectedProvince = watch("province");
  const agencyType = watch("agency_type");

  const isCityDisabled = !selectedProvince || cityOptions.length === 0;
  const showNameField = agencyType === "real";

  const debouncedCheckAgentCode = useDebounceCallback(checkAgentCode, 1000);
  const debouncedOnChangeWopName = useDebounceCallback(onChangeWopName, 1000);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        width="100%"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}>
        <Controller
          control={control}
          name="agent_code"
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label={data.agent_code.label}
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
                if (e.target.value.length > 0) {
                  debouncedCheckAgentCode(e.target.value);
                }
              }}
              error={!!errors.agent_code}
              helperText={errors.agent_code?.message}
              slotProps={{
                input: {
                  startAdornment:
                    isAgentCodeValid === true ? (
                      <InputAdornment position="start">
                        <TickIcon
                          style={{
                            color: theme.palette.success.main,
                            width: 16,
                            height: 16,
                          }}
                        />
                      </InputAdornment>
                    ) : null,
                },
              }}
            />
          )}
        />

        <Controller
          control={control}
          name="province"
          render={({ field: { onChange, value } }) => (
            <SelectMenu
              label={data.province.label}
              value={value}
              onChange={(v) => {
                onChange(v);
                onChangeProvinceId(v);
              }}
              options={provinceOptions}
              error={!!errors.province}
              helperText={errors.province?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="city"
          render={({ field: { onChange, value } }) => (
            <SelectMenu
              label={data.city.label}
              value={value}
              onChange={onChange}
              options={cityOptions}
              error={!!errors.city}
              helperText={errors.city?.message}
              disabled={isCityDisabled}
            />
          )}
        />

        <Controller
          control={control}
          name="address"
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              multiline
              rows={3}
              label={data.address.label}
              value={value}
              onChange={onChange}
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="insurance"
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              fullWidth
              onChange={(_, selectedOption) => {
                const newValue = selectedOption?.value || "";
                onChange(newValue);
              }}
              options={wopOptions}
              value={
                wopOptions.find((option) => option.value === value) || null
              }
              onInputChange={(_, inputValue) => {
                debouncedOnChangeWopName(inputValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={data.insurance.label}
                  error={!!errors.insurance}
                  helperText={errors.insurance?.message}
                />
              )}
            />
          )}
        />

        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              type="tel"
              label={data.phone.label}
              placeholder="مثال: 02112345678"
              value={value}
              onChange={onChange}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="agency_type"
          render={({ field: { onChange, value } }) => (
            <FormControl fullWidth>
              <FormLabel>{data.agency_type.label}</FormLabel>
              <RadioGroup row value={value} onChange={onChange}>
                <FormControlLabel
                  value="real"
                  control={<Radio />}
                  label={data.real.label}
                />
                <FormControlLabel
                  value="legal"
                  control={<Radio />}
                  label={data.legal.label}
                />
              </RadioGroup>
            </FormControl>
          )}
        />

        {showNameField && (
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <TextField
                fullWidth
                label={data.name.label}
                value={value}
                onChange={onChange}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        )}

        <Button variant="contained" fullWidth type="submit" loading={isLoading}>
          {data.CTA}
        </Button>
      </Box>
    </form>
  );
};
