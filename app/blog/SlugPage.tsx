import BlurredImage from '@/components/blurred-image';
import { Post } from '@/types';

const SlugPage = ({ data }: { data: Post }) => {
  return (
    <div className='pt-10'>
      <div className='container py-8 '>
        <BlurredImage
          ration={16 / 6}
          width={940}
          height={480}
          src={String(data.id)}
        />
      </div>

      <div className='border-y'>
        <div className='container py-14 text-center'>
          <p className='font-normal xl:text-[80px]'>{data.title}</p>
        </div>
      </div>
      <div className='border-b'>
        <div className='container py-14 text-center'>
          <p className='text-balance text-lg font-normal'>{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
