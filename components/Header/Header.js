import tw from 'twin.macro';

import Nav from './Nav/Nav';

function Header() {
  return (
    <header css={tw`bg-main-light z-10 sticky top-0 shadow-2xl`}>
      <Nav />
    </header>
  );
}

export default Header;
