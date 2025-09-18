import { Button, Container, Drawer, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useGetUserStatus } from "~/api/user";
import { useAuthStore } from "~/stores/auth";
import { useRegistrationStore } from "~/stores/registration";

const data = {
  waiting_for_confirmation:
    "نماینده محترم؛\nدرخواست ثبت نام شما در حال بررسی است،\nدر صورت تأیید اطلاعات، اپلیکیشن مورد نظر فعال خواهد شد.",
  approved:
    "نماینده محترم؛\nدرخواست ثبت نام شما با موفقیت تایید شد.\nاپلیکیشن مورد نظر فعال خواهد شد.",
  rejected:
    "نماینده محترم؛\nدرخواست ثبت نام شما رد شد.\nلطفاً اطلاعات خود را بررسی کنید و در صورت نیاز تکمیل کنید.",

  restart: "ورود با حساب کاربری دیگر",
};

export default function Main() {
  const { data: userStatus } = useGetUserStatus();
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const registrationStore = useRegistrationStore();

  return (
    <Drawer anchor="bottom" open={!!userStatus?.response}>
      <Container
        maxWidth="sm"
        sx={{ paddingY: 5, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography sx={{ whiteSpace: "pre-line" }}>
          {data[userStatus?.response.registration_status as keyof typeof data]}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            authStore.clearAuth();
            registrationStore.clear();
            navigate("/");
          }}>
          {data.restart}
        </Button>
      </Container>
    </Drawer>
  );
}
