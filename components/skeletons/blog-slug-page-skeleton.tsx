import { PlaceholderImage } from '../placeholder-image';
import { Skeleton } from '../ui/skeleton';

const BlogSlugPageSkeleton = () => {
  return (
    <div className='pt-10'>
      <div className='container py-8 '>
        <PlaceholderImage isSkeleton ratio={16 / 6} />
      </div>

      <div className='border-y'>
        <div className='container py-14 text-center'>
          <Skeleton className='mx-auto w-1/2 font-normal xl:h-[80px]' />
        </div>
      </div>
      <div className='border-b'>
        <div className='container space-y-3 py-14'>
          <Skeleton className='mx-auto h-5 w-1/2 text-balance text-center text-lg font-normal' />
          <Skeleton className='mx-auto h-5 w-1/3 text-balance text-center text-lg font-normal' />
          <Skeleton className='mx-auto h-5 w-2/3 text-balance text-center text-lg font-normal' />
        </div>
      </div>
    </div>
  );
};

export default BlogSlugPageSkeleton;
