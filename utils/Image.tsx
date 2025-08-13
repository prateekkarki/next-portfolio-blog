import React, { useState } from 'react';

interface ImageProps {
  src: string;
  blurUrl: string;
  alt?: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
}

const Image: React.FC<ImageProps> = ({
  src,
  blurUrl,
  alt = '',
  title,
  className = '',
  width,
  height,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blurred background image */}
      {!isLoaded && (
        <img
          src={blurUrl}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            transform: 'scale(1.1)',
          }}
        />
      )}
      {/* Main image */}
      <img
        src={hasError ? blurUrl : src}
        alt={alt}
        title={title}
        width={isLoaded ? width : 0}
        height={isLoaded ? height : 0}
        className={`relative z-10 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default Image;
