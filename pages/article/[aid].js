import { useRouter } from 'next/router';
import Query from '../../components/query';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import ARTICLE_QUERY from '../../apollo/queries/article/article';
import Head from 'next/head';

import tw from 'twin.macro';

const Article = () => {
	const router = useRouter();
	const { aid } = router.query;

	return !router.query.aid ? null : (
		<Query query={ARTICLE_QUERY} id={aid}>
			{({ data: { article } }) => {
				return (
					<>
						<Head>
							<title>{article.title} : Prateek Karki's blog</title>
						</Head>
						<article css={tw`container mx-auto prose-lg`}>
							<header
								css={tw`w-full h-64 bg-cover text-center flex flex-col items-center justify-center`}
								style={{ background: `url(${article.image.url}) no-repeat center` }}
							>
								<h1
									css={tw`w-full h-full flex justify-center items-center`}
									style={{ background: `rgba(255,255,255,0.5)`, margin: 0 }}
								>
									{article.title}
								</h1>
							</header>

							{article.published_at && <Moment format="MMM Do YYYY">{article.published_at}</Moment>}
							<ReactMarkdown source={article.content} />
						</article>
					</>
				);
			}}
		</Query>
	);
};

export default Article;

// export async function getStaticPaths() {
// 	return {
// 		paths: ['/article/[aid]'],
// 		fallback: true,
// 	};
// }
