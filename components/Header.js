/** @jsx jsx * */
import { jsx } from '@emotion/core';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import tw from 'twin.macro';
import { throttle } from 'lodash';

import Nav from './Nav';

function Header({ categories }) {
	const lastScrollTop = useRef(0);
	const isUp = useRef(false);
	const headerRef = useRef(null);

	useEffect(() => {
		const scrollCheck = () => {
			const st = window.pageYOffset || document.documentElement.scrollTop;
			// console.log(st, isUp.current);
			if (st > lastScrollTop.current) {
				if (!isUp.current && st > headerRef.current.clientHeight) {
					// console.log('downscroll');
					anime({
						targets: [headerRef.current.parentElement.querySelectorAll('header')],
						translateY: [0, '-100%'],
						easing: 'easeInOutQuad',
						duration: 400,
						begin: () => {
							isUp.current = true;
						},
					});
				}
			} else if (isUp.current) {
				// console.log('upscroll');
				anime({
					targets: [headerRef.current],
					translateY: ['-100', '0%'],
					easing: 'easeInOutQuad',
					duration: 400,
					begin: () => {
						isUp.current = false;
					},
				});
			}
			lastScrollTop.current = st <= 0 ? 0 : st;
		};

		const throttled = throttle(scrollCheck, 10, { leading: true, trailing: false });

		window.addEventListener('scroll', throttled);

		return () => {
			window.removeEventListener('scroll', throttled);
		};
	});

	return (
		<header css={tw`bg-main-light z-10 sticky top-0 shadow-2xl`} ref={headerRef}>
			<Nav categories={categories} />
		</header>
	);
}

Header.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Header;
