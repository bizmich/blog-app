import MainNavigation from './main-nav';
import { ModeToggle } from './mode-toggle';

const SiteHeader = () => {
  return (
    <header className='flex w-full items-center justify-between px-5 py-3'>
      <MainNavigation />
      <ModeToggle />
    </header>
  );
};

export default SiteHeader;
