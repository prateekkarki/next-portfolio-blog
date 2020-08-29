import React from 'react';
import Link from 'next/link';
import { Image, Placeholder, CloudinaryContext } from 'cloudinary-react';

import tw from 'twin.macro';

const Card = ({ article }) => {
	return (
		<Link href="/article/[aid]" as={`/article/${article.id}`} passHref>
			<div css={tw`w-full rounded overflow-hidden shadow-md hover:shadow-lg cursor-pointer`}>
				{article.image && (
					<CloudinaryContext cloudName="pratiek" css={tw`w-full h-64 overflow-hidden`}>
						<Image
							// dpr="auto"
							secure="true"
							responsive
							width="auto"
							crop="scale"
							css={tw`w-full h-64 object-cover object-center transition-all duration-500 ease-out transform hover:scale-125 origin-center`}
							responsiveUseBreakpoints="true"
							publicId={article.image.url.split('/').pop()}
						>
							<Placeholder type="pixelate" />
						</Image>
					</CloudinaryContext>
				)}
				<div css={tw`px-6 py-4`}>
					<h2 css={tw`font-bold text-xl mb-2`}>{article.title}</h2>
				</div>
				<div css={tw`px-6 pb-2`}>
					<span
						css={tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
					>
						#{article.category?.name || ''}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default Card;
