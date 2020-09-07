/** @jsx jsx * */
import { jsx } from '@emotion/core';
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
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
					gsap.fromTo(
						headerRef.current,
						0.4,
						{
							yPercent: 0,
							ease: 'power1.inOut',
							onComplete: () => {
								setIsUp(true);
							},
						},
						{
							yPercent: -100,
						}
					);
				}
			} else if (isUp) {
				gsap.fromTo(
					headerRef.current,
					0.4,
					{
						yPercent: -100,
						ease: 'power1.inOut',
						onComplete: () => {
							setIsUp(false);
						},
					},
					{
						yPercent: 0,
					}
				);
			}
			setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
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
