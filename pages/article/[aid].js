/* eslint-disable camelcase */
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import tw from 'twin.macro';
import ARTICLE_QUERY from '../../apollo/queries/article/article';
import Query from '../../components/query';

const Article = () => {
	const router = useRouter();
	const { aid } = router.query;
	return !router.query.aid ? null : (
		<Query query={ARTICLE_QUERY} slug={aid}>
			{({ data: { title, cover_image, published_on, content } }) => (
				<>
					<Head>
						<title>{title} : Prateek Karki&apos;s blog</title>
					</Head>
					<article css={tw`container mx-auto prose-lg`}>
						<header
							css={tw`w-full h-64 bg-cover text-center flex flex-col items-center justify-center`}
							style={{
								background: `url(${cover_image.url}) no-repeat center`,
							}}
						>
							<h1
								css={tw`w-full h-full flex justify-center items-center`}
								style={{ background: 'rgba(255,255,255,0.5)', margin: 0 }}
							>
								{title}
							</h1>
						</header>
						{published_on && <p>{published_on}</p>}
						<div css={tw`text-white`} dangerouslySetInnerHTML={{ __html: content }} />
					</article>
				</>
			)}
		</Query>
	);
};

export default Article;
