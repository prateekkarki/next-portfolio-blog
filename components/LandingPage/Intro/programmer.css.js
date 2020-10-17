import { css } from '@emotion/core';

const ProgrammerCss = css`
  * {
    transform-box: fill-box;
  }
  #leaves {
    transform-origin: bottom;
  }
  #ide,
  #html,
  #handlebar,
  #search {
    transform-origin: center center;
    transform: scale(0);
  }
`;

export default ProgrammerCss;
