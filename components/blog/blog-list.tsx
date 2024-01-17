'use client';

import usePosts from '@/services/hooks/usePosts';
import { Post } from '@/types';
import { useSearchParams } from 'next/navigation';

import React, { useCallback, useMemo } from 'react';
import NoFound from '../no-found';
import Pagination from '../pagination';
import { BlogCardSkeleton } from '../skeletons/blog-card-skeleton';
import BlogItem from './blog-item';

const BlogList = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const page = searchParams.get('page') ?? '1';
  const perPage = searchParams?.get('per_page') ?? '10';

  const { data, isLoading, error } = usePosts({
    perPage,
    page,
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
    const tagParams = searchParams.get('tag')?.toString()?.split(',') ?? [];

    return data ? filterPosts(data, query, tagParams!) : [];
  }, [data, query, searchParams]);

  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams();

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    []
  );

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
        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => <BlogCardSkeleton key={i} />)}
      </div>
      {error && (
        <NoFound
          title='Произошла ошибка'
          description='Попробуйте обновить страницу'
        />
      )}
      {memoisedFilteredPost.length === 0 && !isLoading && !error && (
        <NoFound
          title='По вашему запросу ничего не найдено'
          description='Попробуйте найти что то другое'
        />
      )}

      {/* У jsonplaceholder нету totalPageCount  */}
      {memoisedFilteredPost.length >= 10 && !isLoading && !error && (
        <Pagination
          pageCount={100}
          page={page}
          perPage={perPage}
          createQueryString={createQueryString}
        />
      )}
    </div>
  );
};

export default BlogList;
