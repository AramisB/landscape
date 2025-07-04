import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../public/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization settings
const optimizationSettings = {
  jpeg: {
    quality: 75, // Lower quality to reduce size
    progressive: true,
    mozjpeg: true
  },
  png: {
    compressionLevel: 9, // Max compression
    palette: true,       // Use indexed colors (greatly reduces size)
  },
  webp: {
    quality: 70,         // Aggressive but still good quality
    effort: 6
  }
};

// Responsive image sizes
const responsiveSizes = [320, 640, 768, 1024, 1280, 1920];

// Get all image files recursively
function getImageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Optimize a single image
async function optimizeImage(inputPath) {
  try {
    const relativePath = path.relative(publicDir, inputPath);
    const dir = path.dirname(relativePath);
    const name = path.basename(inputPath, path.extname(inputPath));
    const ext = path.extname(inputPath).toLowerCase();
    
    console.log(`Optimizing: ${relativePath}`);
    
    // Create output directory structure
    const outputPath = path.join(outputDir, dir);
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }
    
    // Read image metadata
    const metadata = await sharp(inputPath).metadata();
    
    // Optimize original format
    const optimizedPath = path.join(outputPath, `${name}${ext}`);
    await sharp(inputPath)
      .jpeg(optimizationSettings.jpeg)
      .png(optimizationSettings.png)
      .toFile(optimizedPath);
    
    // Generate WebP version
    const webpPath = path.join(outputPath, `${name}.webp`);
    await sharp(inputPath)
      .webp(optimizationSettings.webp)
      .toFile(webpPath);
    
    // Generate responsive sizes
    for (const size of responsiveSizes) {
      if (size <= metadata.width) {
        const resizedName = `${name}-${size}w`;
        
        // Resize and optimize
        await sharp(inputPath)
          .resize(size, null, { withoutEnlargement: true })
          .jpeg(optimizationSettings.jpeg)
          .png(optimizationSettings.png)
          .toFile(path.join(outputPath, `${resizedName}${ext}`));
        
        // Resize and generate WebP
        await sharp(inputPath)
          .resize(size, null, { withoutEnlargement: true })
          .webp(optimizationSettings.webp)
          .toFile(path.join(outputPath, `${resizedName}.webp`));
      }
    }
    
    console.log(`✓ Optimized: ${relativePath}`);
    
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
  }
}

// Generate srcset string for responsive images
function generateSrcSet(imagePath, sizes) {
  const baseName = path.basename(imagePath, path.extname(imagePath));
  const ext = path.extname(imagePath);
  const dir = path.dirname(imagePath);
  
  return sizes
    .map(size => `${path.join(dir, `${baseName}-${size}w${ext}`)} ${size}w`)
    .join(', ');
}

// Generate picture element HTML
function generatePictureElement(imagePath, alt, className = '') {
  const baseName = path.basename(imagePath, path.extname(imagePath));
  const ext = path.extname(imagePath);
  const dir = path.dirname(imagePath);
  
  const webpSrcSet = generateSrcSet(imagePath.replace(ext, '.webp'), responsiveSizes);
  const originalSrcSet = generateSrcSet(imagePath, responsiveSizes);
  
  return `
<picture>
  <source srcset="${webpSrcSet}" type="image/webp">
  <source srcset="${originalSrcSet}" type="image/${ext === '.jpg' ? 'jpeg' : 'png'}">
  <img src="${imagePath}" alt="${alt}" class="${className}" loading="lazy">
</picture>`;
}

// Main optimization function
async function optimizeImages() {
  console.log('Starting image optimization...');
  
  const imageFiles = getImageFiles(publicDir);
  console.log(`Found ${imageFiles.length} images to optimize`);
  
  // Process images in batches to avoid memory issues
  const batchSize = 5;
  for (let i = 0; i < imageFiles.length; i += batchSize) {
    const batch = imageFiles.slice(i, i + batchSize);
    await Promise.all(batch.map(optimizeImage));
  }
  
  console.log('Image optimization complete!');
  
  // Generate optimization report
  const report = {
    totalImages: imageFiles.length,
    optimizedImages: imageFiles.length,
    responsiveSizes: responsiveSizes,
    outputDirectory: outputDir
  };
  
  fs.writeFileSync(
    path.join(outputDir, 'optimization-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('Optimization report saved to:', path.join(outputDir, 'optimization-report.json'));
}

// Run optimization
optimizeImages().catch(console.error); 