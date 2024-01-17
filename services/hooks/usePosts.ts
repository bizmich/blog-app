import { useQuery } from '@tanstack/react-query';
import { apiService } from '../apiService';
import { tags } from '@/config/tags';
import { Post } from '@/types';

export interface IPost {
  perPage: string;
  page: string;
}

export default function usePosts(form: IPost) {
  return useQuery<Post[], Error>({
    queryKey: ['posts', form],
    queryFn: () =>
      apiService.getPost<Post[], IPost>({
        params: {
          _start: (Number(form.page) - 1) * Number(form.perPage),
          _limit: form.perPage,
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
