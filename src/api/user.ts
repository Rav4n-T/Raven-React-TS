import http from "@/utils/http";

interface LoginData {
  username: string;
  password: string;
}

export const LoginApi = (data: LoginData) => http.post("login", data);
