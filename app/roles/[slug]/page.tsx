'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, GeneratedImage, Badge } from '@/components/ui';
import { Lumi } from '@/components/lumi';
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
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Comprehensive role data based on master plan
const rolesData: Record<string, {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  heroImage: string;
  description: string;
  keyPoints: string[];
  requirements: { title: string; description: string }[];
  benefits: { title: string; description: string; icon: React.ComponentType<{ size?: number; className?: string }> }[];
  howItWorks: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  testimonial?: { quote: string; author: string; community: string };
  ctaText: string;
  ctaLink: string;
  relatedRoles: string[];
}> = {
  'love-farmer': {
    title: 'Love Farmer',
    subtitle: 'Earn real value through presence and meditation',
    icon: MeditationIcon,
    color: 'heart-rose',
    heroImage: 'role-love-farmer',
    description: 'Love Farmers are at the heart of the Love Economy. Through daily meditation practice, you earn Love Credits that can be spent at local vendors for real goods and services. Your inner work creates outer impact.',
    keyPoints: [
      'Earn Love Credits through meditation (0.01 LVC per minute)',
      'Spend credits at participating local vendors',
      'Build streaks for bonus earnings (up to +100%)',
      'Join a community of fellow practitioners',
      'Your meditation generates real economic value',
    ],
    requirements: [
      { title: 'Community Membership', description: 'You must be part of a registered Love Farm community. Your local administrator will verify your membership.' },
      { title: 'Mobile Device', description: 'A basic smartphone or tablet to access the Love Token app and log meditations.' },
      { title: 'Commitment to Practice', description: 'Regular meditation practice — even just 10 minutes daily creates meaningful value.' },
    ],
    benefits: [
      { title: 'Economic Dignity', description: 'Earn real value through your meditation practice, not charity or handouts.', icon: CoinIcon },
      { title: 'Community Connection', description: 'Join group meditations and build bonds with fellow Love Farmers.', icon: UsersIcon },
      { title: 'Personal Growth', description: 'Develop a consistent meditation practice that improves wellbeing.', icon: SparklesIcon },
      { title: 'Local Impact', description: 'Your spending supports local vendors and strengthens your community economy.', icon: StoreIcon },
    ],
    howItWorks: [
      { step: 1, title: 'Get Verified', description: 'Your community administrator confirms your membership in the Love Farm.' },
      { step: 2, title: 'Download the App', description: 'Install Love Token on your device and log in with your verified account.' },
      { step: 3, title: 'Meditate Daily', description: 'Use the in-app timer for your meditation sessions. Touch verification ensures presence.' },
      { step: 4, title: 'Earn Credits', description: 'Credits appear in your wallet immediately after each session, displayed in local currency.' },
      { step: 5, title: 'Spend Locally', description: 'Scan vendor QR codes to pay for groceries, services, and daily needs.' },
    ],
    faqs: [
      { question: 'How much can I earn?', answer: 'You earn 0.01 LVC per minute of meditation. With streaks and bonuses, 20 minutes daily for a month can earn ~8.5 LVC. The value in local currency depends on exchange rates.' },
      { question: 'What if I lose touch during meditation?', answer: 'The timer pauses gently with no penalty. When you restore touch, it resumes seamlessly. We never punish — only pause.' },
      { question: 'Can I transfer credits to family?', answer: 'Yes, you can transfer Love Credits to other Love Farmers in your community.' },
      { question: 'What about group meditations?', answer: 'Group meditations are logged by your administrator. No touch verification is needed — the community vouches for participation.' },
    ],
    testimonial: {
      quote: 'I never imagined my morning quiet time could help feed my family. Now I meditate with purpose, knowing every minute matters.',
      author: 'Grace M.',
      community: 'Sunrise Village, Kenya',
    },
    ctaText: 'Find a Love Farm Near You',
    ctaLink: '/communities',
    relatedRoles: ['donor', 'vendor', 'farm-admin'],
  },
  'donor': {
    title: 'Donor',
    subtitle: 'Fund the Love Economy and receive daily love',
    icon: HeartIcon,
    color: 'sunlit-gold',
    heroImage: 'role-donor',
    description: 'Donors are the fuel of the Love Economy. Your monthly contribution backs Love Credits, enabling Love Farmers to earn real value. In return, you receive daily notifications of the love flowing through the system — a unique form of reciprocity.',
    keyPoints: [
      'Monthly subscriptions starting at $50/month',
      'Your funds directly back Love Credit redemptions',
      'Receive daily love notifications from communities',
      'See your real-time impact dashboard',
      'Connect with the communities you support',
    ],
    requirements: [
      { title: '12-Month Commitment', description: 'Donors commit to a 12-month subscription to ensure stable funding for communities.' },
      { title: 'Monthly Contribution', description: 'Choose a tier: $50, $100, or custom amount per month.' },
      { title: 'Open Heart', description: 'Be ready to receive as much as you give — love flows both ways.' },
    ],
    benefits: [
      { title: 'Daily Love Notifications', description: 'Receive alerts when meditations happen in communities you support.', icon: HeartIcon },
      { title: 'Impact Transparency', description: 'See exactly how your contribution enables meditation value.', icon: FlowIcon },
      { title: 'Community Connection', description: 'Build relationships with Love Farms and their stories.', icon: UsersIcon },
      { title: 'Project Funding', description: 'Optionally fund specific community projects with naming rights.', icon: SparklesIcon },
    ],
    howItWorks: [
      { step: 1, title: 'Choose Your Tier', description: 'Select a monthly contribution amount that feels right for you.' },
      { step: 2, title: 'Complete Subscription', description: 'Set up recurring payment through our secure platform.' },
      { step: 3, title: 'Receive Welcome', description: 'Get introduced to the communities your contribution supports.' },
      { step: 4, title: 'Daily Love Flow', description: 'Receive notifications as Love Farmers meditate and credits circulate.' },
      { step: 5, title: 'Track Your Impact', description: 'Access your dashboard showing meditation hours funded, credits enabled, and more.' },
    ],
    faqs: [
      { question: 'Where does my money go?', answer: 'Your contribution goes to the liquidity pool that backs Love Credit redemptions. When vendors redeem credits, your funds enable that payment.' },
      { question: 'Can I see my specific impact?', answer: 'Yes! Your dashboard shows meditation hours you\'ve funded, credits issued, and stories from supported communities.' },
      { question: 'What are daily love notifications?', answer: 'Brief messages letting you know when meditations occur in your communities. A reminder that your contribution enables real practice.' },
      { question: 'Can I fund specific projects?', answer: 'Yes! Communities post project goals (education centers, water access, etc.) that you can fully fund, with optional naming recognition.' },
    ],
    testimonial: {
      quote: 'Every morning I wake up to a notification that someone on the other side of the world meditated because of my support. It\'s the best way to start my day.',
      author: 'Michael R.',
      community: 'Donor since 2024',
    },
    ctaText: 'Become a Donor',
    ctaLink: '/join?role=donor',
    relatedRoles: ['love-farmer', 'vendor', 'public-user'],
  },
  'vendor': {
    title: 'Vendor',
    subtitle: 'Accept Love Credits and serve your community',
    icon: StoreIcon,
    color: 'om-sage',
    heroImage: 'role-vendor',
    description: 'Vendors complete the Love Economy circle. By accepting Love Credits for goods and services, you enable Love Farmers to spend their earned value locally. Credits are redeemable for local currency on a regular schedule.',
    keyPoints: [
      'Accept Love Credits as payment for goods/services',
      'Redeem credits for local currency weekly or monthly',
      'No special equipment needed — just a phone with QR code',
      'Join the network of community-supporting businesses',
      'Credits are backed 1:1 by donor funds',
    ],
    requirements: [
      { title: 'Local Business', description: 'Operate a business within or near a Love Farm community.' },
      { title: 'Mobile Device', description: 'Smartphone to display your QR code and receive payments.' },
      { title: 'Community Approval', description: 'Registration approved by your local Love Farm administrator.' },
    ],
    benefits: [
      { title: 'New Customer Base', description: 'Access Love Farmers as regular customers with real spending power.', icon: UsersIcon },
      { title: 'Reliable Redemption', description: 'Convert credits to local currency on a predictable schedule.', icon: CoinIcon },
      { title: 'Community Status', description: 'Be recognized as a vendor supporting the Love Economy.', icon: SparklesIcon },
      { title: 'Simple Setup', description: 'No expensive POS systems — just your phone and a QR code.', icon: CheckIcon },
    ],
    howItWorks: [
      { step: 1, title: 'Apply to Join', description: 'Submit your business information through your local Love Farm admin.' },
      { step: 2, title: 'Get Verified', description: 'Your community administrator approves your vendor registration.' },
      { step: 3, title: 'Display Your QR', description: 'Receive your unique QR code to display at your business.' },
      { step: 4, title: 'Accept Payments', description: 'Love Farmers scan your code, enter amounts, and transfer credits instantly.' },
      { step: 5, title: 'Redeem Credits', description: 'Submit redemption requests weekly or monthly to receive local currency.' },
    ],
    faqs: [
      { question: 'How do I convert credits to cash?', answer: 'Submit a redemption request through the app. TWGE verifies your balance and pays out in local currency, typically within 48 hours.' },
      { question: 'What\'s the exchange rate?', answer: 'Love Credits are backed 1:1 by the liquidity pool. Exchange rates to local currency are updated twice daily.' },
      { question: 'Is there a fee for redemptions?', answer: 'Currently no fees for MVP. Future phases may include minimal operational fees.' },
      { question: 'Can I reject credit payments?', answer: 'As a registered vendor, you\'re expected to accept Love Credits. If you have concerns, contact your local administrator.' },
    ],
    testimonial: {
      quote: 'My small grocery store now serves more families than ever. Love Farmers shop here knowing their credits are welcome.',
      author: 'David K.',
      community: 'Vendor, Mountain Heart',
    },
    ctaText: 'Register as a Vendor',
    ctaLink: '/join?role=vendor',
    relatedRoles: ['love-farmer', 'farm-admin', 'donor'],
  },
  'farm-admin': {
    title: 'Love Farm Administrator',
    subtitle: 'Steward your community\'s Love Economy',
    icon: ShieldIcon,
    color: 'earth-clay',
    heroImage: 'role-farm-admin',
    description: 'Love Farm Administrators are the trusted stewards of their communities. You verify Love Farmers, log group meditations, coordinate vendor onboarding, and ensure the integrity of your local Love Economy.',
    keyPoints: [
      'Verify and onboard new Love Farmers',
      'Log group meditation sessions',
      'Coordinate vendor registration in your area',
      'Manage community data and resolve issues',
      'Serve as the bridge between TWGE and your community',
    ],
    requirements: [
      { title: 'Community Trust', description: 'Be a respected member of your community with demonstrated integrity.' },
      { title: 'Training Completion', description: 'Complete TWGE administrator training program.' },
      { title: 'Regular Availability', description: 'Be available to support community members and handle admin tasks.' },
    ],
    benefits: [
      { title: 'Community Leadership', description: 'Play a vital role in bringing economic opportunity to your community.', icon: UsersIcon },
      { title: 'Direct Support', description: 'Receive training and ongoing support from TWGE team.', icon: HeartIcon },
      { title: 'First Access', description: 'Be among the first to know about new features and opportunities.', icon: SparklesIcon },
      { title: 'Network Connection', description: 'Connect with other Love Farm administrators globally.', icon: GlobalIcon },
    ],
    howItWorks: [
      { step: 1, title: 'Community Application', description: 'Your community applies to become a Love Farm through TWGE.' },
      { step: 2, title: 'Admin Selection', description: 'Community selects trusted members to serve as administrators.' },
      { step: 3, title: 'Training Program', description: 'Complete comprehensive training on the system and your responsibilities.' },
      { step: 4, title: 'Launch Support', description: 'Work with TWGE to onboard initial Love Farmers and vendors.' },
      { step: 5, title: 'Ongoing Stewardship', description: 'Manage daily operations, verify new members, and support your community.' },
    ],
    faqs: [
      { question: 'Do administrators get paid?', answer: 'In the MVP phase, administrators are volunteer community leaders. Future phases may include compensation models.' },
      { question: 'How do I verify a Love Farmer?', answer: 'You confirm their community membership and identity through your local knowledge, then approve them in the system.' },
      { question: 'What if there\'s a dispute?', answer: 'You\'re the first point of contact for local issues. Escalate to TWGE if needed — we\'re always here to help.' },
      { question: 'Can there be multiple admins?', answer: 'Yes! We recommend 2-3 administrators per Love Farm for coverage and shared responsibility.' },
    ],
    ctaText: 'Start a Love Farm',
    ctaLink: '/join?role=admin',
    relatedRoles: ['love-farmer', 'vendor', 'twge-admin'],
  },
  'public-user': {
    title: 'Public User',
    subtitle: 'Meditate for global love without registration',
    icon: UsersIcon,
    color: 'meditation-dusk',
    heroImage: 'role-public-user',
    description: 'Public Users can participate in the Love Economy without any registration. Meditate using the app and earn Love Points — a global recognition of your contribution. While points can\'t be spent, they track your impact on the world\'s love.',
    keyPoints: [
      'No registration required to start',
      'Earn Love Points (not Credits) for meditation',
      'Points are non-transferable and non-redeemable',
      'Track your global contribution to love',
      'Join the worldwide meditation community',
    ],
    requirements: [
      { title: 'Just Show Up', description: 'No registration, no verification, no commitment. Just open the app and meditate.' },
      { title: 'Any Device', description: 'Access via web browser or mobile app.' },
      { title: 'Open Heart', description: 'Bring your intention and presence — that\'s all you need.' },
    ],
    benefits: [
      { title: 'Zero Friction', description: 'Start meditating immediately without any signup process.', icon: SparklesIcon },
      { title: 'Global Recognition', description: 'Your Love Points add to the worldwide meditation count.', icon: GlobalIcon },
      { title: 'Personal Tracking', description: 'See your meditation history and streaks over time.', icon: ClockIcon },
      { title: 'Path to More', description: 'Discover Love Farms or become a donor when you\'re ready.', icon: ArrowRightIcon },
    ],
    howItWorks: [
      { step: 1, title: 'Open the App', description: 'Visit Love Token or open the app — no login needed.' },
      { step: 2, title: 'Choose Duration', description: 'Select 1, 5, 10, or 20 minutes for your session.' },
      { step: 3, title: 'Meditate', description: 'Hold to start, breathe, be present.' },
      { step: 4, title: 'Earn Points', description: 'Love Points are added to your local counter and global totals.' },
      { step: 5, title: 'Return Anytime', description: 'Build your practice, track your streaks, contribute to global love.' },
    ],
    faqs: [
      { question: 'What\'s the difference between Points and Credits?', answer: 'Love Points are for global recognition — anyone earns them. Love Credits are for Love Farmers only and can be spent at vendors.' },
      { question: 'Can I become a Love Farmer later?', answer: 'Yes! If a Love Farm launches in your community, you can join and start earning Credits instead of just Points.' },
      { question: 'Do my points expire?', answer: 'No, your Love Points are permanent records of your contribution to global love.' },
      { question: 'Can I see other people\'s points?', answer: 'You can see global totals. Individual tracking is private unless shared.' },
    ],
    ctaText: 'Start Meditating Now',
    ctaLink: '/meditate',
    relatedRoles: ['love-farmer', 'donor'],
  },
  'twge-admin': {
    title: 'TWGE Administrator',
    subtitle: 'System-wide oversight and stewardship',
    icon: GlobalIcon,
    color: 'success-sage',
    heroImage: 'role-twge-admin',
    description: 'TWGE Administrators provide global oversight of the Love Economy. Responsibilities include managing credit ceilings, processing vendor redemptions, updating exchange rates, and ensuring the integrity of the entire system.',
    keyPoints: [
      'Manage global credit ceiling and issuance',
      'Process vendor redemption requests',
      'Update foreign exchange rates',
      'Provide support to Love Farm administrators',
      'Ensure system integrity and trust',
    ],
    requirements: [
      { title: 'TWGE Team Member', description: 'TWGE Administrators are staff members of The World\'s Greatest Experiment.' },
      { title: 'Comprehensive Training', description: 'Complete training on all system aspects and trust responsibilities.' },
      { title: 'Fiduciary Duty', description: 'Commit to the highest standards of transparency and integrity.' },
    ],
    benefits: [
      { title: 'Global Impact', description: 'Directly enable the Love Economy to function worldwide.', icon: GlobalIcon },
      { title: 'Mission Alignment', description: 'Work at the heart of a transformative economic experiment.', icon: HeartIcon },
      { title: 'Community Building', description: 'Support Love Farms and administrators across regions.', icon: UsersIcon },
      { title: 'System Evolution', description: 'Shape the future development of the platform.', icon: SparklesIcon },
    ],
    howItWorks: [
      { step: 1, title: 'Credit Management', description: 'Monitor and adjust global credit ceiling based on liquidity and demand.' },
      { step: 2, title: 'Redemption Processing', description: 'Review and approve vendor redemption requests, initiating payouts.' },
      { step: 3, title: 'FX Rate Updates', description: 'Update exchange rates twice daily based on market data.' },
      { step: 4, title: 'Admin Support', description: 'Respond to Love Farm administrator escalations and questions.' },
      { step: 5, title: 'System Monitoring', description: 'Monitor for anomalies, ensure audit trails, maintain trust.' },
    ],
    faqs: [
      { question: 'How are TWGE admins selected?', answer: 'TWGE administrators are hired as staff members after rigorous vetting for integrity and competence.' },
      { question: 'What oversight exists for TWGE admins?', answer: 'Multiple admins must approve major actions. All activities are logged in an append-only audit trail.' },
      { question: 'Can TWGE admins create unlimited credits?', answer: 'No. Credit issuance is bounded by the credit ceiling, which is tied to the liquidity pool funded by donors.' },
      { question: 'How do manual overrides work?', answer: 'Emergency manual overrides require multi-admin approval and are fully documented in the audit trail.' },
    ],
    ctaText: 'Learn About TWGE',
    ctaLink: '/about',
    relatedRoles: ['farm-admin', 'donor'],
  },
};

