'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, GeneratedImage } from '@/components/ui';
import { LumiGreeting } from '@/components/lumi';
import {
  HeartIcon,
  MeditationIcon,
  CoinIcon,
  FlowIcon,
  UsersIcon,
  StoreIcon,
  GlobalIcon,
  ArrowRightIcon,
  SparklesIcon,
  ZapIcon,
  EyeIcon,
  ShieldIcon,
  CheckIcon,
  QuoteIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Problem items for "The Problem We're Solving" section
const problems = [
  {
    icon: HeartIcon,
    problem: 'Traditional charity creates dependency, not dignity',
    solution: 'Love Economy enables equal participation',
  },
  {
    icon: MeditationIcon,
    problem: 'Meditation has immense value but no economic recognition',
    solution: 'Presence generates measurable, spendable credits',
  },
  {
    icon: UsersIcon,
    problem: 'Communities need sustainable economies, not handouts',
    solution: 'Local currencies that circulate and grow',
  },
  {
    icon: FlowIcon,
    problem: 'Love is real but unmeasured',
    solution: 'Every meditation tracked, every contribution valued',
  },
];

// Five Pillars of MVP
const mvpPillars = [
  {
    icon: MeditationIcon,
    title: 'Meditate',
    description: 'Love Farmers meditate, earn, spend locally',
  },
  {
    icon: StoreIcon,
    title: 'Transact',
    description: 'Vendors accept and redeem credits reliably',
  },
  {
    icon: EyeIcon,
    title: 'Witness',
    description: 'Donors see and feel love flow and impact',
  },
  {
    icon: ShieldIcon,
    title: 'Steward',
    description: 'Administrators safely steward the economy',
  },
  {
    icon: CheckIcon,
    title: 'Audit',
    description: 'Credit issuance, transfer, and burning are auditable',
  },
];

// Enhanced stats with more metrics
const impactStats = [
  { value: '15K+', label: 'Minutes Meditated', icon: MeditationIcon },
  { value: '750+', label: 'Love Farmers', icon: UsersIcon },
  { value: '8K+', label: 'Credits Circulated', icon: CoinIcon },
  { value: '75+', label: 'Partner Vendors', icon: StoreIcon },
  { value: '12', label: 'Active Communities', icon: GlobalIcon },
  { value: '200+', label: 'Active Donors', icon: HeartIcon },
];

// Testimonials
const testimonials = [
  {
    quote: "My meditation now feeds my family. This is not charity — this is my practice creating real value.",
    author: "Amara K.",
    role: "Love Farmer, Kenya",
  },
  {
    quote: "I've never felt so connected to my giving. I receive love every day from people I'll never meet.",
    author: "Michael T.",
    role: "Monthly Donor, USA",
  },
  {
    quote: "When Love Farmers shop at my store, we're building something together. It's community in action.",
    author: "Priya S.",
    role: "Local Vendor, India",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-soft/20 to-transparent" />

        <div className="container-love relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div variants={fadeIn} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium">
                  <SparklesIcon size={16} />
                  The World&apos;s Greatest Experiment
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={fadeIn}
                className="heading-1 text-balance mb-6"
              >
                Where Love Becomes
                <span className="gradient-text block">Real Currency</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={fadeIn}
                className="body-large text-deep-root/70 max-w-2xl mx-auto lg:mx-0 mb-8"
              >
                Building the world&apos;s first functioning Love Economy where meditation,
                intention, and presence generate measurable social and economic value.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
              >
                <Link href="/meditate">
                  <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon size={20} />}>
                    Begin Your Journey
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button variant="outline" size="lg">
                    See How It Works
                  </Button>
                </Link>
              </motion.div>

              {/* Real-time Stats Widget */}
              <motion.div
                variants={fadeIn}
                className="mt-8 flex items-center justify-center lg:justify-start gap-6"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">2,847</div>
                  <div className="text-xs text-stone-grey">meditations today</div>
                </div>
                <div className="w-px h-8 bg-border-mist" />
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">1,234</div>
                  <div className="text-xs text-stone-grey">hours of love</div>
                </div>
              </motion.div>
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
                  promptId="hero-meditation-circle"
                  alt="A diverse community sitting in peaceful meditation outdoors at golden hour"
                  fill
                  className="rounded-card"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Lumi Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <LumiGreeting />
          </motion.div>
        </div>
      </section>

      {/* The Problem We're Solving Section */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">The Problem We&apos;re Solving</h2>
            <p className="body-large text-deep-root/70">
              The current system is broken. We&apos;re building something different.
            </p>
          </motion.div>

          {/* Old vs New Model Infographic */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Old Model */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-stone-grey/5 border-stone-grey/20">
                <CardContent>
                  <div className="text-center mb-6">
                    <span className="inline-block px-3 py-1 bg-stone-grey/10 text-stone-grey rounded-full text-sm font-medium">
                      Old Model
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-stone-grey/10 flex items-center justify-center">
                        <HeartIcon size={28} className="text-stone-grey" />
                      </div>
                      <ArrowRightIcon size={24} className="text-stone-grey" />
                      <div className="w-16 h-16 rounded-full bg-stone-grey/10 flex items-center justify-center">
                        <GlobalIcon size={28} className="text-stone-grey" />
                      </div>
                      <ArrowRightIcon size={24} className="text-stone-grey" />
                      <div className="w-16 h-16 rounded-full bg-stone-grey/10 flex items-center justify-center">
                        <UsersIcon size={28} className="text-stone-grey" />
                      </div>
                    </div>
                    <p className="text-stone-grey text-sm text-center">
                      Donor → Charity → Beneficiary
                    </p>
                    <p className="text-stone-grey/70 text-xs text-center italic">
                      One-way flow creates dependency
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* New Model */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="warm" className="h-full border-heart-rose/20">
                <CardContent>
                  <div className="text-center mb-6">
                    <span className="inline-block px-3 py-1 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium">
                      Love Economy
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      {/* Circular flow diagram */}
                      <div className="w-40 h-40 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-heart-rose/10 flex items-center justify-center">
                          <HeartIcon size={24} className="text-heart-rose" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-12 h-12 rounded-full bg-sunlit-gold/10 flex items-center justify-center">
                          <MeditationIcon size={24} className="text-sunlit-gold" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-om-sage/10 flex items-center justify-center">
                          <StoreIcon size={24} className="text-om-sage" />
                        </div>
                        {/* Connecting arrows - circular */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
                          <path
                            d="M80 40 Q 130 60 120 120 Q 80 140 40 120 Q 30 60 80 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            className="text-heart-rose/30"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-deep-root text-sm text-center font-medium">
                      Donor ↔ Love Farmer ↔ Vendor ↔ Community
                    </p>
                    <p className="text-heart-rose text-xs text-center italic">
                      Love flows in circles — everyone gives, everyone receives
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Problem/Solution Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="w-12 h-12 rounded-full bg-lotus-soft/50 flex items-center justify-center mb-4">
                      <item.icon size={24} className="text-heart-rose" />
                    </div>
                    <p className="text-deep-root/60 text-sm mb-2 line-through">
                      {item.problem}
                    </p>
                    <p className="text-deep-root font-medium text-sm">
                      {item.solution}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Our Core Philosophy</h2>
            <p className="text-2xl md:text-3xl font-light text-heart-rose italic">
              &quot;Love is not given. Love is shared. Love is earned. Love circulates.&quot;
            </p>
          </motion.div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CoinIcon,
                title: 'Grounded Love',
                description:
                  'Love manifesting in material reality — Love Credits buying groceries, paying for services, creating real economic impact.',
                imagePromptId: 'pillar-grounded-love',
                imageDescription: 'Hands touching earth, planting seeds, real connection to material world',
              },
              {
                icon: MeditationIcon,
                title: 'Spiritual Love',
                description:
                  'Love cultivated through meditation and conscious intention. Your presence creates value. Your practice is contribution.',
                imagePromptId: 'pillar-spiritual-love',
                imageDescription: 'Meditator with subtle aura, grounded presence, single flame',
              },
              {
                icon: FlowIcon,
                title: 'Living Love',
                description:
                  'Love in continuous motion, flowing between all participants. Donors receive love back. Meditators earn real value.',
                imagePromptId: 'pillar-living-love',
                imageDescription: 'Hands exchanging, love in motion, community connections flowing',
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="warm" className="h-full text-center p-8">
                  <CardContent>
                    <div className="mb-6 relative w-32 h-32 mx-auto overflow-hidden rounded-full">
                      <GeneratedImage
                        promptId={pillar.imagePromptId}
                        alt={pillar.imageDescription}
                        fill
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-deep-root mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-deep-root/70">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Pillars of MVP Section */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">The Five Pillars of Success</h2>
            <p className="body-large text-deep-root/70">
              Every element of the Love Economy is designed around these core criteria.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {mvpPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-40"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-love-flow flex items-center justify-center shadow-love-glow">
                    <pillar.icon size={32} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-deep-root mb-2">{pillar.title}</h4>
                  <p className="text-xs text-deep-root/70">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">The Love Economy in Action</h2>
            <p className="body-large text-deep-root/70">
              A circular system where everyone participates as equals, never as recipients.
            </p>
          </motion.div>

          {/* Flow Diagram */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                icon: MeditationIcon,
                title: 'Meditate',
                description: 'Love Farmers participate in guided meditations, creating intention and presence.',
              },
              {
                step: '2',
                icon: CoinIcon,
                title: 'Earn Credits',
                description: 'Each minute of meditation earns Love Credits — real local currency value.',
              },
              {
                step: '3',
                icon: StoreIcon,
                title: 'Spend Locally',
                description: 'Use credits at local vendors for groceries, services, and daily needs.',
              },
              {
                step: '4',
                icon: FlowIcon,
                title: 'Love Circulates',
                description: 'Vendors redeem credits. Donors receive love. The cycle continues.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full text-center">
                  <CardContent>
                    <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-earth-clay text-white text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-lotus-soft/50 flex items-center justify-center">
                      <item.icon size={24} className="text-meditation-dusk" />
                    </div>
                    <h4 className="font-semibold text-deep-root mb-2">{item.title}</h4>
                    <p className="text-sm text-deep-root/70">{item.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRightIcon size={24} className="text-border-mist" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/how-it-works">
              <Button variant="secondary" rightIcon={<ArrowRightIcon size={20} />}>
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 text-white mb-4">Join the Love Economy</h2>
            <p className="body-large text-white/70">
              Every participant plays a vital role in circulating love through the system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: MeditationIcon,
                title: 'Love Farmers',
                description:
                  'Participate in meditations. Earn credits. Create real value through presence.',
                cta: 'Start Farming',
                href: '/join?role=farmer',
                imagePromptId: 'role-love-farmer',
                imageDescription: 'Love Farmer meditating at dawn, earning through presence',
              },
              {
                icon: HeartIcon,
                title: 'Donors',
                description:
                  'Subscribe to fund communities. Receive daily love. See your impact flow.',
                cta: 'Become a Donor',
                href: '/join?role=donor',
                imagePromptId: 'role-donor',
                imageDescription: 'Heart being shared, love flowing to communities',
              },
              {
                icon: StoreIcon,
                title: 'Vendors',
                description:
                  'Accept Love Credits. Serve your community. Redeem for local currency.',
                cta: 'Join as Vendor',
                href: '/join?role=vendor',
                imagePromptId: 'role-vendor',
                imageDescription: 'Village vendor at market, accepting Love Credits',
              },
            ].map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-card p-8 text-center border border-white/10 hover:border-sunlit-gold/30 transition-colors"
              >
                <div className="mb-6 relative w-24 h-24 mx-auto overflow-hidden rounded-full">
                  <GeneratedImage
                    promptId={role.imagePromptId}
                    alt={role.imageDescription}
                    fill
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{role.title}</h3>
                <p className="text-white/70 mb-6">{role.description}</p>
                <Link href={role.href}>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    {role.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Impact Stats Section */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Love in Motion</h2>
            <p className="body-large text-deep-root/70">
              Real impact, measured and growing every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-lotus-soft/50 flex items-center justify-center">
                  <stat.icon size={24} className="text-heart-rose" />
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-stone-grey">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy & Infrastructure Vision Section */}
      <section className="section-padding bg-gradient-to-br from-om-sage/10 to-sunlit-gold/10">
        <div className="container-love">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-sunlit-gold/10 text-sunlit-gold rounded-full text-sm font-medium mb-6">
                <ZapIcon size={16} />
                Future Vision
              </span>
              <h2 className="heading-2 mb-4">Beyond Credits: Love Powers Communities</h2>
              <p className="body-large text-deep-root/80 mb-6">
                The Love Economy doesn&apos;t stop at credits. We&apos;re building toward a future where
                collective participation unlocks real infrastructure — energy, water, medical access.
              </p>
              <p className="body-text text-deep-root/70 mb-8">
                When communities meditate together, they generate Energy Access Credits.
                When thresholds are met, real benefits unlock — extended electricity hours,
                community lighting, charging stations, and more.
              </p>
              <Link href="/energy">
                <Button variant="secondary" rightIcon={<ArrowRightIcon size={20} />}>
                  Explore Energy Vision
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Energy Flow Infographic */}
              <Card variant="warm" className="p-8">
                <CardContent>
                  <h3 className="font-semibold text-deep-root text-center mb-6">The Love → Energy Flow</h3>
                  <div className="flex flex-col items-center gap-4">
                    {[
                      { icon: MeditationIcon, label: 'Collective Participation', color: 'heart-rose' },
                      { icon: CoinIcon, label: 'Energy Access Credits', color: 'sunlit-gold' },
                      { icon: FlowIcon, label: 'Community Thresholds', color: 'meditation-dusk' },
                      { icon: ZapIcon, label: 'Benefits Unlocked', color: 'om-sage' },
                    ].map((step, index) => (
                      <React.Fragment key={step.label}>
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full bg-${step.color}/10 flex items-center justify-center`}>
                            <step.icon size={20} className={`text-${step.color}`} />
                          </div>
                          <span className="text-sm font-medium text-deep-root">{step.label}</span>
                        </div>
                        {index < 3 && (
                          <div className="w-px h-4 bg-border-mist" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Stories of Love</h2>
            <p className="body-large text-deep-root/70">
              Real voices from the Love Economy. The miracles are already happening.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <QuoteIcon size={32} className="text-heart-rose/30 mb-4" />
                    <p className="text-deep-root/80 italic mb-6">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-love-flow flex items-center justify-center">
                        <HeartIcon size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-deep-root">{testimonial.author}</div>
                        <div className="text-xs text-stone-grey">{testimonial.role}</div>
                      </div>
                    </div>
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
            className="text-center mt-12"
          >
            <Link href="/impact">
              <Button variant="outline" rightIcon={<ArrowRightIcon size={20} />}>
                See More Stories
              </Button>
            </Link>
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
            <GlobalIcon size={48} className="mx-auto mb-6 text-white/90" />
            <h2 className="heading-2 text-white mb-4">
              Ready to Be Part of Something Greater?
            </h2>
            <p className="body-large text-white/80 mb-8">
              Join thousands of people around the world building a new kind of economy —
              one meditation at a time.
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
