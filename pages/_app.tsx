import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import * as analytics from '../utils/analytics';
import { MainLayout } from '../components';

import '../assets/css/styles.css';
import 'aos/dist/aos.css';

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => {
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
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableColorScheme={false}
      enableSystem={false}
    >
      <MainLayout pathname={router.pathname}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
