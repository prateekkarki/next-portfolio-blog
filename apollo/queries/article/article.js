import gql from 'graphql-tag';

const ARTICLE_QUERY = gql`
  query Articles($slug: String!) {
    articles(limit: 1, where: { slug: $slug }) {
      slug
      title
      content
      description
      published_on
      updated_at
      created_at
      category {
        slug
        name
      }
      tags {
        slug
        name
      }
      cover_image {
        url
      }
    }
  }
`;

export default ARTICLE_QUERY;
