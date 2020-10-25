import React from 'react';
import tw from 'twin.macro';
import Head from 'next/head';
import AOS from 'aos';

import TitleBlock from '../components/Common/TitleBlock';
import Contact from '../components/LandingPage/Contact/Contact';

function ContactPage() {
  React.useEffect(() => {
    AOS.init({
      duration: 750,
    });
  });

  return (
    <>
      <Head>
        <title>Prateek Karki&apos;s blog</title>
      </Head>
      <div css={tw`mt-16`}>
        <TitleBlock
          title="Contact Me"
          subtitle="Feel free to reach out anytime."
        />
        <Contact />
      </div>
    </>
  );
}

export default ContactPage;
