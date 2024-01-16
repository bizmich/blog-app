'use client';
import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';
import React, { useState } from 'react';
import { getImageUrl } from '@/lib/utils';
import { PlaceholderImage } from './placeholder-image';

interface BlurredImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ration: number;
}
const BlurredImage = ({
  alt,
  src,
  width,
  height,
  ration = 16 / 6,
}: BlurredImageProps) => {
  const [loading, setLoading] = useState(true);
  return (
    <AspectRatio ratio={ration} className='relative'>
      <Image
        src={src ? getImageUrl(src, width, height) : ''}
        fill
        onLoad={() => setLoading(false)}
        alt={alt || ''}
        className='rounded-lg object-cover object-center'
      />
      {loading && <PlaceholderImage isSkeleton ratio={ration} />}
    </AspectRatio>
  );
};

export default BlurredImage;
