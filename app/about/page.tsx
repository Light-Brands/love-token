'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, GeneratedImage } from '@/components/ui';
import { Lumi } from '@/components/lumi';
import {
  HeartIcon,
  GlobalIcon,
  UsersIcon,
  FlowIcon,
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldIcon,
  BookIcon,
  MeditationIcon,
  CoinIcon,
  ZapIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Enhanced values with decision-making principles
const values = [
  {
    title: 'Dignity First',
    description:
      'No pity, no hierarchy, no othering. Love Farmers are value creators, not beneficiaries. Donors are participants, not saviors.',
    principle: 'Dignity vs Efficiency → Choose Dignity',
  },
  {
    title: 'Love as Currency',
    description:
      'We speak of love as real, practical, and powerful. This is economics, not just poetry. Your love becomes real value.',
    principle: 'Measurement matters — what we count, counts',
  },
  {
    title: 'Simplicity is Respect',
    description:
      'Simple language includes everyone. We design for limited-literacy users and universal understanding.',
    principle: 'Simplicity vs Power → Choose Simplicity',
  },
  {
    title: 'Quality Over Speed',
    description:
      'Correctness over visual polish. Trust over speed. Dignity over efficiency. Simplicity over power.',
    principle: 'Speed vs Trust → Choose Trust',
  },
  {
    title: 'Human Oversight',
    description:
      'Technology serves people, not the reverse. Manual overrides and human judgment remain paramount.',
    principle: 'Automation vs Oversight → Choose Oversight',
  },
  {
    title: 'Transparency Always',
    description:
      'Every credit issued, transferred, and burned is auditable. Trust is built through radical transparency.',
    principle: 'Privacy vs Accountability → Balance Both',
  },
];

const differentiators = [
  'Meditation IS contribution — not a reward, but the source of value itself',
  'Communities participate as equals — never recipients, always co-creators',
  'Love flows in circles — donors receive love back, meditators earn real value',
  'Dignity-first design — symbol-based interfaces for limited-literacy communities',
  'Future-proof architecture — built toward global digital currency infrastructure',
];

// What We Are vs What We're Not
const clarifications = [
  { isNot: 'Traditional charity', is: 'An economic system built on dignity and equal participation' },
  { isNot: 'Cryptocurrency speculation', is: 'Stable, backed credits with real local currency value' },
  { isNot: 'Gamification of spirituality', is: 'Meaningful practice that generates authentic value' },
  { isNot: 'Tech-first disruption', is: 'Human-centered design that serves communities' },
];

// Timeline for origin story
const timeline = [
  { year: 'Discovery', description: 'The founding insight: meditation creates real, measurable value' },
  { year: 'Research', description: 'Studying community economies and presence-based value creation' },
  { year: 'Design', description: 'Building the Love Economy framework with dignity at the center' },
  { year: 'Pilot', description: 'Testing with early Love Farm communities' },
  { year: 'MVP', description: 'Launching the world\'s first functioning Love Economy' },
];

// Detailed phases
const phases = [
  {
    phase: 'Phase 1',
    title: 'MVP Core',
    icon: HeartIcon,
    color: 'heart-rose',
    items: [
      'Authentication & user management',
      'Meditation tracking & Love Points',
      'Love Credits for Love Farmers',
      'Digital wallets',
      'Basic admin tools',
      '2-3 pilot communities',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Donor Impact',
    icon: UsersIcon,
    color: 'earth-clay',
    items: [
      'Vendor registration & onboarding',
      'Credit redemption system',
      'Donor subscriptions',
      'Project goals & funding',
      'Global impact counters',
      'Daily love notifications',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Energy Integration',
    icon: ZapIcon,
    color: 'sunlit-gold',
    items: [
      'Energy Access Credits',
      'Community threshold tracking',
      'Miracles feed & stories',
      'Advanced analytics',
      'Localization expansion',
      'Infrastructure unlocking',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Global Scale',
    icon: GlobalIcon,
    color: 'om-sage',
    items: [
      'Love Coin digital currency',
      'Blockchain integration',
      'Decentralized governance',
      'Global marketplace',
      'Infrastructure finance',
      'Worldwide adoption',
    ],
  },
  {
    phase: 'Phase 5',
    title: 'Eternal Legacy',
    icon: SparklesIcon,
    color: 'heart-rose',
    items: [
      'Self-sustaining treasury',
      'Intergenerational transfer',
      'Autonomous communities',
      'Living documentation',
      'Spiritual succession',
      'Universal basic love',
    ],
  },
];

// Team placeholders
const teamMembers = [
  { name: 'Founder', role: 'Vision & Strategy', placeholder: true, imagePromptId: 'role-twge-admin' },
  { name: 'Lead Developer', role: 'Technology', placeholder: true, imagePromptId: 'role-public-user' },
  { name: 'Community Lead', role: 'Love Farm Relations', placeholder: true, imagePromptId: 'role-farm-admin' },
  { name: 'Advisory Board', role: 'Guidance & Oversight', placeholder: true, imagePromptId: 'role-vendor' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-soft/20 to-transparent" />

        <div className="container-love relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium mb-6">
                <GlobalIcon size={16} />
                Our Story
              </span>
              <h1 className="heading-1 mb-6">
                The World&apos;s Greatest
                <span className="gradient-text block">Experiment</span>
              </h1>
              <p className="body-large text-deep-root/70">
                We&apos;re proving that love — real, measurable, practical love —
                can become the foundation of a new economic system.
              </p>
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
                  promptId="hero-community-gathering"
                  alt="A community gathering in a village courtyard at dawn"
                  fill
                  className="rounded-card"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sunlit-gold/10 text-sunlit-gold rounded-full text-sm font-medium mb-6">
              <BookIcon size={16} />
              The Beginning
            </span>
            <h2 className="heading-2 mb-4">How It All Started</h2>
            <p className="body-large text-deep-root/70">
              A simple question led to a revolutionary idea: What if meditation could
              create real economic value?
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border-mist hidden md:block" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-6 mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="inline-block">
                      <CardContent>
                        <div className="text-lg font-bold text-heart-rose mb-1">{item.year}</div>
                        <p className="text-deep-root/70 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-heart-rose border-4 border-white shadow-gentle z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="section-padding">
        <div className="container-love">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">Our Mission</h2>
              <p className="body-large text-deep-root/80 mb-6">
                Love Token is building the world&apos;s first functioning <strong>Love Economy</strong> —
                a system where meditation, intention, and presence generate measurable social and
                economic value.
              </p>
              <p className="body-text text-deep-root/70 mb-6">
                We believe that love is not just an emotion — it&apos;s a force that can transform
                communities, economies, and the world. Through our platform, we&apos;re demonstrating
                that inner work has outer impact.
              </p>
              <div className="p-6 bg-lotus-soft/30 rounded-card border border-lotus-soft">
                <p className="text-xl md:text-2xl font-light text-heart-rose italic text-center">
                  &quot;Love is not given. Love is shared. Love is earned. Love circulates.&quot;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-card">
                <GeneratedImage
                  promptId="mission-intergenerational"
                  alt="An elder and young person sharing a meaningful moment together"
                  fill
                  className="rounded-card"
                />
              </div>
              <Lumi
                message="We're stewarding something sacred — a system where love creates real value."
                state="speaking"
                size="lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Not Charity, Not Crypto Section */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">What We Are (and Aren&apos;t)</h2>
            <p className="body-large text-deep-root/70">
              Clear distinctions matter. Here&apos;s how the Love Economy differs from
              what you might expect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {clarifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-stone-grey/10 flex items-center justify-center mb-2">
                          <span className="text-stone-grey text-xs font-bold">✕</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-success-sage/10 flex items-center justify-center">
                          <CheckIcon size={16} className="text-success-sage" />
                        </div>
                      </div>
                      <div>
                        <p className="text-stone-grey line-through mb-2">{item.isNot}</p>
                        <p className="text-deep-root font-medium">{item.is}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">What Makes Us Different</h2>
            <p className="body-large text-deep-root/70">
              Love Token isn&apos;t charity. It&apos;s not a donation platform.
              It&apos;s a completely new economic paradigm.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 mb-4 bg-white rounded-card shadow-gentle"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success-sage/10 flex items-center justify-center">
                  <CheckIcon size={18} className="text-success-sage" />
                </div>
                <p className="text-deep-root/80 pt-1">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Science Behind Love */}
      <section className="section-padding bg-gradient-to-br from-lotus-soft/30 to-sunlit-gold/10">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-meditation-dusk/10 text-meditation-dusk rounded-full text-sm font-medium mb-6">
              <SparklesIcon size={16} />
              Research Foundation
            </span>
            <h2 className="heading-2 mb-4">The Science Behind Love</h2>
            <p className="body-large text-deep-root/70">
              Our approach is grounded in research on meditation, community economics,
              and the measurable effects of collective intention.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: MeditationIcon,
                title: 'Meditation & Wellbeing',
                description: 'Decades of research show meditation reduces stress, increases focus, and improves emotional regulation — creating measurable value.',
              },
              {
                icon: UsersIcon,
                title: 'Community Economies',
                description: 'Local currencies and community-based economic systems have proven track records of building resilience and reducing inequality.',
              },
              {
                icon: FlowIcon,
                title: 'Collective Intention',
                description: 'Studies on group meditation and shared intention demonstrate amplified effects when communities practice together.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-meditation-dusk/10 flex items-center justify-center">
                      <item.icon size={28} className="text-meditation-dusk" />
                    </div>
                    <h3 className="text-lg font-semibold text-deep-root mb-2">{item.title}</h3>
                    <p className="text-deep-root/70 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* The Love Economy Formula */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <Card variant="warm" className="text-center p-8">
              <CardContent>
                <h3 className="font-semibold text-deep-root mb-4">The Love Economy Formula</h3>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <span className="text-heart-rose font-medium">Intention</span>
                  <span className="text-deep-root/40">+</span>
                  <span className="text-sunlit-gold font-medium">Presence</span>
                  <span className="text-deep-root/40">+</span>
                  <span className="text-om-sage font-medium">Community</span>
                  <span className="text-deep-root/40">=</span>
                  <span className="text-meditation-dusk font-bold">Measurable Value</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 text-white mb-4">Our Core Values</h2>
            <p className="body-large text-white/70">
              Every decision we make is guided by these principles. When in doubt,
              we consult this framework.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const slug = value.title.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link key={value.title} href={`/about/values/${slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/10 h-full hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <h3 className="text-lg font-semibold text-sunlit-gold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">{value.description}</p>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <p className="text-xs text-white/50 italic">{value.principle}</p>
                      <ArrowRightIcon size={14} className="text-white/40" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section - Enhanced with detailed phases */}
      <section className="section-padding">
        <div className="container-love">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-4">Our Vision & Roadmap</h2>
              <p className="body-large text-deep-root/70">
                We&apos;re building toward a future where the Love Economy operates at global scale —
                with Love Coin as a recognized digital currency and meditation-generated value
                funding sustainable development worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-card">
                <GeneratedImage
                  promptId="project-progress"
                  alt="Project progress visualization"
                  fill
                  className="object-cover rounded-card"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {phases.map((phase, index) => {
              const slugMap: Record<string, string> = {
                'Phase 1': 'mvp-core',
                'Phase 2': 'donor-impact',
                'Phase 3': 'energy-integration',
                'Phase 4': 'global-scale',
                'Phase 5': 'eternal-legacy',
              };
              return (
                <Link key={phase.phase} href={`/about/phases/${slugMap[phase.phase]}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card variant="warm" className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent>
                        <div className={`w-12 h-12 mb-4 rounded-full bg-${phase.color}/10 flex items-center justify-center`}>
                          <phase.icon size={24} className={`text-${phase.color}`} />
                        </div>
                        <div className="text-xs text-stone-grey uppercase tracking-wide mb-1">
                          {phase.phase}
                        </div>
                        <h3 className="text-lg font-semibold text-deep-root mb-4">
                          {phase.title}
                        </h3>
                        <ul className="space-y-2 mb-4">
                          {phase.items.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-deep-root/70">
                              <CheckIcon size={12} className="flex-shrink-0 mt-0.5 text-success-sage" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-1 text-xs text-heart-rose">
                          Learn more <ArrowRightIcon size={12} />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">The Team</h2>
            <p className="body-large text-deep-root/70">
              A dedicated group stewarding the Love Economy with care and intention.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden relative">
                  <GeneratedImage
                    promptId={member.imagePromptId}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-medium text-deep-root">{member.name}</h3>
                <p className="text-xs text-stone-grey">{member.role}</p>
                {member.placeholder && (
                  <span className="inline-block mt-2 text-xs text-heart-rose/60">Coming soon</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TWGE Section */}
      <section className="section-padding">
        <div className="container-love text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlobalIcon size={48} className="mx-auto mb-6 text-earth-clay" />
            <h2 className="heading-2 mb-4">Part of Something Bigger</h2>
            <p className="body-large text-deep-root/70 mb-8">
              Love Token is a project of <strong>The World&apos;s Greatest Experiment (TWGE)</strong> —
              an organization dedicated to demonstrating new ways of living, working, and
              creating value together.
            </p>
            <p className="text-lg text-heart-rose font-medium mb-8">
              Together, we&apos;re proving that another world is possible.
            </p>
            <Link href="/join">
              <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon size={20} />}>
                Join the Experiment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
