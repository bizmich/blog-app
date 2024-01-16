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
      className='flex items-center gap-5 rounded-full border border-primary py-4 pl-10 pr-5 ring-black transition-all duration-200  has-[:focus]:ring-2'
    >
      <Icons.search size={35} />
      <input
        autoFocus
        name='search'
        key={searchParams?.get('q')}
        defaultValue={searchParams?.get('q') || ''}
        type='text'
        className='w-full appearance-none bg-background text-2xl font-normal text-foreground focus-visible:outline-none active:border-0 '
        placeholder='Найти по имени'
      />
      <Button
        type='submit'
        variant='outline'
        className='gap-2 rounded-full border-primary px-14 py-6'
      >
        Найти
        <ArrowRight size={18} />
      </Button>
    </form>
  );
};

export default SearchInput;
