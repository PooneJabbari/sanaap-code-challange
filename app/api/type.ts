import type {
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";
import type { AxiosError, AxiosResponse } from "axios";

export type ResponseError = {
  status_code: number;
  message: string;
  is_success: boolean;
  error_details: {
    type: string;
    code: string;
    detail: string;
    attr: string;
    fa_details: string;
  };
};

export type CustomAxiosError<T = unknown, D = any> = Omit<
  AxiosError<T, D>,
  "response"
> & {
  response: AxiosResponse<T, D>;
};
export type ApiError = CustomAxiosError<ResponseError>;

export type QueryOptions<TData> = Omit<
  UseQueryOptions<TData>,
  "queryKey" | "queryFn"
>;

export type MutationOptions<TData, TVariables> = Omit<
  UseMutationOptions<TData, ApiError, TVariables>,
  "mutationKey" | "mutationFn"
>;
