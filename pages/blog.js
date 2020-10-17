import React from 'react';
import tw from 'twin.macro';

import Head from 'next/head';
import Query from '../components/query';
import ARTICLES_QUERY from '../apollo/queries/article/articles';

import Card from '../components/BlogPosts/Card';
import TitleBlock from '../components/LandingPage/TitleBlock';

function Blog() {
  return (
    <>
      <Head>
        <title>Prateek Karki&apos;s blog</title>
      </Head>
      <div css={tw`container mx-auto mt-16`}>
        <TitleBlock title="My Blog" subtitle="Check out my recent posts" />
        <Query query={ARTICLES_QUERY}>
          {({ data: { articles } }) => (
            <div css={tw`grid gap-4 grid-cols-3 my-16`}>
              {articles.map((article) => (
                <Card article={article} key={`article__${article.id}`} />
              ))}
            </div>
          )}
        </Query>
      </div>
    </>
  );
}

export default Blog;
