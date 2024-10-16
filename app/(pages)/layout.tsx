import BackToTop from '@/components/back-to-top';
import SiteFooter from '@/components/layouts/site-footer';
import SiteHeader from '@/components/layouts/site-header';
import type { PropsWithChildren } from 'react';

export default async function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <SiteHeader />
      <div>{children}</div>
      <SiteFooter />
      <BackToTop />
    </div>
  );
}
