import { Post } from '@/types';
import APIClient from './apiClient';

export const apiService = new APIClient<Post[]>();
