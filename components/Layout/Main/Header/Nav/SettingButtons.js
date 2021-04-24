import { Fragment } from 'react';
import tw, { styled } from 'twin.macro';

import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { useTheme } from 'next-themes';
import { useHasMounted } from '../../../../../hooks';

const SettingButton = styled.button(() => [
  tw`font-medium hover:text-primary p-3 uppercase text-base text-mainLight-700 dark:text-mainDark-700`,
]);

function SettingButtons() {
  const hasMounted = useHasMounted();
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';
  const onThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return !hasMounted ? null : (
    <Fragment>
      <SettingButton onClick={onThemeToggle}>
        {isDark ? <IoMdMoon /> : <IoMdSunny />}
      </SettingButton>
    </Fragment>
  );
}

export default SettingButtons;
