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
    <div className="flex w-full flex-col items-center justify-between gap-2 py-5 md:flex-row">
      <div className="flex flex-wrap gap-2">
        {tagParams &&
          tagParams.map((tag) => (
            <Button
              onClick={() => removeTagFromParams(tag)}
              variant="outline"
              className="gap-2 rounded-full px-3"
              key={tag}
            >
              {tag}
              <XCircle className="size-5" />
            </Button>
          ))}
      </div>
      {tagParams && tagParams.length > 1 && (
        <div>
          <Button
            onClick={clearAllTags}
            variant="outline"
            size="sm"
            className="gap-2 rounded-full border-primary px-2 py-1 text-xs"
          >
            Очистить теги
            <XCircle className="size-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Tags;
