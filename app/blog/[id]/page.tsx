import { apiService } from '@/services/apiService';
import SlugPage from '../SlugPage';
import { Post } from '@/types';
import { Metadata } from 'next';
import { env } from '@/lib/env.mjs';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_API_BASE_URL),
  title: 'A Blog page',
  description: 'Single blog page',
};
const BlogSlugPage = async ({ params }: { params: { id: string } }) => {
  const data = await apiService.getSinglePost<Post>(params.id);

  return <SlugPage data={data} />;
};

export default BlogSlugPage;
