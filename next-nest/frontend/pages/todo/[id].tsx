import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useTodoQuery } from '../../graphql/generated';

const TodoDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useTodoQuery({
    skip: !id,
    variables: {
      todoId: Number(id),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data?.todo?.task}</h1>
      <h1>{data?.todo?.isCompleted ? 'Completed' : 'In Progress'}</h1>
      <h2>{data?.todo?.detail}</h2>
    </div>
  );
};

export default TodoDetail;
