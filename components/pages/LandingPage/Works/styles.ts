import tw, { css, styled, theme } from 'twin.macro';

export const ProjectImageWindow = styled.div<{ backgroundColor?: string }>(
  ({ backgroundColor }) => [
    tw`w-full h-full p-4 overflow-hidden relative flex items-center justify-center`,
    css`
        background: ${backgroundColor};
      `,
    css`
      div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
        img {
          width: 100%;
          object-fit: contain;
          object-position: center;
          transition: all 500ms cubic-bezier(0, 0, 0.2, 1);
          border-top-left-radius: 0.375rem;
          border-top-right-radius: 0.375rem;
          transform-origin: center;
          max-height: 100%;
        }
      `,
  ]
);

export const ProjectContainer = styled.div(() => [
  tw`bg-light-200 dark:bg-dark-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`,
]);

export const ProjectGalleryModal = styled.div(() => [
  tw`relative max-w-7xl w-full min-height[100px] max-height[70vh] h-auto`,
  css`
    aspect-ratio: 0.7;
    @media screen and (min-width: 769px) {
      aspect-ratio: 1;
    }
    @media screen and (min-width: 1025px) {
      aspect-ratio: 1.77;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: ${theme`colors.primary`};
    }
    .swiper-pagination-bullet {
      bottom: 0px;
      background: ${theme`colors.primary`};
    }
    .swiper-pagination {
      width: auto;
      bottom: 0px;
      background: ${theme`colors.gray.700`};
      border-radius: 50px;
      padding: 0 5px;
      left: 50%;
      transform: translateX(-50%);
    }

    .swiper-wrapper{
      height: calc(100% - 32px);
    }
  `,
]);
