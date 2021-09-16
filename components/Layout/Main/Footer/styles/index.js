import tw from 'twin.macro';

export const FooterLink = ({ href, label, ...props }) => (
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
