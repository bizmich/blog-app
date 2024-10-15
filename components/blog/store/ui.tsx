import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { StoreBlogForm } from './form';
import type { IStoreBlogFormDialogProps } from './types';

export const StoreBlogFormDialog = ({
  open,
  setOpen,
}: IStoreBlogFormDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Создать</DialogTitle>
        </DialogHeader>
        <StoreBlogForm setOpen={setOpen} open={open} />
      </DialogContent>
    </Dialog>
  );
};
