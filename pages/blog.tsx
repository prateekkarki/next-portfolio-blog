import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import { GetStaticProps } from 'next';

import { Card } from 'components/BlogPosts/Card';
import { MetaHead } from 'components';
import { BlogPageProps } from '@/types';
import { getAllBlogs } from 'data/blogs';

import TitleBlock from 'components/Common/TitleBlock';
import { Container, MainBg } from 'components/styles';

import { defaultSeo } from 'constants/index';

function Blog({ articles }: BlogPageProps): ReactElement {
  const seo = {
    ...defaultSeo,
    title: 'Blogs | Prateek Karki',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
  };

  return (
    <>
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
    </>
  );
}

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const articles = getAllBlogs();

  return {
    props: {
      articles: articles.map((article) => ({
        id: article.id,
        title: article.title,
        slug: article.slug,
        publishedOn: article.publishedOn,
        isExternal: article.isExternal,
        externalUrl: article.externalUrl,
        thumbnail: article.thumbnail,
        category: article.category,
        tags: article.tags,
      })),
    },
  };
};
