import { useQuery } from "@tanstack/react-query";
import api from ".";
import type { QueryOptions } from "./type";

const baseRoute = (path: string) => `/base/${path}`;

// getProvinces
type ProvincesResponse = {
  id: number;
  is_active: boolean;
  name: string;
  code: string;
  name_split: string;
  creator_user: {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
  };
  country: number;
}[];

const getProvinces = async () => {
  const res = await api.get<ProvincesResponse>(baseRoute("provinces_wop/"));
  return res.data;
};

export const useGetProvinces = (options?: QueryOptions<ProvincesResponse>) =>
  useQuery({
    queryKey: ["get-provinces"],
    queryFn: getProvinces,
    ...options,
  });
//#################################################################################

// getCounties
type CountiesRequest = {
  province_id: number | string;
};
type CountiesResponse = {
  id: number;
  is_active: boolean;
  name: string;
  fanavaran_code: string;
  name_split: string;
  province: {
    id: number;
    is_active: boolean;
    name: string;
    code: string;
    name_split: string;
    creator_user: number;
    country: number;
  };
  creator_user: {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
  };
};

export const getCounties = async (filter: CountiesRequest) => {
  const res = await api.get<CountiesResponse[]>(
    `${baseRoute("counties_wop/")}`,
    {
      params: filter,
    },
  );
  return res.data;
};

export const useGetCounties = (
  input: CountiesRequest,
  options?: QueryOptions<CountiesResponse[]>,
) =>
  useQuery({
    queryKey: ["get-counties", input],
    queryFn: () => getCounties(input),
    ...options,
  });
