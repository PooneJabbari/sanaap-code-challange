import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/layout.tsx", [
    index("./routes/phone-number.tsx"),
    route("/name", "./routes/name.tsx"),
  ]),
] satisfies RouteConfig;
