'use client';
import type { IBlog } from '@/components/blog/types';
import BlurredImage from '@/components/blurred-image';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { IDialogState } from '@/types';
import { Settings } from 'lucide-react';
import { useState } from 'react';
import { DestroyBlog } from '../destroy';

export const ShowBlog = ({ data }: { data: IBlog }) => {
  const [open, setOpen] = useState<IDialogState>('closed');
  const [item, setItem] = useState<IBlog | string>('');

  const onSelected = ({
    action,
    data,
  }: {
    action: IDialogState;
    data: IBlog | string;
  }) => {
    setItem(data);
    setOpen(action);
  };

  return (
    <div className="pt-10">
      <div className="container py-8">
        <div className="mb-2 flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                <Settings className="size-4" />
                Edit
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Update</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  onSelected({ action: 'destroy', data: String(data.id) });
                }}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="relative overflow-hidden rounded-md">
          <BlurredImage
            ration={16 / 6}
            width={940}
            height={480}
            src={String(data.id)}
          />
        </div>
      </div>

      <div className="border-y">
        <div className="container py-14 text-center">
          <p className="font-normal xl:text-[80px]">{data.title}</p>
        </div>
      </div>
      <div className="border-b">
        <div className="container py-14 text-center">
          <p className="text-balance text-lg font-normal">{data.description}</p>
        </div>
      </div>

      <DestroyBlog
        open={open === 'destroy'}
        setOpen={() => setOpen('closed')}
        id={item as string}
      />
    </div>
  );
};
