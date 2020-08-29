import React from 'react';
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

function Intro() {
	return (
		<div css={curvedBg}>
			<div css={tw`container flex h-full items-center justify-center mx-auto`}>
				<div css={tw`w-full md:w-1/2 text-center md:text-left`}>
					<p css={tw`text-primary font-semibold text-2xl`}>
						Hello, I'm <span css={tw`text-secondary`}>Prateek Karki</span>
					</p>
					<p css={tw`text-primary text-5xl font-bold`}>Javascript Developer</p>
					<p css={tw`text-light text-base font-normal mt-2`}>
						Freelancer Web/ Mobile UI/UX Designer with Motion Graphics
					</p>
					<div css={tw`flex gap-10 justify-center md:justify-start mt-4`}>
						<button
							css={tw`w-40 rounded-full bg-primary shadow-primary font-semibold text-base py-4 text-white text-center`}
						>
							Hire Me
						</button>
						<button
							css={tw`w-40 rounded-full bg-secondary font-semibold text-base py-4 text-white shadow-secondary text-center `}
						>
							Get Resume
						</button>
					</div>
				</div>
				<div css={tw`hidden md:block w-1/2`}>
					<img src="/images/developer.svg" alt="developer" />
				</div>
			</div>
		</div>
	);
}

export default Intro;
