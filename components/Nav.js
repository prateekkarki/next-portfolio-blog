/** @jsx jsx **/
import { jsx } from '@emotion/core';

import React, { useState } from 'react';
import Link from 'next/link';
import tw, { styled } from 'twin.macro';

const Nav = ({ categories }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const Line = tw.span`w-5 h-px mb-1 bg-orange-500`;

	const MainNav = styled.nav(({ isExpanded }) => [
		tw`sm:flex text-lg flex-col items-center sm:flex-row transition-all duration-200 ease-in-out transform`,
		isExpanded ? tw`flex` : tw`hidden`,
	]);

	return (
		<React.Fragment>
			<MainNav isExpanded={isExpanded}>
				{categories.map((category, i) => {
					return (
						<Link href="/category/[cid]" as={`/category/${category.id}`} passHref key={`nav-link-${i}`}>
							<a tw="text-gray-800 hover:text-purple-300 py-3 uppercase px-6">{category.name}</a>
						</Link>
					);
				})}
				<a href="#" tw="bg-purple-200 hover:bg-purple-300 rounded-full uppercase text-purple-700 py-3 px-6">
					Contact
				</a>
			</MainNav>

			<button
				tw="flex sm:hidden flex-col focus:outline-none absolute top-0 right-0 p-4 mt-5"
				onClick={() => {
					setIsExpanded(!isExpanded);
				}}
			>
				<Line />
				<Line />
				<Line />
			</button>
		</React.Fragment>
	);
};

export default Nav;
