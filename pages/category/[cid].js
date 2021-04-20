import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import capitalize from 'lodash/capitalize';
import tw from 'twin.macro';
import Query from '../../components/Query';
import CATEGORY_ARTICLES_QUERY from '../../apollo/queries/category/articles';
import { Container } from '../../components/styled';

const Category = () => {
  const router = useRouter();

  return (
    <Query query={CATEGORY_ARTICLES_QUERY} id={router.query.cid}>
      {({ data: { category } }) => (
        <Fragment>
          <Head>
            <title>
              {capitalize(category.name)} : Prateek Karki&apos;s blog
            </title>
          </Head>

          <Container>
            <p
              css={tw`
                inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2
                text-sm font-semibold text-gray-700 
              `}
            >
              #{category.name}
            </p>
          </Container>
        </Fragment>
      )}
    </Query>
  );
};

export default Category;
