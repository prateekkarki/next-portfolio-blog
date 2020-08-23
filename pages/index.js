import React from 'react';
import Articles from '../components/Articles';
import Query from '../components/query';
import ARTICLES_QUERY from '../apollo/queries/article/articles';

const Home = () => {
	return (
		<div>
			<Query query={ARTICLES_QUERY}>
				{({ data: { articles } }) => {
					return <Articles articles={articles} />;
				}}
			</Query>
		</div>
	);
};

export default Home;
