import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import tw from 'twin.macro';
import { throttle } from 'lodash';

import Nav from './Nav/Nav';

function Header() {
  const lastScrollTop = useRef(0);
  const isUp = useRef(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const scrollCheck = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {
        if (!isUp.current && st > headerRef.current.clientHeight) {
          anime({
            targets: [
              headerRef.current.parentElement.querySelectorAll('header'),
            ],
            translateY: [0, '-100%'],
            easing: 'easeInOutQuad',
            duration: 400,
            begin: () => {
              isUp.current = true;
            },
          });
        }
      } else if (isUp.current) {
        anime({
          targets: [headerRef.current],
          translateY: ['-100', '0%'],
          easing: 'easeInOutQuad',
          duration: 400,
          begin: () => {
            isUp.current = false;
          },
        });
      }
      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    const throttled = throttle(scrollCheck, 10, {
      leading: true,
      trailing: false,
    });

    window.addEventListener('scroll', throttled);

    return () => {
      window.removeEventListener('scroll', throttled);
    };
  });

  return (
    <header
      css={tw`bg-main-light z-10 sticky top-0 shadow-2xl`}
      ref={headerRef}
    >
      <Nav />
    </header>
  );
}

export default Header;
