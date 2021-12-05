import { useRef, useEffect } from 'react';
import anime from 'animejs';
import tw from 'twin.macro';

import { useHasMounted } from 'hooks';
import { BigButton, BigLink, Text } from 'components/styles';
import Programmer from './Programmer';
import GetResume from './GetResume';
import {
  IntroContainer,
  ButtonsHolder,
  AnimatedText,
  LoaderBar,
} from './styles';

function Intro({ scrollToContact }) {
  const introRef = useRef(null);
  const hasMounted = useHasMounted();

  const width = typeof window === 'undefined' ? 1200 : window.innerWidth;

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (hasMounted) {
      const loaders = introRef.current.querySelectorAll(
        `${AnimatedText} ${LoaderBar}`
      );
      const texts = introRef.current.querySelectorAll(`${AnimatedText} p`);
      const buttonsHolder = introRef.current.querySelectorAll(
        `${ButtonsHolder}`
      );
      const tl = anime.timeline({
        easing: 'easeInOutCubic',
        delay(el, i) {
          return i * 250;
        },
      });

      tl.add({
        targets: loaders,
        translateX: ['-100%', 0],
        duration: 500,
      })
        .add({
          targets: texts,
          opacity: 1,
          duration: 0.01,
          delay: 0.01,
        })
        .add({
          targets: loaders,
          translateX: ['0', '100%'],
          duration: 500,
        });

      anime({
        targets: buttonsHolder,
        scale: [0, 1],
        easing: 'easeOutBack',
        duration: 750,
        delay: width < 768 ? 1800 : 3500,
      });

      return () => {
        anime({
          targets: texts,
          opacity: 0,
        });

        anime({
          targets: buttonsHolder,
          scale: 0,
        });
      };
    }
  });

  return (
    <IntroContainer>
      <div css={tw`container flex h-full items-center justify-center mx-auto`}>
        {!hasMounted ? (
          <div css={tw`flex h-full`}>
            <img
              tw="max-width[80px]"
              alt="loading"
              src="/images/loading/puff.svg"
            />
          </div>
        ) : (
          <>
            <div
              ref={introRef}
              css={tw`w-full px-3 md:w-1/2 text-center md:text-left`}
            >
              <div css={tw`overflow-y-hidden`}>
                <AnimatedText>
                  <LoaderBar tw="bg-light-600 dark:bg-dark-600" />
                  <p
                    css={tw`text-light-600 dark:text-dark-600 font-semibold text-2xl my-2`}
                  >
                    Hello, I&apos;m
                  </p>
                </AnimatedText>
                <br tw="sm:inline-block hidden" />
                <AnimatedText tw="my-1 sm:my-0">
                  <LoaderBar tw="bg-primary" />
                  <p css={tw`text-primary text-6xl font-bold my-2`}>
                    Prateek Karki
                  </p>
                </AnimatedText>
                <AnimatedText>
                  <LoaderBar tw="bg-light-600 dark:bg-dark-600" />
                  <Text tw="opacity-0 mt-0 my-2">
                    A Fullstack Developer with an eye for design and a frontend
                    bias.
                  </Text>
                </AnimatedText>
              </div>

              <ButtonsHolder>
                <BigLink
                  href="https://www.toptal.com/resume/prateek-karki"
                  target="_blank"
                >
                  Hire Me
                </BigLink>
                <GetResume />
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
