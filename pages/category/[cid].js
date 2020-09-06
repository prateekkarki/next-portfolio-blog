import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import _ from 'lodash';
import tw from 'twin.macro';
import Articles from '../../components/Articles';
import Query from '../../components/query';
import CATEGORY_ARTICLES_QUERY from '../../apollo/queries/category/articles';

const Category = () => {
	const router = useRouter();

	return (
		<Query query={CATEGORY_ARTICLES_QUERY} id={router.query.cid}>
			{({ data: { category } }) => (
				<>
					<Head>
						<title>{_.capitalize(category.name)} : Prateek Karki&apos;s blog</title>
					</Head>

					<div css={tw`container mx-auto`}>
						<p
							css={tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
						>
							#{category.name}
						</p>
						<Articles articles={category.articles} />
					</div>
				</>
			)}
		</Query>
	);
};

export default Category;
