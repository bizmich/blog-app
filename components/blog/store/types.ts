import type { IStateController } from '@/types';
import type { z } from 'zod';
import type { BlogSchema } from './schema';

export interface IStoreBlogFormDialogProps extends IStateController {}
export interface IStoreBlogFormProps extends IStateController {}

export type IShowBlogFormTypes = z.infer<typeof BlogSchema>;
