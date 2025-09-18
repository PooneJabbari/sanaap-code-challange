import { Box, Typography, Paper, Stack, Button } from "@mui/material";
import { useRegistrationStore } from "~/stores/registration";
import { useNavigate } from "react-router";
import { DetailsForm } from "~/components/forms/details";
import { useGetCounties, useGetProvinces } from "~/api/base";
import { useState } from "react";
import { useGetWop } from "~/api/app";
import { useCheckAgentCode, useSignup } from "~/api/auth";
import { pushToast } from "~/components/toast";
import { useAuthStore } from "~/stores/auth";

export default function Details() {
  const navigate = useNavigate();
  const { phone_number, first_name, last_name } = useRegistrationStore();
  const { setAccessToken } = useAuthStore();
  const [provinceId, setProvinceId] = useState<string | null>(null);
  const [wopName, setWopName] = useState<string | null>(null);
  const { data: provinces } = useGetProvinces();
  const { data: counties } = useGetCounties(
    {
      province_id: provinceId ?? 0,
    },
    {
      enabled: !!provinceId,
    },
  );
  const { data: wop } = useGetWop(
    {
      province: provinceId ?? 0,
      name: wopName ?? "",
      insurance: "DEY",
    },
    {
      enabled: !!provinceId && !!wopName,
    },
  );

  const { mutate: signup, isPending: isSignupPending } = useSignup({
    onSuccess: (data) => {
      console.log(data);
      setAccessToken(data.response.access);
      pushToast({ content: "ثبت نام با موفقیت انجام شد", type: "success" });
      navigate("/main");
    },
    onError: ({ response }) => {
      pushToast({
        content: response.data.error_details.fa_details,
        type: "error",
      });
    },
  });

  const { mutate: checkAgentCode, isSuccess: isAgentCodeValid } =
    useCheckAgentCode({
      onSuccess: () => {
        pushToast({ content: "کد نمایندگی معتبر است", type: "success" });
      },
      onError: ({ response }) => {
        pushToast({
          content: response.data.error_details.fa_details,
          type: "error",
        });
      },
    });

  return (
    <Box sx={{ width: "100%" }}>
      <DetailsForm
        onSubmit={(data) => {
          signup({
            phone_number,
            first_name,
            last_name,
            city_code: data.city,
            county: data.city,
            insurance_branch: data.insurance,
            name: data.name ?? "--",
            ...data,
          });
        }}
        isLoading={isSignupPending}
        provinceOptions={
          provinces?.map(({ id, name }) => ({
            value: id.toString(),
            label: name,
          })) ?? []
        }
        onChangeProvinceId={setProvinceId}
        onChangeWopName={setWopName}
        cityOptions={
          counties?.map(({ id, name }) => ({
            value: id.toString(),
            label: name,
          })) ?? []
        }
        wopOptions={
          wop?.response.map(({ id, name }) => ({
            value: id.toString(),
            label: name,
          })) ?? []
        }
        checkAgentCode={(agentCode) => {
          checkAgentCode({ agent_code: agentCode });
        }}
        isAgentCodeValid={isAgentCodeValid}
      />
    </Box>
  );
}
