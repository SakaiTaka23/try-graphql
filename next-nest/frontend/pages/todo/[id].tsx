import { GetServerSideProps } from 'next';
import React, { VFC } from 'react';
import { useTodoQuery } from '../../graphql/generated';

type Props = {
  id: string;
};

const TodoDetail: VFC<Props> = ({ id }) => {
  const { data, loading, error } = useTodoQuery({
    variables: {
      todoId: Number(id),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  return (
    <div>
      <h1>{data?.todo?.task}</h1>
      <h1>{data?.todo?.isCompleted ? 'Completed' : 'In Progress'}</h1>
      <h2>{data?.todo?.detail}</h2>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const id = context.params?.id;
  if (Array.isArray(id) || id == undefined) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
    },
  };
};

export default TodoDetail;
