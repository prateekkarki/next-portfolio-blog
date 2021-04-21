import { Fragment } from 'react';
import PropTypes from 'prop-types';

import tw, { css } from 'twin.macro';

function Skewed({ children }) {
  return (
    <Fragment>
      <div
        css={[
          tw`absolute w-full h-full bg-mainLight-700 dark:bg-mainDark-200`,
          css`
            transform: skewY(-5deg);
          `,
        ]}
      />
      <div css={tw` relative container mx-auto py-16`}>{children}</div>
    </Fragment>
  );
}

Skewed.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Skewed;
