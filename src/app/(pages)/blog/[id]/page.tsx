import { env } from '@lib';
import { ShowBlog, type IBlog } from '@page-components';
import { axiosInstance } from '@services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_API_BASE_URL),
  title: 'A Blog page',
  description: 'Single blog page',
};
const BlogSlugPage = async ({ params }: { params: { id: string } }) => {
  const data = await axiosInstance
    .get<IBlog>(`/blogs/${params.id}`)
    .then((response) => response.data);

  return <ShowBlog data={data} />;
};

export default BlogSlugPage;
