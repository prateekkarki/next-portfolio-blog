import React from 'react';
import PropTypes from 'prop-types';

import tw, { css } from 'twin.macro';

function Skewed({ children }) {
  return (
    <>
      <div
        css={[
          tw`absolute w-full h-full bg-main-light`,
          css`
            transform: skewY(-5deg);
          `,
        ]}
      />
      <div css={tw` relative container mx-auto py-16`}>{children}</div>
    </>
  );
}

Skewed.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Skewed;
