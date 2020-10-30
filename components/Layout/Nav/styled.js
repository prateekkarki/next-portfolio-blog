import tw, { styled, css } from 'twin.macro';

export const MainNav = styled.nav(
  tw`hidden sm:flex text-lg flex-col items-center sm:flex-row sm:mr-4`
);

export const MobileNav = styled.nav([
  css`
    top: 128px;
    transform: translateY(-100%);
  `,
  tw`flex sm:hidden w-full absolute bg-main-light text-lg flex-col items-center`,
  tw`duration-700 ease-out transition-all z-0`,
]);

export const NavTrigger = styled.button([
  css`
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  `,
  tw`absolute flex sm:hidden flex-col focus:outline-none p-4`,
]);

export const Line = tw.span`w-5 h-px mb-1 bg-secondary duration-300 ease-out transition-all`;
