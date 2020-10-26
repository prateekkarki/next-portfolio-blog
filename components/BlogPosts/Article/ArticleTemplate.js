/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';
import Markdown from 'react-markdown';
import format from 'date-fns/format';
import Head from 'next/head';

import { DiscussionEmbed } from 'disqus-react';

import TitleBlock from '../../Common/TitleBlock';
import BreadCrumbs from '../../Common/BreadCrumbs';
import css from './ArticleTemplate.css';

function ArticleTemplate({ postData }) {
  const LinkRenderer = ({ href, children }) => (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );

  const tagsString = postData.tags.map((tag) => tag.name).join(', ');
  return (
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

      <div css={tw`container mx-auto px-3`}>
        <div css={tw`flex justify-center mt-16`}>
          <BreadCrumbs
            blocks={[
              { path: '/', title: 'Home' },
              { path: '/blog', title: 'Blogs' },
              { title: postData.category.name },
            ]}
          />
        </div>
        <TitleBlock title={postData.title} subtitle={postData.description} />
      </div>
      <div css={tw`bg-main-light`}>
        <div css={tw`container mx-auto px-3`}>
          <article css={css}>
            <Markdown
              renderers={{ link: LinkRenderer }}
              className="article-main"
            >
              {postData.content}
            </Markdown>

            {postData.published_on && (
              <p css={tw`pt-4 text-light`}>
                Posted on:{' '}
                <span css={tw`italic`}>
                  {format(new Date(postData.published_on), 'do MMM yyyy')}
                </span>
              </p>
            )}
          </article>

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
        </div>
      </div>
    </>
  );
}

ArticleTemplate.propTypes = {
  postData: PropTypes.PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      })
    ).isRequired,
    published_on: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default ArticleTemplate;
