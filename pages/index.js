import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Articles from '../components/Articles';
import ARTICLES_QUERY from '../apollo/queries/article/articles';
import { initializeApollo } from '../utils/apollo';
import tw, { css } from 'twin.macro';
import { animateScroll } from 'react-scroll';

import Intro from '../components/LandingPage/Intro';
import About from '../components/LandingPage/About';
import Services from '../components/LandingPage/Services';

const Home = ({ articles }) => {
	const refs = {
		home: useRef(null),
		about: useRef(null),
		services: useRef(null),
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
			<div css={tw`container mx-auto mt-16`} ref={refs.about}>
				<About />;
			</div>
			<div css={tw`container mx-auto mt-16`} ref={refs.services}>
				<Services />;
			</div>
			<div css={tw`container mx-auto mt-16`}>
				<Articles articles={articles} />;
			</div>
		</div>
	);
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
