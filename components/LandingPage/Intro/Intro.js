import React, { useRef, useEffect } from 'react';
import anime from 'animejs';
import Link from 'next/link';
import tw, { css } from 'twin.macro';

import Programmer from './Programmer';
import { BigLink } from '../../styled';

function Intro() {
  const introRef = useRef(null);
  const buttonsHolder = useRef(null);
  useEffect(() => {
    anime({
      targets: introRef.current.querySelectorAll('p'),
      translateY: ['100%', 0],
      easing: 'easeInOutQuad',
      duration: 800,
      delay: anime.stagger(250),
    });
    anime({
      targets: buttonsHolder.current,
      scale: [0, 1],
      easing: 'easeOutBack',
      duration: 750,
      delay: 1150,
    });
  });

  return (
    <div
      css={css`
        height: 400px;
        @media (min-width: 768px) {
          height: 450px;
        }
        @media (min-width: 1024px) {
          height: 550px;
        }
        @media (min-width: 1280px) {
          height: 700px;
        }
      `}
    >
      <div css={tw`container flex h-full items-center justify-center mx-auto`}>
        <div
          ref={introRef}
          css={tw`w-full px-3 md:w-1/2 text-center md:text-left`}
        >
          <div css={tw`overflow-y-hidden`}>
            <p css={tw`text-primary font-semibold text-2xl`}>
              Hello, I&apos;m{' '}
              <span css={tw`text-secondary`}>Prateek Karki</span>
            </p>
          </div>

          <div css={tw`overflow-y-hidden`}>
            <p css={tw`text-primary text-5xl font-bold`}>
              Javascript Developer
            </p>
          </div>

          <div css={tw`overflow-y-hidden`}>
            <p css={tw`text-white text-base font-normal mt-2`}>
              Tech lead | Software Engineer | Frontend | Backend
            </p>
          </div>
          <div
            css={tw`flex gap-10 justify-center md:justify-start mt-4`}
            ref={buttonsHolder}
          >
            <Link href="/#contact" as="/#contact" passHref>
              <BigLink>Hire Me</BigLink>
            </Link>
            <BigLink
              target="_blank"
              rel="noreferrer"
              href={process.env.NEXT_PUBLIC_RESUME_LINK}
              variant="secondary"
            >
              Get Resume
            </BigLink>
          </div>
        </div>
        <div css={tw`hidden md:block w-1/2 overflow-hidden`}>
          <Programmer />
        </div>
      </div>
    </div>
  );
}

export default Intro;
