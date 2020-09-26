import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import tw, { css } from 'twin.macro';
import PropTypes from 'prop-types';
import { animateScroll } from 'react-scroll';
import TitleBlock from '../components/LandingPage/TitleBlock';

import ARTICLES_QUERY from '../apollo/queries/article/articles';
import { initializeApollo } from '../utils/apollo';

import Articles from '../components/Articles';
import Skewed from '../components/LandingPage/Skewed';
import Intro from '../components/LandingPage/Intro';
import About from '../components/LandingPage/About/About';
import Contact from '../components/LandingPage/Contact/Contact';

const Home = ({ articles }) => {
	const refs = {
		home: useRef(null),
		about: useRef(null),
		contact: useRef(null),
	};
	const router = useRouter();
	useEffect(() => {
		if (router.asPath.length && router.asPath.slice(0, 2) === '/#') {
			const block = router.asPath.slice(2);
			if (refs[block]) {
				animateScroll.scrollTo(refs[block].current.offsetTop - 150, { duration: 750 });
			}
		}
	});

	return (
		<div css={tw`bg-main-dark`} ref={refs.home}>
			<Intro />
				
			<div css={[tw`relative my-16`]} ref={refs.about}>
				<Skewed>
					<About />
				</Skewed>
			</div>

			<div css={tw`container mx-auto`}>
				<TitleBlock title="Blog" subtitle="Stuff I wrote" />
				<Articles articles={articles} />
			</div>

			
			
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
		query: ARTICLES_QUERY,
	});

	// The value of the `props` key will be
	//  passed to the `Home` component
	return {
		props: res.data,
	};
}
