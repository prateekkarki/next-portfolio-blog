import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { useMemo } from 'react';

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = process.env.API_URL || 'https://localhost';

let apolloClient;

const link = createHttpLink({
	fetch, // Switches between unfetch & node-fetch for client & server.
	uri: GRAPHQL_URL + '/graphql',
});

function createApolloClient() {
	return new ApolloClient({
		link: link,
		cache: new InMemoryCache(),
	});
}

export function initializeApollo() {
	const _apolloClient = apolloClient ?? createApolloClient();
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
}

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
	// You can get headers and ctx (context) from the callback params
	// e.g. ({ headers, ctx, initialState })
	({ initialState }) =>
		new ApolloClient({
			link: link,
			cache: new InMemoryCache()
				//  rehydrate the cache using the initial data passed from the server:
				.restore(initialState || {}),
		})
);
