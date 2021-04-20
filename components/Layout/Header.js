import tw from 'twin.macro';

import Nav from './Nav/Nav';

function Header({ isDark, onThemeToggle }) {
  return (
    <header
      css={tw`bg-main-700 dark:bg-main-200 w-full z-10 fixed top-0 shadow-2xl`}
    >
      <Nav isDark={isDark} onThemeToggle={onThemeToggle} />
    </header>
  );
}

export default Header;
