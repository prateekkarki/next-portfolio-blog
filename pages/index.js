import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import AOS from 'aos';

import { LANDING_PAGE_POSTS } from 'apollo/queries/article/articles';
import { initializeApollo } from 'utils/apollo';

import { Container } from 'components/styles';
import BlogPosts from 'components/pages/LandingPage/BlogPosts/BlogPosts';
import Skewed from 'components/pages/LandingPage/Skewed';
import Intro from 'components/pages/LandingPage/Intro/Intro';
import About from 'components/pages/LandingPage/About/About';
import Contact from 'components/pages/LandingPage/Contact/Contact';
import Head from 'next/head';

const Home = ({ articles }) => {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  const router = useRouter();

  const scrollToContact = () => {
    const offsetTop = refs.contact.current.offsetTop - 150;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 200,
    });

    if (router.asPath.length && router.asPath.slice(0, 2) === '/#') {
      const block = router.asPath.slice(2);
      if (refs[block]) {
        const offsetTop = refs[block].current.offsetTop - 150;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
  });

  const seo = {
    siteName: 'Meet Prateek',
    locale: 'en_US',
    title: 'Prateek Karki | Full-stack web developer from Kathmandu, Nepal',
    description:
      'Prateek Karki is a Full-stack web developer dedicated to providing beautiful and performant solutions on the web. He is a self-taught developer with a passion for building awesome web applications.',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og_thumb_me.jpg`,
    twitterUsername: '@PrateekKarki',
    twitterCard: 'summary_large_image',
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:site_name" content={seo.siteName} />
        <meta property="og:locale" content={seo.locale} />
        <meta name="twitter:card" content={seo.twitterCard} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:site" content={seo.twitterUsername} />
        <meta name="twitter:image" content={seo.image} />
        <meta name="twitter:creator" content={seo.twitterUsername} />
        <link rel="canonical" url={seo.description} />

        <meta
          name="keywords"
          content="Web Development, Web Developer, Javascript Developer, Fullstack Web Developer, Solution architect, Freelancer"
        />
      </Head>
      <div css={tw`bg-light-100 dark:bg-dark-100`} ref={refs.home}>
        <Intro scrollToContact={scrollToContact} />
        <div css={[tw`relative my-24`]} ref={refs.about}>
          <Skewed>
            <About />
          </Skewed>
        </div>

        <Container>
          <BlogPosts articles={articles} />
        </Container>

        <div css={[tw`relative my-24`]} ref={refs.contact}>
          <Skewed>
            <Contact />
          </Skewed>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;

export async function getStaticProps() {
  const client = initializeApollo();
  const res = await client.query({
    query: LANDING_PAGE_POSTS,
  });

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: res.data,
  };
}
