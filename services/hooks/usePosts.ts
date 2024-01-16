import { useQuery } from '@tanstack/react-query';
import { apiService } from '../apiService';
import { tags } from '@/config/tags';
import { Post } from '@/types';

export interface IPost {
  page: number;
  pageSize: number;
}

export default function usePosts(form: IPost) {
  return useQuery<Post[], Error>({
    queryKey: ['posts', form.page],
    queryFn: () =>
      apiService.getPost<Post[], IPost>({
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
    retryOnMount: false,
    refetchIntervalInBackground: false,
  });
}
