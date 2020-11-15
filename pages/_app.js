import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import * as analytics from '../utils/analytics';

import withApollo from '../utils/apollo';

import { MainLayout } from '../components';

import '../assets/css/styles.css';
import 'aos/dist/aos.css';

const App = ({ Component, pageProps, apollo, router }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      analytics.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ApolloProvider client={apollo}>
      <MainLayout pathname={router.pathname}>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
};

// Wraps all components in the tree with the data provider
const AppolloApp = withApollo(App);
export default AppolloApp;
