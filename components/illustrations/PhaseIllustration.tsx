'use client';

import React from 'react';

interface PhaseIllustrationProps {
  phase: 1 | 2 | 3 | 4;
  size?: number;
  className?: string;
}

// Phase 1: MVP Core - Foundation with heart and meditation
const Phase1Illustration: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <defs>
      <linearGradient id="phase1-rose" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8919A" />
        <stop offset="100%" stopColor="#D47A84" />
      </linearGradient>
      <linearGradient id="phase1-cream" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5D89A" />
        <stop offset="100%" stopColor="#E8C96D" />
      </linearGradient>
      <linearGradient id="phase1-clay" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C4A484" />
        <stop offset="100%" stopColor="#A8896C" />
      </linearGradient>
      <radialGradient id="phase1-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#E8919A" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#E8919A" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Outer glow */}
    <circle cx="60" cy="60" r="55" fill="url(#phase1-glow)">
      <animate attributeName="r" values="52;58;52" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* Foundation circle */}
    <circle cx="60" cy="75" r="35" fill="url(#phase1-clay)" opacity="0.15" />
    <ellipse cx="60" cy="95" rx="40" ry="12" fill="url(#phase1-clay)" opacity="0.2" />

    {/* Central meditating figure */}
    <g>
      <circle cx="60" cy="55" r="12" fill="white" stroke="url(#phase1-rose)" strokeWidth="2" />
      <circle cx="60" cy="52" r="4" fill="url(#phase1-rose)" />
      <path d="M52 62c0-4 3.5-6 8-6s8 2 8 6" fill="url(#phase1-rose)" opacity="0.8" />
    </g>

    {/* Meditation pose base */}
    <ellipse cx="60" cy="82" rx="18" ry="8" fill="url(#phase1-cream)" opacity="0.6" />
    <path d="M45 78 Q60 72 75 78 Q75 88 60 90 Q45 88 45 78Z" fill="url(#phase1-cream)" opacity="0.4" />

    {/* Central heart - main element */}
    <g>
      <path d="M60 35c2.5-3 5.5-4 8.5-4 5.5 0 10 4.5 10 10 0 4.5-3 8-6 11L60 65l-12.5-13c-3-3-6-6.5-6-11 0-5.5 4.5-10 10-10 3 0 6 1 8.5 4z"
            fill="url(#phase1-rose)">
        <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="1.2s" repeatCount="indefinite" additive="sum" />
      </path>
    </g>

    {/* Love points orbiting */}
    <g fill="url(#phase1-cream)">
      <circle cx="30" cy="40" r="4">
        <animateTransform attributeName="transform" type="rotate" values="0 60 60;360 60 60" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="90" cy="40" r="3">
        <animateTransform attributeName="transform" type="rotate" values="360 60 60;0 60 60" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="70" r="3">
        <animateTransform attributeName="transform" type="rotate" values="180 60 60;540 60 60" dur="10s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Sparkles */}
    <g fill="url(#phase1-cream)" opacity="0.8">
      <path d="M20 25l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M100 30l1 2 2 1-2 1-1 2-1-2-2-1 2-1z">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
      </path>
    </g>

    {/* Phase badge */}
    <circle cx="100" cy="15" r="12" fill="url(#phase1-rose)" />
    <text x="100" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
  </svg>
);

