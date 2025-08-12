import React from 'react';
import tw, { styled, css, theme } from 'twin.macro';

const Loader = styled.div([
  tw`w-full flex flex-col items-start`,
  css`
    position:fixed;
    top:${theme`spacing.header`};
    pointer-events:none;
    height:calc(100vh - ${theme`spacing.header`});
    z-index:20;
  `,
]);

const LoaderChild = styled.div([
  tw`w-full bg-primary`,
  css`
    height:50%;
    transform:translateX(0%) scaleX(0);
    transform-origin: 0% 0%;
  `,
]);

function FullpageLoader(): JSX.Element {
  return (
    <Loader className="fullpage-loader">
      <LoaderChild />
      <LoaderChild />
    </Loader>
  );
}

export default FullpageLoader;
