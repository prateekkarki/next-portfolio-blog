/** @jsx jsx * */
import { jsx } from '@emotion/core';
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import tw from 'twin.macro';

import Nav from './Nav';

function Header({ categories }) {
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [isUp, setIsUp] = useState(false);
	const headerRef = useRef(null);

	useEffect(() => {
		const scrollCheck = () => {
			const st = window.pageYOffset || document.documentElement.scrollTop;
			if (st > lastScrollTop) {
				if (!isUp && st > headerRef.current.clientHeight) {
					// console.log('downscroll');
					anime({
						targets: [headerRef.current.parentElement.querySelectorAll('header')],
						translateY: [0, '-100%'],
						easing: 'easeInOutQuad',
						duration: 400,
						complete: () => {
							setIsUp(true);
						},
					});
				}
			} else if (isUp) {
				// console.log('upscroll');
				anime({
					targets: [headerRef.current],
					translateY: ['-100', '0%'],
					easing: 'easeInOutQuad',
					duration: 400,
					complete: () => {
						setIsUp(false);
					},
				});
			}
			setLastScrollTop(st <= 0 ? 0 : st);
		};

		window.addEventListener('scroll', scrollCheck);

		return () => {
			window.removeEventListener('scroll', scrollCheck);
		};
	});

	return (
		<header css={tw`bg-main-light z-10 sticky top-0`} ref={headerRef}>
			<Nav categories={categories} />
		</header>
	);
}

Header.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Header;
