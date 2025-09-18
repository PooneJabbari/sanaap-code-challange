import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/`,
  paramsSerializer: {
    encode: (params) => encodeURIComponent(params),
  },
});

export default api;
