import React, { useEffect, type ReactElement } from 'react';
import tw, { styled } from 'twin.macro';

import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { useTheme } from 'next-themes';
import { useHasMounted } from 'hooks';

const SettingButton = styled.button(() => [
  tw`font-medium hover:text-primary 
  px-3 h-20 flex items-center uppercase text-base text-light-700 dark:text-dark-700`,
]);

function SettingButtons(): ReactElement {
  const hasMounted = useHasMounted();
  const { theme, setTheme } = useTheme();

  const onThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'system') {
      setTheme('dark');
    }
  }, [theme]);
  return !hasMounted ? (
    <SettingButton tw="min-width[40px]" />
  ) : (
    <>
      <SettingButton onClick={onThemeToggle}>
        {theme === 'dark' ? <IoMdMoon /> : <IoMdSunny />}
      </SettingButton>
    </>
  );
}

export default SettingButtons;
