import { Fragment, useEffect } from 'react';
import tw, { styled } from 'twin.macro';

import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { useTheme } from 'next-themes';
import { useHasMounted } from 'hooks';

const SettingButton = styled.button(() => [
  tw`font-medium hover:text-primary p-3 uppercase text-base text-mainLight-700 dark:text-mainDark-700`,
]);

function SettingButtons() {
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

  return !hasMounted ? null : (
    <Fragment>
      <SettingButton onClick={onThemeToggle}>
        {theme === 'dark' ? <IoMdMoon /> : <IoMdSunny />}
      </SettingButton>
    </Fragment>
  );
}

export default SettingButtons;
