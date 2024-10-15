import { useQuery } from '@tanstack/react-query';
import type { IBlog, IBlogQueryParamsTypes } from './types';
import { axiosInstance } from '@/services/axiosInstance';

export const useBlog = (params: IBlogQueryParamsTypes) => {
  return useQuery<IBlog[]>({
    queryKey: ['blogs'],
    queryFn: async () =>
      await axiosInstance
        .get('/blogs', { params })
        .then((response) => response.data),
  });
};
