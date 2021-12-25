import { Fragment } from 'react';
import Head from 'next/head';

import TitleBlock from 'components/Common/TitleBlock';
import Timeline from 'components/pages/AboutPage/Timeline';
import { Container, MainBg } from 'components/styles';
import { defaultSeo } from 'constants';
import { MetaHead } from 'components';

function about() {
  const seo = {
    ...defaultSeo,
    title: 'About me | Prateek Karki',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  };
  return (
    <Fragment>
      <MetaHead seo={seo} />
      <TitleBlock title="About Me" subtitle="Who am I?" />
      <MainBg>
        <Container>
          <Timeline />
        </Container>
      </MainBg>
    </Fragment>
  );
}

export default about;
