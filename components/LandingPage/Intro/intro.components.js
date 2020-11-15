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
  tw`flex gap-10 justify-center md:justify-start mt-4`,
  css`
    width:min-content;
  `,
]);
