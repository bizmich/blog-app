import { axiosInstance } from '@services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { IShowBlogFormTypes } from './types';
import { toast } from 'sonner';

export const useShowBlog = (id: string) => {
  return useQuery<IShowBlogFormTypes>({
    queryKey: ['blogs', id],
    queryFn: async () =>
      await axiosInstance.get(`/blogs/${id}`).then((response) => response.data),
  });
};

export const useUpdateBlog = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (form: IShowBlogFormTypes) =>
      await axiosInstance
        .put(`/blogs/${id}`, form)
        .then((response) => response.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
    onError: (error) => {
      console.log('error:', error);

      toast.error(error.message);
    },
  });
};
