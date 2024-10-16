import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@ui';
import { UpdateBlogForm } from './form';
import type { IUpdateBlogFormProps } from './types';

export const UpdateBlogFormDialog = ({
  open,
  setOpen,
}: IUpdateBlogFormProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update</DialogTitle>
        </DialogHeader>
        <UpdateBlogForm setOpen={setOpen} open={open} />
      </DialogContent>
    </Dialog>
  );
};
