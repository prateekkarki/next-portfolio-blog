import React, { ReactElement } from 'react';
import Head from 'next/head';

import TitleBlock from 'components/Common/TitleBlock';
import Timeline from 'components/pages/AboutPage/Timeline';
import { Container, MainBg } from 'components/styles';
import { MetaHead } from 'components';
import { defaultSeo } from 'constants/index';
import About from '@/components/pages/AboutPage/About/About';

function AboutPage(): ReactElement {
  const seo = {
    ...defaultSeo,
    title: 'About me | Prateek Karki',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  };
  return (
    <>
      <MetaHead seo={seo} />
      <TitleBlock title="About Me" subtitle="Who am I?" />
      <About />
      <MainBg>
        <Container>
          <Timeline />
        </Container>
      </MainBg>
    </>
  );
}

export default AboutPage;
