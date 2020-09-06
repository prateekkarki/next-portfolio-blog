/** @jsx jsx * */
import { jsx, css } from '@emotion/core';

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Link from 'next/link';
import tw, { styled } from 'twin.macro';

const Nav = ({ categories }) => {
	let isExpanded = false;
	const Line = tw.span`w-5 h-px mb-1 bg-secondary duration-300 ease-out transition-all`;

	const mobileNavRef = useRef(null);
	const mobileNavTrigger = useRef(null);

	const MainNav = styled.nav(
		tw`hidden sm:flex text-lg flex-col items-center sm:flex-row sm:mr-4`
	);

	const MobileNav = styled.nav([
		css`
			top: 128px;
			transform: translateY(-100%);
		`,
		tw`flex sm:hidden w-full absolute bg-main-light text-lg flex-col items-center duration-700 ease-out transition-all z-0`,
	]);

	const expandMobileNav = () => {
		if (isExpanded) {
			mobileNavRef.current.style.transform = 'translateY(-100%)';
			mobileNavTrigger.current.children[0].style.transform = 'rotate(0)';
			mobileNavTrigger.current.children[1].style.opacity = '1';
			mobileNavTrigger.current.children[2].style.transform = 'rotate(0) translate(0,0)';
			isExpanded = false;
		} else {
			mobileNavRef.current.style.transform = 'translateY(0)';
			mobileNavTrigger.current.children[0].style.transform = 'rotate(45deg)';
			mobileNavTrigger.current.children[1].style.opacity = '0';
			mobileNavTrigger.current.children[2].style.transform =
				'rotate(-45deg) translate(7px, -7px)';
			isExpanded = true;
		}
	};

	const ActiveLink = (props) => {
		const router = useRouter();
		const { as, children } = props;

		const NavLink = styled.a(({ isActive }) => [
			tw`font-medium hover:text-primary py-3 uppercase text-base ml-4`,
			isActive ? tw`text-primary` : tw`text-light`,
		]);

		return (
			<Link {...props} passHref>
				<NavLink isActive={router.asPath === as}>{children}</NavLink>
			</Link>
		);
	};

	ActiveLink.propTypes = {
		as: PropTypes.string.isRequired,
		children: PropTypes.string.isRequired,
	};

	return (
		<React.Fragment>
			<div
				css={tw`container bg-main-light relative mx-auto flex flex-col sm:flex-row items-center justify-between py-4 z-10`}
			>
				<h3 css={tw`text-6xl uppercase`}>
					<Link href="/#home" passHref>
						<a css={tw`font-black text-primary`}>PK.</a>
					</Link>
				</h3>
				<div css={tw`flex items-center justify-center`}>
					<MainNav>
						<ActiveLink href="/#about" as="/#about">
							About
						</ActiveLink>
						<ActiveLink href="/#services" as="/#services">
							Services
						</ActiveLink>
						{categories.map((category) => (
							<ActiveLink
								href="/category/[cid]"
								as={`/category/${category.id}`}
								key={`nav-link-${category.id}`}
							>
								{category.name}
							</ActiveLink>
						))}
					</MainNav>
				</div>

				<button
					type="button"
					css={[
						css`
							position: absolute;
							top: 50%;
							right: 0;
							transform: translateY(-50%);
						`,
						tw`flex sm:hidden flex-col focus:outline-none p-4`,
					]}
					onClick={expandMobileNav}
					ref={mobileNavTrigger}
				>
					<Line />
					<Line />
					<Line />
				</button>
			</div>

			<MobileNav ref={mobileNavRef}>
				<ActiveLink href="/#about" as="/#about">
					About
				</ActiveLink>
				<ActiveLink href="/#services" as="/#services">
					Services
				</ActiveLink>
				{categories.map((category) => (
					<ActiveLink
						href="/category/[cid]"
						as={`/category/${category.id}`}
						key={`nav-link-${category.id}`}
					>
						{category.name}
					</ActiveLink>
				))}
			</MobileNav>
		</React.Fragment>
	);
};

Nav.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Nav;
