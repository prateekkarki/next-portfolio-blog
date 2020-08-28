/** @jsx jsx **/
import { jsx } from '@emotion/core';

import Link from 'next/link';
import Nav from './Nav';

import 'twin.macro';

function Header({ categories }) {
	return (
		<header tw="bg-mainDark">
			<div tw="container mx-auto flex flex-col sm:flex-row items-center justify-between py-6 ">
				<h3 tw="text-2xl font-bold uppercase">
					<Link href="/">
						<a css={{ fontWeight: 900 }} tw="text-green text-4xl">
							Prateek
						</a>
					</Link>
				</h3>
				<Nav categories={categories} />
			</div>
		</header>
	);
}

export default Header;
