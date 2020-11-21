import { Fragment } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { Image, Placeholder, Transformation } from 'cloudinary-react';
import tw, { styled, css } from 'twin.macro';

import CategoryToIcon from './CategoryToIcon';

const Tag = tw.span`
  inline-block bg-main-600 rounded-full 
  px-3 py-1 mr-2 mb-2
  text-sm font-semibold text-main-500 
`;

const ImageWindow = styled.div([
  tw`rounded-t-md w-full h-64 overflow-hidden cursor-pointer`,
  css`
    img {
      width: 100%;
      height: 16rem;
      object-fit: cover;
      object-position: center;
      transition: all 500ms cubic-bezier(0, 0, 0.2, 1);
      border-top-left-radius: 0.375rem;
      border-top-right-radius: 0.375rem;
      transform-origin: center;
      &:hover {
        transform: scale(1.25);
      }
    }
  `,
]);

const Card = ({ article, dark }) => (
  <div css={tw`w-full overflow-hidden shadow-md hover:shadow-lg`}>
    <Fragment>
      {article.thumbnail && article.thumbnail.url.slice(0, 1) !== '/' && (
        <ImageWindow>
          <Link href="/article/[aid]" as={`/article/${article.slug}`}>
            <Image
              secure="true"
              responsive
              width="auto"
              alt={`thumbnail for article: ${article.title}`}
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_NAME}
              responsiveUseBreakpoints="true"
              publicId={article.thumbnail.url.split('/').pop()}
            >
              <Transformation crop="scale" fetchFormat="auto" />
              <Placeholder type="blur" />
            </Image>
          </Link>
        </ImageWindow>
      )}
      {article.thumbnail && article.thumbnail.url.slice(0, 1) === '/' && (
        <Link href="/article/[aid]" as={`/article/${article.slug}`} passHref>
          <ImageWindow>
            <img
              alt={`thumbnail for article: ${article.title}`}
              src={`${process.env.API_URL}${article.thumbnail.url}`}
            />
          </ImageWindow>
        </Link>
      )}
    </Fragment>
    {!article.thumbnail && <CategoryToIcon category={article.category} />}
    <div
      css={dark ? tw`bg-main-800 rounded-b-md` : tw`bg-main-700 rounded-b-md`}
    >
      <div css={tw`px-6 pt-4`}>
        <Link href="/article/[aid]" as={`/article/${article.slug}`} passHref>
          <a css={tw`font-bold text-main-200 text-xl mb-0`}>{article.title}</a>
        </Link>
      </div>
      <div css={tw`px-6 pb-2`}>
        <p css={tw`text-main-400`}>{article.category?.name || ''}</p>
      </div>
      <div css={tw`px-6 pb-2 mt-4`}>
        {article.tags.map((tag) => (
          <Tag key={`tag-${tag.slug}`}>#{tag.name}</Tag>
        ))}
      </div>
    </div>
  </div>
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
    thumbnail: PropTypes.PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    category: PropTypes.PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default Card;
