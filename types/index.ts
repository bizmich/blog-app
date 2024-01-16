export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  tags: string[];
}

export interface BlogItemProps {
  id: number | string;
  title: string;
  description: string;
  tags: string[];
}
