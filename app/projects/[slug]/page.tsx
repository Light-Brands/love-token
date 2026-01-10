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
  UsersIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  MapPinIcon,
  CheckIcon,
  SparklesIcon,
  BookIcon,
  GlobalIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Project/goal data
const projectsData: Record<string, {
  title: string;
  category: 'education' | 'water' | 'health' | 'infrastructure' | 'food-security' | 'energy';
  community: string;
  communitySlug: string;
  location: string;
  imagePromptId: string;
  status: 'funded' | 'in-progress' | 'upcoming';
  target: number;
  current: number;
  currency: string;
  description: string;
  longDescription: string;
  impact: string[];
  timeline: { phase: string; description: string; status: 'complete' | 'current' | 'upcoming' }[];
  updates: { date: string; title: string; description: string }[];
  donors?: { tier: string; count: number }[];
  sponsors?: { name: string; contribution: string }[];
}> = {
  'sunrise-education-center': {
    title: 'Community Education Center',
    category: 'education',
    community: 'Sunrise Village',
    communitySlug: 'sunrise-village',
    location: 'Nakuru, Kenya',
    imagePromptId: 'community-goal-education',
    status: 'in-progress',
    target: 5000,
    current: 3200,
    currency: 'USD',
    description: 'A dedicated space for learning, tutoring, and community education programs.',
    longDescription: 'The Sunrise Village Education Center will provide a permanent space for children to study, adults to learn new skills, and the community to gather for educational programs. The center will include a library corner, computer access, and space for tutoring sessions. Most importantly, it will have reliable electricity — earned through the community\'s meditation practice.',
    impact: [
      'Study space for 40+ children after school hours',
      'Adult literacy and skills programs',
      'Computer and internet access for the community',
      'Library with books and educational materials',
      'Space for community meetings and workshops',
      'Reliable lighting for evening study sessions',
    ],
    timeline: [
      { phase: 'Planning', description: 'Site selection and design completed', status: 'complete' },
      { phase: 'Fundraising', description: 'Community credits and donor contributions', status: 'current' },
      { phase: 'Construction', description: 'Building and electrical installation', status: 'upcoming' },
      { phase: 'Furnishing', description: 'Books, computers, and furniture', status: 'upcoming' },
      { phase: 'Opening', description: 'Community celebration and launch', status: 'upcoming' },
    ],
    updates: [
      { date: 'December 2024', title: '60% Funded', description: 'Passed the halfway mark! Construction materials ordered.' },
      { date: 'November 2024', title: 'Design Approved', description: 'Community voted on final building design.' },
      { date: 'October 2024', title: 'Project Launched', description: 'Education Center officially announced as community goal.' },
    ],
    donors: [
      { tier: '$100+ donors', count: 8 },
      { tier: '$50 donors', count: 15 },
      { tier: 'Community credits', count: 85 },
    ],
  },
  'sunrise-water-well': {
    title: 'Water Well Project',
    category: 'water',
    community: 'Sunrise Village',
    communitySlug: 'sunrise-village',
    location: 'Nakuru, Kenya',
    imagePromptId: 'community-goal-water',
    status: 'in-progress',
    target: 3000,
    current: 1800,
    currency: 'USD',
    description: 'Clean, accessible water for the entire community.',
    longDescription: 'Access to clean water is fundamental to community health and dignity. This project will install a community well with hand pump, providing reliable access to clean drinking water. Currently, community members walk over a kilometer to the nearest water source. The well will save hours of daily labor and improve health outcomes for everyone.',
    impact: [
      'Clean water access for 100+ households',
      'Elimination of 2+ km daily water walks',
      'Reduced waterborne illness risk',
      'More time for meditation, work, and family',
      'Improved hygiene and sanitation',
      'Foundation for future irrigation projects',
    ],
    timeline: [
      { phase: 'Survey', description: 'Geological survey and site selection', status: 'complete' },
      { phase: 'Fundraising', description: 'Gathering resources from credits and donors', status: 'current' },
      { phase: 'Drilling', description: 'Well drilling and pump installation', status: 'upcoming' },
      { phase: 'Testing', description: 'Water quality testing and certification', status: 'upcoming' },
      { phase: 'Handover', description: 'Community training and maintenance plan', status: 'upcoming' },
    ],
    updates: [
      { date: 'December 2024', title: 'Drilling Scheduled', description: 'Drilling team booked for early 2025.' },
      { date: 'November 2024', title: 'Site Confirmed', description: 'Geological survey identified best location.' },
    ],
    donors: [
      { tier: 'Major sponsors', count: 2 },
      { tier: 'Regular donors', count: 12 },
      { tier: 'Community credits', count: 65 },
    ],
  },
  'mountain-hall-expansion': {
    title: 'Meditation Hall Expansion',
    category: 'infrastructure',
    community: 'Mountain Heart',
    communitySlug: 'mountain-heart',
    location: 'Dharamsala, India',
    imagePromptId: 'community-goal-meditation-hall',
    status: 'in-progress',
    target: 8000,
    current: 5600,
    currency: 'USD',
    description: 'Expanding the community meditation space to accommodate growing participation.',
    longDescription: 'Mountain Heart\'s meditation gatherings have outgrown their current space. This expansion will double the capacity of the community hall, adding heated flooring for winter sessions, improved acoustics, and accessibility features. The expansion honors the community\'s contemplative traditions while preparing for growth.',
    impact: [
      'Double meditation capacity from 60 to 120',
      'Heated flooring for winter comfort',
      'Accessibility ramp and seating',
      'Improved acoustics for guided sessions',
      'Storage for meditation supplies',
      'Adjacent tea preparation area',
    ],
    timeline: [
      { phase: 'Design', description: 'Architectural plans with community input', status: 'complete' },
      { phase: 'Permits', description: 'Local building permissions secured', status: 'complete' },
      { phase: 'Fundraising', description: 'Final funding drive', status: 'current' },
      { phase: 'Construction', description: 'Building expansion', status: 'upcoming' },
      { phase: 'Dedication', description: 'Traditional blessing ceremony', status: 'upcoming' },
    ],
    updates: [
      { date: 'December 2024', title: '70% Funded', description: 'Construction to begin once fully funded.' },
      { date: 'October 2024', title: 'Permits Approved', description: 'All necessary permissions in place.' },
    ],
    donors: [
      { tier: 'Foundation grants', count: 1 },
      { tier: 'Major donors', count: 5 },
      { tier: 'Community credits', count: 95 },
    ],
  },
  'river-boat-repair': {
    title: 'Boat Repair Fund',
    category: 'infrastructure',
    community: 'River Community',
    communitySlug: 'river-community',
    location: 'Cebu, Philippines',
    imagePromptId: 'community-goal-boat',
    status: 'in-progress',
    target: 2000,
    current: 1400,
    currency: 'USD',
    description: 'Maintaining the boats that sustain the fishing community.',
    longDescription: 'For the fishermen of River Community, boats are their livelihood. This fund provides for hull repairs, engine maintenance, and safety equipment. When boats are seaworthy, fishermen can work safely — and meditate on calm waters before dawn.',
    impact: [
      'Repairs for 15+ fishing boats',
      'Safety equipment upgrades',
      'Engine maintenance for 8 motorized boats',
      'Hull waterproofing and patching',
      'Net repair materials',
      'Emergency repair reserve',
    ],
    timeline: [
      { phase: 'Assessment', description: 'Boat inspection and priority ranking', status: 'complete' },
      { phase: 'Fundraising', description: 'Credits and donor contributions', status: 'current' },
      { phase: 'Repairs Begin', description: 'Most urgent boats first', status: 'upcoming' },
      { phase: 'Safety Upgrades', description: 'Life vests and emergency equipment', status: 'upcoming' },
    ],
    updates: [
      { date: 'November 2024', title: 'First Boats Inspected', description: 'Priority list established based on need.' },
    ],
    donors: [
      { tier: 'Fishing cooperatives', count: 2 },
      { tier: 'Individual donors', count: 10 },
      { tier: 'Fisher credits', count: 45 },
    ],
  },
  'garden-irrigation': {
    title: 'Irrigation System',
    category: 'food-security',
    community: 'Garden Valley',
    communitySlug: 'garden-valley',
    location: 'Mombasa, Kenya',
    imagePromptId: 'community-goal-irrigation',
    status: 'in-progress',
    target: 2500,
    current: 1800,
    currency: 'USD',
    description: 'Reliable water for the urban community garden.',
    longDescription: 'Garden Valley produces food for 35+ families, but unreliable water limits what can grow. This drip irrigation system will provide consistent watering, reduce labor, and enable year-round cultivation. More food security means more time for meditation.',
    impact: [
      'Consistent water for all 45 garden plots',
      'Reduced hand-watering labor by 80%',
      'Year-round growing capability',
      'Water conservation through drip efficiency',
      'Expansion of crop variety possible',
      'Foundation for future greenhouse',
    ],
    timeline: [
      { phase: 'Design', description: 'System layout planned with gardeners', status: 'complete' },
      { phase: 'Fundraising', description: 'Final push for materials', status: 'current' },
      { phase: 'Installation', description: 'Pipes, drip lines, and connections', status: 'upcoming' },
      { phase: 'Training', description: 'Maintenance and scheduling instruction', status: 'upcoming' },
    ],
    updates: [
      { date: 'December 2024', title: 'Materials Ordered', description: 'Primary piping purchased, awaiting final funds.' },
    ],
    donors: [
      { tier: 'Agricultural NGO', count: 1 },
      { tier: 'Community credits', count: 38 },
    ],
  },
};

