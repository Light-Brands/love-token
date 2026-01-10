'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, GeneratedImage } from '@/components/ui';
import {
  HeartIcon,
  MeditationIcon,
  ZapIcon,
  UsersIcon,
  GlobalIcon,
  ArrowRightIcon,
  CheckIcon,
  FlowIcon,
  DropletIcon,
} from '@/components/icons';

// Energy benefits progression
const energyBenefits = [
  {
    threshold: 1000,
    label: 'Community Lighting',
    description: 'Extended hours for community lighting infrastructure',
    icon: ZapIcon,
    color: 'sunlit-gold',
    imagePromptId: 'energy-community-power',
  },
  {
    threshold: 2500,
    label: 'Charging Stations',
    description: 'Phone charging stations for the community',
    icon: ZapIcon,
    color: 'sunlit-gold',
    imagePromptId: 'energy-charging-station',
  },
  {
    threshold: 5000,
    label: 'Extended Power Hours',
    description: 'Additional hours of electricity for households',
    icon: ZapIcon,
    color: 'om-sage',
    imagePromptId: 'energy-dashboard',
  },
  {
    threshold: 10000,
    label: 'Clean Water Access',
    description: 'Power for water pumping and purification systems',
    icon: DropletIcon,
    color: 'meditation-dusk',
    imagePromptId: 'community-goal-water',
  },
  {
    threshold: 25000,
    label: 'Food Refrigeration',
    description: 'Community refrigeration for food preservation',
    icon: HeartIcon,
    color: 'heart-rose',
    imagePromptId: 'energy-refrigeration',
  },
];

// How it works steps
const howItWorks = [
  {
    step: 1,
    title: 'Community Meditates Together',
    description: 'When the community participates in meditation, they earn Love Credits AND Energy Access Credits (EAC).',
    icon: MeditationIcon,
  },
  {
    step: 2,
    title: 'EAC Accumulate',
    description: 'Energy Access Credits accumulate in the community\'s energy fund. The more participation, the faster they grow.',
    icon: ZapIcon,
  },
  {
    step: 3,
    title: 'Thresholds Unlock',
    description: 'When thresholds are reached, real infrastructure benefits unlock for the entire community.',
    icon: FlowIcon,
  },
  {
    step: 4,
    title: 'Benefits Delivered',
    description: 'Partner organizations deliver the infrastructure — extended power, clean water, medical equipment.',
    icon: CheckIcon,
  },
];

// Sample community progress
const communityProgress = [
  {
    name: 'Sunrise Village',
    location: 'Kenya',
    currentEAC: 3200,
    nextThreshold: 5000,
    nextBenefit: 'Extended Power Hours',
    progress: 64,
  },
  {
    name: 'Mountain Heart',
    location: 'India',
    currentEAC: 7800,
    nextThreshold: 10000,
    nextBenefit: 'Clean Water Access',
    progress: 78,
  },
  {
    name: 'River Community',
    location: 'Philippines',
    currentEAC: 1800,
    nextThreshold: 2500,
    nextBenefit: 'Charging Stations',
    progress: 72,
  },
];

// Vision points
const visionPoints = [
  'Meditation-powered microgrids in off-grid communities',
  'Community-owned renewable energy infrastructure',
  'Love Credits financing solar panel installations',
  'Clean water access funded by collective presence',
  'Medical equipment powered by community practice',
];

