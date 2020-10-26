import React from 'react';
import tw from 'twin.macro';

import Head from 'next/head';
import Query from '../components/Query';
import ARTICLES_QUERY from '../apollo/queries/article/articles';

import Card from '../components/BlogPosts/Card';
import TitleBlock from '../components/Common/TitleBlock';

function Blog() {
  return (
    <>
      <Head>
        <title>Prateek Karki&apos;s blog</title>
      </Head>
      <TitleBlock title="My Blog" subtitle="Check out my recent posts" />
      <div css={tw`bg-main-light`}>
        <div css={tw`container mx-auto`}>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => (
              <div
                css={tw`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-3 py-6`}
              >
                {articles.map((article) => (
                  <Card article={article} key={`article__${article.id}`} dark />
                ))}
              </div>
            )}
          </Query>
        </div>
      </div>
    </>
  );
}

export default Blog;
