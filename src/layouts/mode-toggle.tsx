'use client';

import { useTheme } from 'next-themes';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@ui';
import { Icons } from '@icons';

export const ModeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icons.sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icons.moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          День
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Ночь
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          Системный
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
