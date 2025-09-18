import { useMutation } from "@tanstack/react-query";
import api from ".";
import type { MutationOptions } from "./type";

const baseRoute = (path: string) =>
  `/api/v2/app/DEY/agent/verification/signup/${path}`;

//create-otp
export type CreateOtpRequest = {
  phone_number: string;
};

type CreateOtpResponse = {
  id: string;
};

export const CreateOtp = async ({ ...req }: CreateOtpRequest) => {
  const res = await api.post<CreateOtpResponse>(baseRoute(`/create_otp/`), req);
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
