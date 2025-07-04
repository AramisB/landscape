import { useEffect } from 'react';

const ImagePreloader = ({ images = [] }) => {
  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.allSettled(promises);
        console.log('Critical images preloaded successfully');
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };

    if (images.length > 0) {
      preloadImages();
    }
  }, [images]);

  return null; // This component doesn't render anything
};

export default ImagePreloader; 