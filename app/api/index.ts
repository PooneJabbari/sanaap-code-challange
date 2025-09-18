// import { pushToast } from "~/components/toast";

import axios from "axios";
// import { useCookies } from "react-cookie";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/`,
  paramsSerializer: {
    encode: (params) => encodeURIComponent(params),
  },
});

export default api;
