import type { NextPage } from 'next';
import { useDonationsQuery } from '../graphql/generated';

const Home: NextPage = () => {
  const { data, loading, error } = useDonationsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  return <h1>hi</h1>;
};

export default Home;
