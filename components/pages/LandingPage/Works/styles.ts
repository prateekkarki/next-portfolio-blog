import tw, { css, styled } from 'twin.macro';

export const ProjectImageWindow = styled.div<{ backgroundColor?: string }>(
  ({ backgroundColor }) => [
    tw`rounded-tl-md rounded-bl-md w-full h-full p-4 overflow-hidden relative flex items-center justify-center`,
    css`
      background: ${backgroundColor};
    `,
    css`
      img {
        width: 100%;
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
  ]
);
