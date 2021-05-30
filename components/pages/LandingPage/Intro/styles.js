import tw, { css, styled } from 'twin.macro';

export const IntroContainer = styled.div(css`
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
`);

export const ButtonsHolder = styled.div([
  tw`flex gap-10 justify-center md:justify-start mt-16`,
  css`
    transform: scale(0);
    width: 100%;
    @media (min-width: 768px) {
      width:min-content;
    }
  `,
]);

export const LoaderBar = styled.div(tw`inline-block absolute w-full h-full`);

export const AnimatedText = styled.div([
  tw`inline-block relative overflow-hidden`,
  css`
    ${LoaderBar}{
      transform: translate(-100%);
    }
    p{
      opacity: 0;
      display: inline-block;
    }
  `,
]);
