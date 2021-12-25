/* eslint-disable react/no-danger */
import { Fragment } from 'react';
import tw from 'twin.macro';
import { DiscussionEmbed } from 'disqus-react';
import { initializeApollo } from 'utils/apollo';

import ARTICLE_QUERY from 'apollo/queries/article/article';
import ARTICLES_QUERY from 'apollo/queries/article/articles';
import ArticleTemplate from 'components/BlogPosts/Article/ArticleTemplate';

import Head from 'next/head';
import { Container, Link as RegularLink } from 'components/styles';
import Link from 'next/link';
import { MetaHead } from 'components';
import { defaultSeo } from '../../constants/index';

const SingleArticle = ({ article }) => {
  if (!article) {
    return (
      <Container css={tw`px-3`}>
        <Head>
          <title>Blog not found</title>
        </Head>
        <p css={tw`dark:text-dark-600 text-light-600 text-center my-6`}>
          Looks like the article does not exist. Please checkout other sections
          of the website.
        </p>
        <Link href="/blog" passHref>
          <RegularLink css={tw`block text-center`} href="/blog">
            Back to Blogs
          </RegularLink>
        </Link>
      </Container>
    );
  }
  const tagsString = article.tags.map((tag) => tag.name).join(', ');
  const seo = {
    ...defaultSeo,
    title: article.title,
    description: article.description,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/article/${article.slug}`,
    image: article.thumbnail?.url ? article.thumbnail.url : defaultSeo.image,
    article: {
      tags: tagsString,
      published_time: article.published_on || article.created_at,
      modified_time: article.updated_at,
    },
  };

  return (
    <Fragment>
      <MetaHead seo={seo} />
      <ArticleTemplate article={article} />
      <div css={tw`py-12 bg-light-500 dark:bg-dark-400`}>
        <div css={tw`container mx-auto px-3`}>
          <DiscussionEmbed
            shortname={process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}
            config={{
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/article/${article.slug}`,
              identifier: `article-${article.slug}`,
              title: article.title,
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SingleArticle;

export async function getStaticPaths() {
  const client = initializeApollo();
  const res = await client.query({
    query: ARTICLES_QUERY,
  });
  const paths = res.data.articles.map((post) => ({
    params: { aid: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const client = initializeApollo();
  const res = await client.query({
    query: ARTICLE_QUERY,
    variables: { slug: params.aid },
  });

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { article: res.data.articles.length ? res.data.articles[0] : null },
  };
}
