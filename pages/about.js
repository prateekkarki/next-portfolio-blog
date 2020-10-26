import React from 'react';
import tw from 'twin.macro';
import Head from 'next/head';

import TitleBlock from '../components/Common/TitleBlock';
import Timeline from '../components/AboutPage/Timeline';

function about() {
  return (
    <>
      <Head>
        <title>About me | Prateek Karki</title>
      </Head>
      <TitleBlock title="About Me" subtitle="Who am I?" />
      <div css={tw`bg-main-light`}>
        <div css={tw`container mx-auto`}>
          <Timeline />
        </div>
      </div>
    </>
  );
}

export default about;
