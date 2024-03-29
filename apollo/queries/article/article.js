import gql from 'graphql-tag';

const ARTICLE_QUERY = gql`
  query Articles($slug: String!) 
  {
    articles(
      filters:{slug:{eq:$slug}},
      pagination: { page: 1, pageSize: 1 }
     ){
      data{
        id
         attributes{
          title
          slug
          content
          tagline
          featured
          publishedOn
          updatedAt
          createdAt
          isExternal
          externalUrl
          thumbnail{
            data{
              attributes{
                url
              }
            }
          }
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

export default ARTICLE_QUERY;
