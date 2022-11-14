import { IRegisterFormData, ILoginFormData } from "../interfaces";
import { axiosInstane, config } from "./api.utils";

const registerUserRequest = (registerFormData: IRegisterFormData) =>
  axiosInstane.post("/auth/register", registerFormData, {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  });

const loginUserRequest = (loginFormData: ILoginFormData) =>
  axiosInstane.post("/auth/login", loginFormData, {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  });

const getAuthUserRequest = () => axiosInstane.get("/auth/status", config);

export { registerUserRequest, loginUserRequest, getAuthUserRequest };
