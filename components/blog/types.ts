export interface IBlog {
  id: number;
  title: string;
  description: string;
  tags: ITagType[];
  createdAt: string;
  updatedAt: string;
}

export interface ITagType {
  name: string;
}

export interface IBlogQueryParamsTypes {
  query: string;
  page: string;
  perPage: string;
}
