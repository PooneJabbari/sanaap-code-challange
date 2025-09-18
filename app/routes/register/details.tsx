import { Box, Typography, Paper, Stack, Button } from "@mui/material";
import { useRegistrationStore } from "~/stores/registration";
import { useNavigate } from "react-router";
import { DetailsForm } from "~/components/forms/details";
import { useGetCounties, useGetProvinces } from "~/api/base";
import { useState } from "react";
import { useGetWop } from "~/api/app";
import { useCheckAgentCode } from "~/api/auth";
import { pushToast } from "~/components/toast";

export default function Details() {
  const navigate = useNavigate();
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
  const { data: wop, refetch: refetchWop } = useGetWop(
    {
      province: provinceId ?? 0,
      name: wopName ?? "",
      insurance: "DEY",
    },
    {
      enabled: !!provinceId && !!wopName,
    },
  );

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
          console.log(data);
        }}
        isLoading={false}
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
