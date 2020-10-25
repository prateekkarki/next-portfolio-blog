/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { ToastContainer, Slide } from 'react-toastify';
import { ApolloProvider } from '@apollo/react-hooks';
import tw, { GlobalStyles } from 'twin.macro';
import ScrollToTop from 'react-scroll-up';
import { BiUpArrow } from 'react-icons/bi';

import withApollo from '../utils/apollo';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../assets/css/styles.css';
import 'aos/dist/aos.css';

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Head>
      <title>
        Prateek Karki - Full-stack web developer from Kathmandu, Nepal
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Prateek Karki is a full-stack web developer dedicated
          to providing highly performant solutions on the internet.
          Developing in ever emerging technologies like react JS and Node JS,
          he will suggest and provide
          the best solutions for any problems his clients might have."
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/logo/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/logo/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/logo/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <meta
        name="keywords"
        content="Web Development, Web Developer, Javascript Developer, Freelancer"
      />
      <link rel="stylesheet" href="/css/ReactToastify.min.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <GlobalStyles />

    <ScrollToTop showUnder={160} style={{ zIndex: 5 }}>
      <div css={tw`bg-main-dark z-20 rounded-full p-2`}>
        <BiUpArrow css={tw`w-8 h-8 text-white`} />
      </div>
    </ScrollToTop>
    <div css={tw`bg-main-dark`}>
      <Header />
      <Component {...pageProps} />
      <ToastContainer
        className="impct-toast"
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable={false}
        pauseOnHover
        transition={Slide}
      />

      <Footer />
    </div>
  </ApolloProvider>
);

// Wraps all components in the tree with the data provider
const AppolloApp = withApollo(App);
export default AppolloApp;
