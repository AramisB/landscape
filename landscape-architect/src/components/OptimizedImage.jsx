import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OptimizedImage = ({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-family='Arial' font-size='16'%3ELoading...%3C/text%3E%3C/svg%3E",
  fallback = "/logo.jpeg",
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px', // Start loading 50px before the image comes into view
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority]);

  useEffect(() => {
    if (isInView) {
      console.log('[OptimizedImage] Attempting to load image:', src, 'alt:', alt);
    }
  }, [isInView, src, alt]);

  const handleLoad = () => {
    setIsLoaded(true);
    console.log('[OptimizedImage] Image loaded:', src, 'alt:', alt);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    console.error('[OptimizedImage] Image failed to load:', src, 'alt:', alt);
    onError?.();
  };

  // Generate responsive image sources
  const generateSrcSet = (imageSrc) => {
    if (!imageSrc || imageSrc.startsWith('data:') || imageSrc.startsWith('http')) {
      return imageSrc;
    }

    // For local images, we'll use the same source for now
    // In production, you'd want to generate multiple sizes
    return imageSrc;
  };

  const imageSrc = hasError ? fallback : (isInView ? src : placeholder);
  const srcSet = generateSrcSet(imageSrc);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        {!isLoaded && isInView && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gray-100 animate-pulse"
          />
        )}
      </AnimatePresence>

      <motion.img
        src={imageSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt || "Image"}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {/* Loading indicator */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-[var(--primary-green)] rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 