'use client';
import { createUrl } from '@/lib/utils';

import ReactPaginate from 'react-paginate';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Icons } from './icons';
import { Button, buttonVariants } from './ui/button';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const Pagination = ({ totalPages = 100 }: { totalPages: string | number }) => {
  const { push } = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const activePage: number = params.get('page')
    ? Number(params.get('page'))
    : 0;
  const pageSize: number = params.get('take') ? Number(params.get('take')) : 10;

  const handleClick = (selected: string, query: string) => {
    if (selected) {
      const newParams = new URLSearchParams(params.toString());

      if (selected) {
        newParams.set(query, String(selected));
      } else {
        newParams.delete(query);
      }

      push(createUrl(pathname, newParams));
    }
  };

  if (!totalPages && totalPages === 0) return null;

  return (
    <div className='flex w-full flex-wrap justify-center gap-10 md:justify-between'>
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
        onPageChange={(e) => handleClick(String(e.selected + 1), 'page')}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        pageCount={Number(Math.ceil(Number(totalPages) / pageSize))}
        previousLabel={
          <Button size='sm' variant='secondary'>
            <Icons.chevronLeft size={20} />
            <span className='sr-only'>pagination-left-button</span>
          </Button>
        }
        renderOnZeroPageCount={null}
      />
      <div className='flex items-center gap-2'>
        <Label>Количество постов:</Label>
        <Select
          defaultValue={String(pageSize)}
          onValueChange={(e) => handleClick(e, 'take')}
        >
          <SelectTrigger className='w-auto'>
            <SelectValue placeholder='Количество постов' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='10'>10</SelectItem>
            <SelectItem value='20'>20</SelectItem>
            <SelectItem value='50'>50</SelectItem>
            <SelectItem value='100'>100</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
export default Pagination;
