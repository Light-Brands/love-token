'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import {
  HeartIcon,
  MeditationIcon,
  CoinIcon,
  UsersIcon,
  StoreIcon,
  ArrowRightIcon,
  HelpCircleIcon,
  ShieldIcon,
} from '@/components/icons';

// FAQ categories and questions
const faqCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: UsersIcon,
    questions: [
      {
        q: 'How do I join the Love Economy?',
        a: 'You can start meditating right away without any registration! Just visit our Meditate page and begin. If you want to earn Love Credits (not just Love Points), you\'ll need to join a registered Love Farm community through your local administrator.',
      },
      {
        q: 'Do I need to register to meditate?',
        a: 'No! Anyone can meditate and earn Love Points without registering. However, to earn Love Credits (which have real economic value), you need to be a registered Love Farmer in a verified community.',
      },
      {
        q: 'What devices work with Love Token?',
        a: 'Love Token works on any modern smartphone, tablet, or computer with a web browser. We\'ve designed the interface to be simple and accessible, even on older devices with limited connectivity.',
      },
      {
        q: 'Is this available in my country?',
        a: 'Love Token is currently active in select communities in Kenya, India, and the Philippines. We\'re expanding carefully to ensure quality. Contact us if you\'re interested in starting a Love Farm in your area.',
      },
    ],
  },
  {
    id: 'currencies',
    title: 'Love Credits & Points',
    icon: CoinIcon,
    questions: [
      {
        q: 'What\'s the difference between Love Points and Love Credits?',
        a: 'Love Points (LP) are earned by anyone who meditates — they track your global contribution but cannot be spent or transferred. Love Credits (LVC) are earned only by Love Farmers and can be spent at local vendors or redeemed for local currency.',
      },
      {
        q: 'How are Love Credits backed?',
        a: 'Love Credits are backed by donor contributions. When donors subscribe, their funds go into a liquidity pool that backs the credits Love Farmers earn. When vendors redeem credits, they receive local currency from this pool.',
      },
      {
        q: 'Can I transfer credits to other people?',
        a: 'Love Farmers can transfer credits to vendors in exchange for goods and services. Credits cannot be transferred between Love Farmers — this prevents speculation and ensures credits flow through the local economy.',
      },
      {
        q: 'What exchange rate do credits use?',
        a: 'Credits are valued at a fixed rate per meditation minute (currently 0.01 LVC per minute). The local currency equivalent is calculated using exchange rates updated twice daily. Love Farmers always see their balance in local currency first.',
      },
    ],
  },
  {
    id: 'love-farmers',
    title: 'For Love Farmers',
    icon: MeditationIcon,
    questions: [
      {
        q: 'How much can I earn by meditating?',
        a: 'Base rate is 0.01 LVC per minute. With bonuses (individual practice +10%, weekly streak +50% on day 7, monthly streak +100% on day 30, plus 5% monthly bonus), a consistent 20-minute daily practice can earn around 8-9 LVC per month.',
      },
      {
        q: 'What are streak bonuses?',
        a: 'Streaks reward consistent practice. Meditate for 7 consecutive days and get a 50% bonus on day 7. Reach 30 days and get a 100% bonus on day 30, plus a 5% bonus on all credits earned that month. Missing a day resets your streak.',
      },
      {
        q: 'How do I spend my credits?',
        a: 'Visit any participating vendor and scan their QR code with your phone. Enter the amount you want to spend, confirm the transaction, and credits transfer instantly. The vendor provides your goods or services.',
      },
      {
        q: 'What if I lose touch during meditation?',
        a: 'If you lift your finger during meditation, the timer simply pauses — no penalty, no lost credits. A gentle reminder appears. When you touch again, meditation resumes. We verify presence with dignity.',
      },
    ],
  },
  {
    id: 'donors',
    title: 'For Donors',
    icon: HeartIcon,
    questions: [
      {
        q: 'Where does my donation go?',
        a: 'Your donation goes into the liquidity pool that backs Love Credits. It funds the credits that Love Farmers earn through meditation. You\'re not giving charity — you\'re funding a functioning economy.',
      },
      {
        q: 'How do I see my impact?',
        a: 'Donors receive daily notifications showing how many meditation minutes their funding supported, which communities benefited, and stories from Love Farmers. You can also view real-time stats on your dashboard.',
      },
      {
        q: 'Can I cancel my subscription?',
        a: 'Yes, you can cancel anytime. However, we ask for a 12-month commitment when you start to ensure communities can rely on consistent funding. Early cancellation is possible but not encouraged.',
      },
      {
        q: 'Can I choose which community to support?',
        a: 'Currently, donations support the entire Love Economy proportionally. In future phases, donors will be able to sponsor specific communities or projects.',
      },
    ],
  },
  {
    id: 'vendors',
    title: 'For Vendors',
    icon: StoreIcon,
    questions: [
      {
        q: 'How do I accept Love Credits?',
        a: 'Register your business through our vendor portal. You\'ll receive a unique QR code. When a Love Farmer wants to pay, they scan your code, enter the amount, and credits transfer to your vendor wallet instantly.',
      },
      {
        q: 'How do I redeem credits for cash?',
        a: 'Submit a redemption request through your vendor dashboard. TWGE verifies the request and pays you in local currency. Redemptions are processed weekly or monthly depending on your preference.',
      },
      {
        q: 'What\'s the exchange rate for redemption?',
        a: 'You receive 100% of the credit value in local currency, calculated at the exchange rate on the day of redemption. There are no fees for vendors.',
      },
      {
        q: 'What types of businesses can participate?',
        a: 'Any legitimate local business can participate — grocery stores, markets, service providers, healthcare facilities, schools. We verify each vendor to ensure they serve the community appropriately.',
      },
    ],
  },
  {
    id: 'trust',
    title: 'Trust & Security',
    icon: ShieldIcon,
    questions: [
      {
        q: 'Is this real money?',
        a: 'Love Credits have real economic value — they\'re backed by donor funds and can be redeemed by vendors for local currency. They\'re not cryptocurrency or speculative tokens. They\'re a community currency with real backing.',
      },
      {
        q: 'How do you prevent fraud?',
        a: 'Multiple layers: community-based verification of Love Farmers, local admin oversight, TWGE global monitoring, and full audit trails. We prioritize human oversight over automation, and dignity over surveillance.',
      },
      {
        q: 'Who oversees the system?',
        a: 'Three layers: Local Love Farm Administrators verify participants and log activities. TWGE (The World\'s Greatest Experiment) provides global oversight, manages the liquidity pool, and processes redemptions. Full audit logs ensure accountability.',
      },
      {
        q: 'What happens if something goes wrong?',
        a: 'All transactions are logged and reversible by admins if needed. Manual override capabilities exist for emergencies. We build for trust, not speed — preferring human judgment over automated processes.',
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const activeQuestions = faqCategories.find(c => c.id === activeCategory)?.questions || [];

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
              <HelpCircleIcon size={16} />
              Help Center
            </span>
            <h1 className="heading-1 mb-6">
              Frequently Asked
              <span className="gradient-text block">Questions</span>
            </h1>
            <p className="body-large text-deep-root/70">
              Everything you need to know about the Love Economy.
              Can&apos;t find your answer? Contact us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Category Navigation */}
            <div className="md:col-span-1">
              <nav className="sticky top-24 space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenQuestion(null);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-love text-left transition-all ${
                      activeCategory === category.id
                        ? 'bg-heart-rose/10 text-heart-rose'
                        : 'text-deep-root/70 hover:bg-lotus-soft/30'
                    }`}
                  >
                    <category.icon size={20} />
                    <span className="text-sm font-medium">{category.title}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Questions */}
            <div className="md:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {activeQuestions.map((item, index) => (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all ${
                        openQuestion === item.q ? 'ring-2 ring-heart-rose/20' : ''
                      }`}
                    >
                      <CardContent>
                        <button
                          onClick={() => setOpenQuestion(openQuestion === item.q ? null : item.q)}
                          className="w-full text-left"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="font-semibold text-deep-root pr-4">
                              {item.q}
                            </h3>
                            <span
                              className={`text-heart-rose transition-transform ${
                                openQuestion === item.q ? 'rotate-45' : ''
                              }`}
                            >
                              +
                            </span>
                          </div>
                        </button>
                        <AnimatePresence>
                          {openQuestion === item.q && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="mt-4 text-deep-root/70 text-sm leading-relaxed">
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Still have questions? */}
      <section className="section-padding">
        <div className="container-love">
          <Card variant="warm" className="max-w-2xl mx-auto text-center p-8">
            <CardContent>
              <HelpCircleIcon size={48} className="mx-auto mb-4 text-heart-rose" />
              <h2 className="text-2xl font-semibold text-deep-root mb-4">
                Still have questions?
              </h2>
              <p className="text-deep-root/70 mb-6">
                We&apos;re here to help. Reach out and we&apos;ll get back to you as soon as possible.
              </p>
              <Link href="/join">
                <Button variant="primary" rightIcon={<ArrowRightIcon size={20} />}>
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
