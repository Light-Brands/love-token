/**
 * Love Token Image Prompts - Version 3
 * 
 * Missing images for Communities and Energy pages.
 */

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

const MISSING_IMAGE_PROMPTS = [
  // ===== COMMUNITY PAGES =====
  {
    promptId: 'community-sunrise-village',
    description: 'Sunrise Village Love Farm in Kenya',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A vibrant Kenyan village at sunrise with community members gathered for morning meditation. Warm golden light bathes the scene. Acacia trees in background, simple but dignified homes, women in colorful traditional attire. A sense of peaceful community beginning their day together. ${BRAND_STYLE}`,
  },
  {
    promptId: 'community-mountain-heart',
    description: 'Mountain Heart Love Farm in Dharamsala, India',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A high-altitude Indian community in the Himalayan foothills at dawn. Prayer flags flutter gently, mountains visible in the misty background. Diverse community members in warm clothing gather for meditation on a terrace overlooking the valley. Spiritual but grounded atmosphere. ${BRAND_STYLE}`,
  },
  {
    promptId: 'community-river-village',
    description: 'River Community Love Farm in Cebu, Philippines',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A Filipino fishing village at early dawn. Traditional boats (bangkas) visible on calm water. Fishermen and their families meditating together on the shore before the day's work. Palm trees, tropical warmth, community connection. Peaceful pre-dawn blues and warm emerging light. ${BRAND_STYLE}`,
  },
  {
    promptId: 'community-garden-valley',
    description: 'Garden Valley Love Farm in Mombasa, Kenya',
    size: '1024x1024',
    quality: 'hd',
    prompt: `An urban community garden in coastal Kenya. Diverse group of community members tend to lush vegetable plots while others meditate in a shaded corner. Mix of traditional and modern dress. Green abundance, warm coastal light, sense of urban renewal and community. ${BRAND_STYLE}`,
  },
  {
    promptId: 'community-coastal-haven',
    description: 'Coastal Haven Love Farm in Tamil Nadu, India',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A South Indian coastal fishing community at golden hour. Traditional catamarans on the beach, palm-thatched structures. Community members in colorful South Indian attire gathering for evening meditation facing the sea. Warm orange sunset light, peaceful atmosphere. ${BRAND_STYLE}`,
  },
  {
    promptId: 'community-highland-circle',
    description: 'Highland Circle Love Farm in Baguio, Philippines',
    size: '1024x1024',
    quality: 'hd',
    prompt: `An indigenous Filipino highland community in the cool pine forests of the Cordilleras. Community members in traditional woven garments sit in a circle for meditation in a forest clearing. Pine trees, cool mountain mist, ancestral spiritual practices honored. Dignified, connected to land. ${BRAND_STYLE}`,
  },
  
  // ===== ENERGY PAGE HERO =====
  {
    promptId: 'hero-energy-community',
    description: 'Village powered by community meditation',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A village scene at dusk where warm electric lights glow from homes and community buildings, powered by solar panels visible on rooftops. Community members visible through lit windows - children studying, families gathering. A sense of progress and sustainability. Warm twilight colors, hopeful atmosphere of a community transformed by collective effort. ${BRAND_STYLE}`,
  },
];

module.exports = { MISSING_IMAGE_PROMPTS, BRAND_STYLE };

if (require.main === module) {
  console.log('\n📷 Love Token Image Prompts - Version 3 (Missing Images)\n');
  console.log('='.repeat(60));
  console.log(`\nTotal images: ${MISSING_IMAGE_PROMPTS.length}\n`);
  MISSING_IMAGE_PROMPTS.forEach(p => {
    console.log(`  • ${p.promptId}: ${p.description}`);
  });
  console.log('\n');
}
