import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { Image, Placeholder, CloudinaryContext } from 'cloudinary-react';
import tw from 'twin.macro';

import CategoryToIcon from './CategoryToIcon';

const Card = ({ article }) => (
  <Link href="/article/[aid]" as={`/article/${article.slug}`} passHref>
    <div
      css={tw`w-full overflow-hidden shadow-md hover:shadow-lg cursor-pointer`}
    >
      {article.cover_image && article.cover_image.url.slice(0, 1) !== '/' && (
        <CloudinaryContext
          cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_NAME}
          css={tw`rounded-t-md w-full h-64 overflow-hidden`}
        >
          <Image
            secure="true"
            responsive
            width="auto"
            crop="scale"
            css={tw`
							w-full h-64 object-cover object-center 
							transition-all duration-500 ease-out transform hover:scale-125 
							rounded-t-md origin-center
						`}
            responsiveUseBreakpoints="true"
            publicId={article.cover_image.url.split('/').pop()}
          >
            <Placeholder type="pixelate" />
          </Image>
        </CloudinaryContext>
      )}
      {article.cover_image && article.cover_image.url.slice(0, 1) === '/' && (
        <div css={tw`rounded-t-md w-full h-64 overflow-hidden`}>
          <img
            css={tw`
							w-full h-64 object-cover object-center 
							transition-all duration-500 ease-out transform hover:scale-125
							rounded-t-md origin-center
						`}
            alt={`cover for article: ${article.title}`}
            src={`${process.env.API_URL}${article.cover_image.url}`}
          />
        </div>
      )}
      {!article.cover_image && <CategoryToIcon category={article.category} />}
      <div css={tw`px-6 py-4 bg-main-light`}>
        <h2 css={tw`font-bold text-light text-xl mb-2`}>{article.title}</h2>
      </div>
      <div css={tw`px-6 pb-2 bg-main-light rounded-b-md`}>
        <span
          css={tw`
						inline-block bg-gray-200 rounded-full 
						px-3 py-1 mr-2 mb-2
						text-sm font-semibold text-main-dark 
					`}
        >
          #{article.category ? article.category.name : ''}
        </span>
      </div>
    </div>
  </Link>
);

Card.propTypes = {
  article: PropTypes.shape({
    tags: PropTypes.arrayOf(
      PropTypes.PropTypes.shape({
        slug: PropTypes.string.isRequired,
        name: PropTypes.string,
      })
    ),
    slug: PropTypes.string.isRequired,
    cover_image: PropTypes.PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    category: PropTypes.PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default Card;
