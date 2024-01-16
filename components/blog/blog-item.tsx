import useTags from '@/hooks/useTags';
import { truncate } from '@/lib/utils';
import { BlogItemProps } from '@/types';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Link from 'next/link';

const BlogItem = ({ id, title, description, tags }: BlogItemProps) => {
  const { handleSetTagsToParams } = useTags();
  return (
    <Link href={`/blog/${id}`}>
      <Card>
        <CardHeader>
          <Image
            src={`https://via.assets.so/game.png?id=${id}&q=95&w=326&h=142&fit=cover`}
            alt='image-placeholder'
            width={326}
            height={150}
            className='rounded-md'
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
