import * as z from 'zod';

export const authSchema = z.object({
  email: z
    .string({
      description: 'Неверные почта или пароль',
    })
    .email(),
  password: z.string(),
});
