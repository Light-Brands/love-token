'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface InfographicProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  animated?: boolean;
}

// Phase 1: MVP Core - Foundation building with hearts, meditation, and digital elements
export const Phase1Infographic: React.FC<InfographicProps> = ({
  size = 120,
  className,
  animated = true,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    className={cn('', className)}
    {...props}
  >
    <defs>
      {/* Gradients */}
      <linearGradient id="phase1-rose" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8919A" />
        <stop offset="100%" stopColor="#D47A84" />
      </linearGradient>
      <linearGradient id="phase1-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5D89A" />
        <stop offset="100%" stopColor="#E8C96D" />
      </linearGradient>
      <linearGradient id="phase1-cream" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDF8F3" />
        <stop offset="100%" stopColor="#F5EDE3" />
      </linearGradient>
      <radialGradient id="phase1-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#E8919A" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#E8919A" stopOpacity="0" />
      </radialGradient>
      {/* Pulse animation */}
      <filter id="phase1-pulse">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Background glow */}
    <circle cx="60" cy="60" r="55" fill="url(#phase1-glow)">
      {animated && (
        <animate
          attributeName="r"
          values="50;55;50"
          dur="3s"
          repeatCount="indefinite"
        />
      )}
    </circle>

    {/* Foundation blocks */}
    <g>
      {/* Base platform */}
      <rect x="20" y="85" width="80" height="12" rx="4" fill="url(#phase1-gold)" opacity="0.9" />
      <rect x="22" y="87" width="76" height="2" fill="white" opacity="0.3" />

      {/* Building blocks - ascending */}
      <rect x="28" y="70" width="18" height="15" rx="3" fill="url(#phase1-cream)" stroke="url(#phase1-rose)" strokeWidth="1.5" />
      <rect x="51" y="70" width="18" height="15" rx="3" fill="url(#phase1-cream)" stroke="url(#phase1-rose)" strokeWidth="1.5" />
      <rect x="74" y="70" width="18" height="15" rx="3" fill="url(#phase1-cream)" stroke="url(#phase1-rose)" strokeWidth="1.5" />

      {/* Second row */}
      <rect x="37" y="52" width="20" height="16" rx="3" fill="url(#phase1-cream)" stroke="url(#phase1-rose)" strokeWidth="1.5" />
      <rect x="63" y="52" width="20" height="16" rx="3" fill="url(#phase1-cream)" stroke="url(#phase1-rose)" strokeWidth="1.5" />
    </g>

    {/* Central meditation figure with heart */}
    <g filter={animated ? "url(#phase1-pulse)" : undefined}>
      {/* Meditation circle */}
      <circle cx="60" cy="35" r="22" fill="url(#phase1-rose)" opacity="0.15" />
      <circle cx="60" cy="35" r="18" fill="url(#phase1-cream)" stroke="url(#phase1-rose)" strokeWidth="2" />

      {/* Meditating person silhouette */}
      <circle cx="60" cy="28" r="4" fill="url(#phase1-rose)" />
      <path
        d="M52 42c0-4.5 3.5-8 8-8s8 3.5 8 8"
        fill="url(#phase1-rose)"
        opacity="0.9"
      />
      <path
        d="M49 45c1-2 3-3 5-3h12c2 0 4 1 5 3"
        stroke="url(#phase1-rose)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Heart above */}
      <path
        d="M60 19c1-1.2 2.2-1.6 3.5-1.6 2.2 0 4 1.8 4 4 0 1.8-1.2 3.2-2.4 4.4l-5.1 4.6-5.1-4.6c-1.2-1.2-2.4-2.6-2.4-4.4 0-2.2 1.8-4 4-4 1.3 0 2.5.4 3.5 1.6z"
        fill="url(#phase1-rose)"
      >
        {animated && (
          <animate
            attributeName="transform"
            values="scale(1);scale(1.1);scale(1)"
            dur="1.5s"
            repeatCount="indefinite"
            type="scale"
            additive="sum"
          />
        )}
      </path>
    </g>

    {/* Floating coins/credits */}
    <g opacity="0.9">
      <circle cx="25" cy="45" r="8" fill="url(#phase1-gold)" stroke="#D4A853" strokeWidth="1" />
      <text x="25" y="48" textAnchor="middle" fill="#8B6914" fontSize="8" fontWeight="bold">$</text>
      {animated && (
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;0,-3;0,0"
          dur="2s"
          repeatCount="indefinite"
        />
      )}
    </g>

    <g opacity="0.9">
      <circle cx="95" cy="45" r="8" fill="url(#phase1-gold)" stroke="#D4A853" strokeWidth="1" />
      <path d="M92 45h6M95 42v6" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" />
      {animated && (
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;0,-4;0,0"
          dur="2.5s"
          repeatCount="indefinite"
        />
      )}
    </g>

    {/* Sparkle accents */}
    <g fill="url(#phase1-rose)" opacity="0.7">
      <path d="M18 25l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z">
        {animated && (
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        )}
      </path>
      <path d="M102 20l1 2 2 1-2 1-1 2-1-2-2-1 2-1z">
        {animated && (
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
        )}
      </path>
    </g>

    {/* "1" indicator */}
    <circle cx="100" cy="100" r="12" fill="url(#phase1-rose)" />
    <text x="100" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
  </svg>
);

