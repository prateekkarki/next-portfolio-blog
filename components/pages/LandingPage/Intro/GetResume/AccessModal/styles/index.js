import tw, { styled, css, theme } from 'twin.macro';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  ${tw`bg-light-400 dark:bg-dark-400 mx-auto overflow-visible rounded-lg p-6`}
  border: 1px solid #ccc;
  overflow: auto;
  height: fit-content;

  &.ReactModal__Content {
    opacity: 0;
    transform: scale(0);
    transition: all 350ms ease-in-out;
    transform-origin: center;
    padding: 1.5rem;
    width:530px;
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

  .formsContainer{
    display: flex;
    width:482px;
    max-width:100%;
    transition: transform 400ms ease-in-out;
    transform: translateX(-100%);
    .accessForms{
      width: 100%;
      label {
        display: block;
        width: 482px;
        max-width: 100%;
      }
    }
  }

  & .codeRequestForm{
    &-enter-done, &-enter-active{
      transform: translateX(0);
    }
    &-exit-done, &-exit-active{
      transform: translateX(-100%);
    }
  }
`;

export const Label = tw.label`font-normal text-dark-200 dark:text-light-200`;

export const SubmitArrow = styled.button(({ isSubmitting }) => [
  tw`width[44px] m-1 p-2 outline-none focus:outline-none text-sm bg-success hover:bg-light-success text-dark-800 rounded-lg font-semibold uppercase flex items-center justify-center`,
  isSubmitting && tw`bg-light-400 dark:bg-dark-400 cursor-not-allowed`,
]);

export const SuggestionButton = tw.button`inline outline-none focus:outline-none font-normal border-b-2 text-dark-primary border-dark-primary border-dashed
hover:(border-dark-200 text-dark-200)
dark:(
  text-primary border-primary
  hover:(border-light-primary text-light-primary)
)`;

export const SuggestionText = tw.p`inline font-light text-dark-200 dark:text-light-200`;

export const CloseButton = styled.button([
  tw`absolute inset-0 top-0 right-0 left-auto`,
  css`
    width: 28px;
    height: 28px;
    transform: translate(50%, -50%);
    .light &{
      width: 32px;
      height: 32px;
      border: 2px solid ${theme`colors.dark.100`};
      border-radius: 50%;
      background-color: ${theme`colors.dark.100`};
    }
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
