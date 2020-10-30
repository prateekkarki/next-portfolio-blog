import tw, { styled, css } from 'twin.macro';

const Loader = styled.div([
  tw`w-full flex flex-col items-start`,
  css`
    position:fixed;
    top:128px;
    pointer-events:none;
    height:calc(100vh - 128px);
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

function FullpageLoader() {
  return (
    <Loader className="fullpage-loader">
      <LoaderChild />
      <LoaderChild />
    </Loader>
  );
}

export default FullpageLoader;
