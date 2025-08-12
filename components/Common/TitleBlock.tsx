import React, { type ReactElement } from 'react';
import tw, { css } from 'twin.macro';
import { TitleBlockProps } from '../../types';

function TitleBlock({ title, subtitle }: TitleBlockProps): ReactElement {
  return (
    <div css={tw`flex flex-col items-center text-center py-16`}>
      <h1 css={tw`font-bold text-primary text-5xl`}>{title}</h1>
      <p
        css={[
          tw`mt-6 mb-4 font-normal text-base text-light-700 dark:text-dark-700`,
          css`
            letter-spacing: 0.5px;
            line-height: 19.2px;
          `,
        ]}
      >
        {subtitle}
      </p>
      <div css={tw`w-64 relative h-6 mt-6`}>
        <div
          css={[
            tw`w-full absolute top-0 bg-primary rounded-full h-1`,
            css`
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            `,
          ]}
        />
        <div
          css={[
            tw`w-12 absolute top-0 bg-primary rounded-full h-3`,
            css`
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            `,
          ]}
        />
      </div>
    </div>
  );
}

export default TitleBlock;
