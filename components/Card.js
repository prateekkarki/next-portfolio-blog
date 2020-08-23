import React from 'react';
import Link from 'next/link';
import { Image, Placeholder, Transformation, CloudinaryContext } from 'cloudinary-react';

const Card = ({ article }) => {
	//   const imageUrl =
	//     process.env.NODE_ENV !== "development"
	//       ? article.image.url
	//       : process.env.API_URL + article.image.url;
	return (
		<Link href={{ pathname: 'article', query: { id: article.id } }}>
			<div className="max-w-sm rounded overflow-hidden shadow-lg">
				{article.image && (
					<CloudinaryContext cloudName="pratiek">
						<Image
							// dpr="auto"
							responsive
							width="auto"
							crop="scale"
							className="w-full"
							responsiveUseBreakpoints="true"
							publicId={article.image.url.split('/').pop()}
						>
							{/* <Transformation width="200" crop="scale" /> */}
							<Placeholder type="pixelate" />
						</Image>
					</CloudinaryContext>
				)}
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{article.title}</div>
					<p className="text-gray-700 text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
						perferendis eaque, exercitationem praesentium nihil.
					</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#{article.category?.name || ''}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default Card;
