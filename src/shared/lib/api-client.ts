import axios, { type CreateAxiosDefaults } from "axios";
import { env } from "../config";
const config: CreateAxiosDefaults = {
  baseURL: env.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
};
export const publicApi = axios.create(config);

// Authorization required
export const privateApi = axios.create(config);

privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (!token) return config;
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
