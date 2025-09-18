import type {
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";
import type { AxiosError, AxiosResponse } from "axios";

export type ResponseError = {
  code: string;
  message: string;
  status: string;
  type: string;
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
