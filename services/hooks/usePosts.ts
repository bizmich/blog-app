import { useQuery } from '@tanstack/react-query';
import { apiService } from '../apiService';
import { tags } from '@/config/tags';

export interface IPost {
  page: number;
  pageSize: number;
}

export default function usePosts(form: IPost) {
  return useQuery({
    queryKey: ['posts', form.page],
    queryFn: () =>
      apiService.getPost({
        params: {
          _start: (form.page - 1) * form.pageSize,
          _limit: form.pageSize,
        },
      }),
    select: (data) => {
      return data.map((post) => {
        const randomNumber = Math.floor(Math.random() * 5);

        return { ...post, tags: tags[randomNumber] };
      });
    },
    refetchOnWindowFocus: false,
  });
}
