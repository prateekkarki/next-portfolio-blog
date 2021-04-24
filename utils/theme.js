import { createContext } from 'react';
import { useLocalStorage } from '../hooks';

export const getInitialColorMode = () => {
  if (
    typeof window !== 'undefined' &&
    (window.localStorage.theme === 'dark' ||
      (!('theme' in window.localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches))
  ) {
    return 'dark';
  }
  return 'light';
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useLocalStorage(
    'theme',
    JSON.stringify(getInitialColorMode())
  );
  const setColorMode = (value) => {
    rawSetColorMode(value);
  };
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
