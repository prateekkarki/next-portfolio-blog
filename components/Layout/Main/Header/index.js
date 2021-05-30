import tw from 'twin.macro';

import Nav from './Nav';

function Header() {
  return (
    <header
      css={tw`
        bg-mainLight-200 dark:bg-mainDark-200
        w-full z-10 fixed top-0 shadow-lg 
      `}
    >
      <Nav />
    </header>
  );
}

export default Header;
