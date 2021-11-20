import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const EXCHANGE_RATES = gql`
    query Donations($orderBy: OrderByParams) {
      donations(orderBy: $orderBy) {
        id
        count
        displayName
        createdAt
      }
      totalDonations
    }
  `;

  const { data, loading, error } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  return <h1>hi</h1>;
};

export default Home;
