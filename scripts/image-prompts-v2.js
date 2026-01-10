/**
 * Love Token Image Prompts - Version 2
 * 
 * New images for expanded MVP sections based on project documentation.
 * Run with: node scripts/generate-images.js (after updating generate-images.js)
 */

// Brand style guide (same as v1)
const BRAND_STYLE = `
Style Guidelines:
- Warm, earthy color palette: terracotta, golden hour light, soft creams, muted greens
- Dignified and authentic - never pitying or othering
- Multicultural representation with emphasis on South Asian and African communities
- Natural lighting, preferably golden hour or soft morning light
- Grounded spirituality - real people, real places, not ethereal or fantasy
- Clean, modern composition suitable for web use
- High quality, professional photography aesthetic
- Avoid clichés, stock photo feel, or overly polished commercial look
`;

// =====================================================
// NEW IMAGE PROMPTS FOR MVP SECTIONS
// =====================================================

const NEW_IMAGE_PROMPTS = [

  // ===== USER ROLES (Additional) =====
  {
    promptId: 'role-public-user',
    description: 'Global public user meditating and sending love',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A person from a modern urban setting meditating peacefully with their smartphone nearby, sending love to the world. Diverse representation, could be in a home, park, or office break room. Warm natural light, feeling of connection despite distance. ${BRAND_STYLE}`,
  },
  {
    promptId: 'role-farm-admin',
    description: 'Love Farm Administrator coordinating community',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A respected community leader (could be an elder or trusted figure) with a tablet or clipboard, coordinating with Love Farmers in a village setting. Dignified, organized, caring expression. Others look to them with respect. Warm morning light. ${BRAND_STYLE}`,
  },
  {
    promptId: 'role-twge-admin',
    description: 'TWGE Administrator managing the system',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A thoughtful administrator at a clean workspace with multiple screens showing dashboards and data. Professional but warm environment, suggesting careful stewardship of the system. Could be in a modern office with plants. ${BRAND_STYLE}`,
  },

  // ===== MEDITATION TYPES =====
  {
    promptId: 'meditation-public-donor',
    description: 'Public user doing standard meditation',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A person in comfortable modern clothing meditating with eyes closed, a soft glow suggesting love energy emanating from them and flowing outward to connect with others around the world. Peaceful home or outdoor setting. ${BRAND_STYLE}`,
  },
  {
    promptId: 'meditation-presence-verify',
    description: 'Love Farmer with thumb on phone screen',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Close-up of weathered but gentle hands holding a smartphone, thumb placed on the glowing screen. The person is meditating with eyes closed. Suggests presence verification - being truly present. Warm lighting, village setting hints in background. ${BRAND_STYLE}`,
  },
  {
    promptId: 'meditation-group-session',
    description: 'Group meditation being logged by administrator',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A group of community members meditating together in a circle outdoors while a Love Farm Administrator stands nearby with a tablet, recording the session. Dawn or dusk light, peaceful community atmosphere. ${BRAND_STYLE}`,
  },

  // ===== WALLET & CREDITS =====
  {
    promptId: 'wallet-display',
    description: 'Phone showing wallet with local currency',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Hands holding a smartphone showing a simple, clean wallet interface with large local currency numbers (like ₨157) and smaller Love Credits below. The interface is icon-based and accessible. Warm lighting. ${BRAND_STYLE}`,
  },
  {
    promptId: 'credits-earning',
    description: 'Love Credits flowing into wallet after meditation',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Abstract but grounded visualization of warm golden light (representing Love Credits) flowing gently into an open hand or phone screen. Suggests value being earned through presence. Soft, hopeful feeling. ${BRAND_STYLE}`,
  },
  {
    promptId: 'streak-bonus',
    description: 'Celebration of meditation streak achievement',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A Love Farmer looking at their phone with a proud, gentle smile as it shows a streak achievement (7 days or 30 days). Small celebration moment - dignified joy, not excessive. Village setting, morning light. ${BRAND_STYLE}`,
  },

  // ===== TRANSACTIONS =====
  {
    promptId: 'transaction-qr-scan',
    description: 'Love Farmer scanning vendor QR code',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A Love Farmer holding their phone to scan a QR code at a local vendor's stall. Both parties look happy and comfortable. Fresh produce or goods visible. Natural market lighting, warm interaction. ${BRAND_STYLE}`,
  },
  {
    promptId: 'transaction-peer-transfer',
    description: 'Peer-to-peer Love Credit transfer',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Two community members (could be neighbors) completing a peer-to-peer transfer on their phones, perhaps for a shared service or labor exchange. Friendly, equal interaction. Village setting. ${BRAND_STYLE}`,
  },
  {
    promptId: 'vendor-redemption-request',
    description: 'Vendor requesting credit redemption',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A vendor at the end of their day, looking at their phone with satisfaction as they request redemption of accumulated Love Credits. Their stall or shop visible in background, warm evening light. ${BRAND_STYLE}`,
  },

  // ===== DONOR EXPERIENCE =====
  {
    promptId: 'donor-subscription',
    description: 'Donor subscribing to Love Experiment',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A person in a modern setting (home office, living room) making a meaningful commitment on their device, face showing purpose and connection. Warm, comfortable environment suggesting this is a heart-centered decision. ${BRAND_STYLE}`,
  },
  {
    promptId: 'donor-receiving-love',
    description: 'Donor receiving daily love notification',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A donor looking at their phone with a touched expression as they receive a notification showing love flowing to them from communities around the world. Warm light on their face, emotional moment. ${BRAND_STYLE}`,
  },
  {
    promptId: 'donor-impact-view',
    description: 'Donor viewing their impact dashboard',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Hands holding a tablet or phone showing an impact dashboard with gentle visualizations of love hours, communities supported, and real impact. Clean, warm interface. Comfortable setting. ${BRAND_STYLE}`,
  },

  // ===== COMMUNITY GOALS & PROJECTS =====
  {
    promptId: 'community-goal-education',
    description: 'Education goal - children learning',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Children in a village school setting, engaged and learning. Could show a new classroom or learning materials that were funded. Bright, hopeful atmosphere, clean and dignified environment. ${BRAND_STYLE}`,
  },
  {
    promptId: 'community-goal-water',
    description: 'Water access goal - clean water',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Community members around a new clean water source - a well, pump, or tap. Joy and relief visible but dignified. Children and elders present. Clean, fresh water flowing. ${BRAND_STYLE}`,
  },
  {
    promptId: 'community-goal-food',
    description: 'Food security goal - community garden or distribution',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A thriving community garden or food distribution point. Community members working together or receiving fresh produce. Abundance and sustainability visible. Warm, productive atmosphere. ${BRAND_STYLE}`,
  },
  {
    promptId: 'project-progress',
    description: 'Project milestone being celebrated',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Community members gathered around a progress indicator or milestone marker for a community project. Modest celebration - perhaps ribbon cutting or dedication. Dignified pride in achievement. ${BRAND_STYLE}`,
  },

  // ===== ENERGY INTEGRATION =====
  {
    promptId: 'energy-community-power',
    description: 'Community with love-activated electricity',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A village scene at evening with warm lights glowing in homes and community spaces. Suggests electricity powered by community meditation and love. Children studying under lights, families gathering. Warm, hopeful atmosphere. ${BRAND_STYLE}`,
  },
  {
    promptId: 'energy-dashboard',
    description: 'Energy access dashboard visualization',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A clean visualization or dashboard showing the connection between meditation and energy access - could be abstract with flowing lines connecting meditation to light/power symbols. Warm colors, clean design. ${BRAND_STYLE}`,
  },
  {
    promptId: 'energy-charging-station',
    description: 'Community charging station unlocked by love',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A simple community charging station in a village setting where people can charge phones and devices. Active and in use, with community members present. Modern infrastructure in traditional setting. ${BRAND_STYLE}`,
  },
  {
    promptId: 'energy-refrigeration',
    description: 'Community refrigeration for food preservation',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A community refrigeration unit or cool storage in a village market setting. Vendors storing fresh produce, fish, or other perishables. Practical, life-improving technology. Warm, productive scene. ${BRAND_STYLE}`,
  },

  // ===== MIRACLES & WELLBEING =====
  {
    promptId: 'wellbeing-checkin',
    description: 'Simple mood check-in moment',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A Love Farmer pausing before or after meditation to reflect on their wellbeing, phone showing simple symbol-based mood options. Quiet, introspective moment. Gentle natural lighting. ${BRAND_STYLE}`,
  },
  {
    promptId: 'miracle-story',
    description: 'Community member sharing a miracle story',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A community member sharing a story with others - perhaps gathered around, listening with wonder and appreciation. Could be elder sharing wisdom or young person sharing transformation. Warm, connected atmosphere. ${BRAND_STYLE}`,
  },
  {
    promptId: 'inspiration-feed',
    description: 'Daily inspiration and connection',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A person scrolling through their phone with a peaceful, inspired expression, viewing stories and images of love in action around the world. Warm light, comfortable setting, feeling of global connection. ${BRAND_STYLE}`,
  },

  // ===== GLOBAL STATS & IMPACT =====
  {
    promptId: 'global-love-counter',
    description: 'Global love statistics visualization',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Abstract but warm visualization of global love flow - could show a gentle globe or network of connections with warm light flowing between nodes representing communities and donors worldwide. ${BRAND_STYLE}`,
  },
  {
    promptId: 'total-meditation-hours',
    description: 'Collective meditation hours visualization',
    size: '1024x1024',
    quality: 'hd',
    prompt: `An artistic representation of accumulated meditation time - perhaps multiple figures meditating in layers or a visual timeline showing the growth of collective presence. Warm, accumulating energy. ${BRAND_STYLE}`,
  },
  {
    promptId: 'community-network',
    description: 'Network of Love Farm communities',
    size: '1024x1024',
    quality: 'hd',
    prompt: `An overview or map-like view showing multiple communities connected by warm flowing lines of love. Each community represented as a warm glowing point. Global but grounded perspective. ${BRAND_STYLE}`,
  },

  // ===== ONBOARDING & UX =====
  {
    promptId: 'onboarding-welcome',
    description: 'Welcome to Love Token moment',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A warm, welcoming scene suggesting the start of a journey - could be sunrise over a peaceful landscape, or hands opening in welcome gesture. Inviting, hopeful, beginning of something meaningful. ${BRAND_STYLE}`,
  },
  {
    promptId: 'onboarding-choose-role',
    description: 'Choosing your role in the Love Economy',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Abstract representation of paths or choices - three or four gentle glowing paths diverging from a central point, each leading to different but equally valued destinations. Warm, non-hierarchical. ${BRAND_STYLE}`,
  },
  {
    promptId: 'symbol-based-ui',
    description: 'Icon-based interface for accessibility',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Close-up of hands interacting with a phone showing large, clear symbols and icons instead of text - a heart, coins, people, home. Simple, accessible design. Warm, inclusive feeling. ${BRAND_STYLE}`,
  },

  // ===== TRUST & SECURITY =====
  {
    promptId: 'local-verification',
    description: 'Love Farmer being verified by admin',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A Love Farm Administrator meeting with a new community member, perhaps reviewing their information on a tablet. Respectful, trusting interaction. Village community center or gathering space. ${BRAND_STYLE}`,
  },
  {
    promptId: 'audit-trail',
    description: 'Transparent record keeping',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Hands reviewing a simple, clear record or ledger - could be digital on tablet or traditional book. Suggests transparency, accountability, and careful stewardship. Clean, organized, trustworthy. ${BRAND_STYLE}`,
  },
];

