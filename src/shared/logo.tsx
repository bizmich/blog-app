import Link from 'next/link';
import { Button } from './ui/button';

export const Logo = () => {
  return (
    <Button variant="ghost" asChild className="text-3xl font-light">
      <Link href="/">Blogs</Link>
    </Button>
  );
};
