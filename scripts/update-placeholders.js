#!/usr/bin/env node

/**
 * Update Placeholders Script
 * 
 * After generating images, this script creates the GeneratedImage component
 * and outputs instructions for updating ImagePlaceholder usages.
 * 
 * Usage:
 *   node scripts/update-placeholders.js
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');
const MANIFEST_PATH = path.join(OUTPUT_DIR, 'manifest.json');
const COMPONENTS_DIR = path.join(__dirname, '..', 'components', 'ui');

function log(message, type = 'info') {
  const prefix = {
    info: '\x1b[36mℹ\x1b[0m',
    success: '\x1b[32m✓\x1b[0m',
    error: '\x1b[31m✗\x1b[0m',
    warn: '\x1b[33m⚠\x1b[0m',
  };
  console.log(`${prefix[type] || prefix.info} ${message}`);
}

function loadManifest() {
  if (fs.existsSync(MANIFEST_PATH)) {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  }
  return null;
}

function generateImageMapping(manifest) {
  const entries = Object.entries(manifest.generated || {});
  const mapping = {};
  
  entries.forEach(([promptId, data]) => {
    mapping[promptId] = `/images/${data.filename}`;
  });
  
  return mapping;
}

function createGeneratedImageComponent(mapping) {
  const mappingEntries = Object.entries(mapping)
    .map(([id, imgPath]) => `  '${id}': '${imgPath}',`)
    .join('\n');

  return `'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Generated Image Mapping
 * Auto-generated from image generation script
 */
const IMAGE_MAP: Record<string, string> = {
${mappingEntries}
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
`;
}

function main() {
  console.log('\n🖼️  Love Token Placeholder Updater\n');
  console.log('='.repeat(60));

  // Load manifest
  const manifest = loadManifest();
  if (!manifest) {
    log('No manifest found. Run generate-images.js first.', 'error');
    process.exit(1);
  }

  const generatedCount = Object.keys(manifest.generated || {}).length;
  if (generatedCount === 0) {
    log('No images have been generated yet.', 'warn');
    log('Run: OPENAI_API_KEY=your-key node scripts/generate-images.js', 'info');
    process.exit(1);
  }

  log(`Found ${generatedCount} generated images`, 'success');

  // Generate image mapping
  const mapping = generateImageMapping(manifest);

  // Create GeneratedImage component
  const componentPath = path.join(COMPONENTS_DIR, 'GeneratedImage.tsx');
  const componentContent = createGeneratedImageComponent(mapping);
  
  fs.writeFileSync(componentPath, componentContent);
  log(`Created GeneratedImage component: ${componentPath}`, 'success');

  // Update the ui/index.ts to export the new component
  const indexPath = path.join(COMPONENTS_DIR, 'index.ts');
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  if (!indexContent.includes('GeneratedImage')) {
    indexContent += "\nexport { GeneratedImage, hasGeneratedImage, getGeneratedImagePath } from './GeneratedImage';\n";
    fs.writeFileSync(indexPath, indexContent);
    log('Updated components/ui/index.ts', 'success');
  }

  // Print usage instructions
  console.log('\n' + '='.repeat(60));
  console.log('\n✅ Setup complete!\n');
  console.log('To use generated images, replace ImagePlaceholder with GeneratedImage:\n');
  console.log('Before:');
  console.log('  <ImagePlaceholder');
  console.log('    promptId="hero-meditation-circle"');
  console.log('    description="..."');
  console.log('    aspectRatio="square"');
  console.log('  />\n');
  console.log('After:');
  console.log('  <GeneratedImage');
  console.log('    promptId="hero-meditation-circle"');
  console.log('    alt="A diverse community sitting in meditation"');
  console.log('    width={600}');
  console.log('    height={600}');
  console.log('    className="rounded-card"');
  console.log('  />\n');
  console.log('Or with fill:');
  console.log('  <div className="relative aspect-square">');
  console.log('    <GeneratedImage');
  console.log('      promptId="hero-meditation-circle"');
  console.log('      alt="..."');
  console.log('      fill');
  console.log('      className="rounded-card"');
  console.log('    />');
  console.log('  </div>\n');
  
  console.log('Generated images:');
  Object.entries(mapping).forEach(([id, imgPath]) => {
    console.log(`  • ${id} → ${imgPath}`);
  });
  
  console.log('\n');
}

main();
