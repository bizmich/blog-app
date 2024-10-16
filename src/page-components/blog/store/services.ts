import { axiosInstance } from '@services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IShowBlogFormTypes } from './types';

export const useStoreBlog = () => {
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
