import { axiosInstance } from '@/services/axiosInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IShowBlogFormTypes } from './types';

export const useShowBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (form: IShowBlogFormTypes) =>
      await axiosInstance
        .post(`/blogs`, form)
        .then((response) => response.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};
