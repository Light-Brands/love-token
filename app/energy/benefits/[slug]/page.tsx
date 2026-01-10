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
  UsersIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckIcon,
  SparklesIcon,
  ZapIcon,
  GlobalIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Energy threshold/benefit data
const benefitsData: Record<string, {
  level: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  imagePromptId: string;
  description: string;
  longDescription: string;
  threshold: { metric: string; value: string; description: string };
  benefits: string[];
  howItWorks: string[];
  impact: { title: string; description: string }[];
  communities: { name: string; status: 'achieved' | 'in-progress' | 'upcoming' }[];
  nextLevel?: string;
  prevLevel?: string;
}> = {
  'foundation': {
    level: 1,
    title: 'Foundation',
    subtitle: 'Extended evening electricity',
    icon: ZapIcon,
    color: 'sunlit-gold',
    imagePromptId: 'energy-community-power',
    description: 'The first threshold unlocks extended electricity hours, allowing communities to work, study, and gather after dark.',
    longDescription: 'Foundation represents the first major milestone in a community\'s energy journey. When collective meditation reaches this threshold, communities gain access to extended evening electricity. This seemingly simple benefit transforms daily life — children can study after dinner, vendors can stay open later, and families can gather under electric light rather than candles or darkness.',
    threshold: {
      metric: 'Community Participation',
      value: '50%',
      description: 'At least 50% of registered Love Farmers meditating daily for 30 days',
    },
    benefits: [
      'Extended electricity from sunset to 10 PM daily',
      'Reduced kerosene dependency and associated health risks',
      'Children can study in the evenings',
      'Small businesses can extend operating hours',
      'Community gatherings can happen after dark',
      'Improved safety with lit pathways and common areas',
    ],
    howItWorks: [
      'Community reaches 50% daily participation rate',
      'Threshold maintained for 30 consecutive days',
      'Energy Access Credits accumulate to unlock level',
      'TWGE coordinates with local energy providers',
      'Extended service begins within 2 weeks of unlock',
      'Community maintains access as long as participation continues',
    ],
    impact: [
      { title: 'Study Hours', description: 'Children gain 2-3 additional hours for homework each evening' },
      { title: 'Health', description: 'Reduced exposure to kerosene fumes and fire risks' },
      { title: 'Business', description: 'Vendors can serve evening customers and increase income' },
      { title: 'Community', description: 'Evening gatherings and events become possible' },
    ],
    communities: [
      { name: 'Sunrise Village', status: 'achieved' },
      { name: 'Mountain Heart', status: 'achieved' },
      { name: 'River Community', status: 'in-progress' },
      { name: 'Garden Valley', status: 'in-progress' },
    ],
    nextLevel: 'growth',
  },
  'growth': {
    level: 2,
    title: 'Growth',
    subtitle: 'Community lighting upgrades',
    icon: SparklesIcon,
    color: 'om-sage',
    imagePromptId: 'energy-lighting-upgrade',
    description: 'The second threshold brings permanent lighting infrastructure to community spaces.',
    longDescription: 'Growth marks a community\'s transition from temporary power access to permanent infrastructure. At this level, communities receive lighting upgrades for shared spaces: community centers, pathways, gathering areas, and essential facilities. These aren\'t just lights — they\'re symbols of what collective meditation can build.',
    threshold: {
      metric: 'Community Participation',
      value: '65%',
      description: 'At least 65% of registered Love Farmers meditating daily for 60 days',
    },
    benefits: [
      'Solar-powered LED lights installed in community center',
      'Pathway lighting for safe nighttime movement',
      'Outdoor gathering space illumination',
      'Emergency lighting for essential facilities',
      'Reduced community electricity costs',
      'Improved security through better visibility',
    ],
    howItWorks: [
      'Community maintains Level 1 and reaches 65% participation',
      'Threshold maintained for 60 consecutive days',
      'TWGE conducts lighting needs assessment',
      'Solar installation team deployed to community',
      'Lighting infrastructure installed over 2-4 weeks',
      'Community trained on maintenance and care',
    ],
    impact: [
      { title: 'Safety', description: 'Lit pathways reduce accidents and improve security' },
      { title: 'Gathering', description: 'Community events can happen in comfortable, lit spaces' },
      { title: 'Pride', description: 'Visible infrastructure shows what meditation has built' },
      { title: 'Sustainability', description: 'Solar power reduces ongoing costs and environmental impact' },
    ],
    communities: [
      { name: 'Mountain Heart', status: 'in-progress' },
      { name: 'Sunrise Village', status: 'in-progress' },
    ],
    prevLevel: 'foundation',
    nextLevel: 'strength',
  },
  'strength': {
    level: 3,
    title: 'Strength',
    subtitle: 'Device charging stations',
    icon: ZapIcon,
    color: 'heart-rose',
    imagePromptId: 'energy-charging-station',
    description: 'The third threshold brings charging infrastructure, keeping the community connected.',
    longDescription: 'Strength recognizes that in the modern world, a charged phone is a lifeline. This level brings solar-powered charging stations to the community — places where Love Farmers can charge the very devices they use to meditate and earn. It\'s a beautiful circle: meditation powers the infrastructure that enables more meditation.',
    threshold: {
      metric: 'Community Participation',
      value: '75%',
      description: 'At least 75% of registered Love Farmers meditating daily for 90 days',
    },
    benefits: [
      'Solar-powered charging stations in central locations',
      'Multiple device charging simultaneously',
      'Phone, tablet, and small device support',
      'Free charging for community members',
      'Backup power for essential communications',
      'Reduced individual charging costs',
    ],
    howItWorks: [
      'Community maintains Level 2 and reaches 75% participation',
      'Threshold maintained for 90 consecutive days',
      'Charging infrastructure assessment completed',
      'Solar charging stations designed for community needs',
      'Installation and commissioning over 3-4 weeks',
      'Community members trained on station use and care',
    ],
    impact: [
      { title: 'Connectivity', description: 'Community stays connected without worrying about power' },
      { title: 'Economy', description: 'Savings on charging fees add up to significant amounts' },
      { title: 'Meditation', description: 'Phones always charged means more meditation possible' },
      { title: 'Emergency', description: 'Communication devices always ready for emergencies' },
    ],
    communities: [],
    prevLevel: 'growth',
    nextLevel: 'prosperity',
  },
  'prosperity': {
    level: 4,
    title: 'Prosperity',
    subtitle: 'Refrigeration access',
    icon: SparklesIcon,
    color: 'meditation-dusk',
    imagePromptId: 'energy-refrigeration',
    description: 'The fourth threshold unlocks community refrigeration, transforming food security and local economy.',
    longDescription: 'Prosperity brings cold chain infrastructure to communities — shared refrigeration that preserves food, medicine, and goods that would otherwise spoil. For communities without reliable refrigeration, this is transformational. Farmers can store produce longer, vendors can offer fresh goods, and families can preserve food for lean times.',
    threshold: {
      metric: 'Community Participation',
      value: '80%',
      description: 'At least 80% of registered Love Farmers meditating daily for 120 days',
    },
    benefits: [
      'Community refrigeration facility established',
      'Food preservation extends shelf life by days or weeks',
      'Medicine storage for temperature-sensitive items',
      'Vendors can stock perishable goods',
      'Farmers can hold produce for better prices',
      'Reduced food waste throughout community',
    ],
    howItWorks: [
      'Community maintains Level 3 and reaches 80% participation',
      'Threshold maintained for 120 consecutive days',
      'Cold chain needs assessment conducted',
      'Appropriate refrigeration solution designed',
      'Installation and testing over 4-6 weeks',
      'Community governance established for shared facility',
    ],
    impact: [
      { title: 'Food Security', description: 'Families can store and preserve food effectively' },
      { title: 'Health', description: 'Medicines and vaccines can be properly stored' },
      { title: 'Economy', description: 'Vendors and farmers can stock perishable goods' },
      { title: 'Waste', description: 'Dramatic reduction in food spoilage and waste' },
    ],
    communities: [],
    prevLevel: 'strength',
    nextLevel: 'abundance',
  },
  'abundance': {
    level: 5,
    title: 'Abundance',
    subtitle: 'Full infrastructure support',
    icon: GlobalIcon,
    color: 'success-sage',
    imagePromptId: 'energy-full-infrastructure',
    description: 'The ultimate threshold: comprehensive infrastructure support for community flourishing.',
    longDescription: 'Abundance represents the full realization of what collective meditation can build. At this level, communities receive comprehensive infrastructure support: reliable power, water access improvements, connectivity enhancements, and facility upgrades. This is the vision of the Love Economy fully realized — where inner work creates outer transformation at every level.',
    threshold: {
      metric: 'Community Participation',
      value: '90%',
      description: 'At least 90% of registered Love Farmers meditating daily for 180 days',
    },
    benefits: [
      'Comprehensive power infrastructure upgrades',
      'Water access improvements',
      'Internet connectivity for community center',
      'Medical facility power support',
      'Educational technology infrastructure',
      'Long-term infrastructure maintenance fund',
    ],
    howItWorks: [
      'Community maintains Level 4 and reaches 90% participation',
      'Threshold maintained for 180 consecutive days',
      'Comprehensive infrastructure needs assessment',
      'Multi-year development plan created with community',
      'Phased implementation based on priorities',
      'Ongoing support and maintenance partnership',
    ],
    impact: [
      { title: 'Transformation', description: 'Community infrastructure matches their commitment' },
      { title: 'Sustainability', description: 'Long-term maintenance ensures lasting benefits' },
      { title: 'Model', description: 'Community becomes example for others to follow' },
      { title: 'Future', description: 'Foundation for continued growth and development' },
    ],
    communities: [],
    prevLevel: 'prosperity',
  },
};

