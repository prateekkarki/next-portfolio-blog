import React, { useRef } from 'react';

import Link from 'next/link';
import tw from 'twin.macro';

import ActiveLink from './ActiveLink';
import { MainNav, MobileNav, NavTrigger, Line } from './styled';

const Nav = () => {
  let isExpanded = false;
  const mobileNavRef = useRef(null);
  const mobileNavTrigger = useRef(null);

  const expandMobileNav = () => {
    const mNavLines = mobileNavTrigger.current.children;
    if (isExpanded) {
      mobileNavRef.current.style.transform = 'translateY(-100%)';
      mNavLines[0].style.transform = 'rotate(0)';
      mNavLines[1].style.opacity = '1';
      mNavLines[2].style.transform = 'rotate(0) translate(0,0)';
      isExpanded = false;
    } else {
      mobileNavRef.current.style.transform = 'translateY(0)';
      mNavLines[0].style.transform = 'rotate(45deg)';
      mNavLines[1].style.opacity = '0';
      mNavLines[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
      isExpanded = true;
    }
  };

  const AllLinks = () => (
    <>
      <ActiveLink href="/about" as="/about">
        About
      </ActiveLink>
      <ActiveLink href="/blog" as="/blog">
        Blog
      </ActiveLink>
    </>
  );

  return (
    <>
      <div
        css={tw`
          container bg-main-light relative mx-auto px-3
          flex flex-col sm:flex-row items-center justify-between py-4 z-10
        `}
      >
        <h3 css={tw`text-6xl uppercase`}>
          <Link href="/#home" passHref>
            <a css={tw`font-black text-primary`}>PK.</a>
          </Link>
        </h3>
        <div css={tw`flex items-center justify-center`}>
          <MainNav>
            <AllLinks />
          </MainNav>
        </div>

        <NavTrigger
          type="button"
          onClick={expandMobileNav}
          ref={mobileNavTrigger}
        >
          <Line />
          <Line />
          <Line />
        </NavTrigger>
      </div>

      <MobileNav ref={mobileNavRef}>
        <AllLinks />
      </MobileNav>
    </>
  );
};

export default Nav;
