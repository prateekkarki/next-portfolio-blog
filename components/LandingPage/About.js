/** @jsx jsx * */
import { jsx } from '@emotion/core';
import { Video, CloudinaryContext, Transformation } from 'cloudinary-react';

import tw from 'twin.macro';
import TitleBlock from './TitleBlock';

function About() {
	return (
		<div>
			<TitleBlock title="About Me" subtitle="Who am I?" />
			<div css={tw`block md:flex`}>
				<div css={tw`hidden md:block`}>
					<CloudinaryContext cloudName={process.env.CLOUDINARY_NAME}>
						<Video
							publicId="dev-at-work"
							alt="developer at work"
							fallbackContent="Your browser does not support HTML5 video tags."
							secure
							loop
							autoPlay
						>
							<Transformation width="350" crop="scale" />
						</Video>
					</CloudinaryContext>
				</div>
				<div css={tw`text-center bg-main-light text-light py-4`}>
					<h4 css={tw`text-2xl`}>
						<strong>Hello stranger,</strong>
					</h4>
					<p css={tw`text-base font-normal mt-4 px-3 md:px-6`}>
						I&apos;m Prateek, a web developer from Kathmandu, Nepal.
						<br />I enjoy creating things that live on the internet, whether that be
						websites, applications, or anything in between. My goal is to always build
						products that provide pixel-perfect, performant experiences.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
