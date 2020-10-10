import gql from 'graphql-tag';

const ARTICLES_QUERY = gql`
	query Articles {
		articles {
			id
			title
			category {
				id
				name
			}
			cover_image {
				url
			}
		}
	}
`;

export default ARTICLES_QUERY;

export const LANDING_PAGE_POSTS = gql`
	query Articles {
		articles(limit: 1) {
			id
			title
			category {
				id
				name
			}
			cover_image {
				url
			}
		}
	}
`;
