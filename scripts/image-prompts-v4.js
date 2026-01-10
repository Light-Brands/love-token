/**
 * Love Token Image Prompts - Version 4
 * 
 * Missing images for new dynamic pages (phases, values, communities, 
 * energy benefits, impact stories, projects, roles).
 * 
 * Run with: node scripts/generate-images.js --new-only
 * Or: node scripts/generate-images.js --single <promptId>
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

const V4_IMAGE_PROMPTS = [
  // ===== ENERGY BENEFITS - MISSING LEVELS =====
  {
    promptId: 'energy-lighting-upgrade',
    description: 'Community lighting upgrade - Level 2 Growth benefit',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A village community center at evening with newly installed solar-powered LED lights illuminating pathways and gathering areas. Community members walking safely along lit paths, children playing under lights. Solar panels visible on rooftops. Warm artificial light mixed with twilight sky. A sense of pride and progress - infrastructure earned through collective meditation. ${BRAND_STYLE}`,
  },
  {
    promptId: 'energy-full-infrastructure',
    description: 'Full infrastructure support - Level 5 Abundance benefit',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A thriving village community showcasing complete infrastructure transformation: solar panels on rooftops, lit streets, a small medical facility with power, children using computers in a school building, water access point. Multiple community members visible going about their prosperous daily life. Golden hour lighting suggesting abundance and achievement. The culmination of community meditation effort made visible in infrastructure. ${BRAND_STYLE}`,
  },

  // ===== PROJECT GOALS - MISSING TYPES =====
  {
    promptId: 'community-goal-meditation-hall',
    description: 'Meditation hall expansion project',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A beautiful expanded meditation hall in a South Asian setting (Dharamsala/Himalayan region). Traditional architecture with modern additions - wooden beams, large windows overlooking mountains, heated floors visible through warm interior glow. Community members sitting in meditation in the spacious interior. Prayer flags visible outside. Warm, spiritual atmosphere that honors tradition while embracing growth. ${BRAND_STYLE}`,
  },
  {
    promptId: 'community-goal-boat',
    description: 'Fishing boat repair project',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Filipino fishermen working together to repair traditional fishing boats (bangkas) on a tropical beach. Some boats freshly painted in bright colors, others being repaired with new wood. Community cooperation visible - multiple generations helping. Tools and materials organized. Pride in maintaining their livelihood. Warm coastal light, turquoise water in background. ${BRAND_STYLE}`,
  },
  {
    promptId: 'community-goal-irrigation',
    description: 'Garden irrigation system project',
    size: '1024x1024',
    quality: 'hd',
    prompt: `An urban community garden in coastal Kenya with newly installed drip irrigation system. Black irrigation tubes run between lush vegetable plots. Community gardeners tending thriving crops - tomatoes, leafy greens, beans. Water droplets visible on healthy plants. A sense of abundance and food security achieved through community effort. Warm African morning light. ${BRAND_STYLE}`,
  },
];

module.exports = { V4_IMAGE_PROMPTS, BRAND_STYLE };

if (require.main === module) {
  console.log('\n📷 Love Token Image Prompts - Version 4 (New Page Images)\n');
  console.log('='.repeat(60));
  console.log(`\nTotal images: ${V4_IMAGE_PROMPTS.length}\n`);
  
  console.log('Energy Benefits (missing levels):');
  V4_IMAGE_PROMPTS.filter(p => p.promptId.startsWith('energy-')).forEach(p => {
    console.log(`  • ${p.promptId}: ${p.description}`);
  });
  
  console.log('\nProject Goals (missing types):');
  V4_IMAGE_PROMPTS.filter(p => p.promptId.startsWith('community-goal')).forEach(p => {
    console.log(`  • ${p.promptId}: ${p.description}`);
  });
  
  console.log('\n' + '='.repeat(60));
  console.log('\nTo generate these images, run:');
  console.log('  OPENAI_API_KEY=your-key node scripts/generate-images.js --v4-only\n');
}
