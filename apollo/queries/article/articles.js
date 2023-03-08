import gql from 'graphql-tag';

export const LANDING_PAGE_POSTS = gql`
  query Articles {
    articles(
      sort:"publishedAt:DESC",
      filters:{featured:{eq:true}},
      pagination: { page: 1, pageSize: 2 }
     ){
      data{
        id
          attributes{
          title
          slug
          publishedAt
          category{
            data{
              attributes{
                title
                slug
              }
            }
          }
          tags{
            data{
              attributes{
                title
                slug
              }
            }
          }
        }
      }
    }
  }
`;

const ARTICLES_QUERY = gql`
  query Articles {
    articles(
      sort:"publishedAt:DESC",
      pagination: { page: 1, pageSize: 100 }
     ){
      data{
        id
          attributes{
          title
          slug
          publishedAt
          category{
            data{
              attributes{
                title
                slug
              }
            }
          }
          tags{
            data{
              attributes{
                title
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export default ARTICLES_QUERY;
