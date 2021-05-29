import { Fragment } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import tw, { css } from 'twin.macro';
import Image from 'next/image';

import { ImageWindow, Tag, CardContainer } from './styles';

import TagToIcon from './TagToIcon';

const Card = ({ article, dark }) => (
  <Link href="/article/[aid]" passHref as={`/article/${article.slug}`}>
    <a href={`/article/${article.slug}`} title={article.title}>
      <CardContainer>
        <Fragment>
          {article.thumbnail && (
            <ImageWindow>
              <Image
                src={
                  article.thumbnail.url.slice(0, 1) !== '/'
                    ? article.thumbnail.url.replace(/^.*[\\/]/, '')
                    : `${process.env.API_URL}${article.thumbnail.url}`
                }
                css={tw`w-full`}
                width={600}
                height={338}
                layout="responsive"
                alt={article.title}
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
              {article.title}
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
    </a>
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
