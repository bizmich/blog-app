'use client';
import { createUrl } from '@/lib/utils';

import ReactPaginate from 'react-paginate';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button, buttonVariants } from './ui/button';
import { Icons } from './icons';

const Pagination = ({ totalPages = 100 }: { totalPages: string | number }) => {
  const { push } = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const activePage: number = params.get('page')
    ? Number(params.get('page'))
    : 0;

  const handleClick = ({ selected }: { selected: number }) => {
    const value = selected + 1;

    if (value) {
      const newParams = new URLSearchParams(params.toString());

      if (value) {
        newParams.set('page', String(value));
      } else {
        newParams.delete('page');
      }

      push(createUrl(pathname, newParams));
    }
  };

  if (!totalPages && totalPages === 0) return null;

  return (
    <div className='flex w-full justify-center'>
      <ReactPaginate
        pageClassName={buttonVariants({
          variant: 'ghost',
          size: 'sm',
        })}
        disableInitialCallback={true}
        initialPage={activePage}
        activeClassName='!bg-secondary '
        className='flex gap-2'
        breakLabel='...'
        nextLabel={
          <Button size='sm' variant='secondary'>
            <Icons.chevronRight size={20} />
            <span className='sr-only'>pagination-right-button</span>
          </Button>
        }
        onPageChange={handleClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        pageCount={Number(Math.ceil(Number(totalPages) / 10))}
        previousLabel={
          <Button size='sm' variant='secondary'>
            <Icons.chevronLeft size={20} />
            <span className='sr-only'>pagination-left-button</span>
          </Button>
        }
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
export default Pagination;
