import tw, { styled } from 'twin.macro';

export const Title = tw.h1`
  font-bold text-white whitespace-no-wrap 
  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-huge
`;

const inputStyles = tw`
  appearance-none block w-full bg-gray-200
  text-gray-700 border border-light rounded py-3 px-4 mb-3
  leading-tight focus:(bg-white)
`;

export const ContactInput = styled.input(({ hasError }) => [
  inputStyles,
  hasError && tw`border-secondary`,
]);

export const ContactTextarea = styled.textarea(({ hasError }) => [
  inputStyles,
  hasError && tw`border-secondary`,
]);

export const ContactLabel = styled.label(({ hasError }) => [
  tw`block uppercase tracking-wide text-primary text-xs font-bold mb-2`,
  hasError && tw`text-secondary`,
]);

const BigLink = tw.a`
  w-40 py-4 block rounded-full
  font-semibold text-base text-white text-center
`;

export const PrimaryLink = tw(
  BigLink
)`bg-primary shadow-primary-default hover:shadow-primary-focus`;
export const SecondaryLink = tw(
  BigLink
)`bg-secondary shadow-secondary-default hover:shadow-secondary-focus`;

const BigButton = tw.button`
  w-40 py-4 block rounded-full
  font-semibold text-base text-white text-center
`;
export const PrimaryButton = tw(
  BigButton
)`bg-primary shadow-primary-default hover:shadow-primary-focus`;
export const SecondaryButton = tw(
  BigButton
)`bg-secondary shadow-secondary-default hover:shadow-secondary-focus`;
