import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const ReactQueryPage = () => {
 const { isLoading, data, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => {
      return axios.get('http://localhost:3004/posts')
    },
    retry: 1,
    selectL(data) => {
      return data.data;
    }
  });
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <div>{error.message}</div>
  }



  return (
    <div>
      data.map((item) => (
        <div>{item.title}</div>
      ))
    </div>
  );
}

export default ReactQueryPage;