// Phase 2: Donor Impact - Donors connecting to beneficiaries
const Phase2Illustration: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
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
        <animate attributeName="x1" values="-100%;100%" dur="2s" repeatCount="indefinite" />
      </linearGradient>
    </defs>

    <circle cx="60" cy="60" r="55" fill="url(#phase2-glow)" />

    {/* Flow lines */}
    <g stroke="url(#phase2-flow)" strokeWidth="3" fill="none" opacity="0.6">
      <path d="M30 35 Q60 50 60 60">
        <animate attributeName="stroke-dashoffset" from="50" to="0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M90 35 Q60 50 60 60">
        <animate attributeName="stroke-dashoffset" from="50" to="0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M60 60 Q45 75 30 90" />
      <path d="M60 60 Q75 75 90 90" />
      <path d="M60 60 L60 95" />
    </g>

    {/* Donors at top */}
    <g>
      <circle cx="30" cy="25" r="14" fill="url(#phase2-clay)" opacity="0.2" />
      <circle cx="30" cy="25" r="11" fill="white" stroke="url(#phase2-clay)" strokeWidth="2" />
      <circle cx="30" cy="22" r="4" fill="url(#phase2-clay)" />
      <path d="M22 32c0-4.5 3.5-7 8-7s8 2.5 8 7" fill="url(#phase2-clay)" opacity="0.8" />

      <circle cx="90" cy="25" r="14" fill="url(#phase2-clay)" opacity="0.2" />
      <circle cx="90" cy="25" r="11" fill="white" stroke="url(#phase2-clay)" strokeWidth="2" />
      <circle cx="90" cy="22" r="4" fill="url(#phase2-clay)" />
      <path d="M82 32c0-4.5 3.5-7 8-7s8 2.5 8 7" fill="url(#phase2-clay)" opacity="0.8" />
    </g>

    {/* Central heart hub */}
    <g>
      <circle cx="60" cy="55" r="18" fill="url(#phase2-rose)" opacity="0.15">
        <animate attributeName="r" values="16;20;16" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="55" r="14" fill="white" stroke="url(#phase2-rose)" strokeWidth="2" />
      <path d="M60 48c1.5-1.8 3.3-2.4 5.2-2.4 3.3 0 6 2.7 6 6 0 2.7-1.8 4.8-3.6 6.6L60 65l-7.6-6.8c-1.8-1.8-3.6-3.9-3.6-6.6 0-3.3 2.7-6 6-6 1.9 0 3.7.6 5.2 2.4z" fill="url(#phase2-rose)">
        <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="1s" repeatCount="indefinite" additive="sum" />
      </path>
    </g>

    {/* Beneficiaries at bottom */}
    <g>
      <circle cx="30" cy="95" r="12" fill="url(#phase2-gold)" opacity="0.3" />
      <circle cx="30" cy="95" r="9" fill="white" stroke="url(#phase2-gold)" strokeWidth="1.5" />
      <circle cx="26" cy="93" r="2.5" fill="url(#phase2-clay)" />
      <circle cx="34" cy="93" r="2.5" fill="url(#phase2-clay)" />
      <path d="M24 100c0-2 1.5-3 3-3h6c1.5 0 3 1 3 3" fill="url(#phase2-clay)" opacity="0.6" />

      <circle cx="60" cy="100" r="12" fill="url(#phase2-gold)" opacity="0.3" />
      <circle cx="60" cy="100" r="9" fill="white" stroke="url(#phase2-gold)" strokeWidth="1.5" />
      <circle cx="56" cy="98" r="2.5" fill="url(#phase2-clay)" />
      <circle cx="64" cy="98" r="2.5" fill="url(#phase2-clay)" />
      <path d="M54 105c0-2 1.5-3 3-3h6c1.5 0 3 1 3 3" fill="url(#phase2-clay)" opacity="0.6" />

      <circle cx="90" cy="95" r="12" fill="url(#phase2-gold)" opacity="0.3" />
      <circle cx="90" cy="95" r="9" fill="white" stroke="url(#phase2-gold)" strokeWidth="1.5" />
      <circle cx="86" cy="93" r="2.5" fill="url(#phase2-clay)" />
      <circle cx="94" cy="93" r="2.5" fill="url(#phase2-clay)" />
      <path d="M84 100c0-2 1.5-3 3-3h6c1.5 0 3 1 3 3" fill="url(#phase2-clay)" opacity="0.6" />
    </g>

    {/* Floating hearts */}
    <g fill="url(#phase2-rose)">
      <path d="M45 40c.5-.6 1.1-.8 1.7-.8 1.1 0 2 .9 2 2 0 .9-.6 1.6-1.2 2.2l-2.5 2.3-2.5-2.3c-.6-.6-1.2-1.3-1.2-2.2 0-1.1.9-2 2-2 .6 0 1.2.2 1.7.8z">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M75 40c.5-.6 1.1-.8 1.7-.8 1.1 0 2 .9 2 2 0 .9-.6 1.6-1.2 2.2l-2.5 2.3-2.5-2.3c-.6-.6-1.2-1.3-1.2-2.2 0-1.1.9-2 2-2 .6 0 1.2.2 1.7.8z">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="2.5s" repeatCount="indefinite" />
      </path>
    </g>

    {/* Sparkles */}
    <g fill="url(#phase2-gold)" opacity="0.8">
      <path d="M15 60l1 2 2 1-2 1-1 2-1-2-2-1 2-1z">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M105 60l1 2 2 1-2 1-1 2-1-2-2-1 2-1z">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
      </path>
    </g>

    {/* Phase badge */}
    <circle cx="100" cy="15" r="12" fill="url(#phase2-clay)" />
    <text x="100" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2</text>
  </svg>
);