const categoryColors: Record<string, string> = {
  education: 'meditation-dusk',
  water: 'om-sage',
  health: 'heart-rose',
  infrastructure: 'earth-clay',
  'food-security': 'success-sage',
  energy: 'sunlit-gold',
};

const categoryLabels: Record<string, string> = {
  education: 'Education',
  water: 'Water Access',
  health: 'Health',
  infrastructure: 'Infrastructure',
  'food-security': 'Food Security',
  energy: 'Energy',
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  const progress = Math.round((project.current / project.target) * 100);

  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Back Navigation */}
      <div className="pt-24 pb-4">
        <div className="container-love">
          <Link
            href={`/communities/${project.communitySlug}`}
            className="inline-flex items-center gap-2 text-deep-root/60 hover:text-deep-root transition-colors"
          >
            <ArrowLeftIcon size={16} />
            <span className="text-sm">Back to {project.community}</span>
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
            >
              <div className="flex items-center gap-3 mb-6">
                <Badge variant={project.status === 'funded' ? 'success' : 'warning'}>
                  {project.status === 'funded' ? 'Fully Funded' : progress + '% Funded'}
                </Badge>
                <Badge variant="default">{categoryLabels[project.category]}</Badge>
              </div>

              <h1 className="heading-1 mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-deep-root/70 mb-4">
                {project.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-deep-root/60 mb-6">
                <span className="flex items-center gap-1">
                  <MapPinIcon size={14} />
                  {project.location}
                </span>
                <Link
                  href={`/communities/${project.communitySlug}`}
                  className="flex items-center gap-1 text-heart-rose hover:underline"
                >
                  <UsersIcon size={14} />
                  {project.community}
                </Link>
              </div>

              <p className="body-text text-deep-root/80">
                {project.longDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-card mb-6">
                <GeneratedImage
                  promptId={project.imagePromptId}
                  alt={project.title}
                  fill
                  className="rounded-card"
                  priority
                />
              </div>

              {/* Funding Progress Card */}
              <Card variant="warm">
                <CardContent className="py-6">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <div className="text-3xl font-bold text-heart-rose">
                        ${project.current.toLocaleString()}
                      </div>
                      <div className="text-sm text-stone-grey">
                        raised of ${project.target.toLocaleString()} goal
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-deep-root">{progress}%</div>
                    </div>
                  </div>

                  <div className="h-4 bg-lotus-soft rounded-full overflow-hidden mb-6">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        progress >= 100 ? 'bg-success-sage' : 'bg-gradient-to-r from-heart-rose to-sunlit-gold'
                      }`}
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                  </div>

                  <Link href="/join?role=donor">
                    <Button variant="primary" className="w-full" rightIcon={<HeartIcon size={18} />}>
                      Contribute to This Project
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">Expected Impact</h2>
            <p className="body-large text-deep-root/70">
              What this project will achieve for {project.community}.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {project.impact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-lotus-soft/30 rounded-love"
              >
                <CheckIcon size={18} className="flex-shrink-0 mt-0.5 text-success-sage" />
                <span className="text-deep-root/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">Project Timeline</h2>
            <p className="body-large text-deep-root/70">
              Where we are in the journey.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {project.timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 mb-6"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      phase.status === 'complete'
                        ? 'bg-success-sage'
                        : phase.status === 'current'
                        ? 'bg-sunlit-gold'
                        : 'bg-stone-grey/20'
                    }`}
                  >
                    {phase.status === 'complete' ? (
                      <CheckIcon size={20} className="text-white" />
                    ) : (
                      <span
                        className={`w-3 h-3 rounded-full ${
                          phase.status === 'current' ? 'bg-white animate-pulse' : 'bg-stone-grey/40'
                        }`}
                      />
                    )}
                  </div>
                  {index < project.timeline.length - 1 && (
                    <div
                      className={`w-px h-12 ${
                        phase.status === 'complete' ? 'bg-success-sage' : 'bg-stone-grey/20'
                      }`}
                    />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-deep-root">{phase.phase}</h3>
                  <p className="text-deep-root/70 text-sm">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">Recent Updates</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-4">
            {project.updates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent>
                    <div className="text-xs text-stone-grey mb-2">{update.date}</div>
                    <h3 className="font-semibold text-deep-root mb-2">{update.title}</h3>
                    <p className="text-deep-root/70 text-sm">{update.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donors/Contributors */}
      {project.donors && (
        <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
          <div className="container-love">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="heading-2 text-white mb-4">Who&apos;s Contributing</h2>
              <p className="body-large text-white/70">
                This project is powered by donors and community credits.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {project.donors.map((donor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-card p-4 border border-white/10 text-center"
                >
                  <div className="text-2xl font-bold text-sunlit-gold">{donor.count}</div>
                  <div className="text-sm text-white/80">{donor.tier}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
            <h2 className="heading-2 text-white mb-4">Help Make This Happen</h2>
            <p className="body-large text-white/80 mb-8">
              Every contribution — credits or dollars — brings {project.community} closer to their goal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/join?role=donor">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white text-heart-rose hover:bg-white/90"
                  rightIcon={<HeartIcon size={20} />}
                >
                  Become a Donor
                </Button>
              </Link>
              <Link href={`/communities/${project.communitySlug}`}>
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Visit {project.community}
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
