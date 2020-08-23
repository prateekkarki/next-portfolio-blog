import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Query from '../components/query';
import CATEGORIES_QUERY from '../apollo/queries/category/categories';

const Nav = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const expandedClasses = isExpanded ? 'flex ' : 'hidden ';

	return (
		<Query query={CATEGORIES_QUERY} id={null}>
			{({ data: { categories } }) => {
				return (
					<React.Fragment>
						<nav
							className={`sm:flex text-lg flex-col items-center sm:flex-row transition-all duration-200 ease-in-out transform  ${expandedClasses}`}
						>
							{categories.map((category, i) => {
								return (
									<Link
										href="/category/[cid]"
										as={`/category/${category.id}`}
										passHref
										key={`nav-link-${i}`}
									>
										<a className="text-gray-800 hover:text-purple-300 py-3 uppercase px-6">
											{category.name}
										</a>
									</Link>
								);
							})}
							<a
								href="#"
								className="bg-purple-200 hover:bg-purple-300 rounded-full uppercase text-purple-700 py-3 px-6"
							>
								Contact
							</a>
						</nav>

						<button
							className="flex sm:hidden flex-col focus:outline-none absolute top-0 right-0 p-4 mt-5"
							onClick={() => {
								setIsExpanded(!isExpanded);
							}}
						>
							<span className="w-5 h-px mb-1 bg-orange-500"></span>
							<span className="w-5 h-px mb-1 bg-orange-500"></span>
							<span className="w-5 h-px mb-1 bg-orange-500"></span>
						</button>
					</React.Fragment>
				);
			}}
		</Query>
	);
};

export default Nav;
