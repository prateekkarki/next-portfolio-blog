import React from 'react';
import Link from 'next/link';
import Nav from './Nav';

import 'twin.macro';

function Header({ categories }) {
	return (
		<header tw="container mx-auto flex flex-col sm:flex-row items-center justify-between py-6 relative">
			<h3 tw="text-2xl font-bold uppercase text-blue-900">
				<Link href="/">
					<a>Prateek</a>
				</Link>
			</h3>
			<Nav categories={categories} />
		</header>
	);
}

export default Header;
