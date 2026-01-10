'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, GeneratedImage } from '@/components/ui';
import {
  HeartIcon,
  MeditationIcon,
  CoinIcon,
  UsersIcon,
  StoreIcon,
  GlobalIcon,
  ArrowRightIcon,
  ChartIcon,
  QuoteIcon,
  MapPinIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Global stats
const globalStats = [
  { value: '15,847', label: 'Total Meditations', icon: MeditationIcon, change: '+12%' },
  { value: '2,341', label: 'Hours of Love', icon: HeartIcon, change: '+8%' },
  { value: '752', label: 'Active Love Farmers', icon: UsersIcon, change: '+15%' },
  { value: '8,245', label: 'Credits Circulated', icon: CoinIcon, change: '+22%' },
  { value: '78', label: 'Partner Vendors', icon: StoreIcon, change: '+5%' },
  { value: '12', label: 'Active Communities', icon: GlobalIcon, change: '+2' },
];

// Community spotlights
const communitySpotlights = [
  {
    name: 'Sunrise Village',
    location: 'Kenya',
    farmers: 85,
    meditations: 2341,
    story: 'The first Love Farm in East Africa, where meditation has become a morning ritual for the entire village.',
    imagePromptId: 'community-sunrise-village',
  },
  {
    name: 'Mountain Heart',
    location: 'India',
    farmers: 120,
    meditations: 3456,
    story: 'A high-altitude community where Love Farmers gather at dawn to meditate and earn together.',
    imagePromptId: 'community-mountain-heart',
  },
  {
    name: 'River Community',
    location: 'Philippines',
    farmers: 65,
    meditations: 1892,
    story: 'Fishermen turned Love Farmers who meditate before dawn while waiting for their catch.',
    imagePromptId: 'community-river-village',
  },
];

// Stories / Miracles
const stories = [
  {
    title: 'Maria\'s Morning Revolution',
    slug: 'maria-sunrise-village',
    description: 'How one woman\'s meditation practice transformed an entire village into a thriving Love Farm.',
    category: 'Community',
    date: 'March 2024',
    imagePromptId: 'community-sunrise-village',
  },
  {
    title: 'Three Generations of Practice',
    slug: 'tenzin-mountain-heart',
    description: 'An elder\'s 60-year meditation practice is now funding education for his grandchildren.',
    category: 'Education',
    date: 'February 2024',
    imagePromptId: 'community-mountain-heart',
  },
  {
    title: 'Meditation on the Water',
    slug: 'rodel-river-community',
    description: 'Fishermen discover the value of stillness before dawn, transforming their waiting hours.',
    category: 'Entrepreneurship',
    date: 'May 2024',
    imagePromptId: 'community-river-village',
  },
  {
    title: 'Growing Love in the City',
    slug: 'amina-garden-valley',
    description: 'An urban garden becomes a Love Farm, funding irrigation through collective meditation.',
    category: 'Food Security',
    date: 'June 2024',
    imagePromptId: 'community-garden-valley',
  },
];

// Donor impact examples
const donorImpact = [
  { amount: '$50/month', impact: 'Supports 5 Love Farmers for a month', hours: '~15 hours of love', imagePromptId: 'donor-subscription' },
  { amount: '$100/month', impact: 'Supports 10 Love Farmers for a month', hours: '~30 hours of love', imagePromptId: 'donor-receiving-love' },
  { amount: '$500/month', impact: 'Supports an entire community', hours: '~150 hours of love', imagePromptId: 'donor-impact-view' },
];

export default function ImpactPage() {
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
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-heart-rose/10 text-heart-rose rounded-full text-sm font-medium mb-6">
              <ChartIcon size={16} />
              Impact Dashboard
            </span>
            <h1 className="heading-1 mb-6">
              Love in
              <span className="gradient-text block">Motion</span>
            </h1>
            <p className="body-large text-deep-root/70">
              Real-time statistics, community stories, and the growing impact
              of the Love Economy around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Stats Visual */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Global Love Stats</h2>
            <p className="body-large text-deep-root/70">
              Live counters showing the pulse of the Love Economy.
            </p>
          </motion.div>

          {/* Visual Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="relative aspect-square w-full">
                  <GeneratedImage
                    promptId="global-love-counter"
                    alt="Global love statistics"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">15,847</div>
                  <div className="text-sm text-stone-grey">Total Meditations Worldwide</div>
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
                <div className="relative aspect-square w-full">
                  <GeneratedImage
                    promptId="total-meditation-hours"
                    alt="Total meditation hours"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">2,341</div>
                  <div className="text-sm text-stone-grey">Hours of Love Generated</div>
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
                <div className="relative aspect-square w-full">
                  <GeneratedImage
                    promptId="community-network"
                    alt="Network of communities"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">12</div>
                  <div className="text-sm text-stone-grey">Active Love Farm Communities</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Numeric Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {globalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent>
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-lotus-soft/50 flex items-center justify-center">
                      <stat.icon size={24} className="text-heart-rose" />
                    </div>
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-stone-grey mb-2">{stat.label}</div>
                    <span className="inline-block px-2 py-0.5 bg-success-sage/10 text-success-sage rounded-full text-xs">
                      {stat.change}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Spotlights */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Community Spotlights</h2>
            <p className="body-large text-deep-root/70">
              Featured Love Farms making an impact in their communities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {communitySpotlights.map((community, index) => {
              const slug = community.name.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link key={community.name} href={`/communities/${slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card variant="warm" className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="relative aspect-video w-full">
                        <GeneratedImage
                          promptId={community.imagePromptId}
                          alt={`${community.name} community`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent>
                        <div className="flex items-center gap-2 mb-4">
                          <MapPinIcon size={16} className="text-heart-rose" />
                          <span className="text-sm text-stone-grey">{community.location}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-deep-root mb-2">
                          {community.name}
                        </h3>
                        <p className="text-deep-root/70 text-sm mb-4">
                          {community.story}
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border-mist mb-4">
                          <div>
                            <div className="text-lg font-bold text-heart-rose">{community.farmers}</div>
                            <div className="text-xs text-stone-grey">Love Farmers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-sunlit-gold">{community.meditations}</div>
                            <div className="text-xs text-stone-grey">Meditations</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-heart-rose">
                          Visit community <ArrowRightIcon size={14} />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/communities">
              <Button variant="outline" rightIcon={<ArrowRightIcon size={20} />}>
                View All Communities
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Love Feed - Stories */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 text-white mb-4">The Love Feed</h2>
              <p className="body-large text-white/70 mb-6">
                Miracles happen every day. Here are some of our favorite stories.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-card overflow-hidden">
                  <GeneratedImage
                    promptId="miracle-story"
                    alt="A miracle story from the community"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-card overflow-hidden">
                  <GeneratedImage
                    promptId="inspiration-feed"
                    alt="Inspiration from the community"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/10 p-6">
                <CardContent>
                  <QuoteIcon size={32} className="text-sunlit-gold/50 mb-4" />
                  <p className="text-white/90 text-lg mb-4">
                    &quot;When I meditated for the first time and saw the credits appear in my wallet,
                    I knew this was real. My presence has value. My love creates change.&quot;
                  </p>
                  <p className="text-sunlit-gold font-medium">— A Love Farmer from Kenya</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {stories.map((story, index) => (
              <Link key={story.title} href={`/impact/stories/${story.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-card overflow-hidden border border-white/10 hover:bg-white/20 transition-colors cursor-pointer h-full"
                >
                  <div className="relative aspect-video w-full">
                    <GeneratedImage
                      promptId={story.imagePromptId}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <QuoteIcon size={24} className="text-sunlit-gold/50 flex-shrink-0" />
                      <div>
                        <span className="inline-block px-2 py-0.5 bg-sunlit-gold/20 text-sunlit-gold rounded text-xs mb-2">
                          {story.category}
                        </span>
                        <h3 className="font-semibold text-white mb-2">{story.title}</h3>
                        <p className="text-white/70 text-sm mb-3">{story.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-white/40 text-xs">{story.date}</span>
                          <span className="flex items-center gap-1 text-sunlit-gold text-xs">
                            Read story <ArrowRightIcon size={12} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Donor Impact */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Your Donation&apos;s Impact</h2>
            <p className="body-large text-deep-root/70">
              Every dollar funds real meditation, real credits, real impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {donorImpact.map((tier, index) => (
              <motion.div
                key={tier.amount}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <GeneratedImage
                      promptId={tier.imagePromptId}
                      alt={tier.impact}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent>
                    <div className="text-3xl font-bold gradient-text mb-4">
                      {tier.amount}
                    </div>
                    <p className="text-deep-root font-medium mb-2">{tier.impact}</p>
                    <p className="text-stone-grey text-sm">{tier.hours}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/join?role=donor">
              <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon size={20} />}>
                Become a Donor
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
              Be Part of the Story
            </h2>
            <p className="body-large text-white/80 mb-8">
              Your meditation, your donation, your participation —
              it all adds to the growing impact of the Love Economy.
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
              <Link href="/join">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Join the Movement
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
