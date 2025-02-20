import fs from 'fs';
import { createCanvas } from 'canvas';
import path from 'path';

const images = [
  { name: 'placeholder-hero.jpg', width: 1920, height: 1080, label: 'Hero Image' },
  { name: 'placeholder-project1.jpg', width: 800, height: 600, label: 'Project 1' },
  { name: 'placeholder-project2.jpg', width: 800, height: 600, label: 'Project 2' },
  { name: 'placeholder-service1.jpg', width: 600, height: 400, label: 'Service 1' },
  { name: 'placeholder-service2.jpg', width: 600, height: 400, label: 'Service 2' },
  { name: 'placeholder-service3.jpg', width: 600, height: 400, label: 'Service 3' },
  { name: 'placeholder-blog1.jpg', width: 800, height: 450, label: 'Blog 1' },
  { name: 'placeholder-blog2.jpg', width: 800, height: 450, label: 'Blog 2' },
  { name: 'placeholder-team1.jpg', width: 400, height: 400, label: 'Team Member 1' },
  { name: 'placeholder-team2.jpg', width: 400, height: 400, label: 'Team Member 2' },
  { name: 'placeholder-about-hero.jpg', width: 1920, height: 1080, label: 'About Hero' },
  { name: 'placeholder-project-detail1.jpg', width: 1200, height: 800, label: 'Project Detail 1' },
  { name: 'placeholder-project-detail2.jpg', width: 800, height: 600, label: 'Project Detail 2' },
  { name: 'placeholder-project-detail3.jpg', width: 800, height: 600, label: 'Project Detail 3' },
  { name: 'placeholder-avatar1.jpg', width: 200, height: 200, label: 'Avatar 1' },
  { name: 'placeholder-avatar2.jpg', width: 200, height: 200, label: 'Avatar 2' },
];

const publicDir = './public';

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

function generateImage(config) {
  const canvas = createCanvas(config.width, config.height);
  const ctx = canvas.getContext('2d');

  // Generate a unique background color based on the image name
  const hue = Array.from(config.name).reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360;
  ctx.fillStyle = `hsl(${hue}, 70%, 80%)`;
  ctx.fillRect(0, 0, config.width, config.height);

  // Add a grid pattern
  ctx.strokeStyle = `hsl(${hue}, 70%, 75%)`;
  ctx.lineWidth = 2;
  const gridSize = 30;
  
  for (let x = 0; x < config.width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, config.height);
    ctx.stroke();
  }
  
  for (let y = 0; y < config.height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(config.width, y);
    ctx.stroke();
  }

  // Add dimensions text
  ctx.font = `${Math.min(config.width, config.height) * 0.05}px Arial`;
  ctx.fillStyle = `hsl(${hue}, 70%, 30%)`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Draw label
  ctx.fillText(
    config.label,
    config.width / 2,
    config.height / 2 - 20
  );
  
  // Draw dimensions
  ctx.fillText(
    `${config.width} x ${config.height}`,
    config.width / 2,
    config.height / 2 + 20
  );

  return canvas;
}

// Generate and save all images
images.forEach(image => {
  const canvas = generateImage(image);
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(publicDir, image.name), buffer);
  console.log(`Generated: ${image.name}`);
}); 