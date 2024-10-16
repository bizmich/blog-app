'use client';
import { Button } from '@ui';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export const AuthActions = () => {
  const { status } = useSession();
  return (
    <div>
      {status === 'authenticated' ? (
        <Button className="h-8 text-xs" asChild>
          <Link href="/logout">Sign Out</Link>
        </Button>
      ) : (
        <Button className="h-8 text-xs" asChild>
          <Link href="/login">Sign In</Link>
        </Button>
      )}
    </div>
  );
};
