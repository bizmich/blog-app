'use client';
import { ArrowRight } from 'lucide-react';
import { Icons } from './icons';
import { Button } from './ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { createUrl } from '@/lib/utils';

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

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
      className='flex items-center gap-2 rounded-full border border-primary px-5 py-4 ring-black transition-all duration-200 has-[:focus]:ring-2 xl:gap-5 xl:pl-8'
    >
      <Icons.search size={35} className='box-content' />
      <input
        autoFocus
        autoComplete='off'
        name='search'
        key={searchParams?.get('q')}
        defaultValue={searchParams?.get('q') || ''}
        type='search'
        className='w-full appearance-none bg-background text-sm font-normal text-foreground focus-visible:outline-none active:border-0 xl:text-2xl '
        placeholder='Найти по имени'
      />
      <Button
        type='submit'
        variant='outline'
        className='gap-2 rounded-full border-primary xl:px-14 xl:py-6'
      >
        Найти
        <ArrowRight size={18} />
      </Button>
    </form>
  );
};

export default SearchInput;
