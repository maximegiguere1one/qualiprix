import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const OptimizedImage = ({ src, alt, className, ...props }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="relative overflow-hidden">
      {/* Blur placeholder */}
      <div 
        className={cn(
          "absolute inset-0 bg-muted animate-pulse transition-opacity duration-500",
          isLoaded ? 'opacity-0' : 'opacity-100'
        )} 
      />
      
      <img 
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
