import type { NextPage } from 'next';
import Link from 'next/link';
import { TodosDocument, useCreateTodoMutation, useTodosQuery } from '../graphql/generated';

const Home: NextPage = () => {
  const { data, loading, error, refetch } = useTodosQuery();
  const [createTodo] = useCreateTodoMutation({
    variables: {
      createTodoInput: {
        task: 'プログラミング',
        detail: '頑張る',
      },
    },
    refetchQueries: [{ query: TodosDocument }],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>完了</th>
            <th>タスク</th>
          </tr>
        </thead>
        <tbody>
          {data?.todos.map((todo) => {
            return (
              <tr key={todo?.id}>
                <td>
                  <input type='checkbox' checked={todo?.isCompleted} readOnly />
                </td>
                <td>
                  <Link href={`/todo/${todo?.id}`}>{todo?.task}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          createTodo();
          refetch();
        }}
      >
        TODO追加
      </button>
    </>
  );
};

export default Home;
