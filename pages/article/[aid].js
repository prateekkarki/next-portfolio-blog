/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { useQuery } from '@apollo/react-hooks';

import tw from 'twin.macro';

import Markdown from 'react-markdown';

import { DiscussionEmbed } from 'disqus-react';
import ARTICLE_QUERY from '../../apollo/queries/article/article';
import Loader from '../../components/Loader';
import ArticleTemplate from '../../components/BlogPosts/Article/ArticleTemplate';

const Article = () => {
  const [postContent, setPostContent] = useState(<Loader />);
  const [postData, setPostData] = useState(null);
  const [tagsString, setTagsString] = useState('');
  const router = useRouter();
  const { aid } = router.query;

  const { data, loading, error } = useQuery(ARTICLE_QUERY, {
    variables: { slug: aid },
  });

  // eslint-disable-next-line react/prop-types
  const LinkRenderer = ({ href, children }) => (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );

  useEffect(() => {
    if (data?.articles && aid) {
      setPostData(data.articles[0]);
      if (postData?.slug) {
        setTagsString(postData.tags.map((tag) => tag.name).join(', '));
        import(`./${postData.slug}/Post.js`)
          .then((module) => {
            setPostContent(module.default);
          })
          .catch(() => {
            setPostContent(
              <Markdown
                renderers={{ link: LinkRenderer }}
                className="article-main"
              >
                {postData.content}
              </Markdown>
            );
          });
      }
    }
  }, [data, postData]);
  return !router.query.aid ? null : (
    <>
      <div css={tw`container mx-auto`}>
        {loading && <Loader />}
        {error && (
          <p css={tw`text-secondary text-center my-6`}>{error.message}</p>
        )}
        {postData?.slug && (
          <>
            <Head>
              <title>{postData.title}</title>
              <meta name="keywords" content={tagsString} />
              <meta name="author" content="Prateek Karki" />
              <meta name="description" content={postData.description} />
              <meta property="og:type" content="article" />
              <meta property="og:article:author" content="Prateek Karki" />
              <meta
                property="og:article:published_time"
                content={postData.published_on || postData.created_at}
              />
              <meta
                property="og:article:modified_time"
                content={postData.updated_at}
              />
              <meta property="og:article:section" content="Technology" />
              <meta property="og:article:tag" content={tagsString} />
            </Head>

            <ArticleTemplate postData={postData} postContent={postContent} />
            <DiscussionEmbed
              css={tw`pt-16`}
              shortname={process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}
              config={{
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/article/${postData.slug}`,
                identifier: `article-${postData.slug}`,
                title: postData.title,
                language: 'en_US',
              }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Article;
