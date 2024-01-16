'use client';

import usePosts from '@/services/hooks/usePosts';
import { Post } from '@/types';
import { useSearchParams } from 'next/navigation';

import { useMemo } from 'react';
import BlogItem from './blog-item';

const BlogList = () => {
  const pageSize = 10;
  const params = useSearchParams();
  const page = params.get('page') ? Number(params.get('page')) : 1;
  const query = params.get('q') ? params.get('q')?.toString() : '';

  const { data } = usePosts({
    page,
    pageSize,
  });

  const filterPosts = (
    items: Post[],
    search: string = '',
    tags: string[]
  ): Post[] => {
    return items.filter((post) => {
      const searchCondition =
        !search || post.title.toLowerCase().includes(search.toLowerCase());
      const tagsCondition =
        tags.length === 0 || tags.every((tag) => post.tags.includes(tag));
      return searchCondition && tagsCondition;
    });
  };

  const memoisedFilteredPost = useMemo(() => {
    const tagParams = params.get('tag')
      ? params.get('tag')?.toString()?.split(',')
      : [];

    return data ? filterPosts(data, query, tagParams!) : [];
  }, [data, query, params]);

  return (
    <div>
      <div
        className='my-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4'
      >
        {data &&
          memoisedFilteredPost?.map((pos) => (
            <BlogItem
              key={pos.id}
              description={pos.body}
              tags={pos.tags}
              id={pos.id}
              title={pos.title}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
