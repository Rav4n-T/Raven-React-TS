import useAuthStore from "@/store/auth";
import axios, { AxiosHeaders } from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api",
});

http.interceptors.request.use(
  (config) => {
    const token = useAuthStore.useToken();
    if (token && token != "") {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

http.interceptors.response.use(
  (res) => {
    const updateAuth = useAuthStore.useUpdateAuth();
    if (res.headers instanceof AxiosHeaders && res.headers.has("new-token")) {
      updateAuth({
        token: res.headers.get("new-token") as string,
        expiresIn: +new Date(res.headers.get("new-expires-in") as string),
      });
    }
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default http;
