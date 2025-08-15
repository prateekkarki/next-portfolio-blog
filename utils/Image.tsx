import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';

interface ImageProps {
  src: string;
  blurUrl: string;
  alt?: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
}

const ImageContainer = styled.div(() => [
  tw`relative overflow-hidden w-full h-full`,
]);

const ImageRender = styled.img(() => [
  tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform object-contain max-w-full max-h-full w-full h-full transition-opacity duration-300
`,
]);

const Image: React.FC<ImageProps> = ({
  src,
  blurUrl,
  alt = '',
  title,
  width,
  height,
}) => {
  const isSvg = src.endsWith('.svg');

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const isImageAvailable = isSvg || isLoaded;

  const handleError = () => {
    setHasError(true);
  };
  return (
    <ImageContainer>
      {/* Blurred background image */}
      {!isImageAvailable && (
        <ImageRender
          src={blurUrl}
          alt=""
          tw="opacity-100"
          style={{
            opacity: isImageAvailable ? 0 : 1,
          }}
        />
      )}
      {/* Main image */}
      <ImageRender
        src={hasError ? blurUrl : src}
        alt={alt}
        title={title}
        tw="z-10"
        style={{
          opacity: isImageAvailable ? 1 : 1,
          width,
          height,
        }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </ImageContainer>
  );
};

export default Image;
