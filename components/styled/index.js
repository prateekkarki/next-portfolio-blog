import tw, { css, styled } from 'twin.macro';

export const Title = tw.h1`
  font-bold text-main-100 whitespace-no-wrap 
  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-huge
`;

export const Text = styled.p([
  tw`text-main-400 text-sm md:text-base lg:text-lg leading-7`,
  css`
    &+&{
      ${tw`mt-6`}
    }
  `,
]);

const inputStyles = ({ hasError }) => [
  tw`
    appearance-none block w-full bg-main-200
    text-gray-700 border border-main-200 rounded py-3 px-4 mb-3
    leading-tight focus:bg-main-100
    transform duration-200 ease-in-out focus:(translate-x-1)
  `,
  hasError && tw`border-secondary`,
];
export const ContactInput = styled.input(inputStyles);
export const ContactTextarea = styled.textarea(inputStyles);

export const ContactLabel = styled.label(({ hasError }) => [
  tw`block uppercase tracking-wide text-primary text-xs font-bold mb-2`,
  hasError && tw`text-secondary`,
]);

const buttonStyles = ({ variant }) => [
  tw`
    w-40 py-4 block rounded-full overflow-hidden relative
    font-semibold text-base text-main-100 text-center
    transform transition-all duration-200 ease-in-out translate-y-0 hover:-translate-y-1
  `,
  css`
    &:after {
      ${tw`bg-main-100 absolute top-0 opacity-25 `}
      content: '';
      left: -60%;
      width: 50%;
      height: 100%;
      transform: skewX(-45deg);
      transition: all 700ms cubic-bezier(0.19, 1, 0.22, 1);
    }
    &:hover {
      &:after {
        left: 110%;
      }
    }
  `,
  variant === 'primary' && tw`bg-primary`,
  variant === 'secondary' && tw`bg-secondary`,
  !variant && tw`bg-primary`,
];

export const BigLink = styled.a(buttonStyles);
export const BigButton = styled.button(buttonStyles);
