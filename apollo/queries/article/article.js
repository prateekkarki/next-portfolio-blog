import gql from 'graphql-tag';

const ARTICLE_QUERY = gql`
  query Articles($slug: String!) {
    articles(limit: 1, where: { slug: $slug }) {
      slug
      title
      content
      published_on
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
