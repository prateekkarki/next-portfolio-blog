import { ApolloProvider } from '@apollo/react-hooks';

import withApollo from '../utils/apollo';

import { MainLayout } from '../components';

import '../assets/css/styles.css';
import 'aos/dist/aos.css';

const App = ({ Component, pageProps, apollo, router }) => (
  <ApolloProvider client={apollo}>
    <MainLayout pathname={router.pathname}>
      <Component {...pageProps} />
    </MainLayout>
  </ApolloProvider>
);

// Wraps all components in the tree with the data provider
const AppolloApp = withApollo(App);
export default AppolloApp;
