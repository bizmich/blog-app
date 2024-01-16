import Link from 'next/link';
import Logo from '../logo';
import { Button } from '../ui/button';

const MainNavigation = () => {
  return (
    <div className='flex gap-5'>
      <Logo />
      <nav className='text-sm'>
        <Button asChild variant='ghost'>
          <Link href='/'>Главное</Link>
        </Button>
      </nav>
    </div>
  );
};

export default MainNavigation;
