import { Fragment } from 'react';
import Head from 'next/head';

import TitleBlock from '../components/Common/TitleBlock';
import Timeline from '../components/AboutPage/Timeline/index';
import { Container, MainBg } from '../components/styles';

function about() {
  return (
    <Fragment>
      <Head>
        <title>About me | Prateek Karki</title>
      </Head>
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
