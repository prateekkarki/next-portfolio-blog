import { Squash as Hamburger } from 'hamburger-react';

import { theme as twinTheme } from 'twin.macro';

import { useTheme } from 'next-themes';
import { useHasMounted } from 'hooks';
import { NavTrigger } from './styles';

function Trigger({ toggled, toggle }) {
  const { theme } = useTheme();
  const hasMounted = useHasMounted();

  return !hasMounted ? null : (
    <NavTrigger>
      <Hamburger
        tw="block sm:hidden"
        color={
          theme === 'dark'
            ? twinTheme`colors.mainDark.700`
            : twinTheme`colors.mainLight.700`
        }
        key={theme}
        rounded
        toggled={toggled}
        toggle={toggle}
      />
    </NavTrigger>
  );
}

export default Trigger;
