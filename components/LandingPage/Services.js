/** @jsx jsx * */
import { jsx } from '@emotion/core';

import tw from 'twin.macro';
import TitleBlock from './TitleBlock';

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
				</div>
			</div>
		</div>
	);
}

export default Services;
