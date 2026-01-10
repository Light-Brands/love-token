#!/usr/bin/env node

/**
 * Love Token Image Generation Script
 * 
 * Generates all placeholder images using OpenAI's DALL-E 3 API
 * 
 * Usage:
 *   OPENAI_API_KEY=your-key node scripts/generate-images.js
 *   
 * Options:
 *   --dry-run    Preview prompts without generating images
 *   --single ID  Generate only a specific image by promptId
 *   --list       List all image prompts
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');
const MANIFEST_PATH = path.join(OUTPUT_DIR, 'manifest.json');

// Brand style guide for consistent image generation
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

// All image prompts extracted from the codebase
const IMAGE_PROMPTS = [
  // ===== HOME PAGE =====
  {
    promptId: 'hero-meditation-circle',
    description: 'Community meditation circle at golden hour - warm, authentic, dignified',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A diverse community of people sitting in a meditation circle outdoors at golden hour. Mix of ages and ethnicities, including South Asian and African participants. Natural setting with warm sunlight filtering through. People sitting on the ground or simple mats, eyes closed, peaceful expressions. Authentic village or community garden setting. ${BRAND_STYLE}`,
  },
  {
    promptId: 'pillar-grounded-love',
    description: 'Hands touching earth, planting seeds, real connection to material world',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Close-up of weathered, caring hands touching rich dark soil, perhaps planting a small seedling. Warm earth tones, golden sunlight. Shows the connection between love and material reality - grounded spirituality. Hands could belong to an elder, showing wisdom and experience. ${BRAND_STYLE}`,
  },
  {
    promptId: 'pillar-spiritual-love',
    description: 'Meditator with subtle aura, grounded presence, single flame',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A person in peaceful meditation, seated on the ground in simple clothing. A single candle or diya lamp burning nearby. Soft, warm lighting. The person appears grounded and present, not floating or ethereal. Could be in a simple room or outdoor courtyard. Natural, authentic, not posed. ${BRAND_STYLE}`,
  },
  {
    promptId: 'pillar-living-love',
    description: 'Hands exchanging, love in motion, community connections flowing',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Multiple hands in a gentle exchange - perhaps passing something between community members, or hands meeting in a circle. Shows connection and flow between people. Diverse hands of different ages and skin tones. Warm lighting, sense of movement and connection. ${BRAND_STYLE}`,
  },
  {
    promptId: 'role-love-farmer',
    description: 'Love Farmer meditating at dawn, earning through presence',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A person meditating at dawn in a rural or village setting. Simple clothing, sitting on the ground or a basic mat. Early morning golden light breaking over the horizon. Peaceful but purposeful expression - this is their contribution, their work. South Asian or African village context preferred. ${BRAND_STYLE}`,
  },
  {
    promptId: 'role-donor',
    description: 'Heart being shared, love flowing to communities',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Hands gently cupping or offering light that resembles a warm, glowing heart shape. The light appears to be flowing or spreading outward. Could show connection between two sets of hands - one offering, one receiving. Warm golden and rose tones. Symbolic but grounded. ${BRAND_STYLE}`,
  },
  {
    promptId: 'role-vendor',
    description: 'Village vendor at market, accepting Love Credits',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A friendly local vendor at a village market stall, warmly interacting with a customer. Fresh produce, handmade goods, or prepared food visible. The vendor appears dignified and proud of their work. Natural market setting with warm lighting. South Asian or African market context. ${BRAND_STYLE}`,
  },

  // ===== ABOUT PAGE =====
  {
    promptId: 'hero-community-gathering',
    description: 'Village community gathering at dawn - authentic connection and warmth',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A village community gathering at dawn or early morning. People of various ages coming together in a courtyard or open space. Children, elders, families. Warm, authentic interactions. Could be preparing for meditation or a community event. Natural village architecture in background. ${BRAND_STYLE}`,
  },
  {
    promptId: 'mission-intergenerational',
    description: 'Elder and young person in meaningful connection - wisdom shared',
    size: '1024x1024',
    quality: 'hd',
    prompt: `An elder and a young person sharing a meaningful moment of connection. Could be teaching, listening, or simply being present together. Warm expressions showing mutual respect. Natural setting - perhaps sitting together outdoors. Intergenerational wisdom transfer. ${BRAND_STYLE}`,
  },

  // ===== HOW IT WORKS PAGE =====
  {
    promptId: 'hero-love-flow-river',
    description: 'Flowing river at golden hour - love circulating through landscape',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A gently flowing river at golden hour, winding through a peaceful landscape. The water catches the warm light, appearing almost golden. Could show the river connecting different areas - villages, fields. Metaphor for love and value flowing through communities. ${BRAND_STYLE}`,
  },
  {
    promptId: 'flow-step-1-donors',
    description: 'Heart being given, donor generosity',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Hands offering or releasing a soft glowing heart-shaped light upward. Simple, clean composition. The gesture is generous and open. Warm golden and rose tones. Could be silhouetted against a warm sunset sky. Symbolic but not cheesy. ${BRAND_STYLE}`,
  },
  {
    promptId: 'flow-step-2-meditate',
    description: 'Meditation with timer, presence',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A person in peaceful meditation, shown from a slight distance. Perhaps a simple timer or candle nearby marking time. Morning light. The person is fully present and focused. Simple, clean composition showing the act of meditation as valuable work. ${BRAND_STYLE}`,
  },
  {
    promptId: 'flow-step-3-credits',
    description: 'Love Credits appearing in wallet',
    size: '1024x1024',
    quality: 'hd',
    prompt: `Hands holding a simple phone or device with a warm, glowing screen suggesting value being received. Soft golden light emanating from the screen. The hands could be weathered, working hands. Simple and modern but grounded in reality. ${BRAND_STYLE}`,
  },
  {
    promptId: 'flow-step-4-spend',
    description: 'Community market transaction',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A warm transaction moment at a local market - vendor and customer exchanging goods or completing a purchase. Both parties appear happy and dignified. Fresh produce or local goods visible. Natural market lighting. ${BRAND_STYLE}`,
  },
  {
    promptId: 'flow-step-5-redeem',
    description: 'Vendor receiving redemption',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A vendor looking at their phone or a simple ledger with a satisfied, proud expression. Suggests they are receiving payment for their participation. Their market stall visible in background. Dignity and pride in honest work. ${BRAND_STYLE}`,
  },
  {
    promptId: 'flow-step-6-circulates',
    description: 'Full circle of love flowing',
    size: '1024x1024',
    quality: 'hd',
    prompt: `An abstract but grounded representation of circulation - perhaps multiple hands in a circle passing light, or a circular arrangement of diverse community members. Shows the full cycle of giving and receiving. Warm, connected, continuous flow. ${BRAND_STYLE}`,
  },

  // ===== MEDITATE PAGE =====
  {
    promptId: 'meditation-bg-abstract',
    description: 'Abstract light through fabric - dreamy, peaceful, breathing',
    size: '1792x1024',
    quality: 'hd',
    prompt: `Abstract macro photography of warm light filtering through sheer fabric or natural fibers. Soft focus, dreamy quality. Colors in warm cream, soft gold, gentle rose tones. Peaceful and meditative. Could be used as a subtle background. Organic, flowing forms. ${BRAND_STYLE}`,
  },
  {
    promptId: 'celebration-meditation-complete',
    description: 'Meditation completion celebration - gentle joy, warmth',
    size: '1024x1024',
    quality: 'hd',
    prompt: `A gentle, warm illustration of completion and celebration. Could be a person with eyes just opening from meditation with a peaceful smile, or a symbolic representation of accomplishment - soft light blooming, a flower opening. Celebratory but calm, not exuberant. ${BRAND_STYLE}`,
  },
];

// Utility functions
function log(message, type = 'info') {
  const prefix = {
    info: '\x1b[36mℹ\x1b[0m',
    success: '\x1b[32m✓\x1b[0m',
    error: '\x1b[31m✗\x1b[0m',
    warn: '\x1b[33m⚠\x1b[0m',
  };
  console.log(`${prefix[type] || prefix.info} ${message}`);
}

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete partial file
      reject(err);
    });
  });
}

async function generateImage(prompt, apiKey) {
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'dall-e-3',
      prompt: prompt.prompt,
      n: 1,
      size: prompt.size,
      quality: prompt.quality || 'standard',
      response_format: 'url',
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`OpenAI API error: ${error.error?.message || response.statusText}`);
  }

  const data = await response.json();
  return data.data[0].url;
}

function loadManifest() {
  if (fs.existsSync(MANIFEST_PATH)) {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  }
  return { generated: {}, lastUpdated: null };
}

function saveManifest(manifest) {
  manifest.lastUpdated = new Date().toISOString();
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run');
  const listOnly = args.includes('--list');
  const singleIndex = args.indexOf('--single');
  const singleId = singleIndex !== -1 ? args[singleIndex + 1] : null;

  // List mode
  if (listOnly) {
    console.log('\n📷 Love Token Image Prompts\n');
    console.log('=' .repeat(60));
    IMAGE_PROMPTS.forEach((p, i) => {
      console.log(`\n${i + 1}. ${p.promptId}`);
      console.log(`   Description: ${p.description}`);
      console.log(`   Size: ${p.size}`);
    });
    console.log('\n' + '='.repeat(60));
    console.log(`\nTotal: ${IMAGE_PROMPTS.length} images\n`);
    return;
  }

  // Check for API key
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey && !isDryRun) {
    log('OPENAI_API_KEY environment variable is required', 'error');
    log('Run with --dry-run to preview prompts without generating', 'info');
    process.exit(1);
  }

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Filter prompts if single specified
  let promptsToProcess = IMAGE_PROMPTS;
  if (singleId) {
    promptsToProcess = IMAGE_PROMPTS.filter(p => p.promptId === singleId);
    if (promptsToProcess.length === 0) {
      log(`No prompt found with ID: ${singleId}`, 'error');
      log('Run with --list to see available prompts', 'info');
      process.exit(1);
    }
  }

  console.log('\n🎨 Love Token Image Generator\n');
  console.log('='.repeat(60));
  console.log(`Mode: ${isDryRun ? 'DRY RUN (no images generated)' : 'GENERATE'}`);
  console.log(`Images to process: ${promptsToProcess.length}`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
  console.log('='.repeat(60) + '\n');

  const manifest = loadManifest();
  const results = { success: [], failed: [], skipped: [] };

  for (let i = 0; i < promptsToProcess.length; i++) {
    const prompt = promptsToProcess[i];
    const filename = `${prompt.promptId}.png`;
    const filepath = path.join(OUTPUT_DIR, filename);

    console.log(`\n[${i + 1}/${promptsToProcess.length}] ${prompt.promptId}`);
    console.log(`   ${prompt.description}`);

    if (isDryRun) {
      console.log('\n   Prompt:');
      console.log(`   ${prompt.prompt.substring(0, 200)}...`);
      results.skipped.push(prompt.promptId);
      continue;
    }

    // Check if already exists
    if (fs.existsSync(filepath) && manifest.generated[prompt.promptId]) {
      log(`Already exists, skipping (delete to regenerate)`, 'warn');
      results.skipped.push(prompt.promptId);
      continue;
    }

    try {
      log('Generating image with DALL-E 3...', 'info');
      const imageUrl = await generateImage(prompt, apiKey);
      
      log('Downloading image...', 'info');
      await downloadImage(imageUrl, filepath);
      
      manifest.generated[prompt.promptId] = {
        filename,
        generatedAt: new Date().toISOString(),
        size: prompt.size,
      };
      
      log(`Saved: ${filename}`, 'success');
      results.success.push(prompt.promptId);

      // Rate limiting - wait between requests
      if (i < promptsToProcess.length - 1) {
        log('Waiting 2s before next request...', 'info');
        await new Promise(r => setTimeout(r, 2000));
      }
    } catch (error) {
      log(`Failed: ${error.message}`, 'error');
      results.failed.push({ id: prompt.promptId, error: error.message });
    }
  }

  // Save manifest
  if (!isDryRun) {
    saveManifest(manifest);
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('Summary:');
  console.log(`   ✓ Success: ${results.success.length}`);
  console.log(`   ⚠ Skipped: ${results.skipped.length}`);
  console.log(`   ✗ Failed: ${results.failed.length}`);
  
  if (results.failed.length > 0) {
    console.log('\nFailed images:');
    results.failed.forEach(f => console.log(`   - ${f.id}: ${f.error}`));
  }

  if (!isDryRun && results.success.length > 0) {
    console.log(`\n📁 Images saved to: ${OUTPUT_DIR}`);
    console.log('\nNext steps:');
    console.log('1. Review generated images');
    console.log('2. Run: node scripts/update-placeholders.js');
    console.log('   to update ImagePlaceholder components with actual images');
  }

  console.log('\n');
}

main().catch(err => {
  log(`Unexpected error: ${err.message}`, 'error');
  process.exit(1);
});
