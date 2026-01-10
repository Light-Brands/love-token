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
  ArrowRightIcon,
  ArrowLeftIcon,
  MapPinIcon,
  ClockIcon,
  SparklesIcon,
  FlowIcon,
  ZapIcon,
  GlobalIcon,
  CheckIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Comprehensive community data
const communitiesData: Record<string, {
  name: string;
  location: string;
  region: string;
  country: string;
  status: 'active' | 'onboarding' | 'planning';
  founded: string;
  imagePromptId: string;
  coverImage: string;
  description: string;
  longDescription: string;
  stats: {
    farmers: number;
    vendors: number;
    meditations: number;
    creditsCirculated: number;
    avgDailyMeditations: number;
    longestStreak: number;
  };
  story: string;
  goals: { title: string; target: number; current: number; unit: string }[];
  vendors: { name: string; type: string; description: string }[];
  milestones: { date: string; title: string; description: string }[];
  upcomingEvents?: { date: string; title: string; description: string }[];
  testimonials: { quote: string; author: string; role: string }[];
  energyProgress: { level: number; current: number; target: number };
  administrator: string;
}> = {
  'sunrise-village': {
    name: 'Sunrise Village',
    location: 'Nakuru',
    region: 'East Africa',
    country: 'Kenya',
    status: 'active',
    founded: 'January 2024',
    imagePromptId: 'community-sunrise-village',
    coverImage: 'community-sunrise-village',
    description: 'The first Love Farm in East Africa, where meditation has become a morning ritual for the entire village.',
    longDescription: 'Sunrise Village was founded by a group of women seeking economic independence through collective meditation practice. What began as a small morning gathering has grown into a thriving Love Farm where the entire community participates. The village has seen remarkable transformation — not just economically, but in social bonds, health outcomes, and collective wellbeing.',
    stats: {
      farmers: 85,
      vendors: 12,
      meditations: 2341,
      creditsCirculated: 847,
      avgDailyMeditations: 67,
      longestStreak: 127,
    },
    story: 'When Maria first proposed the idea of earning through meditation, many in Sunrise Village were skeptical. "How can sitting quietly put food on the table?" they asked. But Maria had a vision. She organized the first group meditation at dawn, with just seven women. Within a month, those seven had earned enough credits to buy seeds for a community garden. Today, 85 Love Farmers meditate together each morning, and the village economy has been transformed.',
    goals: [
      { title: 'Community Education Center', target: 5000, current: 3200, unit: 'USD' },
      { title: 'Water Well Project', target: 3000, current: 1800, unit: 'USD' },
      { title: 'Medical Supplies Fund', target: 1000, current: 950, unit: 'USD' },
    ],
    vendors: [
      { name: 'Grace\'s Grocery', type: 'General Store', description: 'Daily essentials, produce, and household goods' },
      { name: 'Peter\'s Provisions', type: 'Food Vendor', description: 'Fresh vegetables from local farms' },
      { name: 'Village Pharmacy', type: 'Health', description: 'Basic medicines and health supplies' },
      { name: 'Samuel\'s Services', type: 'Repairs', description: 'Phone repairs and electronics' },
    ],
    milestones: [
      { date: 'January 2024', title: 'Love Farm Launched', description: 'First 12 Love Farmers registered' },
      { date: 'March 2024', title: '50 Farmers Milestone', description: 'Community exceeded 50 active meditators' },
      { date: 'June 2024', title: 'First Project Funded', description: 'Community garden project fully funded' },
      { date: 'September 2024', title: '2000 Meditations', description: 'Collective meditation sessions surpassed 2000' },
    ],
    upcomingEvents: [
      { date: 'Next Sunday', title: 'Community Meditation Circle', description: 'Weekly group meditation at dawn' },
      { date: 'End of Month', title: 'Vendor Appreciation Day', description: 'Celebrating our local vendors' },
    ],
    testimonials: [
      { quote: 'I never thought I could contribute to my family\'s income while also finding peace. The Love Farm changed everything.', author: 'Maria K.', role: 'Love Farmer' },
      { quote: 'My shop has more customers now than ever before. The Love Credits bring the whole community together.', author: 'Grace O.', role: 'Vendor' },
      { quote: 'Watching the sunrise while meditating with my neighbors — there\'s nothing like it.', author: 'James M.', role: 'Love Farmer' },
    ],
    energyProgress: { level: 2, current: 65, target: 100 },
    administrator: 'Maria Kamau',
  },
  'mountain-heart': {
    name: 'Mountain Heart',
    location: 'Dharamsala',
    region: 'South Asia',
    country: 'India',
    status: 'active',
    founded: 'November 2023',
    imagePromptId: 'community-mountain-heart',
    coverImage: 'community-mountain-heart',
    description: 'A high-altitude community where Love Farmers gather at dawn to meditate and earn together.',
    longDescription: 'Mountain Heart sits in the foothills of the Himalayas, where meditation traditions run deep. The community has seamlessly integrated the Love Economy with their ancestral contemplative practices. Here, the ancient and the innovative meet — monks, families, and young entrepreneurs all participate in the morning meditation circles that now generate real economic value.',
    stats: {
      farmers: 120,
      vendors: 18,
      meditations: 3456,
      creditsCirculated: 1234,
      avgDailyMeditations: 98,
      longestStreak: 215,
    },
    story: 'In the shadow of the mountains, the people of Dharamsala have always known the value of stillness. When the Love Token app arrived, it didn\'t introduce meditation — it recognized it. "Finally," said Elder Tenzin, "the world is beginning to understand what we\'ve known for centuries. Presence has value." Now, three generations meditate together each morning, their collective practice generating credits that flow through the local economy.',
    goals: [
      { title: 'Meditation Hall Expansion', target: 8000, current: 5600, unit: 'USD' },
      { title: 'Youth Training Program', target: 2500, current: 2500, unit: 'USD' },
      { title: 'Winter Heating Fund', target: 4000, current: 2100, unit: 'USD' },
    ],
    vendors: [
      { name: 'Himalayan Herbs', type: 'Wellness', description: 'Traditional medicines and herbal remedies' },
      { name: 'Mountain Market', type: 'General Store', description: 'Fresh produce and daily essentials' },
      { name: 'Sunrise Cafe', type: 'Food & Drink', description: 'Tea house and light meals' },
      { name: 'Craft Cooperative', type: 'Artisan', description: 'Handmade textiles and crafts' },
      { name: 'Tech Hub', type: 'Services', description: 'Phone charging and internet access' },
    ],
    milestones: [
      { date: 'November 2023', title: 'Community Founding', description: 'Mountain Heart officially launched' },
      { date: 'February 2024', title: '100 Farmers', description: 'Community reached 100 active Love Farmers' },
      { date: 'May 2024', title: 'Youth Program Funded', description: 'Full funding for youth meditation training' },
      { date: 'August 2024', title: 'Energy Threshold 2', description: 'Community reached energy level 2' },
    ],
    testimonials: [
      { quote: 'Our ancestors meditated for enlightenment. We meditate for enlightenment AND for our children\'s education. Both are sacred.', author: 'Tenzin D.', role: 'Elder' },
      { quote: 'The young people are interested again. They see that our traditions have real value.', author: 'Pema L.', role: 'Love Farmer' },
      { quote: 'My tea shop has become a gathering place. People come after meditation to share their credits and their stories.', author: 'Deepak S.', role: 'Vendor' },
    ],
    energyProgress: { level: 2, current: 82, target: 100 },
    administrator: 'Tenzin Dorje',
  },
  'river-community': {
    name: 'River Community',
    location: 'Cebu',
    region: 'Southeast Asia',
    country: 'Philippines',
    status: 'active',
    founded: 'March 2024',
    imagePromptId: 'community-river-village',
    coverImage: 'community-river-village',
    description: 'Fishermen turned Love Farmers who meditate before dawn while waiting for their catch.',
    longDescription: 'River Community emerged from the fishing villages along Cebu\'s coast. Fishermen discovered that the quiet hours before dawn — time they already spent waiting — could become time for meditation and earning. The practice has transformed not just their income but their approach to work: mindful fishing, sustainable practices, and a deep connection to the waters that sustain them.',
    stats: {
      farmers: 65,
      vendors: 8,
      meditations: 1892,
      creditsCirculated: 623,
      avgDailyMeditations: 52,
      longestStreak: 89,
    },
    story: 'Rodel was skeptical when his daughter showed him the app. "I fish. That\'s what I do," he said. But during the long hours before dawn, waiting for the fish, he tried it. One meditation became two, became a daily practice. Now, dozens of fishermen meditate together on their boats as the sun rises. "The fish haven\'t changed," Rodel laughs, "but we have. And so has what we bring home."',
    goals: [
      { title: 'Boat Repair Fund', target: 2000, current: 1400, unit: 'USD' },
      { title: 'Fishing Equipment Upgrade', target: 3500, current: 1200, unit: 'USD' },
      { title: 'Children\'s School Supplies', target: 800, current: 800, unit: 'USD' },
    ],
    vendors: [
      { name: 'Coastal Provisions', type: 'General Store', description: 'Fishing supplies and household goods' },
      { name: 'Marina Cafe', type: 'Food & Drink', description: 'Fresh catch prepared daily' },
      { name: 'Island Repairs', type: 'Services', description: 'Boat and equipment maintenance' },
    ],
    milestones: [
      { date: 'March 2024', title: 'Love Farm Launched', description: 'First 20 fishermen joined' },
      { date: 'May 2024', title: 'School Supplies Funded', description: 'Full funding for children\'s education supplies' },
      { date: 'July 2024', title: 'Dawn Meditation Tradition', description: 'Community established daily dawn practice' },
    ],
    testimonials: [
      { quote: 'The sea gives us fish. Meditation gives us peace. Now both give us income.', author: 'Rodel P.', role: 'Love Farmer' },
      { quote: 'I used to worry during the waiting hours. Now I meditate. Same waters, different mind.', author: 'Antonio G.', role: 'Love Farmer' },
    ],
    energyProgress: { level: 1, current: 45, target: 100 },
    administrator: 'Elena Reyes',
  },
  'garden-valley': {
    name: 'Garden Valley',
    location: 'Mombasa',
    region: 'East Africa',
    country: 'Kenya',
    status: 'active',
    founded: 'April 2024',
    imagePromptId: 'community-garden-valley',
    coverImage: 'community-garden-valley',
    description: 'An urban community garden that became a Love Farm. Members meditate together before tending their plots.',
    longDescription: 'Garden Valley began as an urban gardening initiative in Mombasa. When the organizers learned about the Love Economy, they saw a perfect fit: the same presence and patience required for growing food could generate economic value. Now, the garden serves a dual purpose — cultivating vegetables and cultivating love.',
    stats: {
      farmers: 45,
      vendors: 6,
      meditations: 987,
      creditsCirculated: 312,
      avgDailyMeditations: 38,
      longestStreak: 67,
    },
    story: 'The garden was already a place of peace. Amina, who started it, wanted to give people a green space in the city. When meditation became part of the routine — fifteen minutes before the work began — the garden transformed. "Now we grow two things," says Amina. "Vegetables for the body, stillness for the soul. And both have value."',
    goals: [
      { title: 'Irrigation System', target: 2500, current: 1800, unit: 'USD' },
      { title: 'Seed Bank', target: 1000, current: 650, unit: 'USD' },
      { title: 'Tool Shed Construction', target: 1500, current: 400, unit: 'USD' },
    ],
    vendors: [
      { name: 'Garden Fresh Market', type: 'Produce', description: 'Fresh vegetables from the garden' },
      { name: 'Urban Essentials', type: 'General Store', description: 'Household necessities' },
      { name: 'The Green Corner', type: 'Food & Drink', description: 'Fresh juices and healthy snacks' },
    ],
    milestones: [
      { date: 'April 2024', title: 'Love Farm Launched', description: 'Garden community joined Love Economy' },
      { date: 'June 2024', title: 'First Harvest Festival', description: 'Combined meditation and harvest celebration' },
      { date: 'August 2024', title: 'Irrigation Funding Progress', description: 'Reached 70% of irrigation goal' },
    ],
    testimonials: [
      { quote: 'The garden gives me food. The meditation gives me credits. Together, they give me hope.', author: 'Amina W.', role: 'Love Farmer & Founder' },
      { quote: 'I come for the meditation now as much as the gardening. Both ground me.', author: 'Hassan K.', role: 'Love Farmer' },
    ],
    energyProgress: { level: 1, current: 30, target: 100 },
    administrator: 'Amina Wanjiku',
  },
  'coastal-haven': {
    name: 'Coastal Haven',
    location: 'Tamil Nadu',
    region: 'South Asia',
    country: 'India',
    status: 'onboarding',
    founded: 'October 2024',
    imagePromptId: 'community-coastal-haven',
    coverImage: 'community-coastal-haven',
    description: 'A new Love Farm being established among fishing communities along the coast.',
    longDescription: 'Coastal Haven is in the final stages of onboarding. The fishing communities of Tamil Nadu have expressed strong interest in the Love Economy model, inspired by the success of River Community in the Philippines. Local leaders are being trained as administrators, and vendor onboarding is underway.',
    stats: {
      farmers: 30,
      vendors: 4,
      meditations: 423,
      creditsCirculated: 145,
      avgDailyMeditations: 22,
      longestStreak: 34,
    },
    story: 'Word of the Love Economy spread through fishing networks. When fishermen from the Philippines visited their Tamil Nadu cousins, they shared stories of meditation on boats, of credits earned during the waiting hours. "If they can do it, so can we," said local leader Muthu. Now, Coastal Haven is preparing to officially launch.',
    goals: [
      { title: 'Administrator Training', target: 500, current: 500, unit: 'USD' },
      { title: 'Launch Celebration', target: 300, current: 180, unit: 'USD' },
      { title: 'First Month Operations', target: 1000, current: 250, unit: 'USD' },
    ],
    vendors: [
      { name: 'Harbor Supplies', type: 'General Store', description: 'Fishing and household essentials' },
      { name: 'Coastal Kitchen', type: 'Food & Drink', description: 'Traditional coastal cuisine' },
    ],
    milestones: [
      { date: 'October 2024', title: 'Community Assessment', description: 'Initial community survey completed' },
      { date: 'November 2024', title: 'Admin Training Begins', description: 'Local leaders start training program' },
      { date: 'December 2024', title: 'Expected Launch', description: 'Official Love Farm activation' },
    ],
    testimonials: [
      { quote: 'We have been waiting for something like this. Our patience is about to be rewarded.', author: 'Muthu R.', role: 'Incoming Administrator' },
    ],
    energyProgress: { level: 0, current: 15, target: 100 },
    administrator: 'Muthu Rajan (in training)',
  },
  'highland-circle': {
    name: 'Highland Circle',
    location: 'Baguio',
    region: 'Southeast Asia',
    country: 'Philippines',
    status: 'onboarding',
    founded: 'November 2024',
    imagePromptId: 'community-highland-circle',
    coverImage: 'community-highland-circle',
    description: 'Indigenous community bringing their ancestral meditation practices into the Love Economy.',
    longDescription: 'Highland Circle represents a unique integration of indigenous contemplative practices with the Love Economy. The Igorot people of the highlands have maintained meditation traditions for generations. Now, they are working to have these practices recognized and valued within the Love Token system.',
    stats: {
      farmers: 25,
      vendors: 3,
      meditations: 234,
      creditsCirculated: 78,
      avgDailyMeditations: 18,
      longestStreak: 28,
    },
    story: 'The elders of Highland Circle have always known that sitting in stillness has power. "Our ancestors did this before us," says Elder Bayani. "They knew that in silence, we connect to something greater." The Love Economy doesn\'t introduce meditation to Highland Circle — it recognizes what has always been there.',
    goals: [
      { title: 'Traditional Practices Documentation', target: 800, current: 350, unit: 'USD' },
      { title: 'Youth Initiation Program', target: 1200, current: 200, unit: 'USD' },
      { title: 'Community Meeting Hall', target: 3000, current: 450, unit: 'USD' },
    ],
    vendors: [
      { name: 'Highland Crafts', type: 'Artisan', description: 'Traditional woven goods and crafts' },
      { name: 'Mountain Provisions', type: 'General Store', description: 'Local produce and essentials' },
    ],
    milestones: [
      { date: 'November 2024', title: 'Elder Council Approval', description: 'Community elders approved participation' },
      { date: 'December 2024', title: 'Training Program', description: 'Administrator training in progress' },
      { date: 'January 2025', title: 'Expected Launch', description: 'Official Love Farm activation' },
    ],
    testimonials: [
      { quote: 'Our ways are being honored, not replaced. That is why we joined.', author: 'Elder Bayani', role: 'Community Elder' },
    ],
    energyProgress: { level: 0, current: 10, target: 100 },
    administrator: 'Bayani Cruz (in training)',
  },
};

