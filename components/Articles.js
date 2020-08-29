import React from 'react';
import Card from './Card';
import tw from 'twin.macro';

const Articles = ({ articles }) => {
	return (
		<div css={tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 container mx-auto`}>
			{articles.map((article, i) => {
				return <Card article={article} key={`article__${article.id}`} />;
			})}
		</div>
	);
};

export default Articles;
