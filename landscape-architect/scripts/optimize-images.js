import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory to optimize
const inputDir = path.join(__dirname, '../public');

// Allowed extensions
const allowedExtensions = ['.jpg', '.jpeg', '.png'];

const optimizeAndOverwrite = async (dir) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recurse into subdirectories
      await optimizeAndOverwrite(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      const baseName = path.basename(file, ext);

      if (allowedExtensions.includes(ext)) {
        const webpPath = path.join(dir, `${baseName}.webp`);

        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(webpPath);

          fs.unlinkSync(fullPath); // Delete original file
          console.log(`✔ Converted and replaced: ${file} → ${baseName}.webp`);
        } catch (err) {
          console.error(`✖ Error processing ${file}:`, err);
        }
      }
    }
  }
};

optimizeAndOverwrite(inputDir).then(() => {
  console.log('✅ All eligible images have been converted to .webp and originals deleted.');
});
