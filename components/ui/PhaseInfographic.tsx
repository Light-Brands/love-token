'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PhaseInfographicProps {
  phase: 'mvp-core' | 'donor-impact' | 'energy-integration' | 'global-scale';
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

const sizeClasses = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'w-64 h-64',
};

// Phase 1: MVP Core - Meditation, building blocks, wallet
const MVPCoreGraphic = ({ size, showNumber }: { size: 'sm' | 'md' | 'lg'; showNumber: boolean }) => (
  <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
    {/* Sparkles */}
    <motion.div
      className="absolute top-2 left-6 text-sunlit-gold text-xs"
      animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      ✦
    </motion.div>
    <motion.div
      className="absolute top-4 right-8 text-heart-rose/60 text-[10px]"
      animate={{ opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
    >
      +
    </motion.div>

    {/* Main circle with meditating figure */}
    <div className="relative">
      <div className="w-16 h-16 rounded-full bg-heart-rose/20 border-4 border-heart-rose/40 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-heart-rose">
          <circle cx="12" cy="6" r="3" fill="currentColor"/>
          <path d="M12 10c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z" fill="currentColor"/>
          <path d="M8 18l4-3 4 3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      {/* Side coins */}
      <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-sunlit-gold/30 border-2 border-sunlit-gold/50 flex items-center justify-center text-sunlit-gold text-xs font-bold">
        $
      </div>
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-sunlit-gold/30 border-2 border-sunlit-gold/50 flex items-center justify-center text-sunlit-gold text-xs font-bold">
        +
      </div>
    </div>

    {/* Building blocks below */}
    <div className="absolute bottom-8 flex gap-1">
      <div className="w-5 h-5 bg-lotus-soft border border-stone-grey/20 rounded-sm" />
      <div className="w-5 h-5 bg-lotus-soft border border-stone-grey/20 rounded-sm" />
      <div className="w-5 h-5 bg-lotus-soft border border-stone-grey/20 rounded-sm" />
    </div>
    <div className="absolute bottom-14 flex gap-1">
      <div className="w-5 h-5 bg-heart-rose/30 border border-heart-rose/40 rounded-sm" />
      <div className="w-5 h-5 bg-heart-rose/30 border border-heart-rose/40 rounded-sm" />
    </div>

    {/* Progress bar */}
    <div className="absolute bottom-2 w-24 h-2 bg-sunlit-gold/30 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-sunlit-gold rounded-full"
        initial={{ width: '20%' }}
        animate={{ width: '60%' }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
    </div>

    {/* Phase number badge */}
    {showNumber && (
      <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-heart-rose text-white text-sm font-bold flex items-center justify-center shadow-md">
        1
      </div>
    )}
  </div>
);

// Phase 2: Donor Impact - Heart connecting people
const DonorImpactGraphic = ({ size, showNumber }: { size: 'sm' | 'md' | 'lg'; showNumber: boolean }) => (
  <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
    {/* Sparkles */}
    <motion.div
      className="absolute top-8 left-10 text-sunlit-gold/60 text-xs"
      animate={{ opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      +
    </motion.div>
    <motion.div
      className="absolute bottom-12 right-6 text-sunlit-gold/60 text-xs"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 0.7 }}
    >
      +
    </motion.div>

    {/* Central heart */}
    <div className="relative">
      <motion.div
        className="w-14 h-14 rounded-full bg-heart-rose/20 border-4 border-heart-rose/40 flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-heart-rose">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </motion.div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ width: '200px', height: '200px', left: '-73px', top: '-73px' }}>
        <motion.line
          x1="100" y1="70" x2="60" y2="40"
          stroke="#E8B4B8" strokeWidth="2" strokeDasharray="4,4"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.line
          x1="100" y1="70" x2="140" y2="40"
          stroke="#E8B4B8" strokeWidth="2" strokeDasharray="4,4"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        />
        <motion.line
          x1="100" y1="130" x2="60" y2="150"
          stroke="#E8B4B8" strokeWidth="2" strokeDasharray="4,4"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
        />
        <motion.line
          x1="100" y1="130" x2="100" y2="160"
          stroke="#E8B4B8" strokeWidth="2" strokeDasharray="4,4"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
        />
        <motion.line
          x1="100" y1="130" x2="140" y2="150"
          stroke="#E8B4B8" strokeWidth="2" strokeDasharray="4,4"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
        />
      </svg>

      {/* Top people (donors) */}
      <div className="absolute -top-12 -left-10 w-8 h-8 rounded-full bg-stone-grey/20 border-2 border-stone-grey/30 flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-stone-grey">
          <circle cx="12" cy="8" r="4"/>
          <path d="M12 14c-6 0-8 3-8 5v1h16v-1c0-2-2-5-8-5z"/>
        </svg>
      </div>
      <div className="absolute -top-12 right-[-40px] w-8 h-8 rounded-full bg-earth-clay/20 border-2 border-earth-clay/40 flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-earth-clay">
          <circle cx="12" cy="8" r="4"/>
          <path d="M12 14c-6 0-8 3-8 5v1h16v-1c0-2-2-5-8-5z"/>
        </svg>
      </div>

      {/* Bottom people (community) */}
      <div className="absolute -bottom-12 -left-6 w-7 h-7 rounded-full bg-sunlit-gold/30 flex items-center justify-center text-lg">
        😊
      </div>
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-sunlit-gold/30 flex items-center justify-center text-lg">
        😊
      </div>
      <div className="absolute -bottom-12 -right-6 w-7 h-7 rounded-full bg-sunlit-gold/30 flex items-center justify-center text-lg">
        😊
      </div>
    </div>

    {/* Phase number badge */}
    {showNumber && (
      <div className="absolute top-6 right-6 w-7 h-7 rounded-full bg-earth-clay text-white text-sm font-bold flex items-center justify-center shadow-md">
        2
      </div>
    )}
  </div>
);

// Phase 3: Energy Integration - Lightning with thresholds
const EnergyIntegrationGraphic = ({ size, showNumber }: { size: 'sm' | 'md' | 'lg'; showNumber: boolean }) => (
  <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
    {/* Sparkles */}
    <motion.div
      className="absolute top-4 right-10 text-sunlit-gold text-xs"
      animate={{ opacity: [0.5, 1, 0.5], rotate: [0, 15, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      ✦
    </motion.div>
    <motion.div
      className="absolute bottom-8 left-8 text-sunlit-gold text-xs"
      animate={{ opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    >
      ⚡
    </motion.div>

    {/* Central lightning bolt in circle */}
    <div className="relative">
      <motion.div
        className="w-16 h-16 rounded-full bg-sunlit-gold/20 border-4 border-sunlit-gold/50 flex items-center justify-center"
        animate={{ boxShadow: ['0 0 0 0 rgba(218, 165, 32, 0)', '0 0 20px 5px rgba(218, 165, 32, 0.3)', '0 0 0 0 rgba(218, 165, 32, 0)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-sunlit-gold">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      </motion.div>

      {/* Energy bars/threshold levels */}
      <div className="absolute -right-14 top-1/2 -translate-y-1/2 flex flex-col gap-1">
        <motion.div
          className="w-8 h-2 bg-success-sage rounded-sm"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.div
          className="w-8 h-2 bg-sunlit-gold rounded-sm"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.div
          className="w-8 h-2 bg-heart-rose/60 rounded-sm"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Community icons around */}
      <div className="absolute -left-10 -top-6 w-8 h-8 rounded-full bg-om-sage/20 flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-om-sage">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        </svg>
      </div>
      <div className="absolute -left-8 bottom-[-24px] w-8 h-8 rounded-full bg-heart-rose/20 flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-heart-rose">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        </svg>
      </div>
    </div>

    {/* Infrastructure icons */}
    <div className="absolute bottom-4 right-8 flex gap-2">
      <div className="w-6 h-6 rounded bg-stone-grey/20 flex items-center justify-center text-xs">💡</div>
      <div className="w-6 h-6 rounded bg-stone-grey/20 flex items-center justify-center text-xs">🔋</div>
    </div>

    {/* Phase number badge */}
    {showNumber && (
      <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-sunlit-gold text-white text-sm font-bold flex items-center justify-center shadow-md">
        3
      </div>
    )}
  </div>
);

// Phase 4: Global Scale - Globe with connections
const GlobalScaleGraphic = ({ size, showNumber }: { size: 'sm' | 'md' | 'lg'; showNumber: boolean }) => (
  <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
    {/* Orbiting sparkles */}
    <motion.div
      className="absolute top-6 left-1/2 text-sunlit-gold text-xs"
      animate={{
        rotate: 360,
        opacity: [0.5, 1, 0.5]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '0 60px' }}
    >
      ✦
    </motion.div>

    {/* Central globe */}
    <div className="relative">
      <motion.div
        className="w-16 h-16 rounded-full bg-om-sage/20 border-4 border-om-sage/50 flex items-center justify-center overflow-hidden"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-om-sage">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="1"/>
          <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1"/>
          <path d="M4 7h16M4 17h16" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2"/>
        </svg>
      </motion.div>

      {/* Orbiting nodes */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-heart-rose/40 border-2 border-heart-rose flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        style={{ top: '-20px', left: '50%', marginLeft: '-12px', transformOrigin: '12px 52px' }}
      >
        <span className="text-xs">❤️</span>
      </motion.div>
      <motion.div
        className="absolute w-5 h-5 rounded-full bg-sunlit-gold/40 border-2 border-sunlit-gold"
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ bottom: '-16px', left: '50%', marginLeft: '-10px', transformOrigin: '10px -42px' }}
      />

      {/* Connection points */}
      <div className="absolute -left-12 top-0 w-4 h-4 rounded-full bg-meditation-dusk/30" />
      <div className="absolute -right-12 top-0 w-4 h-4 rounded-full bg-meditation-dusk/30" />
      <div className="absolute -left-10 bottom-[-8px] w-4 h-4 rounded-full bg-meditation-dusk/30" />
      <div className="absolute -right-10 bottom-[-8px] w-4 h-4 rounded-full bg-meditation-dusk/30" />

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: '200px', height: '200px', left: '-68px', top: '-68px' }}>
        <motion.line
          x1="100" y1="100" x2="40" y2="68"
          stroke="#7B8B6F" strokeWidth="1" strokeDasharray="3,3"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.line
          x1="100" y1="100" x2="160" y2="68"
          stroke="#7B8B6F" strokeWidth="1" strokeDasharray="3,3"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.line
          x1="100" y1="100" x2="48" y2="140"
          stroke="#7B8B6F" strokeWidth="1" strokeDasharray="3,3"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.line
          x1="100" y1="100" x2="152" y2="140"
          stroke="#7B8B6F" strokeWidth="1" strokeDasharray="3,3"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </svg>
    </div>

    {/* Blockchain icon */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
      <div className="w-4 h-4 bg-meditation-dusk/20 rounded-sm border border-meditation-dusk/30" />
      <div className="w-4 h-4 bg-meditation-dusk/20 rounded-sm border border-meditation-dusk/30" />
      <div className="w-4 h-4 bg-meditation-dusk/20 rounded-sm border border-meditation-dusk/30" />
    </div>

    {/* Phase number badge */}
    {showNumber && (
      <div className="absolute top-6 right-6 w-7 h-7 rounded-full bg-om-sage text-white text-sm font-bold flex items-center justify-center shadow-md">
        4
      </div>
    )}
  </div>
);

export function PhaseInfographic({ phase, size = 'md', showNumber = true }: PhaseInfographicProps) {
  const infographics = {
    'mvp-core': MVPCoreGraphic,
    'donor-impact': DonorImpactGraphic,
    'energy-integration': EnergyIntegrationGraphic,
    'global-scale': GlobalScaleGraphic,
  };

  const InfographicComponent = infographics[phase];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <InfographicComponent size={size} showNumber={showNumber} />
    </motion.div>
  );
}

export default PhaseInfographic;
