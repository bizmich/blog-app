'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { authSchema } from './schema';
import { ILoginForm } from './types';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@ui';

import { useForm } from 'react-hook-form';
import { PasswordInput } from '@shared';
import { Icons } from '@icons';

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const [isPending, startTransition] = useTransition();

  const form = useForm<ILoginForm>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data: ILoginForm) {
    startTransition(async () => {
      await signIn('credentials', {
        ...data,
        redirect: false,
      }).then((response) => {
        if (!response?.error) {
          router.push('/');
        } else {
          setError('Неправильный пароль или логин');
        }
      });
    });
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Почта</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@team.alif.tj"
                  className="w-full"
                  {...field}
                />
              </FormControl>

              <FormMessage>{error}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button size="lg" type="submit" disabled={isPending}>
          {isPending && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Вход
          <span className="sr-only">Sign in</span>
        </Button>
      </form>
    </Form>
  );
};
