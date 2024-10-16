import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import { siteConfig } from '@config';
import { Providers, ReactQueryProvider, ThemeProvider } from '@providers';
import { cn, env } from '@lib';
import { Toaster } from '@ui';

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
    <html lang="ru" suppressHydrationWarning>
      <head />
      <Providers>
        <ReactQueryProvider>
          <body
            className={cn(
              'flex min-h-screen flex-col justify-between antialiased',
              inter.className,
            )}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <main className="min-h-full flex-auto">{children}</main>
            </ThemeProvider>
            <Toaster />
          </body>
        </ReactQueryProvider>
      </Providers>
    </html>
  );
}
