'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Generated Image Mapping
 * Auto-generated from image generation script
 */
const IMAGE_MAP: Record<string, string> = {
  'hero-meditation-circle': '/images/hero-meditation-circle.png',
  'pillar-grounded-love': '/images/pillar-grounded-love.png',
  'pillar-spiritual-love': '/images/pillar-spiritual-love.png',
  'pillar-living-love': '/images/pillar-living-love.png',
  'role-love-farmer': '/images/role-love-farmer.png',
  'role-donor': '/images/role-donor.png',
  'role-vendor': '/images/role-vendor.png',
  'hero-community-gathering': '/images/hero-community-gathering.png',
  'mission-intergenerational': '/images/mission-intergenerational.png',
  'hero-love-flow-river': '/images/hero-love-flow-river.png',
  'flow-step-1-donors': '/images/flow-step-1-donors.png',
  'flow-step-2-meditate': '/images/flow-step-2-meditate.png',
  'flow-step-3-credits': '/images/flow-step-3-credits.png',
  'flow-step-4-spend': '/images/flow-step-4-spend.png',
  'flow-step-5-redeem': '/images/flow-step-5-redeem.png',
  'flow-step-6-circulates': '/images/flow-step-6-circulates.png',
  'meditation-bg-abstract': '/images/meditation-bg-abstract.png',
  'celebration-meditation-complete': '/images/celebration-meditation-complete.png',
};

interface GeneratedImageProps {
  /** The prompt ID from the image generation */
  promptId: string;
  /** Alt text for accessibility */
  alt: string;
  /** Additional className */
  className?: string;
  /** Width in pixels */
  width?: number;
  /** Height in pixels */
  height?: number;
  /** Fill the container */
  fill?: boolean;
  /** Object fit when using fill */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** Priority loading */
  priority?: boolean;
}

/**
 * GeneratedImage Component
 * 
 * Use this component to display AI-generated brand images.
 * Falls back to a placeholder if the image hasn't been generated yet.
 */
export function GeneratedImage({
  promptId,
  alt,
  className,
  width = 400,
  height = 400,
  fill = false,
  objectFit = 'cover',
  priority = false,
}: GeneratedImageProps) {
  const imagePath = IMAGE_MAP[promptId];

  if (!imagePath) {
    // Fallback to placeholder styling if image not found
    return (
      <div
        className={cn(
          'bg-gradient-to-br from-lotus-soft/30 to-heart-rose/10 flex items-center justify-center',
          fill ? 'absolute inset-0' : '',
          className
        )}
        style={fill ? {} : { width, height }}
        role="img"
        aria-label={alt}
      >
        <span className="text-stone-grey/50 text-sm">Image: {promptId}</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={imagePath}
        alt={alt}
        fill
        className={cn('object-' + objectFit, className)}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={imagePath}
      alt={alt}
      width={width}
      height={height}
      className={cn('object-' + objectFit, className)}
      priority={priority}
    />
  );
}

/**
 * Check if a generated image exists
 */
export function hasGeneratedImage(promptId: string): boolean {
  return promptId in IMAGE_MAP;
}

/**
 * Get the path for a generated image
 */
export function getGeneratedImagePath(promptId: string): string | null {
  return IMAGE_MAP[promptId] || null;
}

export default GeneratedImage;
