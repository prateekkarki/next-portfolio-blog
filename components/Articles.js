import React from 'react';
import tw from 'twin.macro';
import Card from './Card';

const Articles = ({ articles }) => (
	<div css={tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 container mx-auto`}>
		{articles.map((article, i) => (
			<Card article={article} key={`article__${article.id}`} />
		))}
	</div>
);

export default Articles;
