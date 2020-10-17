import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loader from './Loader';

const Query = ({ children, query, id, slug }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id, slug },
  });

  if (loading) return <Loader />;
  if (error) {
    return null;
  }
  let mutated = data;
  if (slug) {
    // eslint-disable-next-line prefer-destructuring
    mutated = data[Object.keys(data)[0]][0];
  }
  return children({ data: mutated });
};

export default Query;
