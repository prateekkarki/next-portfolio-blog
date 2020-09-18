import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { Image, Placeholder, CloudinaryContext } from 'cloudinary-react';

import tw from 'twin.macro';

const Card = ({ article }) => (
	<Link href="/article/[aid]" as={`/article/${article.id}`} passHref>
		<div css={tw`w-full overflow-hidden shadow-md hover:shadow-lg cursor-pointer`}>
			{article.image && (
				<CloudinaryContext
					cloudName={process.env.CLOUDINARY_NAME}
					css={tw`rounded-t-md w-full h-64 overflow-hidden`}
				>
					<Image
						// dpr="auto"
						secure="true"
						responsive
						width="auto"
						crop="scale"
						css={tw`w-full h-64 object-cover object-center transition-all rounded-t-md duration-500 ease-out transform hover:scale-125 origin-center`}
						responsiveUseBreakpoints="true"
						publicId={article.image.url.split('/').pop()}
					>
						<Placeholder type="pixelate" />
					</Image>
				</CloudinaryContext>
			)}
			<div css={tw`px-6 py-4 bg-main-light`}>
				<h2 css={tw`font-bold text-light text-xl mb-2`}>{article.title}</h2>
			</div>
			<div css={tw`px-6 pb-2 bg-main-light rounded-b-md`}>
				<span
					css={tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-main-dark mr-2 mb-2`}
				>
					#{article.category ? article.category.name : ''}
				</span>
			</div>
		</div>
	</Link>
);

Card.propTypes = {
	article: PropTypes.shape({
		id: PropTypes.string.isRequired,
		image: PropTypes.PropTypes.shape({
			url: PropTypes.string.isRequired,
		}),
		title: PropTypes.string.isRequired,
		category: PropTypes.PropTypes.shape({
			name: PropTypes.string.isRequired,
		}),
	}).isRequired,
};
export default Card;
