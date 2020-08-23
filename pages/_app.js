import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../utils/apollo';
import Header from '../components/Header';
import '../assets/css/tailwind.css';

const App = ({ Component, pageProps, apollo }) => {
	return (
		<ApolloProvider client={apollo}>
			<Head>
				<title>Strapi blog</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />
			<Component {...pageProps} />
		</ApolloProvider>
	);
};

// Wraps all components in the tree with the data provider
export default withData(App);
