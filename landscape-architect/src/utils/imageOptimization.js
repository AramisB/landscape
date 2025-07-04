// Image optimization utilities

// WebP support detection
export const supportsWebP = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

// Generate responsive image sizes
export const generateImageSizes = (originalWidth, originalHeight) => {
  const sizes = [
    { width: 320, height: Math.round((320 * originalHeight) / originalWidth) },
    { width: 640, height: Math.round((640 * originalHeight) / originalWidth) },
    { width: 768, height: Math.round((768 * originalHeight) / originalWidth) },
    { width: 1024, height: Math.round((1024 * originalHeight) / originalWidth) },
    { width: 1280, height: Math.round((1280 * originalHeight) / originalWidth) },
    { width: 1920, height: Math.round((1920 * originalHeight) / originalWidth) }
  ];
  
  return sizes.filter(size => size.width <= originalWidth);
};

// Generate srcSet for responsive images
export const generateSrcSet = (imagePath, sizes) => {
  if (!imagePath || imagePath.startsWith('data:') || imagePath.startsWith('http')) {
    return imagePath;
  }

  // For now, return the original image
  // In production, you'd generate multiple sizes and formats
  return imagePath;
};

// Get appropriate image format based on browser support
export const getOptimalImageFormat = (imagePath) => {
  if (!imagePath) return imagePath;
  
  // Check if WebP is supported
  if (supportsWebP()) {
    // Convert to WebP if possible
    return imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  
  return imagePath;
};

// Generate sizes attribute for responsive images
export const getSizesAttribute = (breakpoints = {}) => {
  const defaultBreakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  };
  
  const merged = { ...defaultBreakpoints, ...breakpoints };
  
  return Object.entries(merged)
    .map(([breakpoint, width]) => `(min-width: ${width}) ${width}`)
    .join(', ') + ', 100vw';
};

// Preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Batch preload images
export const preloadImages = async (imageUrls) => {
  const promises = imageUrls.map(url => preloadImage(url));
  return Promise.allSettled(promises);
};

// Generate placeholder for images
export const generatePlaceholder = (width = 400, height = 300, text = 'Loading...') => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <rect width="${width}" height="${height}" fill="#f3f4f6"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial" font-size="16">${text}</text>
    </svg>
  `;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

// Image compression quality based on device
export const getImageQuality = () => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (connection) {
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return 0.6;
    } else if (connection.effectiveType === '3g') {
      return 0.8;
    }
  }
  
  return 0.9; // Default quality
};

// Lazy loading configuration
export const lazyLoadingConfig = {
  rootMargin: '50px 0px',
  threshold: 0.01,
  fallback: true
};

// Image optimization settings
export const imageOptimizationSettings = {
  formats: ['webp', 'avif', 'jpg'],
  qualities: {
    webp: 85,
    avif: 80,
    jpg: 85
  },
  sizes: [320, 640, 768, 1024, 1280, 1920],
  placeholder: true,
  lazy: true
}; 