export default function EnergyBenefitPage() {
  const params = useParams();
  const slug = params.slug as string;

  const benefit = benefitsData[slug];

  if (!benefit) {
    notFound();
  }

  const Icon = benefit.icon;

  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Back Navigation */}
      <div className="pt-24 pb-4">
        <div className="container-love">
          <Link
            href="/energy"
            className="inline-flex items-center gap-2 text-deep-root/60 hover:text-deep-root transition-colors"
          >
            <ArrowLeftIcon size={16} />
            <span className="text-sm">Back to Energy Vision</span>
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
              <Badge variant="warning" className="mb-6">
                Level {benefit.level}
              </Badge>

              <div className={`inline-flex items-center gap-2 w-16 h-16 mb-6 rounded-full bg-${benefit.color}/10 justify-center`}>
                <Icon size={32} className={`text-${benefit.color}`} />
              </div>

              <h1 className="heading-1 mb-4">
                {benefit.title}
              </h1>
              <p className="text-xl text-deep-root/70 mb-6">
                {benefit.subtitle}
              </p>
              <p className="body-text text-deep-root/80">
                {benefit.longDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-card">
                <GeneratedImage
                  promptId={benefit.imagePromptId}
                  alt={benefit.title}
                  fill
                  className="rounded-card"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Threshold Section */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card variant="warm" className="text-center">
              <CardContent className="py-8">
                <h2 className="heading-2 mb-4">Threshold to Unlock</h2>
                <div className="p-6 bg-lotus-soft rounded-love mb-4">
                  <div className={`text-4xl font-bold text-${benefit.color} mb-2`}>
                    {benefit.threshold.value}
                  </div>
                  <div className="font-semibold text-deep-root mb-2">{benefit.threshold.metric}</div>
                  <p className="text-deep-root/70 text-sm">{benefit.threshold.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">What You Get</h2>
            <p className="body-large text-deep-root/70">
              Benefits unlocked at the {benefit.title} level.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefit.benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-white rounded-love shadow-gentle"
              >
                <CheckIcon size={18} className={`flex-shrink-0 mt-0.5 text-${benefit.color}`} />
                <span className="text-deep-root/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">How It Works</h2>
            <p className="body-large text-deep-root/70">
              The path to unlocking {benefit.title}.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {benefit.howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 mb-6"
              >
                <div className={`w-10 h-10 rounded-full bg-${benefit.color} text-white font-bold flex items-center justify-center flex-shrink-0`}>
                  {index + 1}
                </div>
                <div className="pt-2">
                  <p className="text-deep-root/80">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 text-white mb-4">Real Impact</h2>
            <p className="body-large text-white/70">
              How {benefit.title} changes lives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefit.impact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/10"
              >
                <h3 className="font-semibold text-sunlit-gold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Communities Progress */}
      {benefit.communities.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-love">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="heading-2 mb-4">Community Progress</h2>
              <p className="body-large text-deep-root/70">
                Where communities stand on {benefit.title}.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {benefit.communities.map((community, index) => (
                <Badge
                  key={index}
                  variant={
                    community.status === 'achieved'
                      ? 'success'
                      : community.status === 'in-progress'
                      ? 'warning'
                      : 'default'
                  }
                  className="text-sm py-2 px-4"
                >
                  {community.name}
                  {community.status === 'achieved' && ' (Achieved)'}
                  {community.status === 'in-progress' && ' (In Progress)'}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Level Navigation */}
      <section className="section-padding">
        <div className="container-love">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-3xl mx-auto">
            {benefit.prevLevel ? (
              <Link href={`/energy/benefits/${benefit.prevLevel}`}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeftIcon size={16} />
                  Previous Level
                </Button>
              </Link>
            ) : (
              <div />
            )}

            {benefit.nextLevel ? (
              <Link href={`/energy/benefits/${benefit.nextLevel}`}>
                <Button variant="primary" className="gap-2">
                  Next Level
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
            <h2 className="heading-2 text-white mb-4">Meditate Toward {benefit.title}</h2>
            <p className="body-large text-white/80 mb-8">
              Every meditation brings your community closer to unlocking real infrastructure benefits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/meditate">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white text-heart-rose hover:bg-white/90"
                  rightIcon={<MeditationIcon size={20} />}
                >
                  Start Meditating
                </Button>
              </Link>
              <Link href="/energy">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Explore Energy Vision
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
