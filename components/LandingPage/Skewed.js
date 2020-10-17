/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import tw from 'twin.macro';

function Skewed({ children }) {
  return (
    <React.Fragment>
      <div
        css={[
          tw`absolute w-full h-full bg-main-light`,
          css`
            transform: skewY(-5deg);
          `,
        ]}
      />
      <div css={tw` relative container mx-auto py-16`}>{children}</div>
    </React.Fragment>
  );
}

Skewed.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Skewed;
