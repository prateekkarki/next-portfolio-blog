import { useRef, useEffect } from 'react';
import anime from 'animejs';
import Link from 'next/link';
import tw from 'twin.macro';

import { useHasMounted } from 'hooks';
import { BigLink, Text } from 'components/styles';
import Programmer from './Programmer';
import {
  IntroContainer,
  ButtonsHolder,
  AnimatedText,
  LoaderBar,
} from './styles';

function Intro() {
  const introRef = useRef(null);
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (hasMounted) {
      const loaders = introRef.current.querySelectorAll(
        `${AnimatedText} ${LoaderBar}`
      );
      const texts = introRef.current.querySelectorAll(`${AnimatedText} p`);
      const buttonsHolder = introRef.current.querySelectorAll(
        `${ButtonsHolder}`
      );

      anime({
        targets: texts,
        opacity: 0,
      });

      const tl = anime.timeline({
        easing: 'easeInOutQuad',
        delay(el, i) {
          return i * 250;
        },
      });

      tl.add({
        targets: loaders,
        translateX: ['-100%', 0],
        duration: 600,
      })
        .add({
          targets: texts,
          opacity: 1,
          duration: 50,
        })
        .add({
          targets: loaders,
          translateX: ['0', '100%'],
          duration: 600,
        });

      anime({
        targets: buttonsHolder,
        scale: [0, 1],
        easing: 'easeOutBack',
        duration: 750,
        delay: 4500,
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
                <AnimatedText>
                  <LoaderBar tw="bg-mainLight-600 dark:bg-mainDark-600" />
                  <p
                    css={tw`text-mainLight-600 dark:text-mainDark-600 font-semibold text-2xl my-2`}
                  >
                    Hello, I&apos;m
                  </p>
                </AnimatedText>
                <br />
                <AnimatedText>
                  <LoaderBar tw="bg-primary" />
                  <p css={tw`text-primary text-6xl font-bold my-2`}>
                    Prateek Karki
                  </p>
                </AnimatedText>
                <AnimatedText>
                  <LoaderBar tw="bg-mainLight-600 dark:bg-mainDark-600" />
                  <Text tw="opacity-0 mt-0 my-2">
                    A Fullstack Developer with an eye for design and a Frontend
                    bias.
                  </Text>
                </AnimatedText>
              </div>

              <ButtonsHolder>
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
