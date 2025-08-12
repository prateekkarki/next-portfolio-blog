import React, { type ReactElement } from 'react';
import tw from 'twin.macro';

import Nav from './Nav';

function Header(): ReactElement {
  return (
    <header
      css={tw`
        bg-light-200 dark:bg-dark-200
        w-full z-10 fixed top-0 shadow-lg 
      `}
    >
      <Nav />
    </header>
  );
}

export default Header;