const energyLevels = [
  { level: 1, name: 'Foundation', benefit: 'Extended evening electricity' },
  { level: 2, name: 'Growth', benefit: 'Community lighting upgrades' },
  { level: 3, name: 'Strength', benefit: 'Device charging stations' },
  { level: 4, name: 'Prosperity', benefit: 'Refrigeration access' },
  { level: 5, name: 'Abundance', benefit: 'Full infrastructure support' },
];

export default function CommunityDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const community = communitiesData[slug];

  if (!community) {
    notFound();
  }

  const statusColors = {
    active: 'success-sage',
    onboarding: 'sunlit-gold',
    planning: 'stone-grey',
  };

  const statusLabels = {
    active: 'Active',
    onboarding: 'Onboarding',
    planning: 'Planning',
  };

  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Back Navigation */}
      <div className="pt-24 pb-4">
        <div className="container-love">
          <Link
            href="/communities"
            className="inline-flex items-center gap-2 text-deep-root/60 hover:text-deep-root transition-colors"
          >
            <ArrowLeftIcon size={16} />
            <span className="text-sm">Back to All Communities</span>
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
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <Badge variant={community.status === 'active' ? 'success' : 'warning'}>
                  {statusLabels[community.status]}
                </Badge>
                <span className="flex items-center gap-1 text-sm text-deep-root/60">
                  <MapPinIcon size={14} />
                  {community.location}, {community.country}
                </span>
              </div>
              <h1 className="heading-1 mb-4">
                {community.name}
              </h1>
              <p className="text-xl text-deep-root/70 mb-6">
                {community.description}
              </p>
              <p className="body-text text-deep-root/80 mb-8">
                {community.longDescription}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/join?role=farmer">
                  <Button variant="primary" rightIcon={<ArrowRightIcon size={20} />}>
                    Join This Community
                  </Button>
                </Link>
                <Link href="/join?role=donor">
                  <Button variant="outline">
                    Support This Community
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-card">
                <GeneratedImage
                  promptId={community.coverImage}
                  alt={community.name}
                  fill
                  className="rounded-card"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { label: 'Love Farmers', value: community.stats.farmers, icon: UsersIcon, color: 'heart-rose' },
              { label: 'Vendors', value: community.stats.vendors, icon: StoreIcon, color: 'sunlit-gold' },
              { label: 'Meditations', value: community.stats.meditations.toLocaleString(), icon: MeditationIcon, color: 'meditation-dusk' },
              { label: 'LVC Circulated', value: community.stats.creditsCirculated, icon: CoinIcon, color: 'om-sage' },
              { label: 'Daily Avg', value: community.stats.avgDailyMeditations, icon: ClockIcon, color: 'earth-clay' },
              { label: 'Longest Streak', value: `${community.stats.longestStreak} days`, icon: SparklesIcon, color: 'success-sage' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="py-4">
                    <div className={`w-10 h-10 mx-auto mb-2 rounded-full bg-${stat.color}/10 flex items-center justify-center`}>
                      <stat.icon size={20} className={`text-${stat.color}`} />
                    </div>
                    <div className={`text-2xl font-bold text-${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-stone-grey">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-love">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">Our Story</h2>
              <p className="body-text text-deep-root/80 mb-6 leading-relaxed">
                {community.story}
              </p>
              <div className="p-4 bg-lotus-soft/30 rounded-love border border-lotus-soft">
                <p className="text-sm text-deep-root/70">
                  <span className="font-semibold text-heart-rose">Founded:</span> {community.founded}
                  <br />
                  <span className="font-semibold text-heart-rose">Administrator:</span> {community.administrator}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Lumi
                message={`${community.name} is a shining example of how communities can thrive when love becomes currency.`}
                state="speaking"
                size="lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Goals */}
      <section className="section-padding bg-gradient-to-br from-lotus-soft/30 to-sunlit-gold/10">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">Community Goals</h2>
            <p className="body-large text-deep-root/70">
              Projects the community is working toward. Donors can help fund these goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {community.goals.map((goal, index) => {
              const progress = Math.round((goal.current / goal.target) * 100);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent>
                      <h3 className="font-semibold text-deep-root mb-4">{goal.title}</h3>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-stone-grey">${goal.current.toLocaleString()}</span>
                          <span className="text-deep-root font-medium">${goal.target.toLocaleString()}</span>
                        </div>
                        <div className="h-3 bg-lotus-soft rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${progress >= 100 ? 'bg-success-sage' : 'bg-heart-rose'}`}
                            style={{ width: `${Math.min(progress, 100)}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-stone-grey">{progress}% funded</span>
                        {progress >= 100 && (
                          <Badge variant="success">Funded</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link href="/join?role=donor">
              <Button variant="primary" rightIcon={<HeartIcon size={20} />}>
                Fund a Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Energy Progress */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sunlit-gold/10 text-sunlit-gold rounded-full text-sm font-medium mb-6">
              <ZapIcon size={16} />
              Energy Progress
            </div>
            <h2 className="heading-2 mb-4">Unlocking Community Energy</h2>
            <p className="body-large text-deep-root/70">
              As the community meditates together, they unlock new energy infrastructure benefits.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-deep-root">
                      Level {community.energyProgress.level}: {energyLevels[community.energyProgress.level]?.name || 'Getting Started'}
                    </h3>
                    <p className="text-sm text-stone-grey">
                      {energyLevels[community.energyProgress.level]?.benefit || 'Working toward first threshold'}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-sunlit-gold">{community.energyProgress.current}%</div>
                    <div className="text-xs text-stone-grey">to next level</div>
                  </div>
                </div>

                <div className="h-4 bg-lotus-soft rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-gradient-to-r from-sunlit-gold to-heart-rose rounded-full transition-all duration-500"
                    style={{ width: `${community.energyProgress.current}%` }}
                  />
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {energyLevels.map((level, index) => (
                    <div
                      key={level.level}
                      className={`text-center p-2 rounded-love ${
                        index < community.energyProgress.level
                          ? 'bg-success-sage/10'
                          : index === community.energyProgress.level
                          ? 'bg-sunlit-gold/10'
                          : 'bg-stone-grey/10'
                      }`}
                    >
                      <div className={`text-xs font-semibold ${
                        index < community.energyProgress.level
                          ? 'text-success-sage'
                          : index === community.energyProgress.level
                          ? 'text-sunlit-gold'
                          : 'text-stone-grey'
                      }`}>
                        L{level.level}
                      </div>
                      <div className="text-xs text-stone-grey truncate">{level.name}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 text-center">
              <Link href="/energy" className="text-sm text-heart-rose hover:underline">
                Learn more about Energy Access Credits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Vendors */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">Local Vendors</h2>
            <p className="body-large text-deep-root/70">
              Businesses accepting Love Credits in {community.name}.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {community.vendors.map((vendor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="w-10 h-10 mb-3 rounded-full bg-om-sage/10 flex items-center justify-center">
                      <StoreIcon size={20} className="text-om-sage" />
                    </div>
                    <h3 className="font-semibold text-deep-root mb-1">{vendor.name}</h3>
                    <Badge variant="default" className="mb-2">{vendor.type}</Badge>
                    <p className="text-xs text-deep-root/70">{vendor.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-meditation-dusk to-deep-root text-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 text-white mb-4">Voices from {community.name}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {community.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/10"
              >
                <HeartIcon size={24} className="text-heart-rose mb-4" />
                <blockquote className="text-white/90 italic mb-4">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div>
                  <p className="font-semibold text-sunlit-gold">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">Our Journey</h2>
            <p className="body-large text-deep-root/70">
              Key milestones in {community.name}&apos;s history.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {community.milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 mb-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-heart-rose" />
                  {index < community.milestones.length - 1 && (
                    <div className="w-px h-full bg-border-mist" />
                  )}
                </div>
                <div className="pb-6">
                  <div className="text-xs text-stone-grey mb-1">{milestone.date}</div>
                  <h3 className="font-semibold text-deep-root">{milestone.title}</h3>
                  <p className="text-sm text-deep-root/70">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="heading-2 text-white mb-4">Be Part of {community.name}</h2>
            <p className="body-large text-white/80 mb-8">
              Whether you want to join as a Love Farmer, support as a donor, or register as a vendor,
              there&apos;s a place for you in this community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/join">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white text-heart-rose hover:bg-white/90"
                  rightIcon={<ArrowRightIcon size={20} />}
                >
                  Join the Community
                </Button>
              </Link>
              <Link href="/communities">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Explore Other Communities
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
