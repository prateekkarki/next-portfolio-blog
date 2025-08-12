/* eslint-disable react/no-danger */
import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import { DiscussionEmbed } from 'disqus-react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';

import ArticleTemplate from 'components/BlogPosts/Article/ArticleTemplate';
import { Container, Link as RegularLink } from 'components/styles';
import { MetaHead } from 'components';
import { defaultSeo } from '../../constants/index';
import { getBlogBySlug, getAllBlogs } from '../../data/blogs';
import { ArticlePageProps } from '../../types';

const SingleArticle = ({ article }: ArticlePageProps): ReactElement => {
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
  const tagsString = article.tags.map((tag) => tag.title).join(', ');
  const seo = {
    ...defaultSeo,
    title: article.title,
    description: article.tagline,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/article/${article.slug}`,
    image: article.thumbnail?.url ? article.thumbnail.url : defaultSeo.image,
    article: {
      tags: tagsString,
      published_time: article.publishedOn || article.createdAt,
      modified_time: article.updatedAt,
    },
  };

  return (
    <>
      <MetaHead seo={seo} />
      <ArticleTemplate article={article} />
      <div css={tw`py-12 bg-light-500 dark:bg-dark-400`}>
        <div css={tw`container mx-auto px-3`}>
          <DiscussionEmbed
            shortname={process.env.NEXT_PUBLIC_DISQUS_SHORTNAME!}
            config={{
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/article/${article.slug}`,
              identifier: `article-${article.slug}`,
              title: article.title,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SingleArticle;

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllBlogs();
  const paths = articles.map((article) => ({
    params: { aid: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = getBlogBySlug(params!.aid as string);

  return {
    props: {
      article: article
        ? {
            id: article.id,
            title: article.title,
            slug: article.slug,
            tagline: article.tagline,
            content: article.content,
            publishedOn: article.publishedOn,
            updatedAt: article.updatedAt,
            createdAt: article.createdAt,
            thumbnail: article.thumbnail,
            category: article.category,
            tags: article.tags,
          }
        : null,
    },
  };
};
