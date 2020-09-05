import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loader from './Loader';

const Query = ({ children, query, id }) => {
	const { data, loading, error } = useQuery(query, {
		variables: { id },
	});

	if (loading) return <Loader />;
	if (error) {
		console.log(error);
		return null;
	}
	return children({ data });
};

export default Query;
