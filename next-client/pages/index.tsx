import type { NextPage } from 'next';
import { useDonationsQuery } from '../graphql/generated';

const Home: NextPage = () => {
  const { data, loading, error } = useDonationsQuery({
    variables: {
      orderBy: {
        field: 'count',
        direction: 'desc',
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <>
      <h1>{data?.totalDonations}</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>count</th>
            <th>created at</th>
          </tr>
        </thead>
        <tbody>
          {data?.donations.map((donate) => {
            return (
              <tr key={donate?.id}>
                <td>{donate?.id}</td>
                <td>{donate?.displayName}</td>
                <td>{donate?.count}</td>
                <td>{donate?.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
