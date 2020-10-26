import React from 'react';

import { BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';

import tw from 'twin.macro';

function EachBlock({ path, title }) {
  return path ? (
    <>
      <Link href={path} as={path} passHref>
        <a css={tw`text-light hover:text-primary font-bold`}>{title}</a>
      </Link>
      <BsChevronRight />
    </>
  ) : (
    <span>{title}</span>
  );
}

function BreadCrumbs({ blocks }) {
  return (
    <div css={tw`flex items-center col-gap-2`}>
      {blocks.map((block) => (
        <EachBlock path={block.path} title={block.title} key={block.title} />
      ))}
    </div>
  );
}

export default BreadCrumbs;
