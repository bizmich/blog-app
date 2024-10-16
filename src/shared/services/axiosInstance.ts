import axios from 'axios';
import { camelToSnake, snakeToCamel } from '@lib';
import { getSession } from 'next-auth/react';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data && !(response.data instanceof Blob)) {
      response.data = snakeToCamel(response.data);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.request.use(
  async function (config) {
    const session = await getSession();

    config.headers.Authorization = session
      ? `Bearer ${session?.user.token}`
      : '';
    if (config.params) {
      config.params = camelToSnake(config.params);
    }
    if (config.data) {
      config.data = camelToSnake(config.data);
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
