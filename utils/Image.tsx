import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

interface ImageProps {
  src: string;
  blurUrl: string;
  alt?: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  centered?: boolean;
}

const ImageContainer = styled.div(() => [
  tw`relative overflow-visible w-full h-full`,
]);

const ImageRender = styled.img(() => [
  tw`object-contain max-w-full max-h-full w-full h-full transition-opacity duration-300
`,
]);

const ImageWrapper = styled.div<{ centered?: boolean }>(({ centered }) => [
  tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform object-contain max-w-full max-h-full w-full h-full transition-opacity duration-300`,
  centered ? tw`flex items-center justify-center` : tw`block`,
]);

const Image: React.FC<ImageProps> = ({
  src,
  blurUrl,
  alt = '',
  title,
  width,
  height,
  centered,
}) => {
  const isSvg = src.endsWith('.svg');

  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (!isLoaded) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    }
  }, [isLoaded]);
  const isImageAvailable = isSvg || isLoaded;

  return (
    <ImageContainer>
      <ImageWrapper centered={centered}>
        {/* Blurred background image */}
        {isImageAvailable ? null : (
          <ImageRender
            tw="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform object-contain object-center max-w-full max-h-full w-full h-full transition-opacity duration-300"
            src={blurUrl}
            alt="Blurred image"
          />
        )}
        {/* Main image */}
        <ImageRender
          src={src}
          alt={alt}
          title={title}
          tw="z-10"
          style={{
            opacity: isImageAvailable ? 1 : 1,
            width,
            height,
          }}
          onLoad={handleLoad}
        />
      </ImageWrapper>
    </ImageContainer>
  );
};

export default Image;