export default function RoleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const role = rolesData[slug];

  if (!role) {
    notFound();
  }

  const Icon = role.icon;

  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Back Navigation */}
      <div className="pt-24 pb-4">
        <div className="container-love">
          <Link
            href="/how-it-works#roles"
            className="inline-flex items-center gap-2 text-deep-root/60 hover:text-deep-root transition-colors"
          >
            <ArrowLeftIcon size={16} />
            <span className="text-sm">Back to All Roles</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-soft/20 to-transparent" />

        <div className="container-love relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="text-center lg:text-left"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-${role.color}/10 text-${role.color} rounded-full text-sm font-medium mb-6`}>
                <Icon size={16} />
                Ecosystem Role
              </div>
              <h1 className="heading-1 mb-4">
                {role.title}
              </h1>
              <p className="text-xl text-deep-root/70 mb-6">
                {role.subtitle}
              </p>
              <p className="body-text text-deep-root/80 mb-8">
                {role.description}
              </p>
              <Link href={role.ctaLink}>
                <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon size={20} />}>
                  {role.ctaText}
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-card">
                <GeneratedImage
                  promptId={role.heroImage}
                  alt={role.title}
                  fill
                  className="rounded-card"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-2 text-center mb-12">Key Highlights</h2>
            <div className="space-y-4">
              {role.keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-lotus-soft/20 rounded-love"
                >
                  <div className={`w-8 h-8 rounded-full bg-${role.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <CheckIcon size={16} className={`text-${role.color}`} />
                  </div>
                  <p className="text-deep-root/80 pt-1">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">How It Works</h2>
            <p className="body-large text-deep-root/70">
              Your journey as a {role.title} in {role.howItWorks.length} simple steps.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {role.howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6 mb-8"
              >
                <div className={`w-12 h-12 rounded-full bg-${role.color} text-white font-bold flex items-center justify-center flex-shrink-0`}>
                  {step.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-semibold text-deep-root mb-2">{step.title}</h3>
                  <p className="text-deep-root/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-gradient-to-br from-lotus-soft/30 to-sunlit-gold/10">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Requirements</h2>
            <p className="body-large text-deep-root/70">
              What you need to become a {role.title}.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {role.requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className={`w-10 h-10 mb-4 rounded-full bg-${role.color}/10 flex items-center justify-center`}>
                      <CheckIcon size={20} className={`text-${role.color}`} />
                    </div>
                    <h3 className="font-semibold text-deep-root mb-2">{req.title}</h3>
                    <p className="text-deep-root/70 text-sm">{req.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Benefits</h2>
            <p className="body-large text-deep-root/70">
              What you gain as a {role.title} in the Love Economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {role.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="warm" className="h-full">
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full bg-${role.color}/10 flex items-center justify-center flex-shrink-0`}>
                        <benefit.icon size={24} className={`text-${role.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-root mb-2">{benefit.title}</h3>
                        <p className="text-deep-root/70 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {role.testimonial && (
        <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
          <div className="container-love">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <HeartIcon size={48} className="mx-auto mb-6 text-heart-rose" />
              <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
                &quot;{role.testimonial.quote}&quot;
              </blockquote>
              <div>
                <p className="font-semibold text-sunlit-gold">{role.testimonial.author}</p>
                <p className="text-white/60 text-sm">{role.testimonial.community}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="body-large text-deep-root/70">
              Common questions about being a {role.title}.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {role.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent>
                    <h3 className="font-semibold text-deep-root mb-2">{faq.question}</h3>
                    <p className="text-deep-root/70 text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Roles */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">Explore Other Roles</h2>
            <p className="body-large text-deep-root/70">
              Discover how other participants contribute to the Love Economy.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {role.relatedRoles.map((relatedSlug) => {
              const related = rolesData[relatedSlug];
              if (!related) return null;
              const RelatedIcon = related.icon;
              return (
                <Link key={relatedSlug} href={`/roles/${relatedSlug}`}>
                  <Button variant="outline" className="gap-2">
                    <RelatedIcon size={16} />
                    {related.title}
                  </Button>
                </Link>
              );
            })}
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
            <h2 className="heading-2 text-white mb-4">Ready to Begin?</h2>
            <p className="body-large text-white/80 mb-8">
              Join the Love Economy as a {role.title} and start making a difference today.
            </p>
            <Link href={role.ctaLink}>
              <Button
                variant="ghost"
                size="lg"
                className="bg-white text-heart-rose hover:bg-white/90"
                rightIcon={<ArrowRightIcon size={20} />}
              >
                {role.ctaText}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
