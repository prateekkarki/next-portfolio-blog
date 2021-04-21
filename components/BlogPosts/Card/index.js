import { Fragment } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import truncate from 'lodash/truncate';

import { Image, Placeholder, Transformation } from 'cloudinary-react';
import tw from 'twin.macro';

import { ImageWindow, Tag } from './styles';

import TagToIcon from './TagToIcon';

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
              title={article.title}
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
        <Link
          href="/article/[aid]"
          as={`/article/${article.slug}`}
          passHref
          title={article.title}
        >
          <ImageWindow>
            <img
              alt={`thumbnail for article: ${article.title}`}
              src={`${process.env.API_URL}${article.thumbnail.url}`}
              title={article.title}
            />
          </ImageWindow>
        </Link>
      )}
    </Fragment>
    {!article.thumbnail && (
      <Link
        href="/article/[aid]"
        as={`/article/${article.slug}`}
        passHref
        title={article.title}
      >
        <a>
          <TagToIcon tags={article.tags} />
        </a>
      </Link>
    )}
    <div
      css={
        dark
          ? tw`bg-mainLight-100 dark:bg-mainDark-100 rounded-b-md`
          : tw`bg-mainLight-200 dark:bg-mainDark-200 rounded-b-md`
      }
    >
      <div css={tw`px-6 pt-4`}>
        <Link href="/article/[aid]" as={`/article/${article.slug}`} passHref>
          <a href="/article/[aid]" title={article.title}>
            <p
              css={tw`font-bold text-mainLight-700 dark:text-mainDark-700 text-xl mb-0 truncate `}
            >
              {truncate(article.title, {
                length: 50,
                omission: '...',
              })}
            </p>
          </a>
        </Link>
      </div>
      <div css={tw`px-6 pb-2`}>
        <p css={tw`text-mainLight-600 dark:text-mainDark-600`}>
          {article.category?.name || ''}
        </p>
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
