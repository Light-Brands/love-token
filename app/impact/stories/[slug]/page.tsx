'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, GeneratedImage, Badge } from '@/components/ui';
import {
  HeartIcon,
  MeditationIcon,
  UsersIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  MapPinIcon,
  CalendarIcon,
  SparklesIcon,
  BookIcon,
} from '@/components/icons';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Comprehensive story data
const storiesData: Record<string, {
  title: string;
  subtitle: string;
  category: 'education' | 'food-security' | 'infrastructure' | 'entrepreneurship' | 'health' | 'community';
  community: string;
  communitySlug: string;
  location: string;
  date: string;
  imagePromptId: string;
  summary: string;
  fullStory: string[];
  impact: { metric: string; value: string; description: string }[];
  quotes: { text: string; author: string; role: string }[];
  relatedStories: string[];
}> = {
  'maria-sunrise-village': {
    title: 'Maria\'s Morning Revolution',
    subtitle: 'How one woman\'s meditation practice transformed an entire village',
    category: 'community',
    community: 'Sunrise Village',
    communitySlug: 'sunrise-village',
    location: 'Nakuru, Kenya',
    date: 'March 2024',
    imagePromptId: 'community-sunrise-village',
    summary: 'When Maria first proposed earning through meditation, her neighbors were skeptical. Six months later, 85 families are participating in what they call "the morning revolution."',
    fullStory: [
      'Maria Kamau had always been an early riser. In the quiet hours before dawn, while her children slept, she would sit on her small porch and simply breathe. It wasn\'t something she thought of as "meditation" — it was just her time.',
      'When a community development worker introduced her to Love Token, Maria saw something no one else did. "You mean all those hours I\'ve been sitting quietly... they could be worth something?" she asked.',
      'The first week, Maria convinced six other women to join her morning practice. They would gather at her home, sit together in silence for twenty minutes, then share tea before starting their day. Each session earned them Love Credits.',
      'Word spread. By the second month, the group had grown to thirty. By the third month, they needed a larger space. The village chief offered the community center, but there was a problem: it didn\'t have electricity for early morning gatherings.',
      'This is when the magic happened. The women\'s accumulated meditation had brought the community to the first energy threshold. Extended evening electricity was unlocked — and with it, the ability to hold their dawn gatherings indoors.',
      '"We earned the electricity through our practice," Maria explains, still amazed. "We didn\'t ask for charity. We didn\'t wait for the government. We meditated, and the power came."',
      'Today, Sunrise Village has 85 active Love Farmers. The credits they earn circulate through 12 local vendors. Three community projects have been fully funded. And every morning, before the sun rises, you can find Maria where she\'s always been — sitting quietly, breathing, and now, creating real value for her community.',
    ],
    impact: [
      { metric: 'Love Farmers', value: '85', description: 'Active meditators in the community' },
      { metric: 'Credits Circulated', value: '847 LVC', description: 'Economic value created' },
      { metric: 'Projects Funded', value: '3', description: 'Community initiatives completed' },
      { metric: 'Energy Level', value: '2', description: 'Community lighting unlocked' },
    ],
    quotes: [
      { text: 'I never thought sitting quietly could feed my family. Now I know — presence has power.', author: 'Maria Kamau', role: 'Community Founder' },
      { text: 'My mother taught me to meditate for peace. Now I meditate for peace AND groceries.', author: 'Grace Wanjiku', role: 'Love Farmer' },
      { text: 'The women changed everything. They showed us what quiet power looks like.', author: 'Chief Joseph Mwangi', role: 'Village Chief' },
    ],
    relatedStories: ['tenzin-mountain-heart', 'rodel-river-community'],
  },
  'tenzin-mountain-heart': {
    title: 'Three Generations of Practice',
    subtitle: 'An elder\'s lifelong meditation finds new purpose in the Love Economy',
    category: 'education',
    community: 'Mountain Heart',
    communitySlug: 'mountain-heart',
    location: 'Dharamsala, India',
    date: 'February 2024',
    imagePromptId: 'community-mountain-heart',
    summary: 'Tenzin Dorje has meditated every day for 60 years. Now, his practice is funding education for his grandchildren\'s generation.',
    fullStory: [
      'Tenzin Dorje learned to meditate from his father, who learned from his father before him. For three generations, the Dorje family has maintained an unbroken practice — sitting in stillness each morning as the sun rises over the Himalayan peaks.',
      '"Meditation was always our wealth," Tenzin says, his eyes crinkling with smile lines. "Just not the kind you could spend at the market."',
      'When Love Token came to Mountain Heart, Tenzin was initially puzzled. "You want to pay us for sitting?" he asked. "We already do this. We have always done this."',
      'But his grandson, Karma, saw the potential. "Grandfather," he said, "they\'re not paying you for sitting. They\'re recognizing the value of what you\'ve known all along. Now the world will know too."',
      'Within months, Tenzin had become the community\'s most prolific Love Farmer — not because he meditated more, but because he never stopped. His 60-year practice, now logged in the app, generated credits that the family used to buy school supplies for Karma and his cousins.',
      'The Youth Training Program — fully funded by community credits — now teaches meditation to teenagers who might otherwise have dismissed it as "old people stuff." Tenzin leads a session every week.',
      '"For 60 years, I gave my practice to the mountains," Tenzin reflects. "Now it comes back to my family. This is how it was always meant to work."',
      'Today, three generations of Dorjes meditate together each morning. The children earn Love Points. The adults earn Love Credits. And Tenzin? He earns the satisfaction of knowing his life\'s practice has become his community\'s future.',
    ],
    impact: [
      { metric: 'Meditation Years', value: '60+', description: 'Tenzin\'s personal practice' },
      { metric: 'Youth Trained', value: '45', description: 'Teenagers learning meditation' },
      { metric: 'Education Goal', value: '100%', description: 'Youth program fully funded' },
      { metric: 'Community Streak', value: '215 days', description: 'Longest active streak' },
    ],
    quotes: [
      { text: 'Our ancestors meditated for enlightenment. We meditate for enlightenment AND for our children\'s education. Both are sacred.', author: 'Tenzin Dorje', role: 'Elder' },
      { text: 'My grandfather showed me that tradition and innovation can dance together.', author: 'Karma Dorje', role: 'Grandson' },
      { text: 'When Tenzin sits, the whole mountain seems to breathe with him.', author: 'Pema Lhamo', role: 'Community Member' },
    ],
    relatedStories: ['maria-sunrise-village', 'amina-garden-valley'],
  },
  'rodel-river-community': {
    title: 'Meditation on the Water',
    subtitle: 'Fishermen discover the value of stillness before dawn',
    category: 'entrepreneurship',
    community: 'River Community',
    communitySlug: 'river-community',
    location: 'Cebu, Philippines',
    date: 'May 2024',
    imagePromptId: 'community-river-village',
    summary: 'The fishermen of Cebu already woke before dawn. Now, instead of anxiously waiting for the fish, they meditate — and earn.',
    fullStory: [
      'Every fisherman knows the waiting. You set your nets, you position your boat, and then... you wait. Some mornings you catch plenty. Some mornings you catch nothing. The waiting is always the same.',
      'Rodel Pangilinan had been fishing for 30 years. His father fished these same waters, as did his grandfather. But unlike his ancestors, Rodel spent his waiting hours worrying: about prices at the market, about his children\'s school fees, about the rising cost of fuel.',
      '"The waiting was eating me alive," Rodel admits. "I would sit there, anxious, unable to do anything but worry."',
      'His daughter Elena introduced him to Love Token. "Papa, you\'re already awake. You\'re already still. Why not meditate while you wait?"',
      'The first morning, Rodel felt foolish. A grown man, sitting on his boat with his eyes closed while other fishermen passed by. But he kept his phone steady, kept his thumb on the screen, and breathed.',
      'After twenty minutes, he felt different. Calmer. When the first fish hit the net, he handled it with a steadiness he hadn\'t felt in years.',
      'Word spread through the fishing community. Within weeks, a dozen boats were anchoring together before dawn, their crews meditating in unison as the first light touched the water.',
      '"The fish haven\'t changed," Rodel laughs now. "We have. And so has what we bring home." His accumulated credits bought a new engine for his boat. His son\'s credits paid for school supplies. The community\'s combined practice has fully funded their children\'s education fund.',
      'These days, if you sail past Cebu before dawn, you might see something unusual: a cluster of boats, their crews sitting in perfect stillness, earning credits while waiting for the morning catch.',
    ],
    impact: [
      { metric: 'Fishermen Participating', value: '65', description: 'Active Love Farmers' },
      { metric: 'Dawn Sessions', value: '30+ min', description: 'Average meditation per fisherman' },
      { metric: 'School Supplies', value: '100%', description: 'Education goal funded' },
      { metric: 'Income Supplement', value: '+15%', description: 'From Love Credits' },
    ],
    quotes: [
      { text: 'The sea gives us fish. Meditation gives us peace. Now both give us income.', author: 'Rodel Pangilinan', role: 'Fisherman' },
      { text: 'I used to worry during the waiting. Now I meditate. Same waters, different mind.', author: 'Antonio Garcia', role: 'Love Farmer' },
      { text: 'My father is a different man since he started. Calmer. Happier. Still a fisherman, but now also something more.', author: 'Elena Pangilinan', role: 'Daughter' },
    ],
    relatedStories: ['tenzin-mountain-heart', 'amina-garden-valley'],
  },
  'amina-garden-valley': {
    title: 'Growing Love in the City',
    subtitle: 'An urban garden becomes a Love Farm',
    category: 'food-security',
    community: 'Garden Valley',
    communitySlug: 'garden-valley',
    location: 'Mombasa, Kenya',
    date: 'June 2024',
    imagePromptId: 'community-garden-valley',
    summary: 'Amina started a community garden to feed her neighbors. Now it feeds their souls too — and the meditation is funding an irrigation system.',
    fullStory: [
      'In Mombasa\'s urban sprawl, green spaces are rare and precious. When Amina Wanjiku found an unused lot between buildings, she saw potential that others missed.',
      '"Everyone said the land was useless," Amina recalls. "Too small for building, too shaded for crops. But I knew that plants need less sun than people think. What they need is love."',
      'The garden started with eight plots and a shared vision: neighbors growing food together. It grew to twenty plots, then thirty. People came not just for vegetables but for community.',
      'Meditation was Amina\'s own practice. She would arrive early, before anyone else, and sit among her seedlings. "I talk to the plants," she admits with a smile. "But mostly, I listen."',
      'When she heard about Love Token, the connection was immediate. "We were already doing everything right — gathering, caring for something together, being present. We just needed to add the app."',
      'Now, Garden Valley\'s morning routine includes fifteen minutes of meditation before the gardening begins. Members sit among the vegetables, phones steady in their hands, earning credits that flow into the community fund.',
      'The first project they funded: an irrigation system. "We couldn\'t grow much without reliable water," Amina explains. "Now the credits we earn from sitting still help the plants grow taller."',
      'The garden has become a beacon in Mombasa. Other neighborhoods have reached out, wanting to start their own Love Farms. Amina leads training sessions on Saturdays, teaching both meditation and composting.',
      '"We grow two things now," she says. "Vegetables for the body, stillness for the soul. And both have value."',
    ],
    impact: [
      { metric: 'Garden Plots', value: '45', description: 'Active growing spaces' },
      { metric: 'Families Fed', value: '35+', description: 'Regular produce recipients' },
      { metric: 'Irrigation Fund', value: '70%', description: 'Progress toward goal' },
      { metric: 'Seed Bank', value: '65%', description: 'Progress toward goal' },
    ],
    quotes: [
      { text: 'The garden gives me food. The meditation gives me credits. Together, they give me hope.', author: 'Amina Wanjiku', role: 'Founder' },
      { text: 'I come for the meditation now as much as the gardening. Both ground me.', author: 'Hassan Khalil', role: 'Love Farmer' },
      { text: 'Amina showed us that urban land can bloom — with vegetables and with love.', author: 'Fatima Omar', role: 'Community Member' },
    ],
    relatedStories: ['maria-sunrise-village', 'rodel-river-community'],
  },
};

