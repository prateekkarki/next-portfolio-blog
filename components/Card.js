import React from 'react';
import Link from 'next/link';
import { Image, Placeholder, Transformation, CloudinaryContext } from 'cloudinary-react';

const Card = ({ article }) => {
	//   const imageUrl =
	//     process.env.NODE_ENV !== "development"
	//       ? article.image.url
	//       : process.env.API_URL + article.image.url;
	return (
		<Link href="/article/[aid]" as={`/article/${article.id}`} passHref>
			<div className="w-100 rounded overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
				{article.image && (
					<CloudinaryContext cloudName="pratiek" className="w-full h-64 overflow-hidden">
						<Image
							// dpr="auto"
							responsive
							width="auto"
							crop="scale"
							className="w-full h-64 object-cover object-center transition-all duration-500 ease-out transform hover:scale-125 origin-center"
							responsiveUseBreakpoints="true"
							publicId={article.image.url.split('/').pop()}
						>
							{/* <Transformation width="200" crop="scale" /> */}
							<Placeholder type="pixelate" />
						</Image>
					</CloudinaryContext>
				)}
				<div className="px-6 py-4">
					<h2 className="font-bold text-xl mb-2">{article.title}</h2>
				</div>
				<div className="px-6 pb-2">
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#{article.category?.name || ''}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default Card;
