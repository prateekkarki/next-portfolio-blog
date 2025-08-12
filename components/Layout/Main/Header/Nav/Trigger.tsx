import React, { Dispatch, SetStateAction, ReactElement } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

import { theme as twinTheme } from 'twin.macro';

import { useTheme } from 'next-themes';
import { useHasMounted } from 'hooks';
import { NavTrigger } from './styles';

interface TriggerProps {
  toggled: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

function Trigger({ toggled, toggle }: TriggerProps): ReactElement | null {
  const { theme } = useTheme();
  const hasMounted = useHasMounted();

  return !hasMounted ? null : (
    <NavTrigger>
      <Hamburger
        tw="block sm:hidden"
        color={
          theme === 'dark'
            ? twinTheme`colors.dark.700`
            : twinTheme`colors.light.700`
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
