import React, { useState, type ReactElement } from 'react';

import Link from 'next/link';
import tw from 'twin.macro';
import ActiveLink from './ActiveLink';
import { MainNav, MobileNav, MainLogo } from './styles';
import SettingButtons from './SettingButtons';
import Trigger from './Trigger';

const Nav = (): ReactElement => {
  const [isExpanded, setExpanded] = useState(false);
  const AllLinks = (): ReactElement => (
    <>
      <ActiveLink href="/about">About</ActiveLink>
      <ActiveLink href="/blog">Blog</ActiveLink>
      <SettingButtons />
    </>
  );

  return (
    <>
      <div
        css={tw`
          bg-light-200 dark:bg-dark-200 
          container relative mx-auto px-3 h-20
          flex flex-row items-center justify-between z-10
        `}
      >
        <Link href="/" passHref>
          <a css={tw`font-black text-primary`}>
            <MainLogo src="/images/logo/logo.svg" alt="logo" title="Logo" />
          </a>
        </Link>
        <div css={tw`flex items-center justify-center`}>
          <MainNav>
            <AllLinks />
          </MainNav>
        </div>
        <Trigger toggled={isExpanded} toggle={setExpanded} />
      </div>

      <MobileNav
        isExpanded={isExpanded}
        onClick={() => {
          setExpanded(false);
        }}
      >
        <AllLinks />
      </MobileNav>
    </>
  );
};

export default Nav;
