import React from 'react';
import Articles from '../components/Articles';
import ARTICLES_QUERY from '../apollo/queries/article/articles';
import { initializeApollo } from '../utils/apollo';

const Home = ({ articles }) => {
	return (
		<div>
			<Articles articles={articles} />;
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	const client = initializeApollo();
	const res = await client.query({
		query: ARTICLES_QUERY,
	});

	// The value of the `props` key will be
	//  passed to the `Home` component
	return {
		props: res.data,
	};
}
