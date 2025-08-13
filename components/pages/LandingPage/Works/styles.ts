import tw, { css, styled } from 'twin.macro';

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
