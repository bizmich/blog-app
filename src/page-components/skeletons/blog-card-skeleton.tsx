import { cn } from '@lib';
import { PlaceholderImage } from '@shared';
import {
  AspectRatio,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Skeleton,
} from '@ui';
import React from 'react';

interface ProductCardSkeletonProps
  extends React.ComponentPropsWithoutRef<typeof Card> {}

export const BlogCardSkeleton = ({
  className,
  ...props
}: ProductCardSkeletonProps) => {
  return (
    <Card
      className={cn('h-full overflow-hidden rounded-sm', className)}
      {...props}
    >
      <CardHeader className="border-b">
        <AspectRatio ratio={6 / 4}>
          <PlaceholderImage className="rounded-none" isSkeleton asChild />
        </AspectRatio>
      </CardHeader>
      <CardContent className="space-y-2.5 p-4">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/6" />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 p-4 pt-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-5 w-16 shrink-0 rounded-full" />
        ))}
      </CardFooter>
    </Card>
  );
};
