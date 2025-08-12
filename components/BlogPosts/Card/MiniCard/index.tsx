import React, { type ReactElement } from 'react';
import Link from 'next/link';

import tw from 'twin.macro';
import Image from 'next/image';

import { cloudinaryLoader } from 'utils';

import { ImageWindow, Tag, CardContainer } from '../styles';

import TagToIcon from '../TagToIcon';
import { LinkWrapperProps, MiniCardProps } from '../../../../types';

export const LinkWrapper = ({
  children,
  article,
}: LinkWrapperProps): ReactElement => {
  if (article.isExternal) {
    return (
      <a
        href={article.externalUrl || ''}
        target="_blank"
        title={article.title}
        tw="max-w-full w-full"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href="/article/[aid]" passHref as={`/article/${article.slug}`}>
      <a
        href={`/article/${article.slug}`}
        title={article.title}
        tw="max-w-full w-full"
        rel="noreferrer"
      >
        {children}
      </a>
    </Link>
  );
};

const Card = ({ article, dark }: MiniCardProps): ReactElement => {
  const url = `${article?.thumbnail?.url.replace(/^.*[\\/]/, '')}`;

  return (
    <LinkWrapper article={article}>
      <CardContainer dark={dark} mini tw="flex flex-row">
        <div tw="width[35%] ">
          <>
            {article.thumbnail && (
              <div css={tw`w-full h-full flex justify-center items-center `}>
                <ImageWindow>
                  <Image
                    src={url}
                    loader={cloudinaryLoader}
                    placeholder="blur"
                    blurDataURL={cloudinaryLoader({
                      src: url,
                      width: 265,
                      blur: true,
                    })}
                    width={265}
                    height={150}
                    layout="responsive"
                    alt={article.title}
                    title={article.title}
                  />
                </ImageWindow>
              </div>
            )}
          </>
          {!article.thumbnail && <TagToIcon tags={article.tags} />}
        </div>
        <div css={[tw`width[64%] flex flex-col justify-center`]}>
          <div css={tw`px-6 pt-4`}>
            <p
              css={tw`font-bold text-light-700 dark:text-dark-700 text-xl mb-0`}
            >
              {article.title} {article.isExternal ? '⧉' : ''}
            </p>
          </div>
          <div css={tw`px-6 pb-2`}>
            <p css={tw`text-light-600 dark:text-dark-600`}>
              {article.category?.title || ''}
            </p>
          </div>
          <div css={tw`px-6 pb-2 mt-4`}>
            {article.tags.map((tag) => (
              <Tag key={`tag-${tag.slug}`}>#{tag.title}</Tag>
            ))}
          </div>
        </div>
      </CardContainer>
    </LinkWrapper>
  );
};

export default Card;
