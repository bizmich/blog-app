'use client';

import { forwardRef, useState } from 'react';
import { Input, type InputProps } from './ui/input';
import { cn } from '@lib';
import { Button } from '@ui';
import { Icons } from '@icons';

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn('w-full pr-10', className)}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-1 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={props.value === '' || props.disabled}
        >
          {showPassword ? (
            <Icons.eye className="size-4" aria-hidden="true" />
          ) : (
            <Icons.eyeOff className="size-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? 'Hide password' : 'Show password'}
          </span>
        </Button>
      </div>
    );
  },
);
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
