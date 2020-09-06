import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import { animateScroll } from 'react-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import ARTICLES_QUERY from '../apollo/queries/article/articles';
import { initializeApollo } from '../utils/apollo';

import Articles from '../components/Articles';
import Intro from '../components/LandingPage/Intro';
import About from '../components/LandingPage/About';
import Services from '../components/LandingPage/Services';

const Home = ({ articles }) => {
	gsap.registerPlugin(ScrollTrigger);

	const refs = {
		home: useRef(null),
		about: useRef(null),
		services: useRef(null),
	};
	const router = useRouter();
	useEffect(() => {
		// gsap.from(refs.home.current, {
		// 	scale: 0,
		// });

		gsap.from(refs.services.current, {
			scrollTrigger: refs.services.current,
			x: -500,
		});

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

			<div css={tw`container mx-auto mt-16`} ref={refs.about}>
				<About />
			</div>

			<div css={tw`container mx-auto mt-16`} ref={refs.services}>
				<Services />
			</div>
			<div css={tw`container mx-auto mt-16`}>
				<Articles articles={articles} />
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
