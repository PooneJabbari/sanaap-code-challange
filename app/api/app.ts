import { useQuery } from "@tanstack/react-query";
import api from ".";
import type { QueryOptions } from "./type";

const baseRoute = (path: string) =>
  `/api/v2/app/selection_item/insurance_branch/${path}`;

// getWop
type WopRequest = {
  name: string;
  insurance: string;
  province: number | string;
};

type WopResponse = {
  status_code: number;
  message: string;
  is_success: boolean;
  error_details: null;
  response: {
    id: number;
    name: string;
    insurance: number;
    province: number;
    county: number;
  }[];
};

export const getWop = async (filter: WopRequest) => {
  const res = await api.get<WopResponse>(`${baseRoute("wop_list/")}`, {
    params: filter,
  });
  return res.data;
};

export const useGetWop = (
  input: WopRequest,
  options?: QueryOptions<WopResponse>,
) =>
  useQuery({
    queryKey: ["get-wop", input],
    queryFn: () => getWop(input),
    ...options,
  });

//#################################################################################
