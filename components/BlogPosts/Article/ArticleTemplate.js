/* eslint-disable camelcase */
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';
import Markdown from 'react-markdown';

import gfm from 'remark-gfm';
import format from 'date-fns/format';
import { useTheme } from 'next-themes';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxThemeDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';
import syntaxThemeLight from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';
import TitleBlock from '../../Common/TitleBlock';
import BreadCrumbs from '../../Common/BreadCrumbs';
import style from './ArticleTemplate.css';

function ArticleTemplate({ article }) {
  const LinkRenderer = ({ href, children }) => (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );

  const { theme } = useTheme();
  const SyntaxRenderer = ({ className, children, inline, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : '';
    return (
      <SyntaxHighlighter
        style={theme === 'dark' ? syntaxThemeDark : syntaxThemeLight}
        language={language}
        customStyle={{
          background: theme === 'dark' ? '#2f2f2f' : '#fafafa',
          padding: inline ? '0' : '1.25em 1em',
        }}
        className={className}
        PreTag={inline ? 'span' : 'div'}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    );
  };
  return (
    <Fragment>
      <div css={tw`container mx-auto px-3`}>
        <div css={tw`flex justify-center mt-16`}>
          <BreadCrumbs
            blocks={[
              { path: '/', title: 'Home' },
              { path: '/blog', title: 'Blogs' },
              { title: article.category?.name },
            ]}
          />
        </div>
        <TitleBlock title={article.title} subtitle={article.description} />
      </div>
      <div css={tw`bg-light-200 dark:bg-dark-200`}>
        <div css={tw`mx-auto px-3 pb-6 max-w-3xl`}>
          <article css={style}>
            <Markdown
              remarkPlugins={[gfm]}
              components={{ code: SyntaxRenderer, a: LinkRenderer }}
              className="article-main"
            >
              {article.content}
            </Markdown>

            {article.published_on && (
              <p css={tw`pt-4 text-light-700 dark:text-dark-700`}>
                Posted on:{' '}
                <span css={tw`italic`}>
                  {format(new Date(article.published_on), 'do MMM yyyy')}
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
  article: PropTypes.PropTypes.shape({
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
