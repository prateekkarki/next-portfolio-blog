import { Fragment } from 'react';
import tw, { styled } from 'twin.macro';

import { RiVolumeUpFill, RiVolumeMuteFill } from 'react-icons/ri';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { useLocalStorage, useHasMounted } from '../../../hooks';

const SettingButton = styled.button(() => [
  tw`font-medium hover:text-primary p-3 uppercase text-base`,
]);

function SettingButtons() {
  const hasMounted = useHasMounted();
  const [isMuted, setIsMuted] = useLocalStorage('isMuted', false);
  const [isDark, setIsDark] = useLocalStorage('isDark', false);
  return !hasMounted ? null : (
    <Fragment>
      <SettingButton
        onClick={() => {
          setIsMuted(!isMuted);
        }}
      >
        {isMuted ? <RiVolumeMuteFill /> : <RiVolumeUpFill />}
      </SettingButton>
      <SettingButton
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        {isDark ? <IoMdMoon /> : <IoMdSunny />}
      </SettingButton>
    </Fragment>
  );
}

export default SettingButtons;
