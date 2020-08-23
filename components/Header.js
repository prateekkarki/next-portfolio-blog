import React from 'react';
import Link from 'next/link';
import Nav from './Nav';

function Header() {
	return (
		<header className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-6 relative">
			<h3 className="text-2xl font-bold uppercase text-blue-900">
				<Link href="/">
					<a>Prateek</a>
				</Link>
			</h3>
			<Nav />
		</header>
	);
}

export default Header;
