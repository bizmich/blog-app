export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  tags: string[];
}

export interface IStateController {
  open: boolean;
  setOpen: (state: boolean) => void;
}
export type IDialogState =
  | 'update'
  | 'destroy'
  | 'store'
  | 'changePassword'
  | 'closed'
  | 'termination';
