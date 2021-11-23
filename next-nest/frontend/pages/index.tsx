import type { NextPage } from 'next';
import Link from 'next/link';
import { useTodosQuery } from '../graphql/generated';

const Home: NextPage = () => {
  const { data, loading, error } = useTodosQuery();

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
    </>
  );
};

export default Home;
