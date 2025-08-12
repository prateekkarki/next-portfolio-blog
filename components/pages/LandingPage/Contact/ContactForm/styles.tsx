import tw, { styled } from 'twin.macro';

interface InputStyleProps {
  hasError?: boolean;
}

const inputStyles = ({ hasError }: InputStyleProps) => [
  tw`
    appearance-none block w-full
    bg-light-100 border-light-400 
    text-gray-700 border rounded py-3 px-4 mb-3 leading-tight
    transition-transform transform duration-200 ease-in-out focus:(translate-x-1)
  `,
  hasError && tw`border-secondary`,
];

export const ContactInput = styled.input<InputStyleProps>(inputStyles);
export const ContactTextarea = styled.textarea<InputStyleProps>(inputStyles);

export const ContactLabel = styled.label<InputStyleProps>(({ hasError }) => [
  tw`block uppercase tracking-wide text-primary text-xs font-bold mb-2`,
  hasError && tw`text-secondary`,
]);

export const ContactSelect = styled.input<InputStyleProps>(inputStyles);
