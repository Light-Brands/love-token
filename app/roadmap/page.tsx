'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, Badge } from '@/components/ui';
import {
  HeartIcon,
  UsersIcon,
  ZapIcon,
  GlobalIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
} from '@/components/icons';
import {
  Phase1Infographic,
  Phase2Infographic,
  Phase3Infographic,
  Phase4Infographic,
} from '@/components/icons/PhaseInfographics';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Phase data with infographics
const phases = [
  {
    number: 1,
    slug: 'mvp-core',
    title: 'MVP Core',
    subtitle: 'Building the Foundation',
    status: 'current' as const,
    timeline: 'Months 1-4',
    icon: HeartIcon,
    infographic: Phase1Infographic,
    color: 'heart-rose',
    description: 'Establishing core authentication, meditation tracking, and the Love Credit system with 2-3 pilot communities.',
    features: [
      'User authentication & roles',
      'Meditation timer with verification',
      'Love Points & Love Credits',
      'Digital wallets',
      'Basic admin tools',
    ],
  },
  {
    number: 2,
    slug: 'donor-impact',
    title: 'Donor Impact',
    subtitle: 'Connecting Donors to Love',
    status: 'upcoming' as const,
    timeline: 'Months 5-8',
    icon: UsersIcon,
    infographic: Phase2Infographic,
    color: 'earth-clay',
    description: 'Enabling vendor redemptions, donor subscriptions, and transparent impact tracking to complete the economic circle.',
    features: [
      'Vendor registration & redemption',
      'Donor subscriptions',
      'Project goals & funding',
      'Global impact counters',
      'Daily love notifications',
    ],
  },
  {
    number: 3,
    slug: 'energy-integration',
    title: 'Energy Integration',
    subtitle: 'Unlocking Infrastructure',
    status: 'future' as const,
    timeline: 'Months 9-14',
    icon: ZapIcon,
    infographic: Phase3Infographic,
    color: 'sunlit-gold',
    description: 'Communities that meditate together unlock tangible infrastructure benefits like extended electricity and lighting.',
    features: [
      'Energy Access Credits',
      'Community threshold benefits',
      'Miracles feed & stories',
      'Advanced analytics',
      'Infrastructure partnerships',
    ],
  },
  {
    number: 4,
    slug: 'global-scale',
    title: 'Global Scale',
    subtitle: 'Worldwide Adoption',
    status: 'future' as const,
    timeline: 'Months 15+',
    icon: GlobalIcon,
    infographic: Phase4Infographic,
    color: 'om-sage',
    description: 'Love Coin digital currency, blockchain integration, decentralized governance, and global marketplace.',
    features: [
      'Love Coin digital currency',
      'Blockchain integration',
      'Decentralized governance',
      'Global marketplace',
      'Infrastructure finance',
    ],
  },
];

const statusConfig = {
  current: { label: 'In Progress', variant: 'success' as const, bgColor: 'bg-success-sage/10', textColor: 'text-success-sage' },
  upcoming: { label: 'Coming Soon', variant: 'warning' as const, bgColor: 'bg-sunlit-gold/10', textColor: 'text-sunlit-gold' },
  future: { label: 'Future Vision', variant: 'default' as const, bgColor: 'bg-meditation-dusk/10', textColor: 'text-meditation-dusk' },
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-soft/20 to-transparent" />

        <div className="container-love relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium mb-6">
              <ClockIcon size={16} />
              Development Roadmap
            </span>
            <h1 className="heading-1 mb-4">
              Building the
              <span className="gradient-text block">Love Economy</span>
            </h1>
            <p className="body-large text-deep-root/70">
              Our journey from MVP to global scale — four phases of building the world&apos;s
              first functioning Love Economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Timeline with Infographics */}
      <section className="py-8 bg-white border-y border-border-mist overflow-x-auto">
        <div className="container-love">
          <div className="flex justify-between items-center min-w-[700px] max-w-5xl mx-auto px-4 relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-heart-rose via-sunlit-gold to-om-sage transform -translate-y-1/2 rounded-full opacity-30" />

            {/* Progress Line (for current phase) */}
            <div className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-heart-rose to-heart-rose/50 transform -translate-y-1/2 rounded-full" style={{ width: '12%' }} />

            {phases.map((phase, index) => {
              const Infographic = phase.infographic;
              const isActive = phase.status === 'current';

              return (
                <motion.div
                  key={phase.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center relative z-10"
                >
                  <Link href={`/about/phases/${phase.slug}`} className="group">
                    <div className={`relative transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                      <Infographic size={80} animated={isActive} />
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-success-sage rounded-full animate-pulse" />
                      )}
                    </div>
                    <div className="text-center mt-3">
                      <p className="text-xs text-stone-grey">Phase {phase.number}</p>
                      <p className={`text-sm font-semibold ${isActive ? 'text-heart-rose' : 'text-deep-root'} group-hover:text-heart-rose transition-colors`}>
                        {phase.title}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Phase Details */}
      <section className="section-padding">
        <div className="container-love">
          <div className="space-y-8 max-w-5xl mx-auto">
            {phases.map((phase, index) => {
              const Infographic = phase.infographic;
              const status = statusConfig[phase.status];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={phase.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className={`overflow-hidden ${phase.status === 'current' ? 'ring-2 ring-success-sage/50' : ''}`}>
                    <CardContent className="p-0">
                      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                        {/* Infographic Side */}
                        <div className={`lg:w-1/3 p-8 flex items-center justify-center bg-gradient-to-br from-${phase.color}/5 to-${phase.color}/10`}>
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <Infographic size={180} animated={phase.status === 'current'} />
                          </motion.div>
                        </div>

                        {/* Content Side */}
                        <div className="lg:w-2/3 p-8">
                          {/* Header */}
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <Badge variant={status.variant}>
                              {status.label}
                            </Badge>
                            <span className="text-sm text-stone-grey flex items-center gap-1">
                              <ClockIcon size={14} />
                              {phase.timeline}
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="heading-3 mb-2">{phase.title}</h2>
                          <p className={`text-${phase.color} font-medium mb-4`}>{phase.subtitle}</p>

                          {/* Description */}
                          <p className="text-deep-root/70 mb-6">
                            {phase.description}
                          </p>

                          {/* Features Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                            {phase.features.map((feature, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <CheckIcon size={16} className={`flex-shrink-0 mt-0.5 text-${phase.color}`} />
                                <span className="text-sm text-deep-root/80">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* CTA */}
                          <Link href={`/about/phases/${phase.slug}`}>
                            <Button
                              variant={phase.status === 'current' ? 'primary' : 'outline'}
                              rightIcon={<ArrowRightIcon size={16} />}
                            >
                              View Phase Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <GlobalIcon size={48} className="mx-auto mb-6 text-sunlit-gold" />
            <h2 className="heading-2 text-white mb-4">The Vision</h2>
            <p className="body-large text-white/80 mb-8">
              By Phase 4, the Love Economy will operate at global scale — with Love Coin as a
              recognized digital currency, blockchain-secured transactions, and meditation-generated
              value funding sustainable development worldwide.
            </p>
            <p className="text-xl text-sunlit-gold font-medium italic">
              &quot;Every meditation is a step toward a world where love creates real value.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-love-flow">
        <div className="container-love text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-2 text-white mb-4">Be Part of the Journey</h2>
            <p className="body-large text-white/80 mb-8">
              Join us as we build the Love Economy together.
              Every phase brings us closer to a world where love creates real value.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/join">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white text-heart-rose hover:bg-white/90"
                  rightIcon={<ArrowRightIcon size={20} />}
                >
                  Get Involved
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Learn About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
