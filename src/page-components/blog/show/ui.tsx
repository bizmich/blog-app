'use client';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@ui';
import type { IDialogState } from '@types';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { DestroyBlog } from '../destroy';
import { UpdateBlogFormDialog } from '../update';
import type { IBlog } from '../types';
import { getFormattedDateFromTimestamp } from '@lib';
import { BlurredImage } from '@shared';

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
        <div className="mb-2 flex justify-between">
          <p className="text-muted-foreground">
            {getFormattedDateFromTimestamp(data?.createdAt)}
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Pencil className="mr-2 h-4 w-4" /> Edit
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => {
                  onSelected({ action: 'update', data: String(data) });
                }}
              >
                Update
              </DropdownMenuItem>
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
            alt={data?.title ?? 'wallpaper'}
            ration={16 / 6}
            width={940}
            height={480}
            src={String(data.id)}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 326px"
            priority
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
      <UpdateBlogFormDialog
        open={open === 'update'}
        setOpen={() => setOpen('closed')}
      />
    </div>
  );
};
