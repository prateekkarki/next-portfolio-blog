/* eslint-disable react/no-danger */
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import { DiscussionEmbed } from 'disqus-react';
import { initializeApollo } from 'utils/apollo';

import ARTICLE_QUERY from 'apollo/queries/article/article';
import ARTICLES_QUERY from 'apollo/queries/article/articles';
import ArticleTemplate from 'components/BlogPosts/Article/ArticleTemplate';

import Head from 'next/head';
import { Container, Link as RegularLink } from 'components/styles';
import Link from 'next/link';

const SingleArticle = ({ article }) => {
  console.log({ article });
  const router = useRouter();
  const { aid } = router.query;
  if (!aid || !article) {
    return (
      <Container css={tw`px-3`}>
        <Head>
          <title>Blog not found</title>
        </Head>
        <p css={tw`dark:text-mainDark-600 text-mainLight-600 text-center my-6`}>
          Looks like the article does not exist. Please checkout other sections
          of the website.
        </p>
        <Link href="/blog" as="/blog" passHref>
          <RegularLink css={tw`block text-center`} href="/blog">
            Back to Blogs
          </RegularLink>
        </Link>
      </Container>
    );
  }

  const tagsString = article.tags.map((tag) => tag.name).join(', ');
  return (
    <Fragment>
      <Head>
        <title>{article.title}</title>
        <meta name="keywords" content={tagsString} />
        <meta name="author" content="Prateek Karki" />
        <meta name="description" content={article.description} />
        {article.thumbnail?.url && (
          <meta property="og:image" content={article.thumbnail.url} />
        )}
        <meta property="og:title" content={article.title} />
        <meta property="og:type" content="article" />
        <meta property="og:article:author" content="Prateek Karki" />
        <meta
          property="og:article:published_time"
          content={article.published_on || article.created_at}
        />
        <meta
          property="og:article:modified_time"
          content={article.updated_at}
        />
        <meta property="og:article:section" content="Technology" />
        <meta property="og:article:tag" content={tagsString} />
      </Head>

      <ArticleTemplate article={article} />
      <div css={tw`py-12 bg-mainLight-500 dark:bg-mainDark-400`}>
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
