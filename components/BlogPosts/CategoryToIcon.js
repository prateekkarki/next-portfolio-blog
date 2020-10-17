import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { DiSass, DiReact, DiJavascript1, DiDatabase } from 'react-icons/di';
import { CgCodeSlash } from 'react-icons/cg';
import tw from 'twin.macro';

function CategoryToIcon({ category }) {
	const [icon, setIcon] = useState(
		<CgCodeSlash
			css={tw`h-64 w-full mx-auto transition-all duration-500 ease-out transform hover:scale-125 origin-center`}
		/>
	);

	useEffect(() => {
		const categoryToIconConfig = {
			react: (
				<DiReact
					css={tw`h-64 w-full mx-auto transition-all duration-500 ease-out transform hover:scale-125 origin-center`}
				/>
			),
			javascript: (
				<DiJavascript1
					css={tw`h-64 w-full mx-auto transition-all duration-500 ease-out transform hover:scale-125 origin-center`}
				/>
			),
			css: (
				<DiSass
					css={tw`h-64 w-full mx-auto transition-all duration-500 ease-out transform hover:scale-125 origin-center`}
				/>
			),
			backendDevelopment: (
				<DiDatabase
					css={tw`h-64 w-full mx-auto transition-all duration-500 ease-out transform hover:scale-125 origin-center`}
				/>
			),
		};

		if (category && categoryToIconConfig[category.slug]) {
			setIcon(categoryToIconConfig[category.slug]);
		}
	});
	return (
		<div css={tw`w-full h-64 text-center bg-light rounded-t-md overflow-hidden `}>{icon}</div>
	);
}

CategoryToIcon.propTypes = {
	category: PropTypes.arrayOf(
		PropTypes.PropTypes.shape({
			slug: PropTypes.string,
			name: PropTypes.string,
		})
	),
};

export default CategoryToIcon;
