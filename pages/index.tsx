import React, { useRef, useEffect, ReactElement } from 'react';
import tw from 'twin.macro';
import AOS from 'aos';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

import { Container } from 'components/styles';
import BlogPosts from 'components/pages/LandingPage/BlogPosts/BlogPosts';
import Skewed from 'components/pages/LandingPage/Skewed';
import Intro from 'components/pages/LandingPage/Intro/Intro';
import About from 'components/pages/LandingPage/About/About';
import Contact from 'components/pages/LandingPage/Contact/Contact';
import Works from 'components/pages/LandingPage/Works/Works';
import Skills from 'components/pages/LandingPage/Skills/Skills';
import { MetaHead } from 'components';
import { getFeaturedBlogs } from '@/data/blogs';
import { HomePageProps } from '@/types';
import { defaultSeo } from '@/constants';

const Home = ({ articles }: HomePageProps): ReactElement => {
  const refs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    works: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const router = useRouter();

  const scrollToContact = () => {
    if (refs.contact.current) {
      const offsetTop = refs.contact.current.offsetTop - 150;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 200,
    });

    if (router.asPath.length && router.asPath.slice(0, 2) === '/#') {
      const block = router.asPath.slice(2) as keyof typeof refs;
      if (refs[block] && refs[block].current) {
        const offsetTop = refs[block].current!.offsetTop - 150;
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
        <Intro />
        <div css={[tw`relative my-24`]} ref={refs.about}>
          <Skewed>
            <About />
          </Skewed>
        </div>

        <Container>
          <Works />
        </Container>

        <div css={[tw`relative my-24`]} ref={refs.skills}>
          <Skewed>
            <Skills />
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

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const articles = getFeaturedBlogs();

  return {
    props: {
      articles: articles.map((article) => ({
        id: article.id,
        title: article.title,
        slug: article.slug,
        tagline: article.tagline,
        publishedOn: article.publishedOn,
        isExternal: article.isExternal,
        externalUrl: article.externalUrl,
        thumbnail: article.thumbnail,
        category: article.category,
        tags: article.tags,
      })),
    },
  };
};
