import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { getToken } from './token';

const BACK_URL = 'https://grading.design.pages.academy';

const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACK_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['x-token'] = token;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if (error.response) {
        toast.warn(error.response.data.error);
      }
      throw error;
    }
  );

  return api;
};
