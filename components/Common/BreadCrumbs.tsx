import React, { type ReactElement } from 'react';

import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

import tw from 'twin.macro';
import { BreadCrumbsProps, BreadCrumbBlock } from '../../types';

function EachBlock({ path, title }: BreadCrumbBlock): ReactElement {
  return path ? (
    <>
      <Link href={path} passHref>
        <a
          href={path}
          css={tw`text-light-700 dark:text-dark-700 hover:text-primary font-bold`}
        >
          {title}
        </a>
      </Link>
      <FaAngleRight tw="mx-1" />
    </>
  ) : (
    <span>{title}</span>
  );
}

function BreadCrumbs({ blocks }: BreadCrumbsProps): ReactElement {
  return (
    <div css={tw`flex items-center`}>
      {blocks.map((block, i) => (
        <EachBlock
          path={block.path}
          title={block.title}
          key={block.title || i}
        />
      ))}
    </div>
  );
}

export default BreadCrumbs;
