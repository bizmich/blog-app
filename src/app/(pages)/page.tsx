import { BlogList, Tags } from '@page-components';
import { SearchInput } from '@shared';

export default function Home() {
  return (
    <section className="container py-10">
      <SearchInput />
      <Tags />
      <BlogList />
    </section>
  );
}
