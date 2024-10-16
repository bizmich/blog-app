import { useQuery } from '@tanstack/react-query';
import type { IBlogFetchResponseProps, IBlogQueryParamsTypes } from './types';
import { axiosInstance } from '@/services/axiosInstance';

export const useBlog = (params: IBlogQueryParamsTypes) => {
  return useQuery<IBlogFetchResponseProps>({
    queryKey: ['blogs'],
    queryFn: async () =>
      await axiosInstance
        .get('/blogs', { params })
        .then((response) => response.data),
  });
};
