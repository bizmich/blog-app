import { AxiosRequestConfig } from 'axios';
import axiosInstance from './axiosInstance';

export default class APIClient<G> {
  getPost = async <P>(params: AxiosRequestConfig<P>) => {
    const response = await axiosInstance.get<G>('/posts', { ...params });
    return response.data;
  };
}
