'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, GeneratedImage, Badge } from '@/components/ui';
import {
  HeartIcon,
  GlobalIcon,
  UsersIcon,
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
  ZapIcon,
  StarIcon,
  Phase1Infographic,
  Phase2Infographic,
  Phase3Infographic,
  Phase4Infographic,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// All 5 phases of the Love Economy roadmap
const phases = [
  {
    number: 1,
    slug: 'mvp-core',
    title: 'MVP Core',
    subtitle: 'Building the Foundation',
    status: 'current' as const,
    icon: HeartIcon,
    infographic: Phase1Infographic,
    color: 'heart-rose',
    timeline: 'Months 1-4',
    description: 'Establishing core authentication, meditation tracking, and the Love Credit system with 2-3 pilot communities.',
    highlights: [
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
    icon: UsersIcon,
    infographic: Phase2Infographic,
    color: 'earth-clay',
    timeline: 'Months 5-8',
    description: 'Enabling vendor redemptions, donor subscriptions, and transparent impact tracking to complete the economic circle.',
    highlights: [
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
    icon: ZapIcon,
    infographic: Phase3Infographic,
    color: 'sunlit-gold',
    timeline: 'Months 9-14',
    description: 'Communities that meditate together unlock tangible infrastructure benefits like extended electricity and lighting.',
    highlights: [
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
    icon: GlobalIcon,
    infographic: Phase4Infographic,
    color: 'om-sage',
    timeline: 'Months 15-20',
    description: 'Transforming the Love Economy into permanent infrastructure with Love Coin currency and decentralized governance.',
    highlights: [
      'Love Coin digital currency',
      'Blockchain integration',
      'Decentralized governance',
      'Global marketplace',
      'Infrastructure finance',
    ],
  },
  {
    number: 5,
    slug: 'universal-love',
    title: 'Universal Love',
    subtitle: 'A New World Economy',
    status: 'future' as const,
    icon: StarIcon,
    infographic: null, // Phase 5 doesn't have an infographic yet
    color: 'meditation-dusk',
    timeline: 'Months 21+',
    description: 'The ultimate vision: a global network where love is the foundation of economic exchange and human flourishing.',
    highlights: [
      'Universal basic love income',
      'Cross-border love exchange',
      'Planetary meditation events',
      'Love-based governance systems',
      'Full economic integration',
    ],
  },
];

const statusConfig = {
  current: { label: 'In Progress', variant: 'success' as const, bgColor: 'bg-success-sage' },
  upcoming: { label: 'Coming Soon', variant: 'warning' as const, bgColor: 'bg-sunlit-gold' },
  future: { label: 'Future Vision', variant: 'default' as const, bgColor: 'bg-meditation-dusk' },
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-soft/20 to-transparent" />

        <div className="container-love relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium mb-6">
              <SparklesIcon size={16} />
              The Journey Ahead
            </span>
            <h1 className="heading-1 mb-6">
              Love Economy
              <span className="gradient-text block">Roadmap</span>
            </h1>
            <p className="body-large text-deep-root/70">
              Our five-phase journey to build a world where love creates real, measurable value.
              From pilot communities to global adoption, here&apos;s how we&apos;re making it happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">The Path Forward</h2>
            <p className="body-large text-deep-root/70">
              Each phase builds on the last, creating a foundation for lasting change.
            </p>
          </motion.div>

          {/* Timeline Progress Bar */}
          <div className="relative max-w-5xl mx-auto mb-16">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-border-mist rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '20%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-heart-rose to-earth-clay rounded-full"
              />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 ${
                      phase.status === 'current'
                        ? 'bg-love-flow shadow-warm-glow'
                        : phase.status === 'upcoming'
                        ? `bg-${phase.color}/20`
                        : 'bg-stone-grey/10'
                    }`}
                  >
                    <phase.icon
                      size={24}
                      className={
                        phase.status === 'current'
                          ? 'text-white'
                          : phase.status === 'upcoming'
                          ? `text-${phase.color}`
                          : 'text-stone-grey'
                      }
                    />
                  </div>
                  <div className="text-xs font-semibold text-stone-grey mb-1">Phase {phase.number}</div>
                  <div className="text-sm font-medium text-deep-root hidden md:block">{phase.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phase Cards */}
      <section className="section-padding">
        <div className="container-love">
          <div className="space-y-8 max-w-6xl mx-auto">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const Infographic = phase.infographic;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/about/phases/${phase.slug}`}>
                    <Card
                      variant="warm"
                      className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <div className={`grid md:grid-cols-5 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        {/* Phase Infographic or Icon */}
                        <div
                          className={`p-6 md:p-8 flex flex-col items-center justify-center bg-${phase.color}/10 md:col-span-2`}
                        >
                          {Infographic ? (
                            <div className="group-hover:scale-105 transition-transform duration-300">
                              <Infographic size={160} animated={true} />
                            </div>
                          ) : (
                            <>
                              <div
                                className={`w-20 h-20 rounded-full bg-${phase.color}/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                              >
                                <Icon size={40} className={`text-${phase.color}`} />
                              </div>
                              <div className="text-5xl font-bold text-deep-root/20">{phase.number}</div>
                            </>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 md:col-span-3">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <Badge variant={statusConfig[phase.status].variant}>
                              {statusConfig[phase.status].label}
                            </Badge>
                            <span className="text-sm text-stone-grey">{phase.timeline}</span>
                          </div>

                          <h3 className="text-2xl font-bold text-deep-root mb-2">
                            {phase.title}
                          </h3>
                          <p className="text-lg text-deep-root/60 mb-4">{phase.subtitle}</p>
                          <p className="text-deep-root/70 mb-6">{phase.description}</p>

                          {/* Highlights */}
                          <div className="grid sm:grid-cols-2 gap-3 mb-6">
                            {phase.highlights.map((highlight, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-deep-root/70">
                                <CheckIcon size={14} className={`text-${phase.color} flex-shrink-0`} />
                                {highlight}
                              </div>
                            ))}
                          </div>

                          {/* View Details Link */}
                          <div className="flex items-center gap-2 text-heart-rose font-medium group-hover:gap-3 transition-all">
                            View Phase Details
                            <ArrowRightIcon size={18} />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <GlobalIcon size={48} className="mx-auto mb-6 text-sunlit-gold" />
            <h2 className="heading-2 text-white mb-6">The Ultimate Vision</h2>
            <p className="text-xl text-white/80 mb-8">
              We&apos;re building toward a future where the Love Economy operates at global scale —
              with Love Coin as a recognized digital currency and meditation-generated value
              funding sustainable development worldwide.
            </p>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-card border border-white/10">
              <p className="text-2xl font-light text-sunlit-gold italic">
                &quot;Love is not given. Love is shared. Love is earned. Love circulates.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="success" className="mb-4">Current Focus</Badge>
              <h2 className="heading-2 mb-4">Phase 1: MVP Core</h2>
              <p className="body-large text-deep-root/70 mb-6">
                We&apos;re currently in the foundational phase, building the essential infrastructure
                that enables Love Farmers to meditate and earn, donors to contribute, and the first
                communities to participate in the Love Economy.
              </p>
              <div className="space-y-3 mb-8">
                {phases[0].highlights.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-success-sage/10 flex items-center justify-center">
                      <CheckIcon size={14} className="text-success-sage" />
                    </div>
                    <span className="text-deep-root/80">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about/phases/mvp-core">
                <Button variant="primary" rightIcon={<ArrowRightIcon size={18} />}>
                  Explore Phase 1 Details
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-card">
                <GeneratedImage
                  promptId="hero-meditation-light"
                  alt="Community meditation session"
                  fill
                  className="rounded-card"
                />
              </div>
            </motion.div>
          </div>
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
            <h2 className="heading-2 text-white mb-4">Join the Journey</h2>
            <p className="body-large text-white/80 mb-8">
              Be part of building the Love Economy. Whether you want to meditate, donate,
              or bring this to your community — there&apos;s a place for you.
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
              <Link href="/meditate">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Start Meditating
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
