import { getImageUrl } from '@/lib/utils';
import { Post } from '@/types';
import Image from 'next/image';

const SlugPage = ({ data }: { data: Post }) => {
  return (
    <div className='pt-10'>
      <div className='container relative h-[480px] w-full'>
        <Image src={getImageUrl(data.id, 940, 480)} fill alt={data.title} />
      </div>

      <div className='border-y'>
        <div className='container py-14 text-center'>
          <p className='text-[80px] font-normal'>{data.title}</p>
        </div>
      </div>
      <div className='border-b'>
        <div className='container py-14'>
          <p className='text-balance text-lg font-normal'>{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
