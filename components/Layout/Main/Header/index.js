import tw from 'twin.macro';

import Nav from './Nav';

function Header({ isDark, onThemeToggle }) {
  return (
    <header
      css={tw`bg-mainLight-200 dark:bg-mainDark-200 w-full z-10 fixed top-0 shadow-2xl dark:shadow-lg`}
    >
      <Nav isDark={isDark} onThemeToggle={onThemeToggle} />
    </header>
  );
}

export default Header;
