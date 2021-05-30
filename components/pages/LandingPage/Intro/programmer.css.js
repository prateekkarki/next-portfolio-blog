import { css } from 'twin.macro';

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
  #dude-with-chair,
  #laptop,
  #table,
  #vase,
  #base{
    transform: translateX(400%);
  }
`;

export default ProgrammerCss;
