import tw, { styled, css } from 'twin.macro';

export const MainNav = styled.nav(
  tw`hidden sm:flex text-lg flex-col items-center sm:flex-row sm:mr-4`
);

export const MobileNav = styled.nav(({ isExpanded }) => [
  css`
    top: 72px;
  `,
  tw`flex sm:hidden w-full absolute bg-main-700 text-lg flex-col items-center`,
  tw`duration-700 transform ease-out transition-all z-0`,
  isExpanded ? tw`translate-y-0` : tw`-translate-y-full`,
]);

export const NavTrigger = styled.button([
  css`
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  `,
  tw`absolute flex sm:hidden flex-col focus:outline-none p-4`,
]);
