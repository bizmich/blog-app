'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { IDialogState } from '@types';
import { cn } from '@lib';
import { Button } from '@ui';
import { AuthActions, StoreBlogFormDialog } from '@page-components';
import { MainNavigation, ModeToggle } from '@layout';

export const SiteHeader = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState<IDialogState>('closed');

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setScrollPosition(latest);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={cn(
        'sticky inset-x-0 top-0 z-50 flex w-full items-center justify-between bg-background px-5 py-3',
        {
          'shadow-sm shadow-primary/50': scrollPosition > 100 && !hidden,
        },
      )}
    >
      <MainNavigation />
      <div className="flex items-center justify-center gap-2">
        <Button onClick={() => setOpen('store')} variant="ghost">
          <Plus className="size-4" />
          Add
        </Button>
        <AuthActions />
        <ModeToggle />
      </div>

      {open === 'store' && (
        <StoreBlogFormDialog
          open={open === 'store'}
          setOpen={() => setOpen('closed')}
        />
      )}
    </motion.header>
  );
};
