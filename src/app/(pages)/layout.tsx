import { SiteFooter, SiteHeader } from '@layout';
import { BackToTop } from '@shared';
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
