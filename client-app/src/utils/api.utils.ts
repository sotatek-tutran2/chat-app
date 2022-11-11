import axios, { AxiosRequestConfig } from "axios";
import { IRegisterFormData } from "../interfaces";

const axiosInstane = axios.create({
  baseURL: process.env.REACT_APP_API_PREFIX_END_POINT,
});

const config: AxiosRequestConfig = {
  withCredentials: true,
};

async function registerUserRequest(registerFormData: IRegisterFormData) {
  return axiosInstane.post("/auth/register", registerFormData, {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export { registerUserRequest };
