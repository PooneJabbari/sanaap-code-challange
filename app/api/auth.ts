import { useMutation } from "@tanstack/react-query";
import api from ".";
import type { MutationOptions } from "./type";

const baseRoute = (path: string) =>
  `/api/v2/app/DEY/agent/verification/signup/${path}`;

//create-otp
type CreateOtpRequest = {
  phone_number: string;
};

type CreateOtpResponse = {
  status_code: number;
  message: string;
  is_success: boolean;
  error_details: null;
  response: string;
};

export const CreateOtp = async ({ ...req }: CreateOtpRequest) => {
  const res = await api.post<CreateOtpResponse>(baseRoute(`create_otp/`), req);
  return res.data;
};

export const useCreateOtp = (
  options?: MutationOptions<CreateOtpResponse, CreateOtpRequest>,
) =>
  useMutation({
    mutationFn: CreateOtp,
    ...options,
  });
//#################################################################################

//validate-otp
type ValidateOtpRequest = {
  phone_number: string;
  code: string;
};

type ValidateOtpResponse = {
  status_code: number;
  message: string;
  is_success: boolean;
  error_details: null;
  response: string;
};

export const ValidateOtp = async ({ ...req }: ValidateOtpRequest) => {
  const res = await api.post<ValidateOtpResponse>(
    baseRoute(`validate_otp/`),
    req,
  );
  return res.data;
};

export const useValidateOtp = (
  options?: MutationOptions<ValidateOtpResponse, ValidateOtpRequest>,
) =>
  useMutation({
    mutationFn: ValidateOtp,
    ...options,
  });
//#################################################################################
