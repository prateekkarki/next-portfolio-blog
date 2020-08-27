import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../utils/apollo';

import Header from '../components/Header';
import '../assets/css/tailwind.css';

const App = (props) => {
	const { Component, pageProps, apollo } = props;
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
				<meta charset="utf-8"></meta>
				<meta
					name="description"
					content="Prateek Karki is a full-stack web developer dedicated to providing highly performant solutions on the internet. 
					Developing in ever emerging technologies like react JS and Node JS, 
					he will suggest and provide the best solutions for any problems his clients might have."
				></meta>
				<meta name="keywords" content="Web Development, Web Developer, Javascript Developer, Freelancer"></meta>
			</Head>
			<Header {...layoutProps} />
			<Component {...pageProps} />
		</ApolloProvider>
	);
};

// Wraps all components in the tree with the data provider
const AppolloApp = withApollo(App);
export default AppolloApp;
