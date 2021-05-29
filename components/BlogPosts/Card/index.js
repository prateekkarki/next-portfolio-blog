import { Fragment } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import truncate from 'lodash/truncate';

import { Image, Placeholder, Transformation } from 'cloudinary-react';
import tw, { css } from 'twin.macro';

import { ImageWindow, Tag, CardContainer } from './styles';

import TagToIcon from './TagToIcon';

const Card = ({ article, dark }) => (
  <Link href="/article/[aid]" as={`/article/${article.slug}`}>
    <CardContainer title={article.title}>
      {console.log({ article })}
      <Fragment>
        {article.thumbnail && article.thumbnail.url.slice(0, 1) !== '/' && (
          <ImageWindow>
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
          </ImageWindow>
        )}
        {article.thumbnail && article.thumbnail.url.slice(0, 1) === '/' && (
          <ImageWindow>
            <img
              alt={`thumbnail for article: ${article.title}`}
              src={`${process.env.API_URL}${article.thumbnail.url}`}
              title={article.title}
            />
          </ImageWindow>
        )}
      </Fragment>
      {!article.thumbnail && <TagToIcon tags={article.tags} />}
      <div
        css={[
          dark
            ? tw`bg-mainLight-100 dark:bg-mainDark-100 rounded-b-md`
            : tw`bg-mainLight-200 dark:bg-mainDark-200 rounded-b-md`,
          css`height:calc(100% - 16rem);`,
        ]}
      >
        <div css={tw`px-6 pt-4`}>
          <p
            css={tw`font-bold text-mainLight-700 dark:text-mainDark-700 text-xl mb-0 truncate `}
          >
            {truncate(article.title, {
              length: 50,
              omission: '...',
            })}
          </p>
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
    </CardContainer>
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
