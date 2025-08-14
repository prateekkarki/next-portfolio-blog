import React, { ReactElement } from 'react';
import tw, { css } from 'twin.macro';
import { SkewedProps } from '@/types';

function Skewed({ children }: SkewedProps): ReactElement {
  return (
    <>
      <div
        css={[
          tw`absolute w-full h-full bg-light-200 dark:bg-dark-200`,
          css`
            transform: skewY(-5deg);
          `,
        ]}
      />
      <div css={tw` relative container mx-auto py-24`}>{children}</div>
    </>
  );
}

export default Skewed;
