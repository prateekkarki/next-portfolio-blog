import tw, { styled, css } from 'twin.macro';

export const Tag = tw.span`
  bg-mainLight-400 dark:bg-mainDark-400 text-mainLight-500 dark:text-mainDark-600 
  inline-block rounded-full 
  px-3 py-1 mr-2 mb-2
  text-sm font-semibold 
`;

export const iconStyle = [
  tw`
    h-64 w-full mx-auto origin-center
    transition-all duration-500 ease-out transform 
  `,
  css`
    &:hover {
      transform: scale(1.1);
    }
  `,
];

export const IconContainer = tw.div`
  w-full text-center aspect-ratio[16 / 9] relative
  bg-mainLight-400 dark:bg-mainDark-400 
  text-mainLight-800 dark:text-mainDark-800 
  rounded-t-md overflow-hidden
`;

export const ImageWindow = styled.div([
  tw`rounded-t-md w-full overflow-hidden cursor-pointer relative`,
  css`
    aspect-ratio: 16 / 9;
    svg {
      width: 100%;
      aspect-ratio: 16 / 9;
    }
    img {
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      object-position: center;
      transition: all 500ms cubic-bezier(0, 0, 0.2, 1);
      border-top-left-radius: 0.375rem;
      border-top-right-radius: 0.375rem;
      transform-origin: center;
      &:hover {
        transform: scale(1.1);
      }
    }
  `,
]);

export const CardContainer = styled.div([
  tw`w-full overflow-hidden shadow-md hover:shadow-lg cursor-pointer`,
  css`
    &:hover {
      ${ImageWindow} {
        img {
          transform: scale(1.1);
        }
      }
      ${IconContainer} {
        svg {
          transform: scale(1.1);
        }
      }
    }
  `,
]);
