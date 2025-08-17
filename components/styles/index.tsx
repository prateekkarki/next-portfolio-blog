import React, { ReactElement } from 'react';
import tw, { css, styled } from 'twin.macro';

export const Title = tw.h2`
  font-bold text-light-800 dark:text-dark-800 whitespace-nowrap 
  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-huge
`;

export const Flex = tw.div`block md:flex`;

export const Container = tw.div`container mx-auto`;

export const MainBg = tw.div`bg-light-200 dark:bg-dark-200`;

export const Text = styled.p([
  tw`mt-6 text-light-600 dark:text-dark-600 
  text-sm md:text-base lg:text-lg leading-7`,
]);

interface ButtonStyleProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const buttonStyles = ({ variant, size }: ButtonStyleProps) => [
  tw`bg-transparent cursor-pointer inline-block`,
  css`
    div {
      ${tw`
        relative overflow-hidden
        font-semibold text-base text-light-100 text-center
        w-40 py-4 rounded-full
        transform transition-all duration-200 ease-in-out translate-y-0
        flex items-center justify-center gap-1
      `}
      ${
        size === 'small' && tw`w-auto py-2 px-4 text-sm whitespace-nowrap gap-1`
      }
      ${size === 'medium' && tw`w-32 py-3 `}
      ${size === 'large' && tw`w-40 py-4 gap-2`}

      ${variant === 'primary' && tw`bg-primary`}
      ${variant === 'secondary' && tw`bg-secondary`}
      ${!variant && tw`bg-primary`}

      &:after {
        ${tw`bg-light-100 absolute top-0 opacity-25 `}
        content: '';
        left: -60%;
        width: 50%;
        height: 100%;
        transform: skewX(-45deg);
        transition: all 700ms cubic-bezier(0.19, 1, 0.22, 1);
        @supports (-webkit-touch-callout: none) {
          display:none;
        }
      }

      @media not all and (min-resolution:.001dpcm) { 
        @supports (-webkit-appearance:none) and (stroke-color:transparent) { 
          &:after {
            display:none;
          }
        } 
      }
    }
    &:hover {
      div {
        ${tw`-translate-y-1 `}
        will-change: transform;
        &:after {
          left: 110%;
        }
      }
    }
  `,
];

export const Link = styled.a(
  tw`font-semibold text-dark-primary hover:text-dark-secondary dark:(text-primary hover:text-secondary)`
);

export const PseudoBigLink = styled.a<ButtonStyleProps>(buttonStyles);
export const PseudoBigButton = styled.button<ButtonStyleProps>(buttonStyles);

interface BigLinkProps extends ButtonStyleProps {
  children: React.ReactNode;
  [key: string]: any;
}

interface BigButtonProps extends ButtonStyleProps {
  children: React.ReactNode;
  [key: string]: any;
}

export const BigLink = React.forwardRef<HTMLAnchorElement, BigLinkProps>(
  ({ children, variant, size, ...others }, ref) => (
    <PseudoBigLink variant={variant} size={size} ref={ref} {...others}>
      <div>{children}</div>
    </PseudoBigLink>
  )
);

export const BigButton = ({
  children,
  variant,
  ...others
}: BigButtonProps): ReactElement => (
  <PseudoBigButton variant={variant} {...others}>
    <div>{children}</div>
  </PseudoBigButton>
);
