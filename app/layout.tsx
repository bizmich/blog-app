import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from '@/components/providers/react-query-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import React from 'react';
import { siteConfig } from '@/config/site';
import SiteHeader from '@/components/layouts/site-header';
import SiteFooter from '@/components/layouts/site-footer';
import { cn } from '@/lib/utils';
import { env } from '@/lib/env.mjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_API_BASE_URL),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['nextjs', 'react', 'react server components', 'blogs-app', 'alif'],
  authors: [
    {
      name: 'abdullo@bizmich',
      url: 'https://blog-app-alif.vercel.app',
    },
  ],
  creator: 'Abdullo',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@bizmich',
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <head />
      <ReactQueryProvider>
        <body
          className={cn(
            'min-h-screen flex flex-col justify-between antialiased',
            inter.className
          )}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <SiteHeader />
            <main className='min-h-full flex-auto'>{children}</main>
            <SiteFooter />
          </ThemeProvider>
        </body>
      </ReactQueryProvider>
    </html>
  );
}
