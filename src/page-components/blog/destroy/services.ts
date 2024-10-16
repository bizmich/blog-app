'use client';
import { axiosInstance } from '@services';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useDestroyBlog = () => {
  const { push } = useRouter();
  return useMutation({
    mutationFn: async (id: string) =>
      await axiosInstance
        .delete(`/blogs/${id}`)
        .then((response) => response.data),
    onSuccess: () => {
      push('/');
    },
  });
};