// Phase 3: Energy Integration - Lightning powering communities
const Phase3Illustration: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <defs>
      <linearGradient id="phase3-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5D89A" />
        <stop offset="100%" stopColor="#E8C96D" />
      </linearGradient>
      <linearGradient id="phase3-orange" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFB347" />
        <stop offset="100%" stopColor="#F5A623" />
      </linearGradient>
      <linearGradient id="phase3-clay" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C4A484" />
        <stop offset="100%" stopColor="#A8896C" />
      </linearGradient>
      <radialGradient id="phase3-glow" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#F5D89A" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#F5D89A" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="phase3-bolt" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity="1" />
        <stop offset="50%" stopColor="#F5D89A" />
        <stop offset="100%" stopColor="#E8C96D" />
      </linearGradient>
    </defs>

    {/* Energy glow */}
    <circle cx="60" cy="40" r="50" fill="url(#phase3-glow)">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* Central lightning bolt */}
    <g>
      <path d="M65 15L50 50h12L48 90l30-45H64L78 15z" fill="url(#phase3-bolt)" stroke="url(#phase3-gold)" strokeWidth="2">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="0.5s" repeatCount="indefinite" />
      </path>
      <path d="M65 15L50 50h12L48 90l30-45H64L78 15z" fill="none" stroke="white" strokeWidth="1" opacity="0.5">
        <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="1s" repeatCount="indefinite" />
      </path>
    </g>

    {/* Energy rings */}
    <circle cx="60" cy="50" r="25" stroke="url(#phase3-gold)" strokeWidth="2" fill="none" opacity="0.4">
      <animate attributeName="r" values="25;35;25" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="60" cy="50" r="18" stroke="url(#phase3-gold)" strokeWidth="1.5" fill="none" opacity="0.6">
      <animate attributeName="r" values="18;28;18" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* Community homes receiving energy */}
    <g>
      {/* Left home */}
      <path d="M20 85L30 75L40 85V100H20V85Z" fill="url(#phase3-clay)" opacity="0.8" />
      <rect x="27" y="90" width="6" height="10" fill="url(#phase3-gold)" opacity="0.6" />
      <circle cx="30" cy="70" r="4" fill="url(#phase3-gold)">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Center home */}
      <path d="M50 80L60 68L70 80V100H50V80Z" fill="url(#phase3-clay)" opacity="0.9" />
      <rect x="57" y="88" width="6" height="12" fill="url(#phase3-gold)" opacity="0.8" />
      <circle cx="60" cy="62" r="5" fill="url(#phase3-gold)">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite" />
      </circle>

      {/* Right home */}
      <path d="M80 85L90 75L100 85V100H80V85Z" fill="url(#phase3-clay)" opacity="0.8" />
      <rect x="87" y="90" width="6" height="10" fill="url(#phase3-gold)" opacity="0.6" />
      <circle cx="90" cy="70" r="4" fill="url(#phase3-gold)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Energy lines to homes */}
    <g stroke="url(#phase3-gold)" strokeWidth="2" fill="none" opacity="0.5">
      <path d="M52 85 Q45 75 30 70">
        <animate attributeName="stroke-dasharray" values="0,100;40,100" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M68 85 Q75 75 90 70">
        <animate attributeName="stroke-dasharray" values="0,100;40,100" dur="2s" repeatCount="indefinite" />
      </path>
    </g>

    {/* Small energy particles */}
    <g fill="url(#phase3-gold)">
      <circle cx="40" cy="35" r="2">
        <animate attributeName="cy" values="35;25;35" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="80" cy="40" r="2">
        <animate attributeName="cy" values="40;30;40" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="55" r="1.5">
        <animate attributeName="cx" values="25;20;25" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="95" cy="50" r="1.5">
        <animate attributeName="cx" values="95;100;95" dur="3s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Sparkles */}
    <g fill="url(#phase3-orange)" opacity="0.8">
      <path d="M15 30l1 2 2 1-2 1-1 2-1-2-2-1 2-1z">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
      </path>
      <path d="M105 35l1 2 2 1-2 1-1 2-1-2-2-1 2-1z">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </path>
    </g>

    {/* Phase badge */}
    <circle cx="100" cy="15" r="12" fill="url(#phase3-gold)" />
    <text x="100" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3</text>
  </svg>
);

