import MainNavigation from './main-nav';
import { ModeToggle } from './mode-toggle';

const SiteHeader = () => {
  return (
    <header className='sticky inset-x-0 top-0 z-50 flex w-full items-center justify-between  bg-background px-5 py-3'>
      <MainNavigation />
      <ModeToggle />
    </header>
  );
};

export default SiteHeader;
