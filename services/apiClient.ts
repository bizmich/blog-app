import { AxiosRequestConfig } from 'axios';
import axiosInstance from './axiosInstance';

export default class APIClient {
  getPost = async <G, P>(params: AxiosRequestConfig<P>) => {
    const response = await axiosInstance.get<G>('/posts', { ...params });
    return response.data;
  };

  getSinglePost = async <G>(id: string) => {
    const response = await axiosInstance.get<G>(`/posts/${id}`);
    return response.data;
  };
}
