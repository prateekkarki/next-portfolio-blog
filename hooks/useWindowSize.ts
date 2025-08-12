import React from 'react';
import debounce from 'lodash/debounce';
import { WindowSize } from '../types';

export default function useWindowSize(): WindowSize {
  const isSSR = typeof window === 'undefined';
  const [windowSize, setWindowSize] = React.useState<WindowSize>({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize(): void {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener('resize', debounce(changeWindowSize, 500));

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
}
