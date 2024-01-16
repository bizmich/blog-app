import { PlaceholderImage } from '@/components/placeholder-image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import React from 'react';

interface ProductCardSkeletonProps
  extends React.ComponentPropsWithoutRef<typeof Card> {}

export function BlogCardSkeleton({
  className,
  ...props
}: ProductCardSkeletonProps) {
  return (
    <Card
      className={cn('h-full overflow-hidden rounded-sm', className)}
      {...props}
    >
      <CardHeader className='border-b'>
        <AspectRatio ratio={6 / 4}>
          <PlaceholderImage className='rounded-none' isSkeleton asChild />
        </AspectRatio>
      </CardHeader>
      <CardContent className='space-y-2.5 p-4'>
        <Skeleton className='h-4 w-1/2' />
        <Skeleton className='h-4 w-1/6' />
      </CardContent>
      <CardFooter className='flex flex-wrap space-x-2 p-4 pt-1'>
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className='h-8 w-16 shrink-0 rounded-full' />
        ))}
      </CardFooter>
    </Card>
  );
}
