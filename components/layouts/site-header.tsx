'use client';
import { cn } from '@/lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import MainNavigation from './main-nav';
import { ModeToggle } from './mode-toggle';

const SiteHeader = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

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
        'sticky inset-x-0 top-0 z-50 flex w-full items-center justify-between  bg-background px-5 py-3',
        {
          'shadow-sm shadow-primary/50': scrollPosition > 100 && !hidden,
        }
      )}
    >
      <MainNavigation />
      <ModeToggle />
    </motion.header>
  );
};

export default SiteHeader;
