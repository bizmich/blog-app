'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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
import { BlogSchema } from './schema';
import { useShowBlog, useUpdateBlog } from './services';
import type { IUpdateBlogFormProps } from './types';
import { useParams } from 'next/navigation';
import { use, useEffect } from 'react';

export const UpdateBlogForm = ({ setOpen }: IUpdateBlogFormProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = useShowBlog(id);

  const form = useForm<z.infer<typeof BlogSchema>>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const updateBlog = useUpdateBlog(id);

  const onCloseDialog = () => {
    setOpen(false);
  };

  function onSubmit(data: z.infer<typeof BlogSchema>) {
    updateBlog.mutate(data, {
      onSuccess: () => {
        form.reset();
        onCloseDialog();
      },
    });
  }

  useEffect(() => {
    if (data) {
      form.reset({
        description: data.description,
        title: data.title,
      });
    }
  }, [data]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-1">
          <Button variant="ghost" type="button" onClick={onCloseDialog}>
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};
