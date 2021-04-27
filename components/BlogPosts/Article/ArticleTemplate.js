/* eslint-disable camelcase */
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';
import Markdown from 'react-markdown';
import format from 'date-fns/format';
import Head from 'next/head';
import { useTheme } from 'next-themes';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxThemeDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';
import syntaxThemeLight from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';
import TitleBlock from '../../Common/TitleBlock';
import BreadCrumbs from '../../Common/BreadCrumbs';
import style from './ArticleTemplate.css';

function ArticleTemplate({ postData }) {
  const LinkRenderer = ({ href, children }) => (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
  const { theme } = useTheme();
  const SyntaxRenderer = ({ className, value, language, ...props }) => (
    <SyntaxHighlighter
      style={theme === 'dark' ? syntaxThemeDark : syntaxThemeLight}
      language={language}
      customStyle={{ background: theme === 'dark' ? '#2f2f2f' : '#fafafa' }}
      className={className}
      PreTag="div"
      {...props}
    >
      {String(value).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );

  const tagsString = postData.tags.map((tag) => tag.name).join(', ');
  return (
    <Fragment>
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
              { title: postData.category?.name },
            ]}
          />
        </div>
        <TitleBlock title={postData.title} subtitle={postData.description} />
      </div>
      <div css={tw`bg-mainLight-200 dark:bg-mainDark-200`}>
        <div css={tw`container mx-auto px-3`}>
          <article css={style}>
            <Markdown
              renderers={{ code: SyntaxRenderer, link: LinkRenderer }}
              className="article-main"
            >
              {postData.content}
            </Markdown>

            {postData.published_on && (
              <p css={tw`pt-4 text-mainLight-700 dark:text-mainDark-700`}>
                Posted on:{' '}
                <span css={tw`italic`}>
                  {format(new Date(postData.published_on), 'do MMM yyyy')}
                </span>
              </p>
            )}
          </article>
        </div>
      </div>
    </Fragment>
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
