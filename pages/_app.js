import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import withApollo from '../utils/apollo';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/tailwind.css';

const App = ({ Component, pageProps, apollo }) => {
	const layoutProps = {
		categories: [
			{ id: '1', name: 'news' },
			{ id: '2', name: 'trends' },
		],
	};
	return (
		<ApolloProvider client={apollo}>
			<Head>
				<title>Prateek Karki - Full-stack web developer from Kathmandu, Nepal</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Prateek Karki is a full-stack web developer dedicated to providing highly performant solutions on the internet.
					Developing in ever emerging technologies like react JS and Node JS,
					he will suggest and provide the best solutions for any problems his clients might have."
				/>
				<meta name="keywords" content="Web Development, Web Developer, Javascript Developer, Freelancer" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Header {...layoutProps} />
			<Component {...pageProps} />
			<Footer />
		</ApolloProvider>
	);
};

App.propTypes = {
	Component: PropTypes.isRequired,
	pageProps: PropTypes.isRequired,
	apollo: PropTypes.isRequired,
};

// Wraps all components in the tree with the data provider
const AppolloApp = withApollo(App);
export default AppolloApp;
