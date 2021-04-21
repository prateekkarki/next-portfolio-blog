/* eslint-disable react/no-danger */
import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import { initializeApollo } from '../../utils/apollo';

import ARTICLE_QUERY from '../../apollo/queries/article/article';
import ARTICLES_QUERY from '../../apollo/queries/article/articles';
import ArticleTemplate from '../../components/BlogPosts/Article/ArticleTemplate';

import { Container } from '../../components/styles';

const SingleArticle = ({ articles }) => {
  const [postData, setPostData] = useState(null);
  const router = useRouter();
  const { aid } = router.query;
  useEffect(() => {
    if (articles && aid) {
      setPostData(articles[0]);
    }
  }, [articles, postData]);
  return !router.query.aid ? null : (
    <Fragment>
      {!articles && (
        <Container css={tw`px-3`}>
          <p css={tw`text-secondary text-center my-6`}>
            Looks like the article does not exist. Please checkout other
            sections of the website.
          </p>
        </Container>
      )}
      {postData?.slug && (
        <Fragment>
          <ArticleTemplate postData={postData} />
        </Fragment>
      )}
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
    props: res.data,
  };
}
