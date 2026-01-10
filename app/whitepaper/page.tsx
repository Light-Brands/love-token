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
  BookIcon,
  MeditationIcon,
  CoinIcon,
  ZapIcon,
  ShieldIcon,
  LockIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Key Innovations from Executive Summary
const keyInnovations = [
  {
    icon: MeditationIcon,
    title: 'Meditation as Currency',
    description: 'Transform the ancient practice of meditation into a verified, quantifiable contribution that generates real economic value.',
  },
  {
    icon: CoinIcon,
    title: 'Dual-Currency Architecture',
    description: 'Love Points (LP) for global recognition and Love Credits (LVC) for local economic circulation.',
  },
  {
    icon: ShieldIcon,
    title: 'Dignity-First Design',
    description: 'Communities participate as contributors, not beneficiaries — earning through presence, not receiving through charity.',
  },
  {
    icon: ZapIcon,
    title: 'Energy Integration',
    description: 'Meditation unlocks real-world infrastructure benefits including lighting, water access, and food refrigeration.',
  },
];

// Current Impact Metrics
const impactMetrics = [
  { label: 'Total Meditations', value: '15,847+' },
  { label: 'Hours of Love', value: '2,341+' },
  { label: 'Active Love Farmers', value: '752+' },
  { label: 'Credits Circulated', value: '8,245+' },
  { label: 'Partner Vendors', value: '78+' },
  { label: 'Active Communities', value: '12' },
];

// Problems Being Solved
const problemsSolved = [
  {
    problem: 'Dependency Cycles',
    description: 'Recipients become reliant on external aid rather than developing internal capacity.',
  },
  {
    problem: 'Dignity Erosion',
    description: 'Being labeled a "beneficiary" strips individuals of agency and self-worth.',
  },
  {
    problem: 'Unsustainable Structures',
    description: 'Aid flows are volatile, project-based, and disconnected from community needs.',
  },
  {
    problem: 'Unmeasured Love',
    description: 'Love and meditation have no economic recognition despite their profound value.',
  },
];

// Seven Core Principles
const corePrinciples = [
  {
    number: 1,
    title: 'Love is Earned Through Presence',
    description: 'Love Credits are not given as charity — they are earned through the genuine practice of meditation.',
  },
  {
    number: 2,
    title: 'Communities Participate with Dignity',
    description: 'Love Farmers are never referred to as "beneficiaries." They are contributors generating value.',
  },
  {
    number: 3,
    title: 'Meditation is Contribution',
    description: 'When a Love Farmer meditates, they are contributing to a collective field of presence and intention.',
  },
  {
    number: 4,
    title: 'Credits Circulate Locally',
    description: 'Love Credits stay within local economies, supporting local vendors and creating circular prosperity.',
  },
  {
    number: 5,
    title: 'Simplicity is Respect',
    description: 'Symbol-based interfaces ensure limited-literacy users can fully participate with dignity.',
  },
  {
    number: 6,
    title: 'Stability Over Speculation',
    description: 'Love Credits are designed to flow — not for trading or accumulation. Stability enables trust.',
  },
  {
    number: 7,
    title: 'Future-Proof Architecture',
    description: 'The system is designed for seamless transition to blockchain-based Love Coins in future phases.',
  },
];

// Decision Framework
const decisionFramework = [
  { tradeoff: 'Dignity vs Efficiency', choice: 'Choose Dignity' },
  { tradeoff: 'Simplicity vs Power', choice: 'Choose Simplicity' },
  { tradeoff: 'Automation vs Oversight', choice: 'Choose Oversight' },
  { tradeoff: 'Speed vs Trust', choice: 'Choose Trust' },
  { tradeoff: 'Growth vs Stability', choice: 'Choose Stability' },
];

// Love Economy Flows
const economyFlows = [
  {
    step: 1,
    title: 'Meditation → Credits',
    description: 'Love Farmers meditate with verified presence. Minutes convert to Love Credits at established rates.',
  },
  {
    step: 2,
    title: 'Credits → Goods/Services',
    description: 'Love Farmers spend credits at participating vendors who accept them knowing they can redeem for local currency.',
  },
  {
    step: 3,
    title: 'Redemption → Burn',
    description: 'Vendors request redemption. TWGE verifies, pays in local currency, and burns the credits permanently.',
  },
];

// Roadmap Phases (Preview)
const roadmapPhases = [
  { phase: 1, title: 'MVP Core', status: 'Current', description: 'Core platform, meditation tracking, pilot communities' },
  { phase: 2, title: 'Donor Impact', status: 'Next', description: 'Donor subscriptions, vendor redemption, impact dashboards' },
  { phase: 3, title: 'Energy Integration', status: 'Planned', description: 'Energy Access Credits, infrastructure unlocking' },
  { phase: 4, title: 'Global Scale', status: 'Vision', description: 'Love Coin blockchain, decentralized governance' },
];

