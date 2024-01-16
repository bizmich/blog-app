import BlogList from '@/components/blog/blog-list';
import SearchInput from '@/components/search-input';
import Tags from '@/components/tag';

export default function Home() {
  return (
    <section className='container py-10'>
      <SearchInput />
      <Tags />
      <BlogList />
    </section>
  );
}
