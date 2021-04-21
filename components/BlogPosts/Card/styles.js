import tw, { styled, css } from 'twin.macro';

export const Tag = tw.span`
  bg-mainLight-400 dark:bg-mainDark-400 text-mainLight-500 dark:text-mainDark-600 
  inline-block rounded-full 
  px-3 py-1 mr-2 mb-2
  text-sm font-semibold 
`;

export const ImageWindow = styled.div([
  tw`rounded-t-md w-full h-64 overflow-hidden cursor-pointer`,
  css`
    img {
      width: 100%;
      height: 16rem;
      object-fit: cover;
      object-position: center;
      transition: all 500ms cubic-bezier(0, 0, 0.2, 1);
      border-top-left-radius: 0.375rem;
      border-top-right-radius: 0.375rem;
      transform-origin: center;
      &:hover {
        transform: scale(1.25);
      }
    }
  `,
]);
