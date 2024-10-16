'use client';
import { ArrowRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useRef } from 'react';
import { createUrl } from '@lib';
import { Icons } from '@icons';
import { Button } from '@ui';

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = useRef<HTMLInputElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/', newParams));
  }
  return (
    <form
      onSubmit={onSubmit}
      className="relative flex w-full items-center justify-between overflow-hidden rounded-full border border-primary ring-primary has-[:focus]:ring-[1px]"
    >
      <div className="absolute inset-y-0 left-0 z-10 flex items-center justify-center px-4">
        <Icons.search
          onClick={() => {
            ref.current?.focus();
          }}
          className="box-content size-7 stroke-1"
        />
      </div>
      <input
        ref={ref}
        autoFocus
        autoComplete="off"
        name="search"
        key={searchParams?.get('q')}
        defaultValue={searchParams?.get('q') || ''}
        type="search"
        className="h-16 w-full appearance-none bg-background px-14 text-sm font-normal text-foreground focus-visible:outline-none active:border-0 xl:text-2xl"
        placeholder="Найти по имени"
      />
      <div className="absolute inset-y-0 right-0 z-10 flex items-center justify-center pr-4">
        <Button
          type="submit"
          variant="outline"
          className="gap-2 rounded-full border-primary xl:px-14 xl:py-6"
        >
          Найти
          <ArrowRight size={18} />
        </Button>
      </div>
    </form>
  );
};
