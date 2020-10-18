import gql from 'graphql-tag';

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      slug
      title
      category {
        slug
        name
      }
      tags {
        slug
        name
      }
      thumbnail {
        url
      }
    }
  }
`;

export default ARTICLES_QUERY;

export const LANDING_PAGE_POSTS = gql`
  query Articles {
    articles(
      limit: 1
      where: { status: true, featured: true }
      sort: "published_on:DESC"
    ) {
      id
      slug
      title
      category {
        slug
        name
      }
      tags {
        slug
        name
      }
      thumbnail {
        url
      }
    }
  }
`;