export default function EnergyPage() {
  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sunlit-gold/10 to-transparent" />

        <div className="container-love relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-sunlit-gold/10 text-sunlit-gold rounded-full text-sm font-medium mb-6">
                <ZapIcon size={16} />
                Future Vision
              </span>
              <h1 className="heading-1 mb-6">
                When Love Powers
                <span className="gradient-text block">Communities</span>
              </h1>
              <p className="body-large text-deep-root/70 mb-8">
                Beyond credits and currency — the Love Economy vision for collective participation
                unlocking real infrastructure: energy, water, healthcare.
              </p>
              <Link href="/join">
                <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon size={20} />}>
                  Join the Vision
                </Button>
              </Link>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-card">
                <GeneratedImage
                  promptId="hero-energy-community"
                  alt="A village with solar panels and community gathering at dusk"
                  fill
                  className="rounded-card"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Energy Credits Work */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">How Energy Access Credits Work</h2>
            <p className="body-large text-deep-root/70">
              A future where collective meditation unlocks real infrastructure for communities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sunlit-gold text-white font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-lotus-soft/50 flex items-center justify-center">
                  <item.icon size={28} className="text-meditation-dusk" />
                </div>
                <h3 className="font-semibold text-deep-root mb-2">{item.title}</h3>
                <p className="text-deep-root/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threshold Benefits */}
      <section className="section-padding bg-gradient-to-br from-sunlit-gold/10 to-om-sage/10">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Threshold Benefits</h2>
            <p className="body-large text-deep-root/70">
              As communities accumulate Energy Access Credits, they unlock progressively larger benefits.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Progress line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border-mist hidden md:block" />

              {energyBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-6 mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="inline-block overflow-hidden">
                      <div className="relative aspect-video w-full">
                        <GeneratedImage
                          promptId={benefit.imagePromptId}
                          alt={benefit.label}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${benefit.color}/10 text-${benefit.color} rounded-full text-sm mb-2`}>
                          <benefit.icon size={16} />
                          {benefit.threshold.toLocaleString()} EAC
                        </div>
                        <h3 className="font-semibold text-deep-root mb-1">{benefit.label}</h3>
                        <p className="text-deep-root/70 text-sm">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={`hidden md:flex w-6 h-6 rounded-full bg-${benefit.color} border-4 border-white shadow-gentle z-10`} />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Progress */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Community Progress</h2>
            <p className="body-large text-deep-root/70">
              Watch as communities work together toward their next infrastructure milestone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {communityProgress.map((community, index) => (
              <motion.div
                key={community.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-deep-root">{community.name}</h3>
                        <span className="text-xs text-stone-grey">{community.location}</span>
                      </div>
                      <ZapIcon size={20} className="text-sunlit-gold" />
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-deep-root font-medium">{community.currentEAC.toLocaleString()} EAC</span>
                        <span className="text-stone-grey">{community.nextThreshold.toLocaleString()} EAC</span>
                      </div>
                      <div className="w-full h-2 bg-lotus-soft rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${community.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-love-flow rounded-full"
                        />
                      </div>
                    </div>

                    <div className="text-center p-3 bg-lotus-soft/30 rounded-love">
                      <span className="text-xs text-stone-grey">Next benefit:</span>
                      <p className="text-sm font-medium text-heart-rose">{community.nextBenefit}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 text-white mb-6">The Long-Term Vision</h2>
              <p className="body-large text-white/80 mb-6">
                Imagine a world where communities power their own development through collective spiritual practice.
                Where meditation funds microgrids. Where presence powers healthcare.
              </p>
              <ul className="space-y-3">
                {visionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon size={18} className="flex-shrink-0 mt-0.5 text-sunlit-gold" />
                    <span className="text-white/80 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/10 p-8">
                <CardContent>
                  <div className="text-center">
                    <GlobalIcon size={48} className="mx-auto mb-4 text-sunlit-gold" />
                    <h3 className="text-xl font-semibold text-white mb-4">
                      This is Not a Dream
                    </h3>
                    <p className="text-white/70 mb-6">
                      The infrastructure is already being built. The technology exists.
                      The only missing ingredient is collective will — and that&apos;s what we&apos;re cultivating.
                    </p>
                    <p className="text-lg text-sunlit-gold font-medium italic">
                      &quot;Love is the most sustainable energy source in the universe.&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
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
            <ZapIcon size={48} className="mx-auto mb-6 text-white/90" />
            <h2 className="heading-2 text-white mb-4">
              Help Power This Vision
            </h2>
            <p className="body-large text-white/80 mb-8">
              Whether you meditate, donate, or spread the word —
              you&apos;re helping build a future where love powers communities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/meditate">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white text-heart-rose hover:bg-white/90"
                  rightIcon={<ArrowRightIcon size={20} />}
                >
                  Start Meditating
                </Button>
              </Link>
              <Link href="/join?role=donor">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Become a Donor
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
