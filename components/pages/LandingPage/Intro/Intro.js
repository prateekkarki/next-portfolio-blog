import { useRef, useEffect } from 'react';
import anime from 'animejs';
import Link from 'next/link';
import tw from 'twin.macro';

import { useHasMounted } from 'hooks';
import { BigLink, Text } from 'components/styles';
import Programmer from './Programmer';
import { IntroContainer, ButtonsHolder } from './styles';

function Intro() {
  const introRef = useRef(null);
  const buttonsHolder = useRef(null);
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (hasMounted) {
      // anime({
      //   targets: introRef.current.querySelectorAll('p'),
      //   translateY: ['100%', 0],
      //   easing: 'easeInOutQuad',
      //   duration: 800,
      //   delay: anime.stagger(250, { start: 500 }),
      // });
      anime({
        targets: buttonsHolder.current,
        scale: [0, 1],
        easing: 'easeOutBack',
        duration: 750,
        delay: 1250,
      });
    }
  });

  return (
    <IntroContainer>
      <div css={tw`container flex h-full items-center justify-center mx-auto`}>
        {!hasMounted ? (
          <div css={tw`flex h-full`}>
            <img alt="loading" src="/images/loading/puff.svg" />
          </div>
        ) : (
          <>
            <div
              ref={introRef}
              css={tw`w-full px-3 md:w-1/2 text-center md:text-left`}
            >
              <div css={tw`overflow-y-hidden`}>
                <p
                  css={tw`text-mainLight-600 dark:text-mainDark-600 font-semibold text-2xl`}
                >
                  Hello, I&apos;m
                </p>
                <p css={tw`text-primary text-5xl font-bold pt-3`}>
                  Prateek Karki
                </p>
                <Text>
                  A Fullstack Developer with an eye for design and a Frontend
                  bias.
                </Text>
              </div>

              <ButtonsHolder ref={buttonsHolder}>
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
              </ButtonsHolder>
            </div>
            <div css={tw`hidden md:block w-1/2 overflow-hidden`}>
              <Programmer />
            </div>
          </>
        )}
      </div>
    </IntroContainer>
  );
}

export default Intro;