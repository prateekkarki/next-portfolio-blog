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
import { MetaHead } from 'components';
import { defaultSeo } from '../constants/index';

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

  return (
    <>
      <MetaHead seo={defaultSeo} />
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

  return {
    props: {
      articles: res.data.articles.data.map((article) => ({
        id: article.id,
        ...article.attributes,
        thumbnail: article.attributes.thumbnail?.data?.attributes?.url
          ? {
              url: article.attributes.thumbnail?.data?.attributes?.url,
            }
          : null,
        category: {
          title: article.attributes.category.data.attributes.title || '',
          slug: article.attributes.category.data.attributes.slug || '',
        },
        tags: (article.attributes.tags.data || []).map((tag) => ({
          title: tag.attributes.title,
          slug: tag.attributes.slug,
        })),
      })),
    },
  };
}
