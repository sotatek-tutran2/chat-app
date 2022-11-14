import axios, { AxiosRequestConfig } from "axios";

export const axiosInstane = axios.create({
  baseURL: process.env.REACT_APP_API_PREFIX_END_POINT,
});

export const config: AxiosRequestConfig = {};
