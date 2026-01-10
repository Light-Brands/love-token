'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, GeneratedImage } from '@/components/ui';
import { Lumi } from '@/components/lumi';
import {
  HeartIcon,
  UsersIcon,
  ShieldIcon,
  GlobalIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckIcon,
  SparklesIcon,
  FlowIcon,
  EyeIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Comprehensive value data based on master plan
const valuesData: Record<string, {
  title: string;
  tagline: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  principle: string;
  description: string;
  longDescription: string;
  examples: { situation: string; wrong: string; right: string }[];
  inPractice: string[];
  quotes: { text: string; context: string }[];
  relatedValues: string[];
}> = {
  'dignity-first': {
    title: 'Dignity First',
    tagline: 'No pity, no hierarchy, no othering',
    icon: HeartIcon,
    color: 'heart-rose',
    principle: 'Dignity vs Efficiency → Choose Dignity',
    description: 'Love Farmers are value creators, not beneficiaries. Donors are participants, not saviors.',
    longDescription: 'Dignity is the foundation of the Love Economy. Every design decision, every interaction, every word we use is filtered through this lens: does this uphold the dignity of all participants? We reject the charity model that creates dependency. Instead, we build systems where everyone participates as equals, where every person\'s contribution is recognized and valued.',
    examples: [
      {
        situation: 'Describing Love Farmers to donors',
        wrong: 'Help these poor communities by donating',
        right: 'Partner with skilled meditators who create real value',
      },
      {
        situation: 'Designing the user interface',
        wrong: 'Simplified version for "developing world users"',
        right: 'Symbol-based interface accessible to everyone',
      },
      {
        situation: 'Handling verification',
        wrong: 'Require government ID and KYC for all users',
        right: 'Community-based verification that respects local context',
      },
    ],
    inPractice: [
      'We never use terms like "beneficiary," "recipient," or "underprivileged"',
      'Love Farmers are portrayed as skilled practitioners creating value',
      'Donors are described as "participants" who also receive love',
      'Community verification respects local trust networks',
      'Interface design assumes intelligence, not illiteracy',
      'Credits are "earned," not "given" or "granted"',
    ],
    quotes: [
      { text: 'We don\'t give love. We exchange it.', context: 'Core philosophy' },
      { text: 'Every person who meditates is a value creator.', context: 'On Love Farmers' },
      { text: 'Dignity is not a nice-to-have. It\'s the foundation.', context: 'Decision principle' },
    ],
    relatedValues: ['love-as-currency', 'simplicity-is-respect'],
  },
  'love-as-currency': {
    title: 'Love as Currency',
    tagline: 'Real, practical, measurable value',
    icon: FlowIcon,
    color: 'sunlit-gold',
    principle: 'Measurement matters — what we count, counts',
    description: 'We speak of love as real, practical, and powerful. This is economics, not just poetry.',
    longDescription: 'Love Token treats love not as a metaphor but as a genuine economic force. When we say "Love Credits," we mean a real unit of value that can be earned through meditation and spent at local vendors. This isn\'t about sentimentality — it\'s about recognizing that presence, intention, and connection have measurable impact on individuals, communities, and economies.',
    examples: [
      {
        situation: 'Explaining the system to newcomers',
        wrong: 'We spread love and positive vibes to the world',
        right: 'Meditation generates Love Credits worth real money in your community',
      },
      {
        situation: 'Designing the wallet interface',
        wrong: 'Show hearts and feel-good animations',
        right: 'Show local currency value first, credits second',
      },
      {
        situation: 'Tracking impact',
        wrong: 'Vague claims about "lives touched"',
        right: 'Specific metrics: credits earned, transactions completed, projects funded',
      },
    ],
    inPractice: [
      'Love Credits are displayed in local currency (e.g., ₨157) before LVC (4.65)',
      'Every transaction is logged with real economic data',
      'Impact is measured in concrete terms: credits circulated, vendors paid',
      'Donor contributions are tracked to specific meditation hours funded',
      'FX rates are updated twice daily based on real markets',
      'Redemptions convert to actual local currency paid to vendors',
    ],
    quotes: [
      { text: 'Love is not given. Love is shared. Love is earned. Love circulates.', context: 'Core philosophy' },
      { text: 'If you can\'t measure it, you can\'t improve it.', context: 'On economics' },
      { text: 'We\'re not playing at economy. This is real.', context: 'On credits' },
    ],
    relatedValues: ['dignity-first', 'transparency-always'],
  },
  'simplicity-is-respect': {
    title: 'Simplicity is Respect',
    tagline: 'Simple language includes everyone',
    icon: UsersIcon,
    color: 'om-sage',
    principle: 'Simplicity vs Power → Choose Simplicity',
    description: 'We design for limited-literacy users and universal understanding.',
    longDescription: 'Complex systems often exclude the people who most need them. We believe that if someone can\'t use our system intuitively, that\'s our failure, not theirs. Every feature, every screen, every message is designed with the assumption that the user may have limited formal education but possesses wisdom, intelligence, and the capacity to participate fully in the Love Economy.',
    examples: [
      {
        situation: 'Designing the meditation timer',
        wrong: 'Multiple modes, settings, and customization options',
        right: 'Hold to start, release to end. That\'s it.',
      },
      {
        situation: 'Showing wallet balance',
        wrong: 'Detailed breakdown with crypto decimals (4.6542837 LVC)',
        right: 'Local currency display with familiar denominations (₨157)',
      },
      {
        situation: 'Building admin tools',
        wrong: 'Feature-rich dashboard with advanced analytics',
        right: 'Essential functions only, symbol-based navigation',
      },
    ],
    inPractice: [
      'Icon and symbol-based interfaces wherever possible',
      'Large touch targets for all interactive elements',
      'Local currency displayed prominently, technical details secondary',
      'Clear, simple language in all communications',
      'Audio guidance options for non-readers',
      'Every feature justified by real user need',
    ],
    quotes: [
      { text: 'If your grandmother can\'t use it, simplify it.', context: 'Design principle' },
      { text: 'Complexity is a form of exclusion.', context: 'On design philosophy' },
      { text: 'The user is always right. The design is always improvable.', context: 'On user feedback' },
    ],
    relatedValues: ['dignity-first', 'human-oversight'],
  },
  'quality-over-speed': {
    title: 'Quality Over Speed',
    tagline: 'Correctness over polish. Trust over speed.',
    icon: ShieldIcon,
    color: 'meditation-dusk',
    principle: 'Speed vs Trust → Choose Trust',
    description: 'We prioritize getting it right over getting it fast.',
    longDescription: 'In a system that handles real money and real trust, there\'s no room for "move fast and break things." Every feature we ship must work correctly for the people who depend on it. A Love Farmer relying on credits for groceries can\'t afford a buggy redemption system. We build deliberately, test thoroughly, and release only when we\'re confident.',
    examples: [
      {
        situation: 'Launching new features',
        wrong: 'Ship quickly, iterate based on bug reports',
        right: 'Test extensively with pilot communities, ship when stable',
      },
      {
        situation: 'Processing redemptions',
        wrong: 'Automate everything for maximum efficiency',
        right: 'Human verification steps where trust requires it',
      },
      {
        situation: 'Expanding to new communities',
        wrong: 'Rapid expansion to maximize impact numbers',
        right: 'Careful onboarding to ensure each community succeeds',
      },
    ],
    inPractice: [
      '2-3 pilot communities thoroughly tested before wider launch',
      'Manual verification for vendor redemptions (not fully automated)',
      'Append-only ledgers that can never "lose" transactions',
      'Emergency manual override capabilities for all automated processes',
      'Regular audits of system integrity',
      'Community feedback incorporated before major changes',
    ],
    quotes: [
      { text: 'Trust, once broken, is nearly impossible to rebuild.', context: 'On reliability' },
      { text: 'Better to move slowly and stay true than move fast and fail people.', context: 'On development' },
      { text: 'Every bug in production is a person we failed.', context: 'On quality' },
    ],
    relatedValues: ['human-oversight', 'transparency-always'],
  },
  'human-oversight': {
    title: 'Human Oversight',
    tagline: 'Technology serves people, not the reverse',
    icon: EyeIcon,
    color: 'earth-clay',
    principle: 'Automation vs Oversight → Choose Oversight',
    description: 'Manual overrides and human judgment remain paramount.',
    longDescription: 'We embrace technology as a tool, not a master. Every automated system includes human override capabilities. Every algorithm can be questioned by a person. When the computer says one thing and the community says another, we listen to the community. Ultimately, the Love Economy is powered by human relationships — technology just helps scale them.',
    examples: [
      {
        situation: 'Verifying a new Love Farmer',
        wrong: 'Automated verification using biometrics or AI',
        right: 'Local administrator confirms based on community knowledge',
      },
      {
        situation: 'Processing a disputed transaction',
        wrong: 'Automated dispute resolution based on patterns',
        right: 'Human review with community context',
      },
      {
        situation: 'Updating exchange rates',
        wrong: 'Fully automated FX feed with no intervention possible',
        right: 'Automated feed with manual override for emergencies',
      },
    ],
    inPractice: [
      'Love Farm administrators provide human verification layer',
      'TWGE admins can manually override any automated process',
      'All manual actions are logged in the audit trail',
      'Multi-admin approval required for significant changes',
      'Community elders consulted on major decisions',
      'Regular human review of automated processes',
    ],
    quotes: [
      { text: 'Algorithms don\'t know wisdom. People do.', context: 'On automation' },
      { text: 'The computer should always be interruptible.', context: 'On override design' },
      { text: 'Trust flows from people, not from systems.', context: 'On verification' },
    ],
    relatedValues: ['quality-over-speed', 'dignity-first'],
  },
  'transparency-always': {
    title: 'Transparency Always',
    tagline: 'Every credit is auditable',
    icon: GlobalIcon,
    color: 'success-sage',
    principle: 'Privacy vs Accountability → Balance Both',
    description: 'Every credit issued, transferred, and burned is auditable.',
    longDescription: 'Trust in the Love Economy is built on radical transparency. Every Love Credit can be traced from its creation (backed by donor funds) through its circulation (meditation to spending) to its redemption (vendor payout). Donors can see exactly where their contributions go. Communities can verify their own activity. The system is accountable to everyone who participates in it.',
    examples: [
      {
        situation: 'Donor asks "where does my money go?"',
        wrong: 'General statistics about "lives impacted"',
        right: 'Specific tracking: meditation hours funded, credits issued, redemptions enabled',
      },
      {
        situation: 'Community questions a transaction',
        wrong: '"Trust us, the algorithm handles it"',
        right: 'Full audit trail accessible to community administrators',
      },
      {
        situation: 'External audit request',
        wrong: 'Selective sharing of positive metrics',
        right: 'Complete ledger access for verified auditors',
      },
    ],
    inPractice: [
      'Append-only transaction ledger — nothing can be deleted',
      'Donors can track their specific contribution through the system',
      'Community dashboards show all local activity',
      'Regular public reporting on system-wide metrics',
      'Admin actions logged with full context',
      'Open source code where possible',
    ],
    quotes: [
      { text: 'If we can\'t explain it, we shouldn\'t do it.', context: 'On decisions' },
      { text: 'Transparency is the foundation of trust.', context: 'On accountability' },
      { text: 'The ledger never lies and never forgets.', context: 'On audit trails' },
    ],
    relatedValues: ['love-as-currency', 'quality-over-speed'],
  },
};

export default function ValueDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const value = valuesData[slug];

  if (!value) {
    notFound();
  }

  const Icon = value.icon;

  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Back Navigation */}
      <div className="pt-24 pb-4">
        <div className="container-love">
          <Link
            href="/about#values"
            className="inline-flex items-center gap-2 text-deep-root/60 hover:text-deep-root transition-colors"
          >
            <ArrowLeftIcon size={16} />
            <span className="text-sm">Back to All Values</span>
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
            <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-${value.color}/10 flex items-center justify-center`}>
              <Icon size={40} className={`text-${value.color}`} />
            </div>

            <h1 className="heading-1 mb-4">
              {value.title}
            </h1>
            <p className="text-xl text-deep-root/70 mb-6">
              {value.tagline}
            </p>

            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-${value.color}/10 text-${value.color} rounded-full text-sm font-medium mb-8`}>
              <SparklesIcon size={16} />
              {value.principle}
            </div>

            <p className="body-text text-deep-root/80">
              {value.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Examples */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">In Practice</h2>
            <p className="body-large text-deep-root/70">
              How we apply {value.title} in real decisions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {value.examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent>
                    <h3 className="font-semibold text-deep-root mb-4">{example.situation}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-stone-grey/10 rounded-love">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-stone-grey/20 flex items-center justify-center text-stone-grey text-xs font-bold">
                            ✕
                          </div>
                          <span className="text-sm text-stone-grey font-medium">Not This</span>
                        </div>
                        <p className="text-deep-root/60 text-sm">{example.wrong}</p>
                      </div>
                      <div className={`p-4 bg-${value.color}/10 rounded-love`}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-6 h-6 rounded-full bg-${value.color}/20 flex items-center justify-center`}>
                            <CheckIcon size={14} className={`text-${value.color}`} />
                          </div>
                          <span className={`text-sm text-${value.color} font-medium`}>This Instead</span>
                        </div>
                        <p className="text-deep-root/80 text-sm">{example.right}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="section-padding">
        <div className="container-love">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">How We Live This</h2>
              <p className="body-text text-deep-root/70 mb-8">
                Concrete ways {value.title} shows up in our work.
              </p>

              <div className="space-y-4">
                {value.inPractice.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-love shadow-gentle">
                    <CheckIcon size={18} className={`flex-shrink-0 mt-0.5 text-${value.color}`} />
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
              <Lumi
                message={`${value.title} isn't just a principle we believe — it's a practice we embody every day.`}
                state="speaking"
                size="lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 text-white mb-4">Words to Remember</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {value.quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/10"
              >
                <blockquote className="text-white/90 italic mb-4">
                  &quot;{quote.text}&quot;
                </blockquote>
                <p className="text-white/60 text-sm">{quote.context}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Values */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">Related Values</h2>
            <p className="body-large text-deep-root/70">
              Our values work together to guide every decision.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {value.relatedValues.map((relatedSlug) => {
              const related = valuesData[relatedSlug];
              if (!related) return null;
              const RelatedIcon = related.icon;
              return (
                <Link key={relatedSlug} href={`/about/values/${relatedSlug}`}>
                  <Button variant="outline" className="gap-2">
                    <RelatedIcon size={16} />
                    {related.title}
                  </Button>
                </Link>
              );
            })}
            <Link href="/about#values">
              <Button variant="secondary" className="gap-2">
                <GlobalIcon size={16} />
                View All Values
              </Button>
            </Link>
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
            <h2 className="heading-2 text-white mb-4">Live These Values With Us</h2>
            <p className="body-large text-white/80 mb-8">
              Join a community where values aren&apos;t just statements —
              they&apos;re the foundation of everything we build.
            </p>
            <Link href="/join">
              <Button
                variant="ghost"
                size="lg"
                className="bg-white text-heart-rose hover:bg-white/90"
                rightIcon={<ArrowRightIcon size={20} />}
              >
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