// Phase 2: Donor Impact - Hearts flowing between donors and communities
export const Phase2Infographic: React.FC<InfographicProps> = ({
  size = 120,
  className,
  animated = true,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    className={cn('', className)}
    {...props}
  >
    <defs>
      <linearGradient id="phase2-clay" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C4A484" />
        <stop offset="100%" stopColor="#A8896C" />
      </linearGradient>
      <linearGradient id="phase2-rose" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8919A" />
        <stop offset="100%" stopColor="#D47A84" />
      </linearGradient>
      <linearGradient id="phase2-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5D89A" />
        <stop offset="100%" stopColor="#E8C96D" />
      </linearGradient>
      <radialGradient id="phase2-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#C4A484" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#C4A484" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="phase2-flow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E8919A" stopOpacity="0.2" />
        <stop offset="50%" stopColor="#E8919A" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#E8919A" stopOpacity="0.2" />
        {animated && (
          <animate attributeName="x1" values="-100%;100%" dur="2s" repeatCount="indefinite" />
        )}
      </linearGradient>
    </defs>

    {/* Background glow */}
    <circle cx="60" cy="60" r="55" fill="url(#phase2-glow)" />

    {/* Connection lines (flowing love) */}
    <g stroke="url(#phase2-flow)" strokeWidth="3" fill="none" opacity="0.6">
      <path d="M30 35 Q60 50 60 60">
        {animated && (
          <animate attributeName="stroke-dashoffset" from="50" to="0" dur="2s" repeatCount="indefinite" />
        )}
      </path>
      <path d="M90 35 Q60 50 60 60">
        {animated && (
          <animate attributeName="stroke-dashoffset" from="50" to="0" dur="2s" repeatCount="indefinite" />
        )}
      </path>
      <path d="M60 60 Q45 75 30 90" />
      <path d="M60 60 Q75 75 90 90" />
      <path d="M60 60 L60 95" />
    </g>

    {/* Donor icons (top) */}
    <g>
      {/* Donor 1 */}
      <circle cx="30" cy="25" r="14" fill="url(#phase2-clay)" opacity="0.2" />
      <circle cx="30" cy="25" r="11" fill="white" stroke="url(#phase2-clay)" strokeWidth="2" />
      <circle cx="30" cy="22" r="4" fill="url(#phase2-clay)" />
      <path d="M22 32c0-4.5 3.5-7 8-7s8 2.5 8 7" fill="url(#phase2-clay)" opacity="0.8" />

      {/* Donor 2 */}
      <circle cx="90" cy="25" r="14" fill="url(#phase2-clay)" opacity="0.2" />
      <circle cx="90" cy="25" r="11" fill="white" stroke="url(#phase2-clay)" strokeWidth="2" />
      <circle cx="90" cy="22" r="4" fill="url(#phase2-clay)" />
      <path d="M82 32c0-4.5 3.5-7 8-7s8 2.5 8 7" fill="url(#phase2-clay)" opacity="0.8" />
    </g>

    {/* Central heart hub */}
    <g>
      <circle cx="60" cy="55" r="18" fill="url(#phase2-rose)" opacity="0.15">
        {animated && (
          <animate attributeName="r" values="16;20;16" dur="2s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="60" cy="55" r="14" fill="white" stroke="url(#phase2-rose)" strokeWidth="2" />
      <path
        d="M60 48c1.5-1.8 3.3-2.4 5.2-2.4 3.3 0 6 2.7 6 6 0 2.7-1.8 4.8-3.6 6.6L60 65l-7.6-6.8c-1.8-1.8-3.6-3.9-3.6-6.6 0-3.3 2.7-6 6-6 1.9 0 3.7.6 5.2 2.4z"
        fill="url(#phase2-rose)"
      >
        {animated && (
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.05;1"
            dur="1s"
            repeatCount="indefinite"
            additive="sum"
          />
        )}
      </path>
    </g>

    {/* Community members (bottom) */}
    <g>
      {/* Community 1 */}
      <circle cx="30" cy="95" r="12" fill="url(#phase2-gold)" opacity="0.3" />
      <circle cx="30" cy="95" r="9" fill="white" stroke="url(#phase2-gold)" strokeWidth="1.5" />
      <circle cx="26" cy="93" r="2.5" fill="url(#phase2-clay)" />
      <circle cx="34" cy="93" r="2.5" fill="url(#phase2-clay)" />
      <path d="M24 100c0-2 1.5-3 3-3h6c1.5 0 3 1 3 3" fill="url(#phase2-clay)" opacity="0.6" />

      {/* Community 2 - center */}
      <circle cx="60" cy="100" r="12" fill="url(#phase2-gold)" opacity="0.3" />
      <circle cx="60" cy="100" r="9" fill="white" stroke="url(#phase2-gold)" strokeWidth="1.5" />
      <circle cx="56" cy="98" r="2.5" fill="url(#phase2-clay)" />
      <circle cx="64" cy="98" r="2.5" fill="url(#phase2-clay)" />
      <path d="M54 105c0-2 1.5-3 3-3h6c1.5 0 3 1 3 3" fill="url(#phase2-clay)" opacity="0.6" />

      {/* Community 3 */}
      <circle cx="90" cy="95" r="12" fill="url(#phase2-gold)" opacity="0.3" />
      <circle cx="90" cy="95" r="9" fill="white" stroke="url(#phase2-gold)" strokeWidth="1.5" />
      <circle cx="86" cy="93" r="2.5" fill="url(#phase2-clay)" />
      <circle cx="94" cy="93" r="2.5" fill="url(#phase2-clay)" />
      <path d="M84 100c0-2 1.5-3 3-3h6c1.5 0 3 1 3 3" fill="url(#phase2-clay)" opacity="0.6" />
    </g>

    {/* Floating mini hearts */}
    <g fill="url(#phase2-rose)">
      <path d="M45 40c.5-.6 1.1-.8 1.7-.8 1.1 0 2 .9 2 2 0 .9-.6 1.6-1.2 2.2l-2.5 2.3-2.5-2.3c-.6-.6-1.2-1.3-1.2-2.2 0-1.1.9-2 2-2 .6 0 1.2.2 1.7.8z">
        {animated && (
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="3s" repeatCount="indefinite" />
        )}
      </path>
      <path d="M75 40c.5-.6 1.1-.8 1.7-.8 1.1 0 2 .9 2 2 0 .9-.6 1.6-1.2 2.2l-2.5 2.3-2.5-2.3c-.6-.6-1.2-1.3-1.2-2.2 0-1.1.9-2 2-2 .6 0 1.2.2 1.7.8z">
        {animated && (
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="2.5s" repeatCount="indefinite" />
        )}
      </path>
    </g>

    {/* Sparkles */}
    <g fill="url(#phase2-gold)" opacity="0.8">
      <path d="M15 60l1 2 2 1-2 1-1 2-1-2-2-1 2-1z">
        {animated && (
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        )}
      </path>
      <path d="M105 60l1 2 2 1-2 1-1 2-1-2-2-1 2-1z">
        {animated && (
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
        )}
      </path>
    </g>

    {/* "2" indicator */}
    <circle cx="100" cy="15" r="12" fill="url(#phase2-clay)" />
    <text x="100" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2</text>
  </svg>
);

// Phase 3: Energy Integration - Lightning and power flowing through communities
export const Phase3Infographic: React.FC<InfographicProps> = ({
  size = 120,
  className,
  animated = true,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    className={cn('', className)}
    {...props}
  >
    <defs>
      <linearGradient id="phase3-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5D89A" />
        <stop offset="100%" stopColor="#E8C96D" />
      </linearGradient>
      <linearGradient id="phase3-amber" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
      <linearGradient id="phase3-electric" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE55C" />
        <stop offset="50%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
      <radialGradient id="phase3-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.4" />
        <stop offset="70%" stopColor="#FFD700" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
      </radialGradient>
      <filter id="phase3-glow-filter">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Background energy field */}
    <circle cx="60" cy="60" r="55" fill="url(#phase3-glow)">
      {animated && (
        <animate attributeName="r" values="50;58;50" dur="3s" repeatCount="indefinite" />
      )}
    </circle>

    {/* Energy rings */}
    <g stroke="url(#phase3-gold)" fill="none" strokeWidth="1" opacity="0.4">
      <circle cx="60" cy="55" r="45">
        {animated && (
          <animate attributeName="r" values="42;48;42" dur="4s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="60" cy="55" r="35">
        {animated && (
          <animate attributeName="r" values="32;38;32" dur="3s" repeatCount="indefinite" />
        )}
      </circle>
    </g>

    {/* Central lightning bolt */}
    <g filter="url(#phase3-glow-filter)">
      <path
        d="M55 15 L45 50 L55 50 L45 75 L75 40 L60 40 L72 15 Z"
        fill="url(#phase3-electric)"
        stroke="#FFA500"
        strokeWidth="1"
      >
        {animated && (
          <animate
            attributeName="opacity"
            values="0.9;1;0.9"
            dur="0.5s"
            repeatCount="indefinite"
          />
        )}
      </path>
    </g>

    {/* Secondary lightning bolts */}
    <g opacity="0.7">
      <path
        d="M20 35 L18 45 L22 45 L16 58 L30 48 L25 48 L28 35 Z"
        fill="url(#phase3-amber)"
      >
        {animated && (
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.5s" repeatCount="indefinite" />
        )}
      </path>
      <path
        d="M100 35 L102 45 L98 45 L104 58 L90 48 L95 48 L92 35 Z"
        fill="url(#phase3-amber)"
      >
        {animated && (
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
        )}
      </path>
    </g>

    {/* Community houses with lights */}
    <g>
      {/* House 1 */}
      <path d="M20 95 L20 82 L30 75 L40 82 L40 95 Z" fill="#F5EDE3" stroke="url(#phase3-gold)" strokeWidth="1.5" />
      <rect x="27" y="85" width="6" height="10" fill="url(#phase3-gold)" opacity="0.8" />
      <circle cx="30" cy="88" r="2" fill="#FFE55C">
        {animated && (
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        )}
      </circle>

      {/* House 2 */}
      <path d="M50 95 L50 80 L60 72 L70 80 L70 95 Z" fill="#F5EDE3" stroke="url(#phase3-gold)" strokeWidth="1.5" />
      <rect x="56" y="83" width="8" height="12" fill="url(#phase3-gold)" opacity="0.8" />
      <circle cx="60" cy="87" r="3" fill="#FFE55C">
        {animated && (
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
        )}
      </circle>

      {/* House 3 */}
      <path d="M80 95 L80 82 L90 75 L100 82 L100 95 Z" fill="#F5EDE3" stroke="url(#phase3-gold)" strokeWidth="1.5" />
      <rect x="87" y="85" width="6" height="10" fill="url(#phase3-gold)" opacity="0.8" />
      <circle cx="90" cy="88" r="2" fill="#FFE55C">
        {animated && (
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
        )}
      </circle>
    </g>

    {/* Energy flow lines to houses */}
    <g stroke="url(#phase3-gold)" strokeWidth="2" fill="none" strokeDasharray="4 4">
      <path d="M50 70 Q40 78 35 78">
        {animated && (
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
        )}
      </path>
      <path d="M60 73 L60 80">
        {animated && (
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
        )}
      </path>
      <path d="M70 70 Q80 78 85 78">
        {animated && (
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
        )}
      </path>
    </g>

    {/* Ground line */}
    <path d="M10 100 L110 100" stroke="url(#phase3-gold)" strokeWidth="2" opacity="0.5" />

    {/* Electric sparkles */}
    <g fill="url(#phase3-amber)">
      <circle cx="35" cy="25" r="2">
        {animated && (
          <>
            <animate attributeName="r" values="1;3;1" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
          </>
        )}
      </circle>
      <circle cx="85" cy="25" r="2">
        {animated && (
          <>
            <animate attributeName="r" values="1;2.5;1" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" />
          </>
        )}
      </circle>
      <circle cx="15" cy="55" r="1.5">
        {animated && (
          <>
            <animate attributeName="r" values="1;2;1" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </>
        )}
      </circle>
      <circle cx="105" cy="55" r="1.5">
        {animated && (
          <>
            <animate attributeName="r" values="1;2;1" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
          </>
        )}
      </circle>
    </g>

    {/* "3" indicator */}
    <circle cx="100" cy="15" r="12" fill="url(#phase3-amber)" />
    <text x="100" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3</text>
  </svg>
);

// Phase 4: Global Scale - Interconnected globe with nodes
export const Phase4Infographic: React.FC<InfographicProps> = ({
  size = 120,
  className,
  animated = true,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    className={cn('', className)}
    {...props}
  >
    <defs>
      <linearGradient id="phase4-sage" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8FAE8B" />
        <stop offset="100%" stopColor="#6B9066" />
      </linearGradient>
      <linearGradient id="phase4-teal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4DA8A8" />
        <stop offset="100%" stopColor="#3D8888" />
      </linearGradient>
      <linearGradient id="phase4-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5D89A" />
        <stop offset="100%" stopColor="#E8C96D" />
      </linearGradient>
      <radialGradient id="phase4-globe" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#B5D4B2" />
        <stop offset="50%" stopColor="#8FAE8B" />
        <stop offset="100%" stopColor="#6B9066" />
      </radialGradient>
      <radialGradient id="phase4-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8FAE8B" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#8FAE8B" stopOpacity="0" />
      </radialGradient>
      <filter id="phase4-soft-glow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Background cosmic glow */}
    <circle cx="60" cy="60" r="58" fill="url(#phase4-glow)">
      {animated && (
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite" />
      )}
    </circle>

    {/* Orbit rings */}
    <g stroke="url(#phase4-sage)" fill="none" strokeWidth="1" opacity="0.3">
      <ellipse cx="60" cy="60" rx="55" ry="25" transform="rotate(-20 60 60)">
        {animated && (
          <animate attributeName="stroke-dashoffset" from="0" to="345" dur="20s" repeatCount="indefinite" />
        )}
      </ellipse>
      <ellipse cx="60" cy="60" rx="55" ry="25" transform="rotate(40 60 60)" strokeDasharray="5 5">
        {animated && (
          <animate attributeName="stroke-dashoffset" from="345" to="0" dur="25s" repeatCount="indefinite" />
        )}
      </ellipse>
    </g>

    {/* Main globe */}
    <g filter="url(#phase4-soft-glow)">
      <circle cx="60" cy="60" r="35" fill="url(#phase4-globe)" />

      {/* Globe meridians and parallels */}
      <g stroke="white" strokeWidth="0.5" fill="none" opacity="0.4">
        <ellipse cx="60" cy="60" rx="35" ry="15" />
        <ellipse cx="60" cy="60" rx="25" ry="10" />
        <ellipse cx="60" cy="60" rx="15" ry="5" />
        <path d="M60 25 Q75 60 60 95" />
        <path d="M60 25 Q45 60 60 95" />
        <path d="M25 60 L95 60" />
      </g>

      {/* Continents (abstract shapes) */}
      <g fill="white" opacity="0.25">
        <ellipse cx="50" cy="50" rx="10" ry="8" />
        <ellipse cx="72" cy="55" rx="8" ry="6" />
        <ellipse cx="55" cy="72" rx="12" ry="5" />
      </g>
    </g>

    {/* Connection nodes around the globe */}
    <g>
      {/* Node 1 - top */}
      <circle cx="60" cy="18" r="8" fill="url(#phase4-teal)" opacity="0.9">
        {animated && (
          <animate attributeName="r" values="7;9;7" dur="2s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="60" cy="18" r="4" fill="white" opacity="0.8" />

      {/* Node 2 - right */}
      <circle cx="102" cy="60" r="8" fill="url(#phase4-gold)" opacity="0.9">
        {animated && (
          <animate attributeName="r" values="7;9;7" dur="2.5s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="102" cy="60" r="4" fill="white" opacity="0.8" />

      {/* Node 3 - bottom */}
      <circle cx="60" cy="102" r="8" fill="url(#phase4-teal)" opacity="0.9">
        {animated && (
          <animate attributeName="r" values="7;9;7" dur="2.2s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="60" cy="102" r="4" fill="white" opacity="0.8" />

      {/* Node 4 - left */}
      <circle cx="18" cy="60" r="8" fill="url(#phase4-gold)" opacity="0.9">
        {animated && (
          <animate attributeName="r" values="7;9;7" dur="1.8s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="18" cy="60" r="4" fill="white" opacity="0.8" />

      {/* Diagonal nodes */}
      <circle cx="30" cy="30" r="5" fill="url(#phase4-sage)">
        {animated && (
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="90" cy="30" r="5" fill="url(#phase4-sage)">
        {animated && (
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="90" cy="90" r="5" fill="url(#phase4-sage)">
        {animated && (
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="30" cy="90" r="5" fill="url(#phase4-sage)">
        {animated && (
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2.8s" repeatCount="indefinite" />
        )}
      </circle>
    </g>

    {/* Connection lines between nodes */}
    <g stroke="url(#phase4-sage)" strokeWidth="1.5" fill="none" opacity="0.5" strokeDasharray="3 3">
      <line x1="60" y1="25" x2="60" y2="26">
        {animated && (
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
        )}
      </line>
      <line x1="95" y1="60" x2="60" y2="60" />
      <line x1="60" y1="95" x2="60" y2="60" />
      <line x1="25" y1="60" x2="60" y2="60" />
      <line x1="35" y1="35" x2="45" y2="45" />
      <line x1="85" y1="35" x2="75" y2="45" />
      <line x1="85" y1="85" x2="75" y2="75" />
      <line x1="35" y1="85" x2="45" y2="75" />
    </g>

    {/* Central heart on globe */}
    <g>
      <path
        d="M60 55c1-1.2 2.2-1.6 3.5-1.6 2.2 0 4 1.8 4 4 0 1.8-1.2 3.2-2.4 4.4L60 66.4l-5.1-4.6c-1.2-1.2-2.4-2.6-2.4-4.4 0-2.2 1.8-4 4-4 1.3 0 2.5.4 3.5 1.6z"
        fill="white"
        opacity="0.9"
      >
        {animated && (
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.1;1"
            dur="2s"
            repeatCount="indefinite"
            additive="sum"
          />
        )}
      </path>
    </g>

    {/* Floating stars/sparkles */}
    <g fill="url(#phase4-gold)" opacity="0.7">
      <path d="M15 20l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z">
        {animated && (
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        )}
      </path>
      <path d="M105 25l0.8 2 2 0.8-2 0.8-0.8 2-0.8-2-2-0.8 2-0.8z">
        {animated && (
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
        )}
      </path>
      <path d="M10 95l0.8 2 2 0.8-2 0.8-0.8 2-0.8-2-2-0.8 2-0.8z">
        {animated && (
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
        )}
      </path>
    </g>

    {/* "4" indicator */}
    <circle cx="100" cy="100" r="12" fill="url(#phase4-sage)" />
    <text x="100" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">4</text>
  </svg>
);

// Export a map for easy access
export const PhaseInfographics = {
  1: Phase1Infographic,
  2: Phase2Infographic,
  3: Phase3Infographic,
  4: Phase4Infographic,
};

export default PhaseInfographics;
