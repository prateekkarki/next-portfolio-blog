import { useRouter } from 'next/router';
import Articles from '../components/Articles';
import Query from '../components/query';
import CATEGORY_ARTICLES_QUERY from '../apollo/queries/category/articles';

const Category = () => {
	const router = useRouter();

	return (
		<Query query={CATEGORY_ARTICLES_QUERY} id={router.query.id}>
			{({ data: { category } }) => {
				return (
					<div className="container mx-auto">
						<p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							#{category.name}
						</p>
						<Articles articles={category.articles} />
					</div>
				);
			}}
		</Query>
	);
};

export default Category;
