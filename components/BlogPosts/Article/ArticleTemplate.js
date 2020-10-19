/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { BsChevronRight } from 'react-icons/bs';
import tw from 'twin.macro';
import Link from 'next/link';
import format from 'date-fns/format';
import css from './ArticleTemplate.css';
import TitleBlock from '../../Common/TitleBlock';

function ArticleTemplate({ postData, postContent }) {
  return !postData ? null : (
    <article css={css}>
      <div css={tw`flex justify-center mt-16`}>
        <div css={tw`flex items-center col-gap-2`}>
          <Link href="/" as="/" passHref>
            <a css={tw`text-light hover:text-primary font-bold`}>Home</a>
          </Link>
          <BsChevronRight />
          <Link href="/blog" as="/blog" passHref>
            <a css={tw`text-light hover:text-primary font-bold`}>Blogs</a>
          </Link>
          <BsChevronRight />
          <span>{postData.category.name}</span>
        </div>
      </div>
      <TitleBlock title={postData.title} subtitle={postData.description} />

      {postContent}

      {postData.published_on && (
        <p css={tw`pt-4 text-light`}>
          Posted on:{' '}
          <span css={tw`italic`}>
            {format(new Date(postData.published_on), 'do MMM yyyy')}
          </span>
        </p>
      )}
    </article>
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
  // eslint-disable-next-line react/forbid-prop-types
  postContent: PropTypes.object.isRequired,
};
export default ArticleTemplate;
