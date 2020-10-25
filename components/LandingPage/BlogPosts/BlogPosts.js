import React from 'react';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Card from '../../BlogPosts/Card';

import { BigLink } from '../../styled';

const BlogPosts = ({ articles }) => (
  <div css={tw`block md:flex`}>
    <div
      css={tw`text-center px-3 md:px-6 text-light py-4 md:w-1/2 md:text-left`}
      data-aos="fade-right"
    >
      <h1
        css={tw`
          font-bold text-white whitespace-no-wrap text-3xl 
          sm:text-4xl md:text-5xl lg:text-6xl xl:text-huge
        `}
      >
        Latest Posts
      </h1>
      <p css={tw`text-white text-sm md:text-base lg:text-lg`}>
        I also write articles in my free time. I write about new technologies
        that I find interesting, solutions to an issue that bugs me, and some
        snippets that I hope someone will find useful. My posts are about web
        development and on that mostly about frontend development.
      </p>
      <p css={tw`mt-4 text-white text-sm md:text-base lg:text-lg`}>
        I usually post a few times every month. Here&apos;s one on the right to
        get you started. Be sure to check out more by clicking the button below.
      </p>
      <Link href="/blog" as="/blog" passHref>
        <BigLink css={tw`mt-6 mx-auto md:ml-0`}>View all posts</BigLink>
      </Link>
    </div>

    <div
      css={tw`flex flex-col items-center justify-center md:w-1/2 px-3 md:px-6 `}
      data-aos="zoom-in-up"
    >
      {articles.map((article) => (
        <Card article={article} key={`article__${article.id}`} />
      ))}
    </div>
  </div>
);

BlogPosts.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BlogPosts;
