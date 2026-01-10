'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, Badge, GeneratedImage } from '@/components/ui';
import {
  HeartIcon,
  MeditationIcon,
  CoinIcon,
  FlowIcon,
  UsersIcon,
  StoreIcon,
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
  ShieldIcon,
  EyeIcon,
  GlobalIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Enhanced currency comparison
const currencyComparison = [
  {
    type: 'Love Points (LP)',
    icon: HeartIcon,
    description: 'Global recognition currency',
    features: [
      'Earned by all meditators worldwide',
      'Non-transferable',
      'Cannot be redeemed for money',
      'Tracks global contribution',
      'Available without registration',
    ],
    color: 'heart-rose',
    gradient: 'from-heart-rose/20 to-heart-rose/5',
  },
  {
    type: 'Love Credits (LVC)',
    icon: CoinIcon,
    description: 'Local economic currency',
    features: [
      'Earned by Love Farmers only',
      'Spendable at local vendors',
      'Redeemable for local currency',
      'Creates real economic value',
      'Displayed in local currency first',
    ],
    color: 'sunlit-gold',
    gradient: 'from-sunlit-gold/20 to-sunlit-gold/5',
  },
];

// Earning rates with examples
const earningRates = [
  { label: 'Base Rate', value: '0.01 LVC', detail: 'per minute of meditation' },
  { label: 'Individual Bonus', value: '+10%', detail: 'for solo meditations' },
  { label: 'Day 7 Streak', value: '+50%', detail: 'bonus on that day' },
  { label: 'Day 30 Streak', value: '+100%', detail: 'bonus on that day' },
  { label: 'Monthly Bonus', value: '+5%', detail: 'on all credits earned' },
];

// Earnings examples
const earningsExamples = [
  { duration: '10 min', days: 30, base: '3.0 LVC', withBonus: '~3.3 LVC', note: 'Basic daily practice' },
  { duration: '20 min', days: 30, base: '6.0 LVC', withBonus: '~6.6 LVC', note: 'Standard practice' },
  { duration: '20 min + streaks', days: 30, base: '6.0 LVC', withBonus: '~8.5 LVC', note: 'With all bonuses' },
];

// Enhanced roles with 6 participants
const roles = [
  {
    icon: UsersIcon,
    title: 'Public User',
    description: 'Anyone can participate',
    details: [
      'Meditate and earn Love Points',
      'Join global meditation sessions',
      'Track your contribution to global love',
      'No registration required to start',
    ],
  },
  {
    icon: HeartIcon,
    title: 'Donor',
    description: 'Fund the love economy',
    details: [
      'Subscribe monthly ($50/$100/custom)',
      'Receive daily love notifications',
      'See your impact in real-time',
      'Connect with communities you support',
    ],
  },
  {
    icon: MeditationIcon,
    title: 'Love Farmer',
    description: 'Earn real value through presence',
    details: [
      'Join a registered Love Farm community',
      'Earn Love Credits through meditation',
      'Spend credits at local vendors',
      'Build streaks for bonus earnings',
    ],
  },
  {
    icon: StoreIcon,
    title: 'Vendor',
    description: 'Accept love as payment',
    details: [
      'Register your business',
      'Accept Love Credits for goods/services',
      'Redeem credits for local currency',
      'Serve and support your community',
    ],
  },
  {
    icon: ShieldIcon,
    title: 'Love Farm Admin',
    description: 'Steward the community',
    details: [
      'Verify Love Farmers in your community',
      'Log group meditation sessions',
      'Manage community data',
      'Coordinate vendor onboarding',
    ],
  },
  {
    icon: GlobalIcon,
    title: 'TWGE Admin',
    description: 'System-wide oversight',
    details: [
      'Manage credit ceiling globally',
      'Process vendor redemptions',
      'Update FX rates',
      'Ensure system integrity',
    ],
  },
];

// Transaction flow steps
const transactionFlow = [
  { step: 1, title: 'Meditate', description: 'Love Farmer meditates with timer', icon: MeditationIcon },
  { step: 2, title: 'Verify', description: 'Presence verified via touch', icon: EyeIcon },
  { step: 3, title: 'Earn', description: 'Credits issued to wallet', icon: CoinIcon },
  { step: 4, title: 'Scan', description: 'Farmer scans vendor QR code', icon: StoreIcon },
  { step: 5, title: 'Confirm', description: 'Amount entered and confirmed', icon: CheckIcon },
  { step: 6, title: 'Transfer', description: 'Credits transfer instantly', icon: FlowIcon },
  { step: 7, title: 'Balance', description: 'Vendor balance increases', icon: HeartIcon },
  { step: 8, title: 'Redeem', description: 'Vendor requests redemption', icon: ArrowRightIcon },
  { step: 9, title: 'Verify', description: 'TWGE verifies and pays', icon: ShieldIcon },
  { step: 10, title: 'Burn', description: 'Credits are burned', icon: SparklesIcon },
];

// Flow steps for main section
const flowSteps = [
  {
    step: 1,
    title: 'Donors Subscribe',
    description: 'Monthly contributions fund the Love Economy, creating the pool that backs Love Credits.',
    icon: HeartIcon,
    imagePromptId: 'flow-step-1-donors',
    imageDescription: 'Heart being given, donor generosity',
  },
  {
    step: 2,
    title: 'Farmers Meditate',
    description: 'Love Farmers participate in guided meditations, earning Love Credits based on their practice.',
    icon: MeditationIcon,
    imagePromptId: 'flow-step-2-meditate',
    imageDescription: 'Meditation with timer, presence',
  },
  {
    step: 3,
    title: 'Credits Flow to Wallets',
    description: 'Earned credits appear in digital wallets, ready to spend at participating vendors.',
    icon: CoinIcon,
    imagePromptId: 'flow-step-3-credits',
    imageDescription: 'Love Credits appearing in wallet',
  },
  {
    step: 4,
    title: 'Farmers Spend Locally',
    description: 'Credits are spent at local vendors for groceries, services, and daily necessities.',
    icon: StoreIcon,
    imagePromptId: 'flow-step-4-spend',
    imageDescription: 'Community market transaction',
  },
  {
    step: 5,
    title: 'Vendors Redeem',
    description: 'Vendors submit credits for redemption, receiving local currency from the fund.',
    icon: FlowIcon,
    imagePromptId: 'flow-step-5-redeem',
    imageDescription: 'Vendor receiving redemption',
  },
  {
    step: 6,
    title: 'Love Circulates',
    description: 'Donors receive notifications of their impact. The cycle continues. Love grows.',
    icon: SparklesIcon,
    imagePromptId: 'flow-step-6-circulates',
    imageDescription: 'Full circle of love flowing',
  },
];

// Trust and security features
const trustFeatures = [
  { icon: UsersIcon, title: 'Community Verification', description: 'Local admins verify Love Farmers — no KYC for MVP', imagePromptId: 'local-verification' },
  { icon: ShieldIcon, title: 'Admin Oversight', description: 'Love Farm admins provide human layer of trust', imagePromptId: 'symbol-based-ui' },
  { icon: GlobalIcon, title: 'TWGE Stewardship', description: 'Global admins ensure system integrity', imagePromptId: 'community-network' },
  { icon: CheckIcon, title: 'Full Audit Trail', description: 'Every credit issuance, transfer, and burn is logged', imagePromptId: 'audit-trail' },
];

export default function HowItWorksPage() {
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
                <FlowIcon size={16} />
                The Love Economy
              </span>
              <h1 className="heading-1 mb-6">
                How Love Token
                <span className="gradient-text block">Works</span>
              </h1>
              <p className="body-large text-deep-root/70">
                A complete guide to understanding how meditation creates real economic value
                and transforms communities.
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
                  promptId="hero-love-flow-river"
                  alt="A flowing river symbolizing love circulation through communities"
                  fill
                  className="rounded-card"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Flow Section */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">The Love Flow Cycle</h2>
            <p className="body-large text-deep-root/70">
              Love moves in circles, not lines. Every participant gives and receives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {flowSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full relative overflow-hidden">
                  <CardContent>
                    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-earth-clay text-white text-lg font-bold flex items-center justify-center z-10">
                      {item.step}
                    </div>
                    <div className="pt-4">
                      <div className="mb-4 relative aspect-video w-full overflow-hidden rounded-love">
                        <GeneratedImage
                          promptId={item.imagePromptId}
                          alt={item.imageDescription}
                          fill
                          objectFit="cover"
                          className="rounded-love"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-deep-root mb-2">
                        {item.title}
                      </h3>
                      <p className="text-deep-root/70 text-sm">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding the Currencies Section */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Understanding the Currencies</h2>
            <p className="body-large text-deep-root/70">
              Two currencies, two purposes — global recognition and local economic impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {currencyComparison.map((currency, index) => (
              <motion.div
                key={currency.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full bg-gradient-to-br ${currency.gradient} border-${currency.color}/20`}>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-full bg-${currency.color}/10 flex items-center justify-center`}>
                        <currency.icon size={32} className={`text-${currency.color}`} />
                      </div>
                      <div>
                        <Badge variant={currency.color === 'heart-rose' ? 'love' : 'warning'}>
                          {currency.type}
                        </Badge>
                        <p className="text-stone-grey text-sm mt-1">{currency.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {currency.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-deep-root/80">
                          <CheckIcon size={18} className={`flex-shrink-0 mt-0.5 text-${currency.color}`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Wallet Display Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 max-w-md mx-auto"
          >
            <Card variant="warm" className="text-center overflow-hidden">
              <div className="relative aspect-video w-full">
                <GeneratedImage
                  promptId="wallet-display"
                  alt="Love Token wallet showing balance"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent>
                <h3 className="font-semibold text-deep-root mb-4">The Wallet Experience</h3>
                <div className="bg-white rounded-love p-6 shadow-gentle mb-4">
                  <p className="text-xs text-stone-grey mb-1">Your Balance</p>
                  <p className="text-4xl font-bold text-deep-root mb-1">₨157</p>
                  <p className="text-sm text-sunlit-gold">4.65 LVC</p>
                </div>
                <p className="text-xs text-deep-root/60 italic">
                  &quot;We show local currency first — it&apos;s what matters to daily life.&quot;
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Earning Rates Section */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 text-white mb-4">How Credits Are Earned</h2>
            <p className="body-large text-white/70">
              Love Farmers earn credits based on meditation time, with bonuses for consistency.
            </p>
          </motion.div>

          {/* Visual Earning Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-card overflow-hidden border border-white/10"
            >
              <div className="relative aspect-video w-full">
                <GeneratedImage
                  promptId="credits-earning"
                  alt="Earning Love Credits through meditation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-white font-medium">Earn Credits</p>
                <p className="text-white/60 text-sm">Through daily meditation</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-card overflow-hidden border border-white/10"
            >
              <div className="relative aspect-video w-full">
                <GeneratedImage
                  promptId="streak-bonus"
                  alt="Building meditation streaks for bonus credits"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-white font-medium">Streak Bonuses</p>
                <p className="text-white/60 text-sm">Consistency multiplies your earnings</p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Rates Table */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/10">
                <h3 className="font-semibold text-white mb-4">Earning Rates</h3>
                <div className="space-y-3">
                  {earningRates.map((rate, index) => (
                    <div
                      key={rate.label}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-love"
                    >
                      <div>
                        <span className="font-medium text-white">{rate.label}</span>
                        <span className="text-white/60 text-sm ml-2">{rate.detail}</span>
                      </div>
                      <span className="text-lg font-bold text-sunlit-gold">{rate.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Examples */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/10">
                <h3 className="font-semibold text-white mb-4">What You Can Earn</h3>
                <div className="space-y-4">
                  {earningsExamples.map((example, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/5 rounded-love"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-white font-medium">{example.duration} × {example.days} days</span>
                        <span className="text-sunlit-gold font-bold">{example.withBonus}</span>
                      </div>
                      <p className="text-white/50 text-xs">{example.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-3xl mx-auto"
          >
            <div className="p-4 bg-sunlit-gold/20 rounded-love border border-sunlit-gold/30 text-center">
              <p className="text-white/90">
                <span className="font-semibold">Example:</span> A 20-minute meditation earns{' '}
                <span className="text-sunlit-gold font-bold">0.20 LVC</span> base +{' '}
                <span className="text-sunlit-gold font-bold">0.02 LVC</span> individual bonus ={' '}
                <span className="text-sunlit-gold font-bold">0.22 LVC</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transaction Flow Section */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">From Meditation to Market</h2>
            <p className="body-large text-deep-root/70">
              The complete journey of a Love Credit, from creation to redemption.
            </p>
          </motion.div>

          {/* Transaction Visual Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="relative aspect-video w-full">
                  <GeneratedImage
                    promptId="transaction-qr-scan"
                    alt="Scanning QR code for payment"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="text-center">
                  <h3 className="font-semibold text-deep-root mb-1">Scan & Pay</h3>
                  <p className="text-deep-root/60 text-sm">QR code transactions</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="relative aspect-video w-full">
                  <GeneratedImage
                    promptId="transaction-peer-transfer"
                    alt="Peer to peer credit transfer"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="text-center">
                  <h3 className="font-semibold text-deep-root mb-1">Peer Transfer</h3>
                  <p className="text-deep-root/60 text-sm">Send credits to others</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="relative aspect-video w-full">
                  <GeneratedImage
                    promptId="vendor-redemption-request"
                    alt="Vendor requesting credit redemption"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="text-center">
                  <h3 className="font-semibold text-deep-root mb-1">Vendor Redemption</h3>
                  <p className="text-deep-root/60 text-sm">Convert to local currency</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {transactionFlow.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-lotus-soft/50 flex items-center justify-center relative">
                    <item.icon size={20} className="text-meditation-dusk" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-earth-clay text-white text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="text-xs font-semibold text-deep-root">{item.title}</h4>
                  <p className="text-xs text-deep-root/60 mt-1">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Presence Verification Section */}
      <section className="section-padding">
        <div className="container-love">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-meditation-dusk/10 text-meditation-dusk rounded-full text-sm font-medium mb-6">
                <EyeIcon size={16} />
                Verification
              </span>
              <h2 className="heading-2 mb-4">Presence Verification</h2>
              <p className="body-large text-deep-root/80 mb-6">
                We verify presence with dignity — ensuring meditation integrity without
                punishment or surveillance.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Touch Active', description: 'Timer running, credits flowing', color: 'success-sage' },
                  { title: 'Touch Lost', description: 'Timer pauses gently, gentle reminder shown', color: 'warning-amber' },
                  { title: 'Touch Restored', description: 'Resumes seamlessly, no penalty', color: 'success-sage' },
                ].map((state, index) => (
                  <div key={state.title} className="flex items-start gap-3">
                    <div className={`w-3 h-3 mt-1.5 rounded-full bg-${state.color}`} />
                    <div>
                      <span className="font-medium text-deep-root">{state.title}</span>
                      <span className="text-deep-root/60 text-sm ml-2">{state.description}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-deep-root/60 mt-6 italic">
                Group meditations are admin-logged — no touch verification needed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="warm" className="p-8 text-center">
                <CardContent>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-love-flow flex items-center justify-center shadow-love-glow">
                    <HeartIcon size={40} className="text-white" />
                  </div>
                  <p className="text-deep-root/70 text-sm mb-2">Touch to verify presence</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-success-sage/10 text-success-sage rounded-full text-sm">
                    <div className="w-2 h-2 rounded-full bg-success-sage animate-pulse" />
                    Active
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">The Ecosystem Participants</h2>
            <p className="body-large text-deep-root/70">
              Six roles work together to keep love flowing through the system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-love-flow flex items-center justify-center flex-shrink-0">
                        <role.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-deep-root">{role.title}</h3>
                        <p className="text-stone-grey text-sm">{role.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 pl-2">
                      {role.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-deep-root/80">
                          <CheckIcon size={14} className="flex-shrink-0 mt-0.5 text-success-sage" />
                          {detail}
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

      {/* Security & Trust Section */}
      <section className="section-padding bg-gradient-to-br from-lotus-soft/30 to-sacred-cream">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-om-sage/10 text-om-sage rounded-full text-sm font-medium mb-6">
              <ShieldIcon size={16} />
              Trust Architecture
            </span>
            <h2 className="heading-2 mb-4">Security & Trust</h2>
            <p className="body-large text-deep-root/70">
              Trust is built through transparency, community verification, and human oversight.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative aspect-square w-full">
                    <GeneratedImage
                      promptId={feature.imagePromptId}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-om-sage/10 flex items-center justify-center">
                      <feature.icon size={20} className="text-om-sage" />
                    </div>
                    <h3 className="font-semibold text-deep-root mb-1">{feature.title}</h3>
                    <p className="text-deep-root/70 text-xs">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trust Layers Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold text-deep-root text-center mb-6">Trust Layers</h3>
                <div className="flex flex-col items-center gap-2">
                  {[
                    { label: 'Audit Trail', color: 'success-sage' },
                    { label: 'TWGE Oversight', color: 'om-sage' },
                    { label: 'Local Admin Verification', color: 'sunlit-gold' },
                    { label: 'Community Trust', color: 'heart-rose' },
                  ].map((layer, index) => (
                    <div
                      key={layer.label}
                      className={`w-full max-w-xs py-3 px-6 rounded-love bg-${layer.color}/10 text-center`}
                      style={{ width: `${100 - index * 10}%` }}
                    >
                      <span className={`text-${layer.color} font-medium text-sm`}>{layer.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
            <h2 className="heading-2 text-white mb-4">Ready to Join?</h2>
            <p className="body-large text-white/80 mb-8">
              Whether you want to meditate, donate, or participate as a vendor,
              there&apos;s a place for you in the Love Economy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/join">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white text-heart-rose hover:bg-white/90"
                  rightIcon={<ArrowRightIcon size={20} />}
                >
                  Choose Your Path
                </Button>
              </Link>
              <Link href="/meditate">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Try a Meditation
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
