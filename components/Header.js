/** @jsx jsx **/
import { jsx } from '@emotion/core';

import Nav from './Nav';

import tw from 'twin.macro';

function Header({ categories }) {
	return (
		<header css={tw`bg-main-light z-10 sticky top-0`}>
			<Nav categories={categories} />
		</header>
	);
}

export default Header;
