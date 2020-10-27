/* eslint-disable react/no-danger */
import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';

import { useQuery } from '@apollo/react-hooks';

import tw from 'twin.macro';

import ARTICLE_QUERY from '../../apollo/queries/article/article';
import Loader from '../../components/Loader';
import ArticleTemplate from '../../components/BlogPosts/Article/ArticleTemplate';

const SingleArticle = () => {
  const [postData, setPostData] = useState(null);
  const router = useRouter();
  const { aid } = router.query;

  const { data, loading, error } = useQuery(ARTICLE_QUERY, {
    variables: { slug: aid },
  });

  useEffect(() => {
    if (data?.articles && aid) {
      setPostData(data.articles[0]);
    }
  }, [data, postData]);
  return !router.query.aid ? null : (
    <Fragment>
      <div css={tw`container mx-auto px-3`}>
        {loading && <Loader />}
        {error && (
          <p css={tw`text-secondary text-center my-6`}>{error.message}</p>
        )}
      </div>
      {postData?.slug && (
        <Fragment>
          <ArticleTemplate postData={postData} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default SingleArticle;
