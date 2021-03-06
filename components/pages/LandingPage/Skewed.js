import { Fragment } from 'react';
import PropTypes from 'prop-types';

import tw, { css } from 'twin.macro';

function Skewed({ children }) {
  return (
    <Fragment>
      <div
        css={[
          tw`absolute w-full h-full bg-light-200 dark:bg-dark-200`,
          css`
            transform: skewY(-5deg);
          `,
        ]}
      />
      <div css={tw` relative container mx-auto py-24`}>{children}</div>
    </Fragment>
  );
}

Skewed.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Skewed;