const categoryColors = {
  education: 'meditation-dusk',
  'food-security': 'om-sage',
  infrastructure: 'earth-clay',
  entrepreneurship: 'sunlit-gold',
  health: 'heart-rose',
  community: 'success-sage',
};

const categoryLabels = {
  education: 'Education',
  'food-security': 'Food Security',
  infrastructure: 'Infrastructure',
  entrepreneurship: 'Entrepreneurship',
  health: 'Health',
  community: 'Community',
};

export default function StoryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const story = storiesData[slug];

  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-sacred-cream">
      <Header />

      {/* Back Navigation */}
      <div className="pt-24 pb-4">
        <div className="container-love">
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 text-deep-root/60 hover:text-deep-root transition-colors"
          >
            <ArrowLeftIcon size={16} />
            <span className="text-sm">Back to Impact Stories</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-8 relative overflow-hidden">
        <div className="container-love">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <div className="flex items-center gap-3 mb-6">
                <Badge variant={story.category === 'community' ? 'success' : 'default'}>
                  {categoryLabels[story.category]}
                </Badge>
                <span className="flex items-center gap-1 text-sm text-deep-root/60">
                  <CalendarIcon size={14} />
                  {story.date}
                </span>
              </div>

              <h1 className="heading-1 mb-4">
                {story.title}
              </h1>
              <p className="text-xl text-deep-root/70 mb-6">
                {story.subtitle}
              </p>

              <div className="flex items-center gap-4 text-sm text-deep-root/60">
                <span className="flex items-center gap-1">
                  <MapPinIcon size={14} />
                  {story.location}
                </span>
                <Link
                  href={`/communities/${story.communitySlug}`}
                  className="flex items-center gap-1 text-heart-rose hover:underline"
                >
                  <UsersIcon size={14} />
                  {story.community}
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
                  promptId={story.imagePromptId}
                  alt={story.title}
                  fill
                  className="rounded-card"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-6 bg-lotus-soft/30 rounded-card border border-lotus-soft">
              <p className="text-xl text-deep-root/80 italic text-center">
                {story.summary}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Story */}
      <section className="section-padding">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-8">
              <BookIcon size={20} className="text-heart-rose" />
              <h2 className="heading-2">The Full Story</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              {story.fullStory.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-deep-root/80 mb-6 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">The Impact</h2>
            <p className="body-large text-deep-root/70">
              Real numbers from this story.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {story.impact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="py-6">
                    <div className="text-3xl font-bold text-heart-rose mb-2">{item.value}</div>
                    <div className="font-semibold text-deep-root mb-1">{item.metric}</div>
                    <div className="text-xs text-stone-grey">{item.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="heading-2 text-white mb-4">In Their Words</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {story.quotes.map((quote, index) => (
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
                  &quot;{quote.text}&quot;
                </blockquote>
                <div>
                  <p className="font-semibold text-sunlit-gold">{quote.author}</p>
                  <p className="text-white/60 text-sm">{quote.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Stories */}
      <section className="section-padding bg-white">
        <div className="container-love">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">More Stories</h2>
            <p className="body-large text-deep-root/70">
              Discover more transformation from the Love Economy.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {story.relatedStories.map((relatedSlug) => {
              const related = storiesData[relatedSlug];
              if (!related) return null;
              return (
                <Link key={relatedSlug} href={`/impact/stories/${relatedSlug}`}>
                  <Button variant="outline" className="gap-2">
                    <SparklesIcon size={16} />
                    {related.title}
                  </Button>
                </Link>
              );
            })}
            <Link href="/impact">
              <Button variant="secondary" className="gap-2">
                View All Stories
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
            <h2 className="heading-2 text-white mb-4">Write Your Own Story</h2>
            <p className="body-large text-white/80 mb-8">
              Every Love Farmer, every community, every meditation adds to the story
              of the Love Economy. Your chapter is waiting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <Link href={`/communities/${story.communitySlug}`}>
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Visit {story.community}
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
