'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import { Lumi } from '@/components/lumi';
import {
  HeartIcon,
  GlobalIcon,
  UsersIcon,
  FlowIcon,
  CheckIcon,
  ArrowRightIcon,
  LockIcon,
  MeditationIcon,
  CoinIcon,
  ZapIcon,
  ShieldIcon,
  BookIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Impact stats
const impactStats = [
  { label: 'Total Meditations', value: '15,847+', icon: MeditationIcon },
  { label: 'Hours of Love', value: '2,341+', icon: HeartIcon },
  { label: 'Active Love Farmers', value: '752+', icon: UsersIcon },
  { label: 'Credits Circulated', value: '8,245+', icon: CoinIcon },
  { label: 'Partner Vendors', value: '78+', icon: FlowIcon },
  { label: 'Active Communities', value: '12', icon: GlobalIcon },
];

// Core principles
const principles = [
  {
    number: 1,
    title: 'Love is Earned Through Presence',
    description: 'Credits are not charity — they are earned through genuine meditation practice.',
  },
  {
    number: 2,
    title: 'Dignity, Not Dependency',
    description: 'Love Farmers are contributors to a global experiment, not beneficiaries.',
  },
  {
    number: 3,
    title: 'Meditation is Contribution',
    description: 'When you meditate, you contribute to a collective field of presence and intention.',
  },
  {
    number: 4,
    title: 'Local Circulation',
    description: 'Credits stay within local economies, supporting vendors and creating circular prosperity.',
  },
  {
    number: 5,
    title: 'Simple & Accessible',
    description: 'Symbol-based interfaces and intuitive flows that anyone can understand.',
  },
  {
    number: 6,
    title: 'Stability Over Speculation',
    description: 'Credits flow, not accumulate. Stability enables trust.',
  },
  {
    number: 7,
    title: 'Future-Proof Design',
    description: 'Architecture ready for seamless transition to blockchain-based Love Coins.',
  },
];

// Problems being solved
const problems = [
  {
    title: 'The Failure of Traditional Charity',
    points: [
      'Dependency cycles that strip communities of agency',
      'Dignity erosion from being labeled "beneficiaries"',
      'Unsustainable, project-based aid structures',
      'Power imbalances favoring donors over communities',
    ],
  },
  {
    title: 'The Meditation Paradox',
    points: [
      'Meditation creates immense value but has no economic recognition',
      'Billions of hours of meditation generate zero material acknowledgment',
      'Ancient wisdom disconnected from modern economic systems',
    ],
  },
  {
    title: 'The Unmeasured Love Problem',
    points: [
      'Love is unmeasured in economic systems',
      'Invisible in GDP calculations',
      'Disconnected from material prosperity',
      'The most powerful human force with no market value',
    ],
  },
];

// Participant types
const participants = [
  {
    title: 'Public User',
    description: 'Anyone participating in the global meditation community',
    earning: 'Love Points only',
    icon: UsersIcon,
  },
  {
    title: 'Donor',
    description: 'Monthly subscribers funding the Love Economy',
    earning: 'Daily impact updates & recognition',
    icon: HeartIcon,
  },
  {
    title: 'Love Farmer',
    description: 'Community members earning through meditation',
    earning: 'Love Credits with real purchasing power',
    icon: MeditationIcon,
  },
  {
    title: 'Love Farm Administrator',
    description: 'Local leaders managing verification and sessions',
    earning: 'Community stewardship role',
    icon: ShieldIcon,
  },
  {
    title: 'Vendor',
    description: 'Local businesses accepting Love Credits',
    earning: 'Local currency redemption',
    icon: CoinIcon,
  },
];

// Roadmap phases
const phases = [
  {
    phase: 'Phase 1',
    title: 'MVP Core',
    status: 'Current',
    items: ['Authentication & user management', 'Meditation tracking & Love Points', 'Love Credits for Love Farmers', 'Digital wallets', '2-3 pilot communities'],
  },
  {
    phase: 'Phase 2',
    title: 'Donor Impact',
    status: 'Next',
    items: ['Vendor registration', 'Credit redemption system', 'Donor subscriptions', 'Global impact counters'],
  },
  {
    phase: 'Phase 3',
    title: 'Energy Integration',
    status: 'Planned',
    items: ['Energy Access Credits', 'Infrastructure unlocking', 'Miracles feed & stories', 'Scale to 50+ communities'],
  },
  {
    phase: 'Phase 4',
    title: 'Global Scale',
    status: 'Vision',
    items: ['Love Coin digital currency', 'Blockchain integration', 'Decentralized governance', '500+ communities worldwide'],
  },
];

// Gated sections preview
const gatedSections = [
  {
    title: 'Meditation & Earning Mechanics',
    description: 'Complete earning rates, streak bonuses, presence verification systems, and credit ceiling calculations.',
    icon: MeditationIcon,
  },
  {
    title: 'Energy Integration Layer',
    description: 'Full EAC thresholds, infrastructure unlocking mechanisms, and modular expansion framework.',
    icon: ZapIcon,
  },
  {
    title: 'Technology Architecture',
    description: 'Backend architecture, security specifications, API design, and blockchain migration path.',
    icon: FlowIcon,
  },
  {
    title: 'Governance & Decision Framework',
    description: 'Organizational structure, decision rights matrix, and decentralized governance roadmap.',
    icon: ShieldIcon,
  },
  {
    title: 'Economic Model & Sustainability',
    description: 'Funding flows, unit economics, sustainability model, and financial projections.',
    icon: CoinIcon,
  },
  {
    title: 'Security & Trust Mechanisms',
    description: 'Anti-gaming measures, data security protocols, and trust architecture layers.',
    icon: LockIcon,
  },
  {
    title: 'Future Vision: Love Coin',
    description: 'Complete blockchain strategy, token economics, DAO governance, and migration planning.',
    icon: GlobalIcon,
  },
  {
    title: 'Technical Appendices',
    description: 'Glossary, FAQs, technical specifications, and implementation details.',
    icon: BookIcon,
  },
];

// Request Form Modal
function RequestAccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    interest: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log('Access request submitted:', formState);
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-root/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-card shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          {!submitted ? (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-heart-rose/10 flex items-center justify-center">
                  <BookIcon size={24} className="text-heart-rose" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-deep-root">Request Full Whitepaper</h3>
                  <p className="text-sm text-deep-root/60">Get access to the complete technical documentation</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-deep-root mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border-mist rounded-lg focus:ring-2 focus:ring-heart-rose/20 focus:border-heart-rose outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-root mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border-mist rounded-lg focus:ring-2 focus:ring-heart-rose/20 focus:border-heart-rose outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-root mb-1">Organization</label>
                  <input
                    type="text"
                    value={formState.organization}
                    onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                    className="w-full px-4 py-3 border border-border-mist rounded-lg focus:ring-2 focus:ring-heart-rose/20 focus:border-heart-rose outline-none transition-colors"
                    placeholder="Your company or organization"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-root mb-1">Your Role *</label>
                  <select
                    required
                    value={formState.role}
                    onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                    className="w-full px-4 py-3 border border-border-mist rounded-lg focus:ring-2 focus:ring-heart-rose/20 focus:border-heart-rose outline-none transition-colors bg-white"
                  >
                    <option value="">Select your role...</option>
                    <option value="investor">Investor / Donor</option>
                    <option value="partner">Potential Partner</option>
                    <option value="community">Community Leader</option>
                    <option value="researcher">Researcher / Academic</option>
                    <option value="developer">Developer / Technical</option>
                    <option value="journalist">Journalist / Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-root mb-1">Why are you interested? *</label>
                  <textarea
                    required
                    value={formState.interest}
                    onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-border-mist rounded-lg focus:ring-2 focus:ring-heart-rose/20 focus:border-heart-rose outline-none transition-colors resize-none"
                    placeholder="Tell us about your interest in the Love Economy..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="secondary" className="flex-1" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" className="flex-1">
                    Request Access
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success-sage/10 flex items-center justify-center">
                <CheckIcon size={32} className="text-success-sage" />
              </div>
              <h3 className="text-xl font-semibold text-deep-root mb-2">Request Submitted</h3>
              <p className="text-deep-root/70 mb-6">
                Thank you for your interest. We&apos;ll review your request and send the full whitepaper to your email within 24-48 hours.
              </p>
              <Button variant="primary" onClick={onClose}>
                Close
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WhitepaperPage() {
  const [showRequestModal, setShowRequestModal] = useState(false);

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
              Love Token
              <span className="gradient-text block">White Paper</span>
            </h1>
            <p className="body-large text-deep-root/70 mb-8 max-w-2xl mx-auto">
              The World&apos;s Greatest Experiment: Building the First Love Economy —
              where meditation generates measurable value and love becomes currency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setShowRequestModal(true)}
                rightIcon={<ArrowRightIcon size={20} />}
              >
                Request Full Whitepaper
              </Button>
              <Link href="#executive-summary">
                <Button variant="secondary" size="lg">
                  Read Public Version
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-white border-y border-border-mist">
        <div className="container-love">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-deep-root mb-6 text-center">What&apos;s Covered</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-success-sage mb-3 flex items-center gap-2">
                  <CheckIcon size={16} /> Public Access
                </h3>
                <ul className="space-y-2 text-sm text-deep-root/70">
                  <li>Executive Summary</li>
                  <li>The Problem We&apos;re Solving</li>
                  <li>Vision & Mission</li>
                  <li>Core Philosophy & Principles</li>
                  <li>The Love Economy Framework</li>
                  <li>Dual-Currency System</li>
                  <li>Participant Ecosystem</li>
                  <li>Roadmap & Current Impact</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-heart-rose mb-3 flex items-center gap-2">
                  <LockIcon size={16} /> Full Version Only
                </h3>
                <ul className="space-y-2 text-sm text-deep-root/70">
                  <li>Meditation & Earning Mechanics</li>
                  <li>Energy Integration Layer</li>
                  <li>Technology Architecture</li>
                  <li>Governance & Decision Framework</li>
                  <li>Economic Model & Sustainability</li>
                  <li>Security & Trust Mechanisms</li>
                  <li>Future Vision: Love Coin</li>
                  <li>Technical Appendices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary" className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sunlit-gold/10 text-sunlit-gold rounded-full text-sm font-medium mb-6">
              <HeartIcon size={16} />
              Executive Summary
            </span>
            <h2 className="heading-2 mb-6">A Paradigm Shift in How Humanity Values Love</h2>

            <div className="prose prose-lg max-w-none text-deep-root/80">
              <p className="body-large mb-6">
                <strong>Love Token</strong> represents a paradigm shift in how humanity measures, values, and circulates love.
                Developed by <strong>The World&apos;s Greatest Experiment (TWGE)</strong>, this initiative creates the first
                functioning <strong>Love Economy</strong> — a system where meditation, intention, and presence generate
                measurable social and economic value for underserved communities worldwide.
              </p>
            </div>

            {/* Key Innovations */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-12">
              {[
                { title: 'Meditation as Currency', desc: 'Transform meditation into verified, quantifiable contributions that generate real economic value' },
                { title: 'Dual-Currency Architecture', desc: 'Love Points (LP) for global recognition and Love Credits (LVC) for local economic circulation' },
                { title: 'Dignity-First Design', desc: 'Communities participate as contributors, not beneficiaries — earning through presence' },
                { title: 'Energy Integration', desc: 'Meditation unlocks real-world infrastructure: lighting, water access, food refrigeration' },
                { title: 'Sustainable Economics', desc: 'Donor-backed liquidity ensures stability while avoiding speculative volatility' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent>
                      <h4 className="font-semibold text-deep-root mb-2">{item.title}</h4>
                      <p className="text-sm text-deep-root/70">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Impact Stats */}
            <div className="bg-gradient-to-br from-meditation-dusk to-deep-root rounded-card p-8 text-white">
              <h3 className="text-lg font-semibold mb-6 text-center">Current Impact (January 2026)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon size={24} className="mx-auto mb-2 text-sunlit-gold" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-center text-lg text-deep-root/80 italic">
              Love Token proves that love is not merely an abstract concept — it is a measurable force
              capable of transforming economies, lifting communities, and creating sustainable prosperity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-earth-clay/10 text-earth-clay rounded-full text-sm font-medium mb-6">
              <GlobalIcon size={16} />
              The Problem
            </span>
            <h2 className="heading-2 mb-4">Three Problems, One Solution</h2>
            <p className="body-large text-deep-root/70">
              Love Token solves three interconnected problems that have plagued development
              and economic systems for decades.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <h3 className="text-lg font-semibold text-deep-root mb-4">{problem.title}</h3>
                    <ul className="space-y-3">
                      {problem.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-deep-root/70">
                          <span className="text-heart-rose mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <Card variant="warm" className="text-center">
              <CardContent>
                <p className="text-lg text-deep-root">
                  <strong className="text-heart-rose">Love Token solves all three simultaneously:</strong>
                  {' '}it creates dignity through contribution, gives meditation economic value,
                  and makes love measurable and circulatable.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-love">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium mb-6">
                <HeartIcon size={16} />
                Vision
              </span>
              <h3 className="heading-3 mb-4">Our Vision</h3>
              <p className="text-deep-root/80 italic text-lg leading-relaxed">
                &quot;A world where love is a recognized, measurable force that creates sustainable prosperity
                for all communities — where meditation is valued as the profound contribution it truly is,
                and where dignity flows from participation rather than dependency.&quot;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-sunlit-gold/10 text-sunlit-gold rounded-full text-sm font-medium mb-6">
                <GlobalIcon size={16} />
                Mission
              </span>
              <h3 className="heading-3 mb-4">Our Mission</h3>
              <p className="text-deep-root/80 italic text-lg leading-relaxed">
                &quot;To build and scale the world&apos;s first Love Economy: a system where meditation generates
                verified value, communities earn rather than receive, and love circulates as a foundation
                for sustainable local economies.&quot;
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 max-w-3xl mx-auto text-center"
          >
            <Card className="bg-gradient-to-br from-lotus-soft/50 to-sunlit-gold/10">
              <CardContent>
                <h4 className="font-semibold text-deep-root mb-3">The Hypothesis</h4>
                <p className="text-deep-root/80">
                  If we can measure and value love through meditation, and circulate that value through
                  local economies, we can create sustainable prosperity that lifts communities while preserving dignity.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 text-white mb-4">Seven Foundational Principles</h2>
            <p className="text-white/70">
              Love Token operates according to seven non-negotiable principles that guide every decision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-card p-5 border border-white/10"
              >
                <div className="text-sunlit-gold font-bold text-2xl mb-2">{principle.number}</div>
                <h4 className="font-semibold text-white mb-2 text-sm">{principle.title}</h4>
                <p className="text-white/60 text-xs">{principle.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Decision Framework */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/10">
              <h4 className="font-semibold text-white mb-4 text-center">Decision-Making Framework</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  ['Dignity vs. Efficiency', 'Choose Dignity'],
                  ['Simplicity vs. Power', 'Choose Simplicity'],
                  ['Automation vs. Oversight', 'Choose Oversight'],
                  ['Speed vs. Trust', 'Choose Trust'],
                  ['Individual vs. Community', 'Choose Community'],
                  ['Growth vs. Stability', 'Choose Stability'],
                ].map(([tradeoff, choice]) => (
                  <div key={tradeoff} className="flex items-center gap-2">
                    <span className="text-white/60">{tradeoff}</span>
                    <span className="text-sunlit-gold">→</span>
                    <span className="text-white font-medium">{choice}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Love Economy Framework */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-om-sage/10 text-om-sage rounded-full text-sm font-medium mb-6">
              <FlowIcon size={16} />
              The Framework
            </span>
            <h2 className="heading-2 mb-4">The Love Economy Framework</h2>
            <p className="body-large text-deep-root/70">
              A new economic system where value originates from presence rather than extraction.
            </p>
          </motion.div>

          {/* Three Flows */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-lg font-semibold text-deep-root text-center mb-8">The Three Flows</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  flow: '1',
                  title: 'Meditation → Credits',
                  desc: 'Love Farmers meditate with verified presence. Minutes convert to Love Credits at established rates.',
                  color: 'heart-rose',
                },
                {
                  flow: '2',
                  title: 'Credits → Goods/Services',
                  desc: 'Love Farmers spend credits at participating vendors who accept them for local goods and services.',
                  color: 'sunlit-gold',
                },
                {
                  flow: '3',
                  title: 'Redemption → Burn',
                  desc: 'Vendors redeem credits for local currency. Credits are permanently burned, maintaining stability.',
                  color: 'om-sage',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.flow}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardContent>
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${item.color}/10 flex items-center justify-center`}>
                        <span className={`text-${item.color} font-bold text-xl`}>{item.flow}</span>
                      </div>
                      <h4 className="font-semibold text-deep-root mb-2">{item.title}</h4>
                      <p className="text-sm text-deep-root/70">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Card>
              <CardContent>
                <h4 className="font-semibold text-deep-root mb-4 text-center">Traditional Economy vs. Love Economy</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border-mist">
                        <th className="text-left py-2 text-deep-root/60 font-medium">Aspect</th>
                        <th className="text-left py-2 text-deep-root/60 font-medium">Traditional</th>
                        <th className="text-left py-2 text-heart-rose font-medium">Love Economy</th>
                      </tr>
                    </thead>
                    <tbody className="text-deep-root/80">
                      <tr className="border-b border-border-mist/50">
                        <td className="py-2">Value Source</td>
                        <td className="py-2">Labor, resources, capital</td>
                        <td className="py-2">Presence, intention, meditation</td>
                      </tr>
                      <tr className="border-b border-border-mist/50">
                        <td className="py-2">Flow Direction</td>
                        <td className="py-2">Extractive (value flows out)</td>
                        <td className="py-2">Circular (value stays local)</td>
                      </tr>
                      <tr className="border-b border-border-mist/50">
                        <td className="py-2">Participation</td>
                        <td className="py-2">Employment/consumption</td>
                        <td className="py-2">Contribution/earning</td>
                      </tr>
                      <tr>
                        <td className="py-2">Dignity</td>
                        <td className="py-2">Transactional</td>
                        <td className="py-2">Inherent in design</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Dual Currency System */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sunlit-gold/10 text-sunlit-gold rounded-full text-sm font-medium mb-6">
              <CoinIcon size={16} />
              Dual Currency
            </span>
            <h2 className="heading-2 mb-4">Two Currencies, One Purpose</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Love Points */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-heart-rose/20">
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-heart-rose/10 flex items-center justify-center">
                      <HeartIcon size={24} className="text-heart-rose" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-root">Love Points (LP)</h3>
                      <p className="text-sm text-deep-root/60">Global Recognition Currency</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckIcon size={16} className="text-success-sage mt-0.5 flex-shrink-0" />
                      <span className="text-deep-root/80">Available to anyone, anywhere</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckIcon size={16} className="text-success-sage mt-0.5 flex-shrink-0" />
                      <span className="text-deep-root/80">1 LP per completed session (min 2:22)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckIcon size={16} className="text-success-sage mt-0.5 flex-shrink-0" />
                      <span className="text-deep-root/80">No monetary value — recognition only</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckIcon size={16} className="text-success-sage mt-0.5 flex-shrink-0" />
                      <span className="text-deep-root/80">Non-transferable</span>
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
              <Card className="h-full border-2 border-sunlit-gold/20">
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-sunlit-gold/10 flex items-center justify-center">
                      <CoinIcon size={24} className="text-sunlit-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-root">Love Credits (LVC)</h3>
                      <p className="text-sm text-deep-root/60">Local Economic Currency</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckIcon size={16} className="text-success-sage mt-0.5 flex-shrink-0" />
                      <span className="text-deep-root/80">Verified Love Farmers only</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckIcon size={16} className="text-success-sage mt-0.5 flex-shrink-0" />
                      <span className="text-deep-root/80">0.01 LVC per minute + bonuses</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckIcon size={16} className="text-success-sage mt-0.5 flex-shrink-0" />
                      <span className="text-deep-root/80">Real purchasing power at local vendors</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckIcon size={16} className="text-success-sage mt-0.5 flex-shrink-0" />
                      <span className="text-deep-root/80">Displayed in local currency</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Participant Ecosystem */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-meditation-dusk/10 text-meditation-dusk rounded-full text-sm font-medium mb-6">
              <UsersIcon size={16} />
              Ecosystem
            </span>
            <h2 className="heading-2 mb-4">Participant Ecosystem</h2>
            <p className="body-large text-deep-root/70">
              Five distinct participant types, each with specific roles and tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {participants.map((participant, index) => (
              <motion.div
                key={participant.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="w-12 h-12 mb-4 rounded-full bg-lotus-soft flex items-center justify-center">
                      <participant.icon size={24} className="text-meditation-dusk" />
                    </div>
                    <h4 className="font-semibold text-deep-root mb-2">{participant.title}</h4>
                    <p className="text-sm text-deep-root/70 mb-3">{participant.description}</p>
                    <div className="pt-3 border-t border-border-mist">
                      <span className="text-xs text-heart-rose font-medium">{participant.earning}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-om-sage/10 text-om-sage rounded-full text-sm font-medium mb-6">
              <ArrowRightIcon size={16} />
              Roadmap
            </span>
            <h2 className="heading-2 mb-4">The Journey Ahead</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${phase.status === 'Current' ? 'border-2 border-heart-rose/30 bg-heart-rose/5' : ''}`}>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-deep-root/50 uppercase">{phase.phase}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        phase.status === 'Current' ? 'bg-heart-rose/10 text-heart-rose' :
                        phase.status === 'Next' ? 'bg-sunlit-gold/10 text-sunlit-gold' :
                        'bg-border-mist text-deep-root/50'
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                    <h4 className="font-semibold text-deep-root mb-3">{phase.title}</h4>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-deep-root/70">
                          <CheckIcon size={12} className="mt-0.5 text-success-sage flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gated Content Preview */}
      <section className="section-padding bg-gradient-to-br from-deep-root to-meditation-dusk text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
              <LockIcon size={32} className="text-sunlit-gold" />
            </div>
            <h2 className="heading-2 text-white mb-4">Want the Full Picture?</h2>
            <p className="text-white/70 text-lg mb-8">
              The complete whitepaper includes detailed technical specifications, economic models,
              governance frameworks, and our blockchain roadmap.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
            {gatedSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-card p-5 border border-white/10"
              >
                <section.icon size={24} className="text-sunlit-gold mb-3" />
                <h4 className="font-semibold text-white text-sm mb-2">{section.title}</h4>
                <p className="text-white/50 text-xs">{section.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setShowRequestModal(true)}
              rightIcon={<ArrowRightIcon size={20} />}
              className="bg-sunlit-gold hover:bg-sunlit-gold/90 text-deep-root"
            >
              Request Full Whitepaper
            </Button>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="section-padding">
        <div className="container-love">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Lumi
                message="Love is not merely an abstract concept — it is a measurable force capable of transforming economies and communities."
                state="speaking"
                size="lg"
              />

              <h2 className="heading-2 mt-8 mb-6">Join The Experiment</h2>
              <p className="body-large text-deep-root/70 mb-8">
                Love Token proves that another economic system is possible — one where meditation creates value,
                communities earn with dignity, and love circulates as freely as money.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/join">
                  <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon size={20} />}>
                    Join the Movement
                  </Button>
                </Link>
                <Link href="/meditate">
                  <Button variant="secondary" size="lg">
                    Start Meditating
                  </Button>
                </Link>
              </div>

              <p className="mt-12 text-lg text-heart-rose italic">
                &quot;Love is the most powerful force in the universe. We&apos;re just learning to measure it.&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Request Access Modal */}
      <RequestAccessModal
        isOpen={showRequestModal}
        onClose={() => setShowRequestModal(false)}
      />
    </div>
  );
}
