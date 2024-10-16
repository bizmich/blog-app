import { useMutation } from '@tanstack/react-query';
import { signOut } from 'next-auth/react';

export const useLogout = () => {
  return useMutation({
    mutationFn: async () => {
      await signOut({ redirect: true, callbackUrl: '/login' });
    },
  });
};
