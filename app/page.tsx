import BlogList from '@/components/blog/blog-list';
import Pagination from '@/components/pagination';
import SearchInput from '@/components/search-input';
import Tags from '@/components/tag';

export default function Home() {
  return (
    <section className='container py-10'>
      <SearchInput />
      <Tags />
      <BlogList />
      {/* У jsonplaceholder нету totalPageCount  */}
      <Pagination totalPages={100} />
    </section>
  );
}