// Full whitepaper sections (for preview)
const fullWhitepaperSections = [
  'Participant Ecosystem (6 roles)',
  'Meditation & Earning Mechanics',
  'Energy Integration Layer',
  'Technology Architecture',
  'Governance & Decision Framework',
  'Economic Model & Sustainability',
  'Security & Trust Mechanisms',
  'Detailed Roadmap & Milestones',
  'Impact Metrics & Measurement',
  'Community Spotlight',
  'Future Vision: Love Coin',
  'Technical Specifications & Appendices',
];

export default function WhitepaperPage() {
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
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium mb-6">
              <BookIcon size={16} />
              White Paper v1.0 — January 2026
            </span>
            <h1 className="heading-1 mb-6">
              Building the First
              <span className="gradient-text block">Love Economy</span>
            </h1>
            <p className="body-large text-deep-root/70 max-w-2xl mx-auto mb-8">
              A comprehensive overview of how Love Token transforms meditation into measurable
              value, creating sustainable prosperity grounded in presence rather than exploitation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/whitepaper/full">
                <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon size={20} />}>
                  Access Full Whitepaper
                </Button>
              </Link>
              <Link href="/meditate">
                <Button variant="outline" size="lg">
                  Try Meditation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Executive Summary</h2>
            <p className="body-large text-deep-root/70">
              <strong>Love Token</strong> represents a paradigm shift in how humanity measures,
              values, and circulates love. This initiative creates the first functioning
              <strong> Love Economy</strong> — where meditation, intention, and presence generate
              measurable social and economic value.
            </p>
          </motion.div>

          {/* Key Innovations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {keyInnovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="w-12 h-12 mb-4 rounded-full bg-heart-rose/10 flex items-center justify-center">
                      <innovation.icon size={24} className="text-heart-rose" />
                    </div>
                    <h3 className="text-lg font-semibold text-deep-root mb-2">{innovation.title}</h3>
                    <p className="text-sm text-deep-root/70">{innovation.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="warm" className="max-w-4xl mx-auto">
              <CardContent>
                <h3 className="text-center font-semibold text-deep-root mb-6">Current Impact (As of January 2026)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {impactMetrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-2xl font-bold text-heart-rose">{metric.value}</div>
                      <div className="text-xs text-deep-root/60">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* The Problem We're Solving */}
      <section className="section-padding">
        <div className="container-love">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">The Problem We&apos;re Solving</h2>
              <p className="body-text text-deep-root/70 mb-6">
                For decades, the global development paradigm has operated on a flawed assumption:
                that underserved communities need external resources delivered to them. This charity
                model has created systemic problems.
              </p>
              <p className="body-text text-deep-root/70 mb-6">
                Meanwhile, humanity possesses an ancient technology of immense power — meditation —
                that has no economic recognition. Love itself remains unmeasured in economic systems,
                invisible in GDP calculations.
              </p>
              <div className="p-4 bg-heart-rose/5 rounded-card border border-heart-rose/20">
                <p className="text-heart-rose font-medium text-center">
                  Love Token solves all three problems simultaneously.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                {problemsSolved.map((item, index) => (
                  <Card key={item.problem} className="border-l-4 border-l-heart-rose">
                    <CardContent className="py-4">
                      <h4 className="font-semibold text-deep-root mb-1">{item.problem}</h4>
                      <p className="text-sm text-deep-root/70">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <GlobalIcon size={48} className="mx-auto mb-6 text-sunlit-gold" />
            <h2 className="heading-2 text-white mb-8">Vision & Mission</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-sunlit-gold mb-4">Our Vision</h3>
                <p className="text-white/80 italic">
                  A world where love is a recognized, measurable force that creates sustainable
                  prosperity for all communities — where meditation is valued as the profound
                  contribution it truly is.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-sunlit-gold mb-4">Our Mission</h3>
                <p className="text-white/80 italic">
                  To build and scale the world&apos;s first Love Economy: a system where meditation
                  generates verified value, communities earn rather than receive, and love circulates
                  as a foundation for sustainable local economies.
                </p>
              </div>
            </div>

            <Card variant="warm" className="inline-block">
              <CardContent className="bg-white/5">
                <p className="text-lg text-white/90">
                  <strong className="text-sunlit-gold">The Hypothesis:</strong> If we can measure
                  and value love through meditation, and circulate that value through local economies,
                  we can create sustainable prosperity that lifts communities while preserving dignity.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Seven Foundational Principles</h2>
            <p className="body-large text-deep-root/70">
              Love Token operates according to seven non-negotiable principles that guide every decision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {corePrinciples.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-heart-rose/10 flex items-center justify-center">
                        <span className="text-heart-rose font-bold text-sm">{principle.number}</span>
                      </div>
                      <h3 className="font-semibold text-deep-root">{principle.title}</h3>
                    </div>
                    <p className="text-sm text-deep-root/70">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Decision Framework */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card variant="warm">
              <CardContent>
                <h3 className="text-center font-semibold text-deep-root mb-4">Decision-Making Framework</h3>
                <p className="text-center text-sm text-deep-root/70 mb-4">When trade-offs arise, these priorities guide decisions:</p>
                <div className="space-y-2">
                  {decisionFramework.map((item) => (
                    <div key={item.tradeoff} className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="text-deep-root/70">{item.tradeoff}</span>
                      <span className="text-heart-rose font-medium">{item.choice}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* The Love Economy Framework */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">The Love Economy Framework</h2>
            <p className="body-large text-deep-root/70">
              A Love Economy is an economic system where value originates from presence, contribution
              is measured through intention, and currency circulates locally.
            </p>
          </motion.div>

          {/* Three Flows */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {economyFlows.map((flow, index) => (
                <motion.div
                  key={flow.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardContent>
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sunlit-gold/10 flex items-center justify-center">
                        <span className="text-sunlit-gold font-bold text-lg">{flow.step}</span>
                      </div>
                      <h3 className="font-semibold text-deep-root mb-2">{flow.title}</h3>
                      <p className="text-sm text-deep-root/70">{flow.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Insight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="p-6 bg-om-sage/10 rounded-card border border-om-sage/20 text-center">
              <p className="text-deep-root/80">
                The <strong>burn mechanism</strong> is essential: it ensures the total supply of Love Credits
                remains proportional to donor backing, preventing inflation and maintaining stability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dual Currency System */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Dual-Currency System</h2>
            <p className="body-large text-deep-root/70">
              Two complementary currencies serve different purposes in the Love Economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Love Points */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-t-4 border-t-meditation-dusk">
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-meditation-dusk/10 flex items-center justify-center">
                      <HeartIcon size={20} className="text-meditation-dusk" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-root">Love Points (LP)</h3>
                      <p className="text-xs text-stone-grey">Global Recognition Currency</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-deep-root/70">
                    <li className="flex items-start gap-2">
                      <CheckIcon size={14} className="flex-shrink-0 mt-1 text-success-sage" />
                      Available to anyone, anywhere
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon size={14} className="flex-shrink-0 mt-1 text-success-sage" />
                      Earned through completed meditation sessions
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon size={14} className="flex-shrink-0 mt-1 text-success-sage" />
                      Non-transferable, no monetary value
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon size={14} className="flex-shrink-0 mt-1 text-success-sage" />
                      Represents global community of meditators
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Love Credits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-t-4 border-t-sunlit-gold">
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-sunlit-gold/10 flex items-center justify-center">
                      <CoinIcon size={20} className="text-sunlit-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-root">Love Credits (LVC)</h3>
                      <p className="text-xs text-stone-grey">Local Economic Currency</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-deep-root/70">
                    <li className="flex items-start gap-2">
                      <CheckIcon size={14} className="flex-shrink-0 mt-1 text-success-sage" />
                      Verified Love Farmers only
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon size={14} className="flex-shrink-0 mt-1 text-success-sage" />
                      Real purchasing power at local vendors
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon size={14} className="flex-shrink-0 mt-1 text-success-sage" />
                      Displayed in local currency for clarity
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon size={14} className="flex-shrink-0 mt-1 text-success-sage" />
                      Circulates locally, supports vendors
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Roadmap Overview</h2>
            <p className="body-large text-deep-root/70">
              From MVP to global adoption — four phases toward a world where love is currency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full ${phase.status === 'Current' ? 'ring-2 ring-heart-rose' : ''}`}>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-stone-grey">Phase {phase.phase}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        phase.status === 'Current' ? 'bg-heart-rose/10 text-heart-rose' :
                        phase.status === 'Next' ? 'bg-sunlit-gold/10 text-sunlit-gold' :
                        'bg-stone-grey/10 text-stone-grey'
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                    <h3 className="font-semibold text-deep-root mb-2">{phase.title}</h3>
                    <p className="text-sm text-deep-root/70">{phase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Full Whitepaper */}
      <section className="section-padding bg-gradient-to-br from-heart-rose to-earth-clay text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <LockIcon size={48} className="mx-auto mb-6 text-white/80" />
            <h2 className="heading-2 text-white mb-4">Dive Deeper</h2>
            <p className="body-large text-white/80 mb-8 max-w-2xl mx-auto">
              The full whitepaper contains comprehensive details on implementation, governance,
              technical architecture, and the complete vision for the Love Economy.
            </p>

            {/* Preview of Full Whitepaper Contents */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8 text-left">
              {fullWhitepaperSections.map((section, index) => (
                <motion.div
                  key={section}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-2 bg-white/10 rounded-lg p-3"
                >
                  <CheckIcon size={14} className="flex-shrink-0 mt-0.5 text-sunlit-gold" />
                  <span className="text-xs text-white/90">{section}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/whitepaper/full">
              <Button
                size="lg"
                className="bg-white text-heart-rose hover:bg-white/90"
                rightIcon={<ArrowRightIcon size={20} />}
              >
                Request Full Whitepaper Access
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lumi CTA */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center max-w-2xl mx-auto"
          >
            <Lumi
              message="Love Token proves that love is not merely an abstract concept — it is a measurable force capable of transforming economies."
              state="speaking"
              size="lg"
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/how-it-works">
                <Button variant="outline">How It Works</Button>
              </Link>
              <Link href="/join">
                <Button variant="primary">Join the Experiment</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
