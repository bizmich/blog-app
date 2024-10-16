'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { useBlog } from './services';
import { BlogCardSkeleton } from '../skeletons';
import { NoFound, Pagination } from '@shared';
import { BlogCard } from './card';

export const BlogList = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const page = searchParams.get('page') ?? '1';
  const perPage = searchParams?.get('per_page') ?? '10';

  const { data, isLoading, error } = useBlog({
    perPage,
    page,
    query,
  });

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
    [],
  );

  return (
    <div>
      <div className="my-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data &&
          data?.data.map((blog) => (
            <BlogCard
              key={blog.id}
              description={blog.description}
              tags={blog.tags}
              id={blog.id}
              title={blog.title}
            />
          ))}
        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => <BlogCardSkeleton key={i} />)}
      </div>
      {error && (
        <NoFound
          title="Произошла ошибка"
          description="Попробуйте обновить страницу"
        />
      )}
      {data?.data.length === 0 && !isLoading && !error && (
        <NoFound
          title="По вашему запросу ничего не найдено"
          description="Попробуйте найти что то другое"
        />
      )}

      {/* У jsonplaceholder нету totalPageCount  */}
      {data && data?.total >= Number(perPage) && !isLoading && !error && (
        <Pagination
          pageCount={data.total}
          page={page}
          perPage={perPage}
          createQueryString={createQueryString}
        />
      )}
    </div>
  );
};
