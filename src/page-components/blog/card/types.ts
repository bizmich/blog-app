import type { ITagType } from '../types';

export interface IBlogCardProps {
  id: number | string;
  title: string;
  description: string;
  tags: ITagType[];
}
