import { useRouter } from 'next/router';
import Query from '../components/query';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import ARTICLE_QUERY from '../apollo/queries/article/article';

const Article = () => {
	const router = useRouter();
	return (
		<Query query={ARTICLE_QUERY} id={router.query.id}>
			{({ data: { article } }) => {
				return (
					<article className="container mx-auto prose-lg">
						<header
							className="w-full h-64 bg-cover text-center flex flex-col items-center justify-center"
							style={{ background: `url(${article.image.url}) no-repeat center` }}
						>
							<h1
								className="w-full h-full flex justify-center items-center"
								style={{ background: `rgba(255,255,255,0.5)`, margin: 0 }}
							>
								{article.title}
							</h1>
						</header>

						{article.published_at && <Moment format="MMM Do YYYY">{article.published_at}</Moment>}
						<ReactMarkdown source={article.content} />
					</article>
				);
			}}
		</Query>
	);
};

export default Article;