// Export for use in generate-images.js
module.exports = { NEW_IMAGE_PROMPTS, BRAND_STYLE };

// Print summary when run directly
if (require.main === module) {
  console.log('\n📷 Love Token Image Prompts - Version 2\n');
  console.log('='.repeat(60));
  console.log(`\nTotal new images: ${NEW_IMAGE_PROMPTS.length}\n`);
  
  const categories = {
    'User Roles': NEW_IMAGE_PROMPTS.filter(p => p.promptId.startsWith('role-')),
    'Meditation': NEW_IMAGE_PROMPTS.filter(p => p.promptId.startsWith('meditation-')),
    'Wallet & Credits': NEW_IMAGE_PROMPTS.filter(p => p.promptId.includes('wallet') || p.promptId.includes('credit') || p.promptId.includes('streak')),
    'Transactions': NEW_IMAGE_PROMPTS.filter(p => p.promptId.startsWith('transaction-') || p.promptId.includes('redemption')),
    'Donor Experience': NEW_IMAGE_PROMPTS.filter(p => p.promptId.startsWith('donor-')),
    'Community Goals': NEW_IMAGE_PROMPTS.filter(p => p.promptId.startsWith('community-goal') || p.promptId.startsWith('project-')),
    'Energy Integration': NEW_IMAGE_PROMPTS.filter(p => p.promptId.startsWith('energy-')),
    'Miracles & Wellbeing': NEW_IMAGE_PROMPTS.filter(p => p.promptId.includes('wellbeing') || p.promptId.includes('miracle') || p.promptId.includes('inspiration')),
    'Global Stats': NEW_IMAGE_PROMPTS.filter(p => p.promptId.includes('global') || p.promptId.includes('total') || p.promptId.includes('network')),
    'Onboarding & UX': NEW_IMAGE_PROMPTS.filter(p => p.promptId.startsWith('onboarding-') || p.promptId.includes('symbol')),
    'Trust & Security': NEW_IMAGE_PROMPTS.filter(p => p.promptId.includes('verification') || p.promptId.includes('audit')),
  };

  Object.entries(categories).forEach(([category, prompts]) => {
    console.log(`\n${category} (${prompts.length}):`);
    prompts.forEach(p => {
      console.log(`  • ${p.promptId}: ${p.description}`);
    });
  });

  console.log('\n' + '='.repeat(60));
  console.log('\nTo generate these images, update generate-images.js to import');
  console.log('from this file, or run directly with the API key.\n');
}
