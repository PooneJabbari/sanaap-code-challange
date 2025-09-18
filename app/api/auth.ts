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

//check-agent-code
type CheckAgentCodeRequest = {
  agent_code: string;
};

type CheckAgentCodeResponse = {
  status_code: number;
  message: string;
  is_success: boolean;
  error_details: null;
  response: string;
};

export const CheckAgentCode = async ({ ...req }: CheckAgentCodeRequest) => {
  const res = await api.post<CheckAgentCodeResponse>(
    baseRoute(`check_agency_code/`),
    req,
  );
  return res.data;
};

export const useCheckAgentCode = (
  options?: MutationOptions<CheckAgentCodeResponse, CheckAgentCodeRequest>,
) =>
  useMutation({
    mutationFn: CheckAgentCode,
    ...options,
  });

//signup
export type SignupRequest = {
  address: string;
  agency_type: "real" | "legal";
  agent_code: string;
  city_code: string;
  county: string;
  first_name: string;
  last_name: string;
  insurance_branch: string;
  phone: string;
  phone_number: string;
  province: string;
  name: string | undefined;
};

type SignupResponse = {
  status_code: number;
  message: string;
  is_success: boolean;
  error_details: null;
  response: { access: string; refresh: string };
};

export const Signup = async ({ ...req }: SignupRequest) => {
  const res = await api.post<SignupResponse>(baseRoute(``), req);
  return res.data;
};

export const useSignup = (
  options?: MutationOptions<SignupResponse, SignupRequest>,
) =>
  useMutation({
    mutationFn: Signup,
    ...options,
  });
