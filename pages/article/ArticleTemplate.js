/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

function ArticleTemplate({ postData, postContent }) {
  return !postData ? null : (
    <article css={tw`container mx-auto`}>
      <header
        css={tw`w-full h-64 bg-cover text-center flex
          flex-col items-center justify-center`}
        style={{
          background: `url(${postData.cover_image.url}) no-repeat center`,
        }}
      >
        <h1
          css={tw`w-full h-full flex justify-center items-center`}
          style={{ background: 'rgba(255,255,255,0.5)', margin: 0 }}
        >
          {postData.title}
        </h1>
      </header>
      {postData.published_on && <p>{postData.published_on}</p>}
      {postContent}
    </article>
  );
}

ArticleTemplate.propTypes = {
  postData: PropTypes.PropTypes.shape({
    title: PropTypes.string.isRequired,
    published_on: PropTypes.string.isRequired,
    cover_image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  postContent: PropTypes.object.isRequired,
};
export default ArticleTemplate;
