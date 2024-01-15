import axiosInstance from './axiosInstance';

export default class APIClient {
  getPost = () => {
    return axiosInstance.get('/posts');
  };
}
