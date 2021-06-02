import { Fragment } from 'react';
import Head from 'next/head';

import TitleBlock from 'components/Common/TitleBlock';
import Timeline from 'components/pages/AboutPage/Timeline';
import { Container, MainBg } from 'components/styles';

function about() {
  return (
    <Fragment>
      <Head>
        <title>About me | Prateek Karki</title>
        <meta
          name="description"
          content="Full-stack web developer dedicated to providing beautiful and performant solutions on the internet."
        />
        <meta
          name="keywords"
          content="Web Development, Web Developer, Javascript Developer, Fullstack Web Developer, Solution architect, Freelancer"
        />
        <meta
          property="og:image"
          content="https://meetprateek.com/images/logo/3x/logo.png"
        />
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
