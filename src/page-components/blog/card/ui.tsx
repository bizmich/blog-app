import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Badge,
} from '@ui';
import type { IBlogCardProps } from './types';
import { truncate } from '@lib';
import { BlurredImage } from '@shared';

export const BlogCard = ({ id, title, description, tags }: IBlogCardProps) => {
  return (
    <Link href={`/blog/${id}`}>
      <Card className="h-full">
        <CardHeader>
          <BlurredImage
            alt={title}
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
