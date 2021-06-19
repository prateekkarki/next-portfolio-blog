import tw, { styled, css } from 'twin.macro';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  ${tw`bg-light-200 dark:bg-dark-200 mx-auto overflow-visible rounded-lg p-6`}
  border: 1px solid #ccc;
  overflow: auto;
  height: fit-content;

  &.ReactModal__Content {
    opacity: 0;
    transform: scale(0);
    transition: all 350ms ease-in-out;
    transform-origin: center;
    padding: 1.5rem;
    max-width:85%;
    box-shadow: #161d26 2px 2px 4px 1px;
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

export const CloseButton = styled.button([
  tw`absolute inset-0 top-0 right-0 left-auto`,
  css`
    width: 28px;
    height: 28px;
    transform: translate(50%, -50%)
  `,
]);

export const customStyles = {
  overlay: {
    backgroundColor: 'rgba(22, 29, 38, 0.9)',
    border: 'none',
  },
  content: {
    border: 'none',
    position: 'relative',
    overflow: 'visible',
  },
};
