// import { pushToast } from "~/components/toast";

import axios from "axios";
// import { useCookies } from "react-cookie";

const api = axios.create({
  baseURL: `${process.env.VITE_API_URL}/api/v0`,
  paramsSerializer: {
    encode: (params) => encodeURIComponent(params),
  },
});

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const { status } = error.response;
//     if ([401].includes(status)) {
//       const [, setAuthCookie] = useCookies(["auth"]);
//       setAuthCookie("auth", "");
//       window.location.reload();
//     }

//     if ([403].includes(status)) {
//       console.warn("403", error.message);
//     }

//     return pushToast({ type: "error", content: error.response.data.message });
//   },
// );

export default api;
