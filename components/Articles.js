import React from 'react';
import Card from './Card';

const Articles = ({ articles }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2 container mx-auto">
			{articles.map((article, i) => {
				return <Card article={article} key={`article__${article.id}`} />;
			})}
		</div>
	);
};

export default Articles;
