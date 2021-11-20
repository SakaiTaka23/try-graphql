import React from 'react';
import { useCreateDonationMutation } from '../graphql/generated';

const Create = () => {
  const [createDonation, { data, loading, error }] = useCreateDonationMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <button
      onClick={() =>
        createDonation({
          variables: {
            createDonationInput: {
              count: 5,
              displayName: 'yamaguro nekuro',
              email: 'yam@guro.com',
            },
          },
        })
      }
    >
      create
    </button>
  );
};

export default Create;
