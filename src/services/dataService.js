import axios from "axios";

let api = null

const baseURL = import.meta.env.VITE_APP_ASTRAY_API

api = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("astray-access-token");
    if (token) {
      if (config.headers) {
        config.headers.Authorization = `${token}`;
      } else {
        config.headers = { Authorization: `${token}` };
      }
    }
    return config;
  },
  (error) => {
    throw error;
  }
);

export default api;