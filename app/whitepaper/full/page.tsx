'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, Input, GeneratedImage } from '@/components/ui';
import { Lumi } from '@/components/lumi';
import {
  HeartIcon,
  GlobalIcon,
  UsersIcon,
  FlowIcon,
  CheckIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  BookIcon,
  MeditationIcon,
  CoinIcon,
  ZapIcon,
  ShieldIcon,
  LockIcon,
  UnlockIcon,
  MailIcon,
  DownloadIcon,
  StoreIcon,
  ChartIcon,
  ClockIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Participant Types
const participantTypes = [
  {
    title: 'Public User',
    icon: UsersIcon,
    description: 'Anyone who wants to participate in the global meditation community.',
    registration: 'None required',
    earning: 'Love Points only',
    features: ['Meditation timer', 'Global contribution tracking'],
  },
  {
    title: 'Donor',
    icon: HeartIcon,
    description: 'Monthly subscribers who fund the Love Economy and receive impact updates.',
    registration: '12-month minimum subscription',
    earning: 'Daily love notifications, impact dashboard',
    features: ['$50 / $100 / Custom monthly', 'Real-time impact tracking'],
  },
  {
    title: 'Love Farmer',
    icon: MeditationIcon,
    description: 'Community members who earn Love Credits through verified meditation.',
    registration: 'Verified by local Administrator',
    earning: 'Love Credits (individual + group)',
    features: ['Symbol-based UI', 'Spend at local vendors'],
  },
  {
    title: 'Love Farm Administrator',
    icon: ShieldIcon,
    description: 'Local leaders who manage verification and group meditation logging.',
    registration: 'Community-nominated, TWGE-approved',
    earning: 'Admin dashboard access',
    features: ['Verify farmers', 'Log group sessions', 'Onboard vendors'],
  },
  {
    title: 'Vendor',
    icon: StoreIcon,
    description: 'Local businesses that accept Love Credits and redeem for local currency.',
    registration: 'Onboarded by Administrator',
    earning: 'Local currency redemption',
    features: ['QR code scanning', 'Weekly/monthly redemption'],
  },
  {
    title: 'TWGE Admin',
    icon: GlobalIcon,
    description: 'Central team managing operations, redemptions, and analytics.',
    registration: 'TWGE staff only',
    earning: 'Full system oversight',
    features: ['Credit ceiling management', 'Redemption processing', 'Analytics'],
  },
];

// Meditation Mechanics
const earningRates = {
  lovePoints: [
    { label: 'Base', value: '1 LP per completed session (min 2:22)' },
    { label: 'Bonus', value: '+1 LP per additional minute' },
    { label: 'Maximum', value: 'No cap' },
  ],
  loveCredits: [
    { label: 'Base Rate', value: '0.01 LVC per minute' },
    { label: 'Individual Bonus', value: '+10% for solo meditation' },
    { label: 'Streak Day 7', value: '+50% bonus on that session' },
    { label: 'Streak Day 30', value: '+100% bonus on that session' },
    { label: 'Monthly Bonus', value: '+5% on all credits if streak maintained' },
  ],
};

// Energy Thresholds
const energyThresholds = [
  { eac: '1,000', benefit: 'Community Lighting', impact: 'Safe evening spaces' },
  { eac: '2,500', benefit: 'Charging Stations', impact: 'Mobile device access' },
  { eac: '5,000', benefit: 'Extended Power Hours', impact: 'Productive evenings' },
  { eac: '10,000', benefit: 'Clean Water Access', impact: 'Health infrastructure' },
  { eac: '25,000', benefit: 'Food Refrigeration', impact: 'Nutrition security' },
];

// Technology Stack
const techStack = [
  { name: 'Next.js', version: '14.2.0', purpose: 'React framework with SSR/SSG' },
  { name: 'React', version: '18.2.0', purpose: 'Component library' },
  { name: 'TypeScript', version: '5.0.0', purpose: 'Type safety' },
  { name: 'Tailwind CSS', version: '3.4.0', purpose: 'Styling system' },
  { name: 'Framer Motion', version: '11.0.0', purpose: 'Animation library' },
];

// Governance Decision Rights
const decisionRights = [
  { decision: 'Credit ceiling changes', authority: 'TWGE Admin', consultation: 'Community Administrators' },
  { decision: 'New community onboarding', authority: 'TWGE Admin', consultation: 'Local partners' },
  { decision: 'Vendor redemption approval', authority: 'TWGE Admin', consultation: 'Administrator' },
  { decision: 'Farmer verification', authority: 'Administrator', consultation: 'TWGE (appeals)' },
  { decision: 'System feature changes', authority: 'TWGE', consultation: 'Community feedback' },
];

// Security Layers
const securityLayers = [
  { layer: 'Transport', protection: 'TLS 1.3 encryption' },
  { layer: 'Storage', protection: 'AES-256 encryption at rest' },
  { layer: 'Access', protection: 'Role-based access control' },
  { layer: 'Authentication', protection: 'Multi-factor where supported' },
  { layer: 'Audit', protection: 'Immutable transaction logs' },
];

// Detailed Roadmap
const detailedRoadmap = [
  {
    phase: 1,
    title: 'MVP Core',
    status: 'Current',
    objectives: [
      'Launch core platform with authentication',
      'Enable meditation tracking and Love Points',
      'Deploy Love Credits system for pilot communities',
      'Implement digital wallets for farmers',
      'Build basic admin tools',
      'Onboard 2-3 pilot communities',
    ],
    deliverables: [
      { item: 'Complete frontend implementation', done: true },
      { item: 'Design system and brand identity', done: true },
      { item: 'Documentation and specifications', done: true },
      { item: 'Backend API development', done: false },
      { item: 'Database and ledger system', done: false },
      { item: 'Authentication system', done: false },
    ],
  },
  {
    phase: 2,
    title: 'Donor Impact',
    status: 'Next',
    objectives: [
      'Launch donor subscription system',
      'Enable vendor registration and onboarding',
      'Implement credit redemption workflow',
      'Build donor impact dashboards',
      'Deploy global impact counters',
      'Scale to 10+ communities',
    ],
    deliverables: [
      { item: 'Monthly subscription management', done: false },
      { item: 'Daily impact notifications', done: false },
      { item: 'Real-time redemption tracking', done: false },
      { item: 'Vendor payment processing', done: false },
    ],
  },
  {
    phase: 3,
    title: 'Energy Integration',
    status: 'Planned',
    objectives: [
      'Deploy Energy Access Credits system',
      'Build community threshold tracking',
      'Launch Miracles feed (impact stories)',
      'Expand localization support',
      'Implement advanced analytics',
      'Scale to 50+ communities',
    ],
    deliverables: [
      { item: 'EAC accumulation and display', done: false },
      { item: 'Infrastructure unlocking visualization', done: false },
      { item: 'Community progress dashboards', done: false },
      { item: 'Story collection and sharing', done: false },
    ],
  },
  {
    phase: 4,
    title: 'Global Scale & Love Coin',
    status: 'Vision',
    objectives: [
      'Transition to blockchain-based Love Coin',
      'Implement decentralized governance',
      'Launch global marketplace',
      'Enable infrastructure financing',
      'Scale to 500+ communities worldwide',
    ],
    deliverables: [
      { item: 'Love Coin token on blockchain', done: false },
      { item: 'DAO governance structure', done: false },
      { item: 'Validator node network', done: false },
      { item: 'Global vendor marketplace', done: false },
      { item: 'Infrastructure investment platform', done: false },
    ],
  },
];

// Community Spotlight
const communities = [
  {
    name: 'Sunrise Village, Kenya',
    farmers: 85,
    vendors: 12,
    meditations: 2341,
    credits: 847,
    status: 'Active - Growing',
  },
  {
    name: 'Mountain Heart, India',
    farmers: 120,
    vendors: 18,
    meditations: 3456,
    credits: 1234,
    status: 'Active - Established',
  },
  {
    name: 'River Community, Philippines',
    farmers: 65,
    vendors: 8,
    meditations: 1892,
    credits: 623,
    status: 'Active - Growing',
  },
];

// Love Coin Features
const loveCoinFeatures = [
  { attribute: 'Technology', description: 'Public blockchain (chain TBD)' },
  { attribute: 'Supply', description: 'Fixed, with controlled minting' },
  { attribute: 'Earning', description: 'Meditation verification (on-chain)' },
  { attribute: 'Utility', description: 'Global transactions, governance, staking' },
  { attribute: 'Governance', description: 'DAO with token-weighted voting' },
];

// Technical Specifications
const technicalSpecs = [
  { spec: 'Minimum duration', value: '2:22 (LP) / 1:00 (LVC)' },
  { spec: 'Maximum duration', value: 'No cap' },
  { spec: 'Presence check interval', value: 'Random (30-90 seconds)' },
  { spec: 'Presence check duration', value: '2-3 seconds' },
  { spec: 'Impact metrics refresh', value: '30-minute refresh' },
  { spec: 'Wallet balances', value: 'Real-time' },
  { spec: 'Community dashboards', value: '1-hour refresh' },
  { spec: 'Donor reports', value: 'Daily' },
];

// Glossary
const glossary = [
  { term: 'Love Points (LP)', definition: 'Global recognition currency earned through meditation' },
  { term: 'Love Credits (LVC)', definition: 'Local economic currency for verified Love Farmers' },
  { term: 'Love Farmer', definition: 'Community member who earns credits through meditation' },
  { term: 'Love Farm', definition: 'A community participating in the Love Economy' },
  { term: 'Love Farm Administrator', definition: 'Local leader managing farmers and vendors' },
  { term: 'Energy Access Credits (EAC)', definition: 'Collective meditation metric unlocking infrastructure' },
  { term: 'Lumi', definition: 'AI guide character accompanying users' },
  { term: 'TWGE', definition: 'The World\'s Greatest Experiment — organizing entity' },
  { term: 'Burn', definition: 'Permanent deletion of credits upon vendor redemption' },
  { term: 'Presence Verification', definition: 'System confirming genuine meditation practice' },
];

// FAQs
const faqs = [
  {
    question: 'Is this cryptocurrency?',
    answer: 'Love Credits are currently tracked in a centralized ledger, not on a blockchain. Phase 4 introduces Love Coin as an optional blockchain-based evolution.',
  },
  {
    question: 'How do you prevent fraud?',
    answer: 'Multiple layers including presence verification, administrator attestation, manual redemption approval, and community accountability.',
  },
  {
    question: 'What happens if donors stop funding?',
    answer: 'Credit ceilings automatically adjust based on available liquidity. The system is designed to scale down gracefully if needed.',
  },
  {
    question: 'Can Love Farmers transfer credits to each other?',
    answer: 'No. Credits are non-transferable to prevent speculation and ensure they flow through intended economic channels.',
  },
  {
    question: 'How are communities selected?',
    answer: 'Communities apply through partner organizations. Selection considers need, infrastructure, local leadership, and alignment with Love Token values.',
  },
];

export default function FullWhitepaperPage() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSection, setActiveSection] = useState('participants');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setAccessGranted(true);
    setIsSubmitting(false);
  };

  const sections = [
    { id: 'participants', title: 'Participant Ecosystem', icon: UsersIcon },
    { id: 'meditation', title: 'Meditation Mechanics', icon: MeditationIcon },
    { id: 'energy', title: 'Energy Integration', icon: ZapIcon },
    { id: 'technology', title: 'Technology Architecture', icon: FlowIcon },
    { id: 'governance', title: 'Governance Framework', icon: ShieldIcon },
    { id: 'economics', title: 'Economic Model', icon: CoinIcon },
    { id: 'security', title: 'Security & Trust', icon: LockIcon },
    { id: 'roadmap', title: 'Detailed Roadmap', icon: ChartIcon },
    { id: 'communities', title: 'Community Spotlight', icon: GlobalIcon },
    { id: 'lovecoin', title: 'Love Coin Vision', icon: HeartIcon },
    { id: 'specs', title: 'Technical Specs', icon: ClockIcon },
    { id: 'appendices', title: 'Appendices', icon: BookIcon },
  ];

  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-soft/20 to-transparent" />

        <div className="container-love relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto"
          >
            <Link href="/whitepaper" className="inline-flex items-center gap-2 text-heart-rose hover:text-heart-rose/80 mb-6">
              <ArrowLeftIcon size={16} />
              Back to Overview
            </Link>
            <h1 className="heading-1 mb-6">
              Complete
              <span className="gradient-text block">Whitepaper</span>
            </h1>
            <p className="body-large text-deep-root/70 max-w-2xl mx-auto">
              The full technical and strategic documentation for Love Token —
              including implementation details, governance structures, and the complete vision.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {!accessGranted ? (
          /* Access Request Form */
          <motion.section
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="section-padding bg-white"
          >
            <div className="container-love">
              <div className="max-w-2xl mx-auto">
                <Card className="overflow-hidden">
                  <div className="bg-gradient-to-r from-heart-rose to-earth-clay p-6 text-white text-center">
                    <LockIcon size={48} className="mx-auto mb-4 text-white/80" />
                    <h2 className="text-2xl font-bold mb-2">Request Access</h2>
                    <p className="text-white/80">
                      Complete the form below to unlock the full whitepaper
                    </p>
                  </div>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-deep-root mb-2">
                          Your Name *
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-deep-root mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-deep-root mb-2">
                          Organization (Optional)
                        </label>
                        <Input
                          type="text"
                          placeholder="Your company or organization"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-deep-root mb-2">
                          What interests you about Love Token? *
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 rounded-input border border-border-mist bg-white text-deep-root focus:outline-none focus:ring-2 focus:ring-heart-rose/20 focus:border-heart-rose"
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        >
                          <option value="">Select an option</option>
                          <option value="donor">Becoming a Donor</option>
                          <option value="community">Bringing Love Token to my community</option>
                          <option value="partner">Partnership opportunities</option>
                          <option value="investor">Investment opportunities</option>
                          <option value="research">Academic/Research interest</option>
                          <option value="curious">General curiosity</option>
                        </select>
                      </div>
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        disabled={isSubmitting}
                        rightIcon={isSubmitting ? undefined : <UnlockIcon size={20} />}
                      >
                        {isSubmitting ? 'Processing...' : 'Unlock Full Whitepaper'}
                      </Button>
                      <p className="text-xs text-center text-stone-grey">
                        By submitting, you agree to receive occasional updates about Love Token.
                        We respect your privacy and will never share your information.
                      </p>
                    </form>
                  </CardContent>
                </Card>

                {/* Preview of What's Inside */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12"
                >
                  <h3 className="text-center font-semibold text-deep-root mb-6">What You&apos;ll Access</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {sections.map((section, index) => (
                      <div
                        key={section.id}
                        className="flex items-center gap-2 p-3 bg-sacred-cream rounded-lg"
                      >
                        <section.icon size={16} className="text-heart-rose flex-shrink-0" />
                        <span className="text-sm text-deep-root/70">{section.title}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        ) : (
          /* Full Whitepaper Content */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Success Message */}
            <section className="py-8 bg-success-sage/10 border-y border-success-sage/20">
              <div className="container-love">
                <div className="flex items-center justify-center gap-3 text-success-sage">
                  <UnlockIcon size={24} />
                  <span className="font-medium">Full whitepaper access granted. Welcome, {formData.name}!</span>
                </div>
              </div>
            </section>

            {/* Navigation Sidebar + Content */}
            <section className="section-padding">
              <div className="container-love">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Sidebar Navigation */}
                  <nav className="lg:w-64 flex-shrink-0">
                    <div className="lg:sticky lg:top-24 space-y-1 bg-white rounded-card p-4 shadow-gentle">
                      <h3 className="font-semibold text-deep-root mb-4 px-3">Contents</h3>
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => setActiveSection(section.id)}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm transition-colors ${
                            activeSection === section.id
                              ? 'bg-heart-rose/10 text-heart-rose font-medium'
                              : 'text-deep-root/70 hover:bg-sacred-cream'
                          }`}
                        >
                          <section.icon size={16} />
                          {section.title}
                        </button>
                      ))}
                    </div>
                  </nav>

                  {/* Main Content */}
                  <div className="flex-1 min-w-0">
                    {/* Participant Ecosystem */}
                    {activeSection === 'participants' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="heading-2 mb-4">Participant Ecosystem</h2>
                          <p className="body-text text-deep-root/70 mb-8">
                            The Love Economy involves six distinct participant types, each with specific
                            roles, responsibilities, and tools.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {participantTypes.map((participant) => (
                            <Card key={participant.title} className="h-full">
                              <CardContent>
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="w-10 h-10 rounded-full bg-heart-rose/10 flex items-center justify-center">
                                    <participant.icon size={20} className="text-heart-rose" />
                                  </div>
                                  <h3 className="font-semibold text-deep-root">{participant.title}</h3>
                                </div>
                                <p className="text-sm text-deep-root/70 mb-4">{participant.description}</p>
                                <div className="space-y-2 text-xs">
                                  <div className="flex justify-between">
                                    <span className="text-stone-grey">Registration:</span>
                                    <span className="text-deep-root">{participant.registration}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-stone-grey">Earning:</span>
                                    <span className="text-deep-root">{participant.earning}</span>
                                  </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-border-mist">
                                  <p className="text-xs text-stone-grey mb-2">Key Features:</p>
                                  <ul className="space-y-1">
                                    {participant.features.map((feature, i) => (
                                      <li key={i} className="flex items-start gap-2 text-xs text-deep-root/70">
                                        <CheckIcon size={12} className="flex-shrink-0 mt-0.5 text-success-sage" />
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Meditation Mechanics */}
                    {activeSection === 'meditation' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="heading-2 mb-4">Meditation & Earning Mechanics</h2>
                          <p className="body-text text-deep-root/70 mb-8">
                            All meditation sessions follow a consistent structure designed for presence and verification.
                          </p>
                        </div>

                        {/* Session Structure */}
                        <Card>
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Session Structure</h3>
                            <div className="space-y-4">
                              {[
                                { step: '1. Introduction', duration: '30 seconds', desc: 'Breathing guidance, intention setting' },
                                { step: '2. Ready Check', duration: '-', desc: 'Confirm presence, begin tracking' },
                                { step: '3. Active Meditation', duration: 'Min 2:22', desc: 'Timer running, presence verification active' },
                                { step: '4. Completion', duration: '-', desc: 'Session summary, credits earned, streak update' },
                              ].map((item) => (
                                <div key={item.step} className="flex items-start gap-4 p-3 bg-sacred-cream rounded-lg">
                                  <div className="font-medium text-heart-rose w-32">{item.step}</div>
                                  <div className="flex-1">
                                    <p className="text-sm text-deep-root">{item.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Earning Rates */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <Card>
                            <CardContent>
                              <h3 className="font-semibold text-deep-root mb-4">Love Points (All Users)</h3>
                              <div className="space-y-2">
                                {earningRates.lovePoints.map((rate) => (
                                  <div key={rate.label} className="flex justify-between p-2 bg-meditation-dusk/5 rounded">
                                    <span className="text-sm text-stone-grey">{rate.label}</span>
                                    <span className="text-sm text-deep-root font-medium">{rate.value}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardContent>
                              <h3 className="font-semibold text-deep-root mb-4">Love Credits (Farmers)</h3>
                              <div className="space-y-2">
                                {earningRates.loveCredits.map((rate) => (
                                  <div key={rate.label} className="flex justify-between p-2 bg-sunlit-gold/5 rounded">
                                    <span className="text-sm text-stone-grey">{rate.label}</span>
                                    <span className="text-sm text-deep-root font-medium">{rate.value}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Presence Verification */}
                        <Card variant="warm">
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Presence Verification</h3>
                            <p className="text-sm text-deep-root/70 mb-4">
                              To prevent gaming while maintaining accessibility, Love Farmers undergo gentle presence
                              verification during individual sessions:
                            </p>
                            <ul className="space-y-2">
                              {[
                                'Random intervals during session',
                                'Brief thumb/finger hold requirement (2-3 seconds)',
                                'Pauses session if missed',
                                'Resumes upon verification',
                              ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-deep-root/70">
                                  <CheckIcon size={14} className="flex-shrink-0 mt-0.5 text-success-sage" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <p className="text-xs text-stone-grey mt-4 italic">
                              Note: Group meditations logged by Administrators do not require individual verification.
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {/* Energy Integration */}
                    {activeSection === 'energy' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="heading-2 mb-4">Energy Integration Layer</h2>
                          <p className="body-text text-deep-root/70 mb-8">
                            Love Token introduces Energy Access Credits (EAC) — a secondary metric that
                            aggregates community meditation into tangible infrastructure benefits.
                          </p>
                        </div>

                        <Card>
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Energy Thresholds</h3>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-border-mist">
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">EAC Threshold</th>
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Benefit Unlocked</th>
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Impact</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {energyThresholds.map((row) => (
                                    <tr key={row.eac} className="border-b border-border-mist last:border-0">
                                      <td className="py-3 px-4 font-medium text-heart-rose">{row.eac}</td>
                                      <td className="py-3 px-4 text-deep-root">{row.benefit}</td>
                                      <td className="py-3 px-4 text-deep-root/70">{row.impact}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-6">
                          <Card>
                            <CardContent>
                              <h3 className="font-semibold text-deep-root mb-4">How EAC Are Earned</h3>
                              <div className="p-4 bg-om-sage/10 rounded-lg font-mono text-sm">
                                <p className="text-deep-root">Community EAC = Sum of all farmer meditations × EAC multiplier</p>
                              </div>
                              <div className="mt-4 space-y-2 text-sm text-deep-root/70">
                                <p><strong>EAC Multiplier varies by:</strong></p>
                                <ul className="list-disc pl-4 space-y-1">
                                  <li>Group vs. individual meditation (group = 1.5x)</li>
                                  <li>Special event participation (2x)</li>
                                  <li>Community milestone bonuses</li>
                                </ul>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardContent>
                              <h3 className="font-semibold text-deep-root mb-4">Future Modules</h3>
                              <p className="text-sm text-deep-root/70 mb-4">
                                The Energy Integration Layer is designed to expand:
                              </p>
                              <ul className="space-y-2">
                                {[
                                  'Water Access Credits → Community water systems',
                                  'Health Access Credits → Medical service availability',
                                  'Food Access Credits → Distribution and storage',
                                  'Data Access Credits → Internet connectivity',
                                ].map((item) => (
                                  <li key={item} className="flex items-start gap-2 text-sm text-deep-root/70">
                                    <ZapIcon size={14} className="flex-shrink-0 mt-0.5 text-sunlit-gold" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </motion.div>
                    )}

                    {/* Technology Architecture */}
                    {activeSection === 'technology' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="heading-2 mb-4">Technology Architecture</h2>
                          <p className="body-text text-deep-root/70 mb-8">
                            Love Token is built on a modern, scalable technology stack designed for
                            accessibility, reliability, and future blockchain integration.
                          </p>
                        </div>

                        <Card>
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Frontend Stack</h3>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-border-mist">
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Technology</th>
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Version</th>
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Purpose</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {techStack.map((tech) => (
                                    <tr key={tech.name} className="border-b border-border-mist last:border-0">
                                      <td className="py-3 px-4 font-medium text-deep-root">{tech.name}</td>
                                      <td className="py-3 px-4 text-heart-rose">{tech.version}</td>
                                      <td className="py-3 px-4 text-deep-root/70">{tech.purpose}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </CardContent>
                        </Card>

                        <Card variant="warm">
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Lumi: The AI Guide</h3>
                            <p className="text-sm text-deep-root/70 mb-4">
                              Lumi is the friendly AI guide that accompanies users through the Love Token experience.
                            </p>
                            <div className="flex items-center gap-6">
                              <Lumi message="I help guide users without requiring literacy!" state="speaking" size="md" />
                              <div className="space-y-2 text-sm">
                                <p><strong>States:</strong></p>
                                <ul className="list-disc pl-4 text-deep-root/70">
                                  <li>Resting — Gentle breathing animation</li>
                                  <li>Speaking — Active communication</li>
                                  <li>Listening — Receiving input</li>
                                  <li>Celebrating — Achievement acknowledgment</li>
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Backend Architecture (Planned)</h3>
                            <div className="p-4 bg-deep-root/5 rounded-lg font-mono text-xs overflow-x-auto">
                              <pre className="text-deep-root/80">{`
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND ARCHITECTURE                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐    │
│  │   API       │────▶│   Ledger    │────▶│  Reporting  │    │
│  │   Gateway   │     │   Service   │     │   Service   │    │
│  └─────────────┘     └─────────────┘     └─────────────┘    │
│         │                   │                   │           │
│         ▼                   ▼                   ▼           │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐    │
│  │    Auth     │     │  Database   │     │  Analytics  │    │
│  │   Service   │     │  (Primary)  │     │   Store     │    │
│  └─────────────┘     └─────────────┘     └─────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              `}</pre>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {/* Governance */}
                    {activeSection === 'governance' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="heading-2 mb-4">Governance & Decision Framework</h2>
                          <p className="body-text text-deep-root/70 mb-8">
                            Clear governance structures ensure accountability while enabling community participation.
                          </p>
                        </div>

                        <Card>
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Decision Rights Matrix</h3>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-border-mist">
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Decision Type</th>
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Authority</th>
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Consultation</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {decisionRights.map((row) => (
                                    <tr key={row.decision} className="border-b border-border-mist last:border-0">
                                      <td className="py-3 px-4 text-deep-root">{row.decision}</td>
                                      <td className="py-3 px-4 font-medium text-heart-rose">{row.authority}</td>
                                      <td className="py-3 px-4 text-deep-root/70">{row.consultation}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </CardContent>
                        </Card>

                        <Card variant="warm">
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Transparency Commitments</h3>
                            <ul className="space-y-3">
                              {[
                                'Full Audit Trail: Every transaction logged permanently',
                                'Public Impact Metrics: Real-time dashboards show statistics',
                                'Donor Reporting: Monthly reports on fund utilization',
                                'Community Access: Administrators view all local activity',
                                'Open Documentation: Whitepaper publicly available',
                              ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-deep-root/70">
                                  <CheckIcon size={14} className="flex-shrink-0 mt-0.5 text-success-sage" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {/* Economic Model */}
                    {activeSection === 'economics' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="heading-2 mb-4">Economic Model & Sustainability</h2>
                          <p className="body-text text-deep-root/70 mb-8">
                            A sustainable economic model backed by donor funding with built-in stability mechanisms.
                          </p>
                        </div>

                        <Card>
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Stability Mechanisms</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              {[
                                {
                                  title: 'Credit Ceiling System',
                                  desc: 'Total credits capped per community based on available liquidity',
                                },
                                {
                                  title: 'Non-Transferability',
                                  desc: 'Credits cannot be transferred between farmers, preventing speculation',
                                },
                                {
                                  title: 'Burn on Redemption',
                                  desc: 'Credits permanently deleted when vendors redeem, preventing inflation',
                                },
                                {
                                  title: 'FX Management',
                                  desc: 'Internal USD pegging with local currency display for farmers',
                                },
                              ].map((item) => (
                                <div key={item.title} className="p-4 bg-sunlit-gold/5 rounded-lg">
                                  <h4 className="font-medium text-deep-root mb-1">{item.title}</h4>
                                  <p className="text-sm text-deep-root/70">{item.desc}</p>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Unit Economics (Example)</h3>
                            <div className="p-4 bg-sacred-cream rounded-lg font-mono text-sm space-y-2">
                              <p>Average monthly earning:     5 LVC</p>
                              <p>Local currency equivalent:   ~$5-15 (varies by region)</p>
                              <p>Cost to support:            ~$2-3 (platform + overhead)</p>
                              <p>Donor funding required:     ~$8-12 per farmer/month</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-border-mist">
                              <p className="text-sm text-stone-grey mb-2">System-wide Targets:</p>
                              <ul className="space-y-1 text-sm text-deep-root/70">
                                <li>• Donor : Farmer ratio of 1:3 to 1:5</li>
                                <li>• Redemption rate of 70-85% monthly</li>
                                <li>• Vendor participation rate of 80%+</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {/* Security */}
                    {activeSection === 'security' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="heading-2 mb-4">Security & Trust Mechanisms</h2>
                          <p className="body-text text-deep-root/70 mb-8">
                            Multi-layered security ensures system integrity while maintaining accessibility.
                          </p>
                        </div>

                        <Card>
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Data Security Layers</h3>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-border-mist">
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Layer</th>
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Protection</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {securityLayers.map((row) => (
                                    <tr key={row.layer} className="border-b border-border-mist last:border-0">
                                      <td className="py-3 px-4 font-medium text-deep-root">{row.layer}</td>
                                      <td className="py-3 px-4 text-deep-root/70">{row.protection}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </CardContent>
                        </Card>

                        <Card variant="warm">
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Trust Architecture</h3>
                            <div className="space-y-4">
                              {[
                                { layer: 'Trust Layer 1: Technology', desc: 'Cryptographic verification, secure storage, audit trails' },
                                { layer: 'Trust Layer 2: Process', desc: 'Manual redemption approval, administrator oversight, dispute resolution' },
                                { layer: 'Trust Layer 3: Community', desc: 'Local administrators, peer accountability, community reputation' },
                                { layer: 'Trust Layer 4: Transparency', desc: 'Public metrics, donor reporting, open documentation' },
                              ].map((item) => (
                                <div key={item.layer} className="p-3 bg-white rounded-lg">
                                  <p className="font-medium text-heart-rose text-sm">{item.layer}</p>
                                  <p className="text-sm text-deep-root/70">{item.desc}</p>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {/* Detailed Roadmap */}
                    {activeSection === 'roadmap' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="heading-2 mb-4">Detailed Roadmap</h2>
                          <p className="body-text text-deep-root/70 mb-8">
                            Four phases from MVP to global adoption with Love Coin.
                          </p>
                        </div>

                        {detailedRoadmap.map((phase) => (
                          <Card key={phase.phase} className={phase.status === 'Current' ? 'ring-2 ring-heart-rose' : ''}>
                            <CardContent>
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <span className="text-xs text-stone-grey">Phase {phase.phase}</span>
                                  <h3 className="font-semibold text-deep-root text-lg">{phase.title}</h3>
                                </div>
                                <span className={`text-xs px-3 py-1 rounded-full ${
                                  phase.status === 'Current' ? 'bg-heart-rose/10 text-heart-rose' :
                                  phase.status === 'Next' ? 'bg-sunlit-gold/10 text-sunlit-gold' :
                                  'bg-stone-grey/10 text-stone-grey'
                                }`}>
                                  {phase.status}
                                </span>
                              </div>

                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <p className="text-xs text-stone-grey mb-2 font-medium">Objectives</p>
                                  <ul className="space-y-2">
                                    {phase.objectives.map((obj, i) => (
                                      <li key={i} className="flex items-start gap-2 text-sm text-deep-root/70">
                                        <CheckIcon size={14} className="flex-shrink-0 mt-0.5 text-success-sage" />
                                        {obj}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <p className="text-xs text-stone-grey mb-2 font-medium">Deliverables</p>
                                  <ul className="space-y-2">
                                    {phase.deliverables.map((del, i) => (
                                      <li key={i} className="flex items-start gap-2 text-sm">
                                        {del.done ? (
                                          <CheckIcon size={14} className="flex-shrink-0 mt-0.5 text-success-sage" />
                                        ) : (
                                          <div className="w-3.5 h-3.5 rounded-full border-2 border-stone-grey/30 flex-shrink-0 mt-0.5" />
                                        )}
                                        <span className={del.done ? 'text-deep-root' : 'text-deep-root/50'}>{del.item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </motion.div>
                    )}

                    {/* Community Spotlight */}
                    {activeSection === 'communities' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="heading-2 mb-4">Community Spotlight</h2>
                          <p className="body-text text-deep-root/70 mb-8">
                            Active communities participating in the Love Economy.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          {communities.map((community) => (
                            <Card key={community.name}>
                              <CardContent>
                                <h3 className="font-semibold text-deep-root mb-4">{community.name}</h3>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-stone-grey">Love Farmers</span>
                                    <span className="text-deep-root font-medium">{community.farmers}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-stone-grey">Vendors</span>
                                    <span className="text-deep-root font-medium">{community.vendors}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-stone-grey">Total Meditations</span>
                                    <span className="text-deep-root font-medium">{community.meditations.toLocaleString()}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-stone-grey">Credits Circulated</span>
                                    <span className="text-deep-root font-medium">{community.credits}</span>
                                  </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-border-mist">
                                  <span className="text-xs bg-success-sage/10 text-success-sage px-2 py-1 rounded-full">
                                    {community.status}
                                  </span>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Love Coin */}
                    {activeSection === 'lovecoin' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="heading-2 mb-4">Future Vision: Love Coin</h2>
                          <p className="body-text text-deep-root/70 mb-8">
                            Phase 4 introduces Love Coin — a blockchain-based digital currency that
                            extends the Love Economy globally.
                          </p>
                        </div>

                        <Card>
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Love Coin Characteristics</h3>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-border-mist">
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Attribute</th>
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Description</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {loveCoinFeatures.map((row) => (
                                    <tr key={row.attribute} className="border-b border-border-mist last:border-0">
                                      <td className="py-3 px-4 font-medium text-deep-root">{row.attribute}</td>
                                      <td className="py-3 px-4 text-deep-root/70">{row.description}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </CardContent>
                        </Card>

                        <Card variant="warm">
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Why Blockchain?</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              {[
                                { title: 'Transparency', desc: 'All transactions publicly verifiable' },
                                { title: 'Decentralization', desc: 'Reduced dependency on central authority' },
                                { title: 'Interoperability', desc: 'Integration with global financial systems' },
                                { title: 'Permanence', desc: 'Immutable record of love contributions' },
                                { title: 'Scalability', desc: 'Infrastructure for global expansion' },
                              ].map((item) => (
                                <div key={item.title} className="flex items-start gap-3">
                                  <CheckIcon size={16} className="flex-shrink-0 mt-0.5 text-success-sage" />
                                  <div>
                                    <p className="font-medium text-deep-root text-sm">{item.title}</p>
                                    <p className="text-xs text-deep-root/70">{item.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {/* Technical Specs */}
                    {activeSection === 'specs' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="heading-2 mb-4">Technical Specifications</h2>
                          <p className="body-text text-deep-root/70 mb-8">
                            Detailed technical parameters for the Love Token system.
                          </p>
                        </div>

                        <Card>
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">System Parameters</h3>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-border-mist">
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Specification</th>
                                    <th className="text-left py-3 px-4 font-medium text-stone-grey">Value</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {technicalSpecs.map((row) => (
                                    <tr key={row.spec} className="border-b border-border-mist last:border-0">
                                      <td className="py-3 px-4 text-deep-root">{row.spec}</td>
                                      <td className="py-3 px-4 font-mono text-heart-rose">{row.value}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Credit Calculations</h3>
                            <div className="p-4 bg-deep-root/5 rounded-lg font-mono text-sm space-y-2">
                              <p className="text-deep-root/80">Base LVC = minutes × 0.01</p>
                              <p className="text-deep-root/80">Individual Bonus = Base × 0.10</p>
                              <p className="text-deep-root/80">Streak Bonus = variable (see Earning Mechanics)</p>
                              <p className="text-deep-root/80">Total LVC = Base + Individual Bonus + Streak Bonus</p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {/* Appendices */}
                    {activeSection === 'appendices' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="heading-2 mb-4">Appendices</h2>
                        </div>

                        {/* Glossary */}
                        <Card>
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Glossary</h3>
                            <div className="space-y-3">
                              {glossary.map((item) => (
                                <div key={item.term} className="p-3 bg-sacred-cream rounded-lg">
                                  <p className="font-medium text-heart-rose text-sm">{item.term}</p>
                                  <p className="text-sm text-deep-root/70">{item.definition}</p>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        {/* FAQs */}
                        <Card>
                          <CardContent>
                            <h3 className="font-semibold text-deep-root mb-4">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                              {faqs.map((faq) => (
                                <div key={faq.question} className="border-b border-border-mist pb-4 last:border-0 last:pb-0">
                                  <p className="font-medium text-deep-root mb-2">Q: {faq.question}</p>
                                  <p className="text-sm text-deep-root/70">A: {faq.answer}</p>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Version Info */}
                        <Card variant="warm">
                          <CardContent className="text-center">
                            <p className="text-sm text-deep-root/70 mb-2">
                              This white paper is a living document and will be updated as Love Token evolves.
                            </p>
                            <p className="font-medium text-deep-root">Version 1.0 — January 2026</p>
                            <p className="text-heart-rose">The World&apos;s Greatest Experiment</p>
                            <p className="text-sm text-deep-root/60 mt-4 italic">
                              &quot;Love is the most powerful force in the universe. We&apos;re just learning to measure it.&quot;
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Download CTA */}
            <section className="section-padding bg-white">
              <div className="container-love text-center max-w-2xl mx-auto">
                <Lumi
                  message="Thank you for diving deep into the Love Economy. Together, we're building something extraordinary."
                  state="celebrating"
                  size="lg"
                />
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/join">
                    <Button variant="primary" rightIcon={<ArrowRightIcon size={20} />}>
                      Join the Experiment
                    </Button>
                  </Link>
                  <Link href="/meditate">
                    <Button variant="outline">
                      Start Meditating
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
