import { Fragment } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { cloudinaryLoader } from 'utils';

import tw, { css } from 'twin.macro';
import Image from 'next/image';

import { ImageWindow, Tag, CardContainer } from '../styles';
import TagToIcon from '../TagToIcon';

const Card = ({ article, dark }) => {
  const url = `${article?.thumbnail?.url.replace(/^.*[\\/]/, '')}`;
  return (
    <Link href="/article/[aid]" passHref as={`/article/${article.slug}`}>
      <a
        href={`/article/${article.slug}`}
        title={article.title}
        tw="max-w-full"
      >
        <CardContainer dark={dark}>
          <Fragment>
            {article.thumbnail && (
              <ImageWindow>
                <Image
                  src={url}
                  loader={cloudinaryLoader}
                  placeholder="blur"
                  blurDataURL={cloudinaryLoader({
                    src: url,
                    width: 600,
                    blur: true,
                  })}
                  width={600}
                  height={338}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  layout="responsive"
                  alt={article.title}
                  title={article.title}
                  css={tw`w-full`}
                />
              </ImageWindow>
            )}
          </Fragment>
          {!article.thumbnail && <TagToIcon tags={article.tags} />}
          <div css={[css`height:calc(100% - 16rem);`]}>
            <div css={tw`px-6 pt-4`}>
              <p
                css={tw`font-bold text-light-700 dark:text-dark-700 text-xl mb-0`}
              >
                {article.title}
              </p>
            </div>
            <div css={tw`px-6 pb-2`}>
              <p css={tw`text-light-600 dark:text-dark-600`}>
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
};

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
