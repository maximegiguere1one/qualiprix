import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: string;
  priority?: boolean;
}

const SmartImage = ({ 
  src, 
  alt, 
  className, 
  aspectRatio,
  priority = false,
  ...props 
}: SmartImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  
  useEffect(() => {
    // Try to use WebP if browser supports it
    const img = new Image();
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Test if WebP version exists
    img.onload = () => setImageSrc(webpSrc);
    img.onerror = () => setImageSrc(src);
    img.src = webpSrc;
  }, [src]);
  
  return (
    <div className={cn("relative overflow-hidden", aspectRatio && `aspect-${aspectRatio}`)}>
      {/* Blur placeholder */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/30 animate-pulse transition-opacity duration-500",
          isLoaded ? 'opacity-0' : 'opacity-100'
        )} 
      />
      
      <img 
        src={imageSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-500 w-full h-full",
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        {...props}
      />
    </div>
  );
};

export default SmartImage;
