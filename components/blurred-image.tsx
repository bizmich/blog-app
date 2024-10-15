'use client';
import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';
import React, { useState, type ComponentProps } from 'react';
import { getImageUrl } from '@/lib/utils';
import { PlaceholderImage } from './placeholder-image';

interface BlurImageProps extends ComponentProps<typeof Image> {
  ration: number;
}

const BlurredImage = ({
  alt,
  src,
  width,
  height,
  ration = 16 / 6,
  sizes,
  priority,
}: BlurImageProps) => {
  const [loading, setLoading] = useState(true);
  return (
    <AspectRatio ratio={ration} className="relative">
      <Image
        src={src ? getImageUrl(src as string, width, height) : ''}
        fill
        onLoad={() => setLoading(false)}
        alt={alt || ''}
        className="rounded-lg object-cover object-center"
        sizes={sizes}
        priority={priority}
      />
      {loading && <PlaceholderImage isSkeleton ratio={ration} />}
    </AspectRatio>
  );
};

export default BlurredImage;
