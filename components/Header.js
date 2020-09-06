/** @jsx jsx * */
import { jsx } from '@emotion/core';

import PropTypes from 'prop-types';

import tw from 'twin.macro';
import Nav from './Nav';

function Header({ categories }) {
	return (
		<header css={tw`bg-main-light z-10 sticky top-0`}>
			<Nav categories={categories} />
		</header>
	);
}

Header.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Header;
