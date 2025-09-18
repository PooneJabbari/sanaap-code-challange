import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/layout.tsx", [
    index("./routes/register/phone-number.tsx"),
    route("/register/otp", "./routes/register/otp.tsx"),
    route("/register/name", "./routes/register/name.tsx"),
    route("/register/details", "./routes/register/details.tsx"),
  ]),
] satisfies RouteConfig;
