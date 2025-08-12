import React, { ReactElement } from 'react';
import tw from 'twin.macro';

interface FooterLinkProps {
  href: string;
  label: string;
  [key: string]: any;
}

export const FooterLink = ({
  href,
  label,
  ...props
}: FooterLinkProps): ReactElement => (
  <li {...props}>
    <a
      css={tw`hover:(text-dark-primary dark:text-light-primary) text-primary`}
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {label}
    </a>
  </li>
);

export const Title = tw.h2`font-medium text-lg text-light-800 dark:text-dark-700`;
