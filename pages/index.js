import React from 'react';
import Articles from '../components/Articles';
import ARTICLES_QUERY from '../apollo/queries/article/articles';
import { initializeApollo } from '../utils/apollo';
import tw, { css } from 'twin.macro';

const curvedBg = css`
	height: 400px;
	background: url(/images/curve.png);
	background-repeat: no-repeat;

	background-position: 10% 100%;
	background-size: 200%;

	@media (min-width: 768px) {
		background-position: 30% 100%;
		background-size: 110%;
		height: 700px;
	}
`;

const Home = ({ articles }) => {
	return (
		<div className="bg-main-dark">
			<div css={[tw`mb-16`, curvedBg]}>
				<div className="container flex h-full items-center justify-center mx-auto">
					<div className="w-full md:w-1/2 text-center md:text-left">
						<p className="text-primary font-semibold text-2xl">
							Hello, I'm <span className="text-secondary">Prateek Karki</span>{' '}
						</p>
						<p className="text-primary text-5xl font-bold">Javascript Developer</p>
						<p className="text-light text-base font-normal mt-2">
							Freelancer Web/ Mobile UI/UX Designer with Motion Graphics
						</p>
						<div className="flex gap-10 justify-center md:justify-start mt-4">
							<button className="w-40 rounded-full bg-primary shadow-primary font-semibold text-base py-4 text-white text-center">
								Hire Me
							</button>
							<button className="w-40 rounded-full bg-secondary font-semibold text-base py-4 text-white shadow-secondary text-center ">
								Get Resume
							</button>
						</div>
					</div>
					<div className="hidden md:block w-1/2">
						<img src="/images/developer.svg" alt="developer" />
					</div>
				</div>
			</div>
			<div className="container mx-auto">
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
