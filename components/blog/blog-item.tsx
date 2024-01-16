import useTags from '@/hooks/useTags';
import { truncate } from '@/lib/utils';
import { BlogItemProps } from '@/types';
import Link from 'next/link';
import BlurredImage from '../blurred-image';
import { Badge } from '../ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

const BlogItem = ({ id, title, description, tags }: BlogItemProps) => {
  const { handleSetTagsToParams } = useTags();
  return (
    <Link href={`/blog/${id}`}>
      <Card className='h-full'>
        <CardHeader>
          <BlurredImage
            ration={6 / 3}
            src={String(id)}
            width={326}
            height={142}
          />
        </CardHeader>
        <CardContent>
          <CardTitle>{truncate(title, 20)}</CardTitle>
          <CardDescription className='py-4'>
            {truncate(description, 18)}
          </CardDescription>
        </CardContent>
        <CardFooter
          onClick={(e) => {
            e.stopPropagation();
            e.nativeEvent.preventDefault();
          }}
          className='flex  flex-wrap gap-2 text-balance'
        >
          {tags.map((tag) => (
            <Badge
              onClick={() => handleSetTagsToParams(tag)}
              variant='secondary'
              className='cursor-pointer'
              key={tag}
            >
              {tag}{' '}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogItem;
