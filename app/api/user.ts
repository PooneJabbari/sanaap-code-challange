import { useQuery } from "@tanstack/react-query";
import api from ".";
import type { QueryOptions } from "./type";
import { useAuthStore } from "~/stores/auth";

const baseRoute = (path: string) => `/api/v2/app/DEY/agent/${path}`;

// getUserStatus
type UserStatusResponse = {
  status_code: number;
  message: string;
  is_success: boolean;
  error_details: null;
  response: {
    personal_info: {
      id: number;
      phone_number: string;
      first_name: string;
      last_name: string;
    };
    agency_info: {
      id: number;
      insurance: {
        id: number;
        name: string;
        code: string;
      };
      agent_code: number;
      role: string;
      has_location: boolean;
      confirm_location: boolean;
      address: string | null;
      address_detail: string | null;
    };
    registration_status: "waiting_for_confirmation" | "approved" | "rejected";
    map_info: {
      link: string;
    };
  };
};

const getUserStatus = async (accessToken: string) => {
  console.log("init");
  const res = await api.get<UserStatusResponse>(baseRoute("app_user_status/"), {
    headers: {
      Authorization: `jwt ${accessToken}`,
    },
  });
  return res.data;
};

export const useGetUserStatus = (
  options?: QueryOptions<UserStatusResponse>,
) => {
  const { accessToken } = useAuthStore();

  return useQuery({
    queryKey: ["get-user-status"],
    queryFn: () => getUserStatus(accessToken ?? ""),
    ...options,
  });
};
//#################################################################################
