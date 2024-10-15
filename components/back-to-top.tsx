'use client';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Icons } from './icons';

const BackToTop = () => {
  const [isBackTop, setBackTop] = useState(false);

  useEffect(() => {
    const backToTopAppear = () => {
      setBackTop(window.scrollY >= 200);
    };

    window.addEventListener('scroll', backToTopAppear);

    return () => {
      window.removeEventListener('scroll', backToTopAppear);
    };
  }, []);

  const backToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {isBackTop ? (
        <Button
          onClick={backToTop}
          className="fixed bottom-14 right-5 top-auto z-40"
        >
          <Icons.backToTop />
        </Button>
      ) : null}
    </>
  );
};

export default BackToTop;
