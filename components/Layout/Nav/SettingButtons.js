import { Fragment } from 'react';
import tw, { styled } from 'twin.macro';

import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { useHasMounted } from '../../../hooks';

const SettingButton = styled.button(() => [
  tw`font-medium hover:text-primary p-3 uppercase text-base text-main-200 dark:text-main-700`,
]);

function SettingButtons({ isDark, onThemeToggle }) {
  const hasMounted = useHasMounted();
  return !hasMounted ? null : (
    <Fragment>
      <SettingButton onClick={onThemeToggle}>
        {isDark ? <IoMdMoon /> : <IoMdSunny />}
      </SettingButton>
    </Fragment>
  );
}

export default SettingButtons;
