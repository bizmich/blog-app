import useTags from '@/hooks/useTags';
import { truncate } from '@/lib/utils';
import Link from 'next/link';
import BlurredImage from '../../blurred-image';
import { Badge } from '../../ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import type { IBlogCardProps } from './types';

const BlogItem = ({ id, title, description, tags }: IBlogCardProps) => {
  const { handleSetTagsToParams } = useTags();
  return (
    <Link href={`/blog/${id}`}>
      <Card className="h-full">
        <CardHeader>
          <BlurredImage
            ration={6 / 4}
            src={String(id)}
            width={326}
            height={142}
          />
        </CardHeader>
        <CardContent>
          <CardTitle>{truncate(title, 20)}</CardTitle>
          <CardDescription className="py-4">
            {truncate(description, 18)}
          </CardDescription>
        </CardContent>
        <CardFooter
          onClick={(e) => {
            e.stopPropagation();
            e.nativeEvent.preventDefault();
          }}
          className="flex flex-wrap gap-2 text-balance"
        >
          {tags.map((tag) => (
            <Badge
              onClick={() => handleSetTagsToParams(tag.name)}
              variant="secondary"
              className="cursor-pointer"
              key={tag.name}
            >
              {tag.name}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogItem;
