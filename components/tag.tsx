'use client';
import useTags from '@/hooks/useTags';
import { XCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Button } from './ui/button';

const Tags = () => {
  const searchParams = useSearchParams();
  const { removeTagFromParams, clearAllTags } = useTags();
  const tagParams = searchParams.get('tag')
    ? searchParams.get('tag')?.toString()?.split(',')
    : [];

  return (
    <div className='flex w-full items-center justify-between gap-2 py-5'>
      <div className='flex flex-wrap gap-2'>
        {tagParams &&
          tagParams.map((tag) => (
            <Button
              onClick={() => removeTagFromParams(tag)}
              variant='outline'
              className='gap-2 rounded-full px-3'
              key={tag}
            >
              {tag}
              <XCircle className='size-5' />
            </Button>
          ))}
      </div>
      {tagParams && tagParams.length > 1 && (
        <div>
          <Button
            onClick={clearAllTags}
            variant='outline'
            className='gap-2 rounded-full px-3'
          >
            <XCircle className='size-5' />
            Очистить теги
          </Button>
        </div>
      )}
    </div>
  );
};

export default Tags;
