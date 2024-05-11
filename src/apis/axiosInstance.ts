import axios, { AxiosInstance, isAxiosError } from "axios";
import { error } from "console";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const TOKEN_KEY = "token";
const NOT_AUTHORIZED_MESSAGE = "Could not validate credentials";

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isAxiosError(error) && error.response?.status === 401) {
      localStorage.removeItem(TOKEN_KEY);
      window.location.reload();
    }
    return Promise.reject(error);
  },
);
