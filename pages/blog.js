import { Fragment } from 'react';
import tw from 'twin.macro';

import Head from 'next/head';
import { Card } from 'components/BlogPosts/Card';
import { MetaHead } from 'components';
import ARTICLES_QUERY from '../apollo/queries/article/articles';

import { initializeApollo } from '../utils/apollo';
import TitleBlock from '../components/Common/TitleBlock';
import { Container, MainBg } from '../components/styles';

import { defaultSeo } from '../constants/index';

function Blog({ articles }) {
  const seo = {
    ...defaultSeo,
    title: 'Blogs | Prateek Karki',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
  };

  return (
    <Fragment>
      <MetaHead seo={seo} />
      <TitleBlock title="My Blog" subtitle="Check out my recent posts" />
      <MainBg>
        <Container>
          <div
            css={tw`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-3 py-6`}
          >
            {articles.map((article) => (
              <Card article={article} key={`article__${article.id}`} dark />
            ))}
          </div>
        </Container>
      </MainBg>
    </Fragment>
  );
}

export default Blog;

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
