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

const Home = ({ articles }) => {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  const router = useRouter();
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

  return (
    <div css={tw`bg-mainLight-100 dark:bg-mainDark-100`} ref={refs.home}>
      <Intro />

      <div css={[tw`relative my-16`]} ref={refs.about}>
        <Skewed>
          <About />
        </Skewed>
      </div>

      <Container>
        <BlogPosts articles={articles} />
      </Container>

      <div css={[tw`relative my-16`]} ref={refs.contact}>
        <Skewed>
          <Contact />
        </Skewed>
      </div>
    </div>
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
