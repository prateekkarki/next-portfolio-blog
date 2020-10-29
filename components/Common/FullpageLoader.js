import tw, { css } from 'twin.macro';

function FullpageLoader() {
  return (
    <div
      className="fullpage-loader"
      css={[
        tw`w-full flex flex-col items-start`,
        css`
            position:fixed;
            top:128px;
            pointer-events:none;
            height:calc(100vh - 128px);
            z-index:20;
        `,
      ]}
    >
      <div
        css={[
          tw`w-full bg-primary`,
          css`
            height:50%;
            transform:translateX(0%) scaleX(0);
            transform-origin: 0% 0%;
          `,
        ]}
      />
      <div
        css={[
          tw`w-full bg-primary`,
          css`
            height:50%;
            transform:translateX(0%) scaleX(0);
            transform-origin: 0% 0%;
          `,
        ]}
      />
    </div>
  );
}

export default FullpageLoader;
