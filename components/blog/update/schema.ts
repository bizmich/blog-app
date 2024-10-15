import { z } from 'zod';

export const BlogSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  description: z.string().min(3, {
    message: 'Description must be at least 3 characters.',
  }),
});