// Phase 4: Global Scale - Worldwide network
const Phase4Illustration: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <defs>
      <linearGradient id="phase4-sage" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8FAE8B" />
        <stop offset="100%" stopColor="#6B9B6E" />
      </linearGradient>
      <linearGradient id="phase4-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5D89A" />
        <stop offset="100%" stopColor="#E8C96D" />
      </linearGradient>
      <linearGradient id="phase4-rose" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8919A" />
        <stop offset="100%" stopColor="#D47A84" />
      </linearGradient>
      <radialGradient id="phase4-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8FAE8B" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#8FAE8B" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Outer glow */}
    <circle cx="60" cy="60" r="55" fill="url(#phase4-glow)">
      <animate attributeName="r" values="52;58;52" dur="4s" repeatCount="indefinite" />
    </circle>

    {/* Globe */}
    <circle cx="60" cy="60" r="38" fill="white" stroke="url(#phase4-sage)" strokeWidth="3" />

    {/* Globe latitude/longitude lines */}
    <g stroke="url(#phase4-sage)" strokeWidth="1" fill="none" opacity="0.3">
      <ellipse cx="60" cy="60" rx="38" ry="15" />
      <ellipse cx="60" cy="60" rx="38" ry="28" />
      <ellipse cx="60" cy="60" rx="15" ry="38" />
      <line x1="22" y1="60" x2="98" y2="60" />
      <line x1="60" y1="22" x2="60" y2="98" />
    </g>

    {/* Continents abstract shapes */}
    <g fill="url(#phase4-sage)" opacity="0.6">
      <ellipse cx="45" cy="50" rx="12" ry="8" />
      <ellipse cx="72" cy="55" rx="10" ry="12" />
      <ellipse cx="55" cy="72" rx="8" ry="6" />
      <ellipse cx="78" cy="70" rx="6" ry="5" />
    </g>

    {/* Connection nodes around globe */}
    <g>
      <circle cx="30" cy="35" r="8" fill="url(#phase4-gold)" opacity="0.9">
        <animate attributeName="r" values="7;9;7" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="90" cy="40" r="7" fill="url(#phase4-gold)" opacity="0.9">
        <animate attributeName="r" values="6;8;6" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="75" r="6" fill="url(#phase4-gold)" opacity="0.9">
        <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="95" cy="80" r="7" fill="url(#phase4-gold)" opacity="0.9">
        <animate attributeName="r" values="6;8;6" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="15" r="6" fill="url(#phase4-gold)" opacity="0.9">
        <animate attributeName="r" values="5;7;5" dur="2.8s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Connection lines */}
    <g stroke="url(#phase4-rose)" strokeWidth="1.5" fill="none" opacity="0.5">
      <line x1="30" y1="35" x2="60" y2="60">
        <animate attributeName="stroke-dasharray" values="0,50;50,50" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="90" y1="40" x2="60" y2="60">
        <animate attributeName="stroke-dasharray" values="0,50;50,50" dur="2.2s" repeatCount="indefinite" />
      </line>
      <line x1="25" y1="75" x2="60" y2="60">
        <animate attributeName="stroke-dasharray" values="0,50;50,50" dur="2.5s" repeatCount="indefinite" />
      </line>
      <line x1="95" y1="80" x2="60" y2="60">
        <animate attributeName="stroke-dasharray" values="0,50;50,50" dur="2.3s" repeatCount="indefinite" />
      </line>
      <line x1="60" y1="15" x2="60" y2="60">
        <animate attributeName="stroke-dasharray" values="0,50;50,50" dur="2.1s" repeatCount="indefinite" />
      </line>
    </g>

    {/* Central heart */}
    <g>
      <circle cx="60" cy="60" r="12" fill="url(#phase4-rose)" opacity="0.2">
        <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M60 54c1-1.2 2.2-1.6 3.5-1.6 2.2 0 4 1.8 4 4 0 1.8-1.2 3.2-2.4 4.4L60 66l-5.1-4.5c-1.2-1.2-2.4-2.6-2.4-4.4 0-2.2 1.8-4 4-4 1.3 0 2.5.4 3.5 1.6z" fill="url(#phase4-rose)">
        <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="1.5s" repeatCount="indefinite" additive="sum" />
      </path>
    </g>

    {/* Orbiting love coins */}
    <g>
      <circle cx="60" cy="60" r="48" stroke="none" fill="none">
        <animateTransform attributeName="transform" type="rotate" values="0 60 60;360 60 60" dur="20s" repeatCount="indefinite" />
      </circle>
      <g>
        <circle cx="108" cy="60" r="5" fill="url(#phase4-gold)" stroke="white" strokeWidth="1">
          <animateTransform attributeName="transform" type="rotate" values="0 60 60;360 60 60" dur="10s" repeatCount="indefinite" />
        </circle>
      </g>
      <g>
        <circle cx="12" cy="60" r="4" fill="url(#phase4-gold)" stroke="white" strokeWidth="1">
          <animateTransform attributeName="transform" type="rotate" values="180 60 60;540 60 60" dur="12s" repeatCount="indefinite" />
        </circle>
      </g>
    </g>

    {/* Sparkles */}
    <g fill="url(#phase4-gold)" opacity="0.8">
      <path d="M15 20l1 2 2 1-2 1-1 2-1-2-2-1 2-1z">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M105 100l1 2 2 1-2 1-1 2-1-2-2-1 2-1z">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
      </path>
    </g>

    {/* Phase badge */}
    <circle cx="100" cy="15" r="12" fill="url(#phase4-sage)" />
    <text x="100" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">4</text>
  </svg>
);

export const PhaseIllustration: React.FC<PhaseIllustrationProps> = ({
  phase,
  size = 160,
  className = '',
}) => {
  const illustrations: Record<1 | 2 | 3 | 4, React.FC<{ size: number }>> = {
    1: Phase1Illustration,
    2: Phase2Illustration,
    3: Phase3Illustration,
    4: Phase4Illustration,
  };

  const Illustration = illustrations[phase];

  return (
    <div className={className}>
      <Illustration size={size} />
    </div>
  );
};

export default PhaseIllustration;
