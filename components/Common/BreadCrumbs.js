import { Fragment } from 'react';

import { BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';

import tw from 'twin.macro';

function EachBlock({ path, title }) {
  return path ? (
    <Fragment>
      <Link href={path} as={path} passHref>
        <a href={path} css={tw`text-main-200 hover:text-primary font-bold`}>
          {title}
        </a>
      </Link>
      <BsChevronRight />
    </Fragment>
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
