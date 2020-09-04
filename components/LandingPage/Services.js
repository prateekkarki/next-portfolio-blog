/** @jsx jsx **/
import { jsx } from '@emotion/core';

import TitleBlock from './TitleBlock';
import tw from 'twin.macro';

function Services() {
	return (
		<div>
			<TitleBlock title="Services" subtitle="What I can do for you" />

			<div css={tw`block md:flex`}>
				<div css={tw`hidden md:block`}>
					<img src="/images/coffee-laptop.jpg" alt="laptop coffee" />
				</div>
				<div css={tw`text-center bg-main-light text-light py-4`}>
					<h4 css={tw`text-2xl`}>
						<strong>Hello stranger,</strong>
					</h4>
					<p css={tw`text-base font-normal mt-4`}>
						I'm Prateek, a web developer from Kathmandu, Nepal.
						<br />I enjoy creating things that live on the internet, whether that be websites, applications,
						or anything in between. My goal is to always build products that provide pixel-perfect,
						performant experiences.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Services;
