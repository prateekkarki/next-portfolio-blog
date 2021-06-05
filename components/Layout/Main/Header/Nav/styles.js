import tw, { styled, css, theme } from 'twin.macro';

export const MainNav = styled.nav(
  tw`hidden sm:flex text-lg flex-col items-center sm:flex-row sm:mr-4`
);

export const MobileNav = styled.nav(({ isExpanded }) => [
  tw`flex sm:hidden w-full absolute bg-light-200 dark:bg-dark-200 text-lg flex-col items-center`,
  tw`transform ease-out transition-all z-0`,
  isExpanded ? tw`translate-y-0` : tw`-translate-y-full`,
  css`top: ${theme`spacing.header`}; transition-duration: 500ms;`,
]);

export const NavTrigger = styled.button([
  css`
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  `,
  tw`absolute flex sm:hidden flex-col focus:outline-none p-4`,
]);

export const MainLogo = styled.img(tw`h-12 px-3 sm:px-0`);
