import { Fragment } from 'react';
import tw from 'twin.macro';

import { Card } from '../../components/BlogPosts/Card';
import { MetaHead } from '../../components';
import TitleBlock from '../../components/Common/TitleBlock';
import { Container, MainBg } from '../../components/styles';
import { defaultSeo } from '../../constants/index';
import { getBlogsByCategory, getCategories } from '../../data/blogs';

const Category = ({ articles, category }) => {
  const seo = {
    ...defaultSeo,
    title: `${category?.title} | Prateek Karki`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/category/${category?.slug}`,
  };

  return (
    <Fragment>
      <MetaHead seo={seo} />
      <TitleBlock
        title={category?.title}
        subtitle={`Articles in ${category?.title}`}
      />
      <MainBg>
        <Container>
          <div
            css={tw`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-3 py-6`}
          >
            {articles.map((article) => (
              <Card article={article} key={`article__${article.id}`} dark />
            ))}
          </div>
        </Container>
      </MainBg>
    </Fragment>
  );
};

export default Category;

export async function getStaticPaths() {
  const categories = getCategories();
  const paths = categories.map((category) => ({
    params: { cid: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = getBlogsByCategory(params.cid);
  const categories = getCategories();
  const category = categories.find((cat) => cat.slug === params.cid);

  return {
    props: {
      articles: articles.map((article) => ({
        id: article.id,
        title: article.title,
        slug: article.slug,
        publishedOn: article.publishedOn,
        isExternal: article.isExternal,
        externalUrl: article.externalUrl,
        thumbnail: article.thumbnail,
        category: article.category,
        tags: article.tags,
      })),
      category,
    },
  };
}
