'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, GeneratedImage } from '@/components/ui';
import {
  HeartIcon,
  MeditationIcon,
  UsersIcon,
  StoreIcon,
  GlobalIcon,
  ArrowRightIcon,
  MapPinIcon,
  CheckIcon,
} from '@/components/icons';

// Community data
const communities = [
  {
    name: 'Sunrise Village',
    location: 'Nakuru, Kenya',
    region: 'East Africa',
    status: 'active',
    farmers: 85,
    vendors: 12,
    meditations: 2341,
    creditsCirculated: 847,
    description: 'The first Love Farm in East Africa, where meditation has become a morning ritual for the entire village. Founded by a group of women seeking economic independence.',
    imagePromptId: 'community-sunrise-village',
  },
  {
    name: 'Mountain Heart',
    location: 'Dharamsala, India',
    region: 'South Asia',
    status: 'active',
    farmers: 120,
    vendors: 18,
    meditations: 3456,
    creditsCirculated: 1234,
    description: 'A high-altitude community where Love Farmers gather at dawn to meditate and earn together. Deep roots in contemplative traditions.',
    imagePromptId: 'community-mountain-heart',
  },
  {
    name: 'River Community',
    location: 'Cebu, Philippines',
    region: 'Southeast Asia',
    status: 'active',
    farmers: 65,
    vendors: 8,
    meditations: 1892,
    creditsCirculated: 623,
    description: 'Fishermen turned Love Farmers who meditate before dawn while waiting for their catch. A unique integration of work and practice.',
    imagePromptId: 'community-river-village',
  },
  {
    name: 'Garden Valley',
    location: 'Mombasa, Kenya',
    region: 'East Africa',
    status: 'active',
    farmers: 45,
    vendors: 6,
    meditations: 987,
    creditsCirculated: 312,
    description: 'An urban community garden that became a Love Farm. Members meditate together before tending their plots.',
    imagePromptId: 'community-garden-valley',
  },
  {
    name: 'Coastal Haven',
    location: 'Tamil Nadu, India',
    region: 'South Asia',
    status: 'onboarding',
    farmers: 30,
    vendors: 4,
    meditations: 423,
    creditsCirculated: 145,
    description: 'A new Love Farm being established among fishing communities along the coast. In the final stages of onboarding.',
    imagePromptId: 'community-coastal-haven',
  },
  {
    name: 'Highland Circle',
    location: 'Baguio, Philippines',
    region: 'Southeast Asia',
    status: 'onboarding',
    farmers: 25,
    vendors: 3,
    meditations: 234,
    creditsCirculated: 78,
    description: 'Indigenous community bringing their ancestral meditation practices into the Love Economy. Currently training local administrators.',
    imagePromptId: 'community-highland-circle',
  },
];

// Region stats
const regionStats = [
  { region: 'East Africa', farms: 2, farmers: 130, color: 'heart-rose' },
  { region: 'South Asia', farms: 2, farmers: 150, color: 'sunlit-gold' },
  { region: 'Southeast Asia', farms: 2, farmers: 90, color: 'om-sage' },
];

// How to start a Love Farm
const startSteps = [
  { step: 1, title: 'Express Interest', description: 'Contact us about starting a Love Farm in your community' },
  { step: 2, title: 'Community Assessment', description: 'We\'ll work together to understand your community\'s needs' },
  { step: 3, title: 'Admin Training', description: 'Local administrators receive training on the system' },
  { step: 4, title: 'Vendor Onboarding', description: 'Local vendors register to accept Love Credits' },
  { step: 5, title: 'Launch', description: 'Your community begins meditating and earning together' },
];

export default function CommunitiesPage() {
  const activeCommunities = communities.filter(c => c.status === 'active');
  const onboardingCommunities = communities.filter(c => c.status === 'onboarding');

  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-soft/20 to-transparent" />

        <div className="container-love relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium mb-6">
              <GlobalIcon size={16} />
              Love Farms Worldwide
            </span>
            <h1 className="heading-1 mb-6">
              Our
              <span className="gradient-text block">Communities</span>
            </h1>
            <p className="body-large text-deep-root/70">
              Love Farms around the world where meditation creates real economic value
              and transforms lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {regionStats.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardContent>
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-${region.color}/10 flex items-center justify-center`}>
                      <GlobalIcon size={24} className={`text-${region.color}`} />
                    </div>
                    <h3 className="font-semibold text-deep-root mb-2">{region.region}</h3>
                    <div className="flex justify-center gap-6">
                      <div>
                        <div className={`text-2xl font-bold text-${region.color}`}>{region.farms}</div>
                        <div className="text-xs text-stone-grey">Love Farms</div>
                      </div>
                      <div>
                        <div className={`text-2xl font-bold text-${region.color}`}>{region.farmers}</div>
                        <div className="text-xs text-stone-grey">Love Farmers</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Communities */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Active Love Farms</h2>
            <p className="body-large text-deep-root/70">
              Communities where love is flowing and lives are being transformed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {activeCommunities.map((community, index) => (
              <motion.div
                key={community.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative aspect-video">
                    <GeneratedImage
                      promptId={community.imagePromptId}
                      alt={`${community.name} community`}
                      fill
                      objectFit="cover"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-success-sage text-white rounded text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Active
                      </span>
                    </div>
                  </div>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPinIcon size={16} className="text-heart-rose" />
                      <span className="text-sm text-stone-grey">{community.location}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-deep-root mb-2">
                      {community.name}
                    </h3>
                    <p className="text-deep-root/70 text-sm mb-4">
                      {community.description}
                    </p>
                    <div className="grid grid-cols-4 gap-2 pt-4 border-t border-border-mist">
                      <div className="text-center">
                        <div className="text-lg font-bold text-heart-rose">{community.farmers}</div>
                        <div className="text-xs text-stone-grey">Farmers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-sunlit-gold">{community.vendors}</div>
                        <div className="text-xs text-stone-grey">Vendors</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-meditation-dusk">{community.meditations}</div>
                        <div className="text-xs text-stone-grey">Sessions</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-om-sage">{community.creditsCirculated}</div>
                        <div className="text-xs text-stone-grey">LVC</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Communities */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Coming Soon</h2>
            <p className="body-large text-deep-root/70">
              New Love Farms currently in the onboarding process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {onboardingCommunities.map((community, index) => (
              <motion.div
                key={community.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <MapPinIcon size={14} className="text-stone-grey" />
                          <span className="text-xs text-stone-grey">{community.location}</span>
                        </div>
                        <h3 className="font-semibold text-deep-root">{community.name}</h3>
                      </div>
                      <span className="inline-block px-2 py-1 bg-sunlit-gold/10 text-sunlit-gold rounded text-xs">
                        Onboarding
                      </span>
                    </div>
                    <p className="text-deep-root/70 text-sm">
                      {community.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Start a Love Farm */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 text-white mb-4">Start a Love Farm</h2>
            <p className="body-large text-white/70">
              Want to bring the Love Economy to your community?
              Here&apos;s how to get started.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {startSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-sunlit-gold text-deep-root font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{step.title}</h4>
                  <p className="text-white/60 text-xs">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/join">
              <Button
                variant="ghost"
                size="lg"
                className="bg-white text-heart-rose hover:bg-white/90"
                rightIcon={<ArrowRightIcon size={20} />}
              >
                Apply to Start a Love Farm
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
