'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, GeneratedImage, Badge } from '@/components/ui';
import {
  HeartIcon,
  MeditationIcon,
  CoinIcon,
  UsersIcon,
  StoreIcon,
  ShieldIcon,
  GlobalIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckIcon,
  ClockIcon,
  SparklesIcon,
  FlowIcon,
  ZapIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Comprehensive phase data based on master plan
const phasesData: Record<string, {
  number: number;
  title: string;
  subtitle: string;
  status: 'current' | 'upcoming' | 'future';
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  description: string;
  longDescription: string;
  features: { title: string; description: string; icon: React.ComponentType<{ size?: number; className?: string }> }[];
  deliverables: string[];
  technicalDetails: { category: string; items: string[] }[];
  timeline: string;
  dependencies: string[];
  successCriteria: string[];
  nextPhase?: string;
  prevPhase?: string;
}> = {
  'mvp-core': {
    number: 1,
    title: 'MVP Core',
    subtitle: 'Building the foundation of the Love Economy',
    status: 'current',
    icon: HeartIcon,
    color: 'heart-rose',
    description: 'The foundational phase establishing core authentication, meditation tracking, and the Love Credit system.',
    longDescription: 'Phase 1 lays the groundwork for everything that follows. We\'re building the essential infrastructure that enables Love Farmers to meditate and earn, donors to contribute, and the first communities to participate in the Love Economy. Every feature in this phase has been carefully designed with dignity, simplicity, and trust at its core.',
    features: [
      { title: 'User Authentication', description: 'Secure login system supporting all user roles with appropriate permissions', icon: ShieldIcon },
      { title: 'Meditation Timer', description: 'Touch-verified meditation tracking with gentle presence confirmation', icon: MeditationIcon },
      { title: 'Love Points System', description: 'Global recognition currency for all meditators worldwide', icon: HeartIcon },
      { title: 'Love Credits', description: 'Spendable currency for verified Love Farmers within communities', icon: CoinIcon },
      { title: 'Digital Wallets', description: 'Simple wallet interface showing balances in local currency first', icon: FlowIcon },
      { title: 'Basic Admin Tools', description: 'Essential tools for Love Farm administrators to manage their communities', icon: UsersIcon },
    ],
    deliverables: [
      'Mobile-responsive web application',
      'User authentication and role management',
      'Meditation timer with presence verification',
      'Love Points and Love Credits dual currency system',
      'Digital wallet with local currency display',
      'Basic transaction history',
      'Love Farm administrator dashboard',
      'QR code payment generation',
      '2-3 pilot communities onboarded',
    ],
    technicalDetails: [
      {
        category: 'Frontend',
        items: ['Next.js 14 with React 18', 'Tailwind CSS for styling', 'Framer Motion for animations', 'Progressive Web App support'],
      },
      {
        category: 'Backend',
        items: ['Secure authentication system', 'Real-time meditation tracking', 'Transaction ledger (append-only)', 'FX rate management'],
      },
      {
        category: 'Security',
        items: ['Touch-based presence verification', 'Community-based identity verification', 'Full audit logging', 'Manual override capabilities'],
      },
    ],
    timeline: 'Months 1-4',
    dependencies: [],
    successCriteria: [
      'Love Farmers can meditate and earn credits reliably',
      'Credits can be transferred to vendors and other farmers',
      'Vendors can accept and accumulate credits',
      'Basic admin functions work for community management',
      'System is stable for 2-3 pilot communities',
    ],
    nextPhase: 'donor-impact',
  },
  'donor-impact': {
    number: 2,
    title: 'Donor Impact',
    subtitle: 'Connecting donors to the love they enable',
    status: 'upcoming',
    icon: UsersIcon,
    color: 'earth-clay',
    description: 'Expanding the system to include vendor redemptions, donor subscriptions, and impact tracking.',
    longDescription: 'Phase 2 completes the economic circle by enabling vendors to redeem credits for local currency, establishing donor subscription systems, and creating transparent impact tracking. This phase makes the Love Economy fully functional and sustainable, connecting donors directly to the love they enable.',
    features: [
      { title: 'Vendor Registration', description: 'Streamlined onboarding for local businesses to accept Love Credits', icon: StoreIcon },
      { title: 'Credit Redemption', description: 'Vendors can redeem accumulated credits for local currency', icon: CoinIcon },
      { title: 'Donor Subscriptions', description: 'Monthly recurring donations with tier-based options', icon: HeartIcon },
      { title: 'Project Goals', description: 'Communities can set and track funding goals for local projects', icon: SparklesIcon },
      { title: 'Global Counters', description: 'Real-time display of meditation hours, credits, and impact worldwide', icon: GlobalIcon },
      { title: 'Daily Love Notifications', description: 'Donors receive alerts when meditations occur in supported communities', icon: FlowIcon },
    ],
    deliverables: [
      'Vendor registration and management system',
      'Credit redemption workflow with verification',
      'Donor subscription platform ($50/$100/custom tiers)',
      'Project goal creation and tracking',
      'Global impact dashboard with live counters',
      'Push notification system for donors',
      'Enhanced transaction reporting',
      'Multi-community support for donors',
    ],
    technicalDetails: [
      {
        category: 'Payments',
        items: ['Stripe integration for subscriptions', 'Local payment rails for redemptions', 'Liquidity pool management', 'Automated payout scheduling'],
      },
      {
        category: 'Notifications',
        items: ['Push notification infrastructure', 'Email notification system', 'Customizable notification preferences', 'Daily digest options'],
      },
      {
        category: 'Analytics',
        items: ['Real-time counter aggregation', 'Impact attribution per donor', 'Community comparison metrics', 'Historical trend analysis'],
      },
    ],
    timeline: 'Months 5-8',
    dependencies: ['Phase 1 complete and stable', 'Pilot communities providing feedback', 'Legal framework for payments'],
    successCriteria: [
      'Vendors can redeem credits reliably for local currency',
      'Donor subscriptions process automatically',
      'Impact tracking is accurate and transparent',
      'Daily notifications reach donors consistently',
      'Project goals can be funded and tracked',
    ],
    prevPhase: 'mvp-core',
    nextPhase: 'energy-integration',
  },
  'energy-integration': {
    number: 3,
    title: 'Energy Integration',
    subtitle: 'Unlocking infrastructure through collective participation',
    status: 'future',
    icon: ZapIcon,
    color: 'sunlit-gold',
    description: 'Introducing Energy Access Credits and community-level benefits unlocked through meditation.',
    longDescription: 'Phase 3 introduces a revolutionary concept: communities that meditate together can unlock tangible infrastructure benefits. Energy Access Credits track collective participation and trigger benefits like extended electricity, lighting upgrades, and eventually refrigeration. This creates a powerful incentive for community-wide engagement.',
    features: [
      { title: 'Energy Access Credits', description: 'Non-monetary credits tracking community participation levels', icon: ZapIcon },
      { title: 'Threshold Benefits', description: 'Progressive unlocking of infrastructure based on community engagement', icon: SparklesIcon },
      { title: 'Miracles Feed', description: 'Curated stories of transformation and impact from communities', icon: HeartIcon },
      { title: 'Advanced Analytics', description: 'Deep insights into meditation patterns and community health', icon: GlobalIcon },
      { title: 'Localization Expansion', description: 'Support for more languages and regional customizations', icon: UsersIcon },
      { title: 'Infrastructure Partnerships', description: 'Connections with energy and utility providers', icon: FlowIcon },
    ],
    deliverables: [
      'Energy Access Credit tracking system',
      'Community threshold visualization',
      'Benefit unlock mechanics',
      'Miracles feed curation tools',
      'Enhanced analytics dashboard',
      'Multi-language support',
      'Partner integration APIs',
      'Energy infrastructure partnerships',
    ],
    technicalDetails: [
      {
        category: 'Energy System',
        items: ['Community-level credit aggregation', 'Threshold calculation engine', 'Benefit unlock automation', 'Partner notification system'],
      },
      {
        category: 'Content',
        items: ['Story submission and moderation', 'Rich media support', 'Translation management', 'Community highlights'],
      },
      {
        category: 'Infrastructure',
        items: ['IoT integration for energy monitoring', 'Smart meter connections', 'Benefit delivery verification', 'Usage tracking'],
      },
    ],
    timeline: 'Months 9-14',
    dependencies: ['Phase 2 complete', 'Energy partner agreements', 'Community growth to 10+ locations'],
    successCriteria: [
      'Energy Access Credits accumulate accurately',
      'Threshold benefits unlock automatically',
      'At least 2 communities reach Level 2 benefits',
      'Miracles feed is active and engaging',
      'Analytics provide actionable insights',
    ],
    prevPhase: 'donor-impact',
    nextPhase: 'global-scale',
  },
  'global-scale': {
    number: 4,
    title: 'Global Scale',
    subtitle: 'Building infrastructure for worldwide adoption',
    status: 'future',
    icon: GlobalIcon,
    color: 'om-sage',
    description: 'Evolving toward Love Coin digital currency, blockchain integration, and decentralized governance.',
    longDescription: 'The ultimate vision: a global Love Economy powered by Love Coin, secured by blockchain, and governed by the communities it serves. Phase 4 transforms what began as an experiment into a permanent infrastructure for human flourishing. This phase prepares the Love Economy for worldwide adoption while maintaining the dignity and simplicity that define it.',
    features: [
      { title: 'Love Coin Currency', description: 'Full digital currency with broader acceptance and utility', icon: CoinIcon },
      { title: 'Blockchain Integration', description: 'Immutable transaction records with decentralized verification', icon: ShieldIcon },
      { title: 'Decentralized Governance', description: 'Community-led decision making for the Love Economy', icon: UsersIcon },
      { title: 'Global Marketplace', description: 'Cross-community transactions and vendor networks', icon: StoreIcon },
      { title: 'Infrastructure Finance', description: 'Large-scale community development funded by the Love Economy', icon: SparklesIcon },
      { title: 'Universal Access', description: 'Love Token available in every country and language', icon: GlobalIcon },
    ],
    deliverables: [
      'Love Coin digital currency specification',
      'Blockchain layer implementation',
      'Governance token and voting system',
      'Global vendor marketplace',
      'Infrastructure investment platform',
      'Universal language support',
      'Regulatory compliance framework',
      'Decentralized identity system',
    ],
    technicalDetails: [
      {
        category: 'Blockchain',
        items: ['Custom blockchain or L2 solution', 'Smart contract infrastructure', 'Cross-chain bridges', 'Wallet integration'],
      },
      {
        category: 'Governance',
        items: ['DAO structure and voting', 'Proposal submission system', 'Delegate mechanics', 'Treasury management'],
      },
      {
        category: 'Scale',
        items: ['High-throughput transaction processing', 'Global CDN deployment', 'Multi-region database replication', 'Load balancing'],
      },
    ],
    timeline: 'Months 15+',
    dependencies: ['Phase 3 complete', 'Regulatory approval in key markets', '50+ active communities', 'Sufficient donor pool for sustainability'],
    successCriteria: [
      'Love Coin trades on approved exchanges',
      'Blockchain records all transactions immutably',
      'Governance enables community decision-making',
      'Global marketplace has cross-community activity',
      'Infrastructure projects funded at scale',
    ],
    prevPhase: 'energy-integration',
    nextPhase: 'eternal-legacy',
  },
  'eternal-legacy': {
    number: 5,
    title: 'Eternal Legacy',
    subtitle: 'Self-sustaining love that outlasts us all',
    status: 'future',
    icon: SparklesIcon,
    color: 'heart-rose',
    description: 'The culmination of our vision: a self-sustaining Love Economy that perpetuates intergenerational wealth, wisdom, and wellbeing.',
    longDescription: 'Phase 5 represents the ultimate realization of the Love Economy — a system that no longer requires active management because it has become woven into the fabric of communities worldwide. The infrastructure sustains itself, communities govern themselves, and the love generated by one generation flows naturally to the next. This is not an endpoint but an eternal beginning, where the Love Economy becomes humanity\'s shared inheritance.',
    features: [
      { title: 'Self-Sustaining Treasury', description: 'Endowment model that funds operations perpetually through returns on community investments', icon: CoinIcon },
      { title: 'Intergenerational Transfer', description: 'Mechanisms for passing Love Coin wealth and wisdom from elders to youth', icon: UsersIcon },
      { title: 'Autonomous Communities', description: 'Love Farms operate independently with minimal central coordination', icon: GlobalIcon },
      { title: 'Living Documentation', description: 'Self-updating knowledge base capturing community wisdom and practices', icon: ShieldIcon },
      { title: 'Spiritual Succession', description: 'Training programs ensuring meditation practices continue across generations', icon: MeditationIcon },
      { title: 'Universal Basic Love', description: 'Every human has access to Love Points simply by existing and participating', icon: HeartIcon },
    ],
    deliverables: [
      'Perpetual endowment fund fully capitalized',
      'Automated treasury management system',
      'Elder-to-youth mentorship framework',
      'Love Coin inheritance protocols',
      'Fully autonomous community governance',
      'Self-maintaining technical infrastructure',
      'Global meditation practice lineage',
      'Universal participation pathways',
    ],
    technicalDetails: [
      {
        category: 'Sustainability',
        items: ['Endowment yield management', 'Automated fund rebalancing', 'Multi-generational wallet structures', 'Legacy planning tools'],
      },
      {
        category: 'Autonomy',
        items: ['Zero-maintenance infrastructure', 'Community-run node networks', 'Distributed backup systems', 'Self-healing protocols'],
      },
      {
        category: 'Continuity',
        items: ['Knowledge preservation systems', 'Practice transmission protocols', 'Cultural adaptation frameworks', 'Evolution governance'],
      },
    ],
    timeline: 'Months 24+',
    dependencies: ['Phase 4 complete and stable', 'Love Coin widely adopted', '100+ self-governing communities', 'Endowment seed funding secured', 'Next generation of leaders trained'],
    successCriteria: [
      'Love Economy operates without founder involvement',
      'Treasury generates sustainable returns for operations',
      'Second generation of Love Farmers actively leading',
      'Communities spawn new communities organically',
      'System has survived and adapted through challenges',
    ],
    prevPhase: 'global-scale',
  },
};

export default function PhaseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const phase = phasesData[slug];

  if (!phase) {
    notFound();
  }

  const Icon = phase.icon;

  const statusColors = {
    current: 'success-sage',
    upcoming: 'sunlit-gold',
    future: 'meditation-dusk',
  };

  const statusLabels = {
    current: 'Current Phase',
    upcoming: 'Coming Soon',
    future: 'Future Vision',
  };

  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Back Navigation */}
      <div className="pt-24 pb-4">
        <div className="container-love">
          <Link
            href="/about#vision"
            className="inline-flex items-center gap-2 text-deep-root/60 hover:text-deep-root transition-colors"
          >
            <ArrowLeftIcon size={16} />
            <span className="text-sm">Back to Roadmap</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-soft/20 to-transparent" />

        <div className="container-love relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Badge variant={phase.status === 'current' ? 'success' : phase.status === 'upcoming' ? 'warning' : 'default'}>
                {statusLabels[phase.status]}
              </Badge>
              <span className="text-sm text-deep-root/60">{phase.timeline}</span>
            </div>

            <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-${phase.color}/10 flex items-center justify-center`}>
              <Icon size={40} className={`text-${phase.color}`} />
            </div>

            <div className="text-sm text-stone-grey uppercase tracking-wide mb-2">
              Phase {phase.number}
            </div>

            <h1 className="heading-1 mb-4">
              {phase.title}
            </h1>
            <p className="text-xl text-deep-root/70 mb-6">
              {phase.subtitle}
            </p>
            <p className="body-text text-deep-root/80">
              {phase.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">Key Features</h2>
            <p className="body-large text-deep-root/70">
              What gets built in Phase {phase.number}.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {phase.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className={`w-12 h-12 mb-4 rounded-full bg-${phase.color}/10 flex items-center justify-center`}>
                      <feature.icon size={24} className={`text-${phase.color}`} />
                    </div>
                    <h3 className="font-semibold text-deep-root mb-2">{feature.title}</h3>
                    <p className="text-deep-root/70 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding">
        <div className="container-love">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">Deliverables</h2>
              <p className="body-text text-deep-root/70 mb-8">
                Concrete outputs that mark Phase {phase.number} completion.
              </p>

              <div className="space-y-3">
                {phase.deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-love shadow-gentle">
                    <CheckIcon size={18} className={`flex-shrink-0 mt-0.5 text-${phase.color}`} />
                    <span className="text-deep-root/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">Success Criteria</h2>
              <p className="body-text text-deep-root/70 mb-8">
                How we know Phase {phase.number} is complete.
              </p>

              <div className="space-y-3">
                {phase.successCriteria.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-success-sage/10 rounded-love">
                    <SparklesIcon size={18} className="flex-shrink-0 mt-0.5 text-success-sage" />
                    <span className="text-deep-root/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 text-white mb-4">Technical Details</h2>
            <p className="body-large text-white/70">
              Under the hood of Phase {phase.number}.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {phase.technicalDetails.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/10"
              >
                <h3 className="font-semibold text-sunlit-gold mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                      <CheckIcon size={14} className="flex-shrink-0 mt-0.5 text-white/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dependencies */}
      {phase.dependencies.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-love">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="heading-2 text-center mb-8">Dependencies</h2>
              <Card className="p-6">
                <CardContent>
                  <p className="text-deep-root/70 mb-6">
                    Phase {phase.number} requires the following to begin:
                  </p>
                  <ul className="space-y-3">
                    {phase.dependencies.map((dep, index) => (
                      <li key={index} className="flex items-start gap-3 text-deep-root/80">
                        <ClockIcon size={18} className="flex-shrink-0 mt-0.5 text-sunlit-gold" />
                        {dep}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Phase Navigation */}
      <section className="section-padding">
        <div className="container-love">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-3xl mx-auto">
            {phase.prevPhase ? (
              <Link href={`/about/phases/${phase.prevPhase}`}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeftIcon size={16} />
                  Previous Phase
                </Button>
              </Link>
            ) : (
              <div />
            )}

            {phase.nextPhase ? (
              <Link href={`/about/phases/${phase.nextPhase}`}>
                <Button variant="primary" className="gap-2">
                  Next Phase
                  <ArrowRightIcon size={16} />
                </Button>
              </Link>
            ) : (
              <div />
            )}
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
                  Learn More
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
