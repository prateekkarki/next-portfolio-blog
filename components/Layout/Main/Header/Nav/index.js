import { useState, Fragment } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

import Link from 'next/link';
import tw, { theme as twinTheme } from 'twin.macro';
import { useTheme } from 'next-themes';
import ActiveLink from './ActiveLink';
import { MainNav, MobileNav, NavTrigger, MainLogo } from './styles';
import SettingButtons from './SettingButtons';

const Nav = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { theme } = useTheme();
  const AllLinks = () => (
    <Fragment>
      <ActiveLink href="/about" as="/about">
        About
      </ActiveLink>
      <ActiveLink href="/blog" as="/blog">
        Blog
      </ActiveLink>
      <SettingButtons />
    </Fragment>
  );

  return (
    <Fragment>
      <div
        css={tw`
          bg-mainLight-200 dark:bg-mainDark-200 
          container relative mx-auto px-3
          flex flex-row items-center justify-between py-4 z-10
        `}
      >
        <Link href="/#home" passHref>
          <a href="/#home" css={tw`font-black text-primary`}>
            <MainLogo src="/images/logo/logo.svg" alt="logo" />
          </a>
        </Link>
        <div css={tw`flex items-center justify-center`}>
          <MainNav>
            <AllLinks />
          </MainNav>
        </div>
        <NavTrigger>
          <Hamburger
            tw="block sm:hidden"
            color={
              theme === 'dark'
                ? twinTheme`colors.mainDark.700`
                : twinTheme`colors.mainLight.700`
            }
            rounded
            toggled={isExpanded}
            toggle={setExpanded}
          />
        </NavTrigger>
      </div>

      <MobileNav
        isExpanded={isExpanded}
        onClick={() => {
          setExpanded(false);
        }}
      >
        <AllLinks />
      </MobileNav>
    </Fragment>
  );
};

export default Nav;
