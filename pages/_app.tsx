import React, { useEffect, ComponentType, ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import * as analytics from '../utils/analytics';
import { MainLayout } from '../components';

import '../assets/css/styles.css';
import 'aos/dist/aos.css';

const NextThemeProvider = ThemeProvider as unknown as ComponentType<any>;

const App = ({ Component, pageProps, router }: AppProps): ReactElement => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      analytics.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableColorScheme={false}
      enableSystem={false}
    >
      <MainLayout pathname={router.pathname}>
        <Component {...pageProps} />
      </MainLayout>
    </NextThemeProvider>
  );
};

export default App;
