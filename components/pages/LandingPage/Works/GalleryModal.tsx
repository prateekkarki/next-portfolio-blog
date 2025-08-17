import React, { ComponentType, useRef, useState } from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Keyboard,
  EffectCreative,
  Zoom,
} from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import tw, { styled } from 'twin.macro';
import { cloudinaryLoader } from '@/utils';
import Image from '@/utils/Image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaTimes, FaSearchPlus, FaSearchMinus, FaUndo } from 'react-icons/fa';
import { NextImage } from '@/types';
import { ProjectGalleryModal } from './styles';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: NextImage[];
  projectTitle: string;
}

const StyledModal = styled(Modal as unknown as ComponentType<any>)`
  ${tw`bg-light-200 dark:bg-dark-200 w-11/12 max-w-xl mx-auto overflow-auto rounded-lg p-6`}
  border: 1px solid #ccc;
  overflow: auto;
  height: fit-content;

  &.ReactModal__Content {
    opacity: 0;
    transform: scale(0);
    transition: all 350ms ease-in-out;
    transform-origin: center;
    :focus-visible {
      outline: none;
      border: none;
    }
  }

  &.ReactModal__Content--after-open {
    opacity: 1;
    transform: scale(1);
  }

  &.ReactModal__Content--before-close {
    opacity: 0;
    transform: scale(0);
  }
`;

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  images,
  projectTitle,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentZoom, setCurrentZoom] = useState(1);

  // Disable body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleZoomIn = () => {
    if (swiperRef.current && swiperRef.current.zoom) {
      swiperRef.current.zoom.in();
      setCurrentZoom((prev) => Math.min(prev * 1.5, 4));
    }
  };

  const handleZoomOut = () => {
    if (swiperRef.current && swiperRef.current.zoom) {
      swiperRef.current.zoom.out();
      setCurrentZoom((prev) => Math.max(prev / 1.5, 0.5));
    }
  };

  const handleResetZoom = () => {
    if (swiperRef.current && swiperRef.current.zoom) {
      // Reset zoom by setting it back to 1
      swiperRef.current.zoom.in(1);
      setCurrentZoom(1);
    }
  };

  const onSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 1000,
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          background: 'transparent',
          padding: 0,
          maxWidth: '90vw',
          maxHeight: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'visible',
        },
      }}
      ariaHideApp={false}
    >
      <ProjectGalleryModal>
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          css={tw`absolute -top-4 -right-4 z-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
          aria-label="Close gallery"
        >
          <FaTimes />
        </button>

        {/* Zoom control buttons */}
        <div
          css={tw`absolute -top-4 left-auto right-8 z-10 flex gap-2 lg:hidden`}
        >
          <button
            type="button"
            onClick={handleZoomIn}
            disabled={currentZoom >= 4}
            css={tw`bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label="Zoom in"
          >
            <FaSearchPlus />
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            disabled={currentZoom <= 0.5}
            css={tw`bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label="Zoom out"
          >
            <FaSearchMinus />
          </button>
          <button
            type="button"
            onClick={handleResetZoom}
            disabled={currentZoom === 1}
            css={tw`bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label="Reset zoom"
          >
            <FaUndo />
          </button>
        </div>

        {/* Swiper carousel */}
        <Swiper
          modules={[Zoom, Navigation, Pagination, Keyboard, EffectCreative]}
          spaceBetween={0}
          slidesPerView={1}
          zoom={{
            maxRatio: 4,
            minRatio: 0.5,
            panOnMouseMove: true,
            toggle: true,
            limitToOriginalSize: true,
          }}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          grabCursor
          effect="creative"
          creativeEffect={{
            prev: {
              scale: 0.2,
              shadow: false,
              translate: [0, 0, -1],
            },
            next: {
              translate: ['110%', 5, 0],
            },
          }}
          loop={images.length > 1}
          css={tw`w-full h-full `}
          onSwiper={onSwiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.src}>
              <div className="swiper-zoom-container" tw="w-full h-full ">
                <div tw="flex items-center justify-center w-full h-full">
                  <Image
                    src={cloudinaryLoader({
                      src: image.src,
                      width: image.width,
                    })}
                    alt={`${projectTitle} - Image ${index + 1}`}
                    title={`${projectTitle} - Image ${index + 1}`}
                    width={image.width}
                    height={image.height}
                    blurUrl={cloudinaryLoader({
                      src: image.src,
                      width: 300,
                      blur: true,
                      blurAmount: 100,
                      quality: 'auto:low',
                    })}
                    centered
                    css={tw`max-w-full max-h-full object-contain rounded-lg`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ProjectGalleryModal>
    </StyledModal>
  );
};
