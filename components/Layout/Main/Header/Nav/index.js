import { useState, Fragment } from 'react';

import Link from 'next/link';
import tw from 'twin.macro';
import ActiveLink from './ActiveLink';
import { MainNav, MobileNav, MainLogo } from './styles';
import SettingButtons from './SettingButtons';
import Trigger from './Trigger';

const Nav = () => {
  const [isExpanded, setExpanded] = useState(false);
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
          bg-light-200 dark:bg-dark-200 
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
    </Fragment>
  );
};

export default Nav;
