import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { Icons } from '../icons';

const SiteFooter = () => {
  return (
    <footer className='bg-secondary py-10 text-secondary-foreground'>
      <div className='container flex items-center gap-5'>
        <p>Follow me:</p>
        <ul className='flex items-center gap-5'>
          <li>
            <Link target='_blank' href={siteConfig.links.github}>
              <Icons.gitHub className='size-6' />
            </Link>
          </li>
          <li>
            <Link target='_blank' href={siteConfig.links.twitter}>
              <Icons.twitter className='size-6' />
            </Link>
          </li>
          <li>
            <Link target='_blank' href={siteConfig.links.discord}>
              <Icons.discord className='size-6' />
            </Link>
          </li>
          <li>
            <Link target='_blank' href={siteConfig.links.linkedin}>
              <Icons.linkedin className='size-6' />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default SiteFooter;
