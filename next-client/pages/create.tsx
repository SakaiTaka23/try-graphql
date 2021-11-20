import { gql, useMutation } from '@apollo/client';
import React from 'react';

const CREATE_DONATION = gql`
  mutation CreateDonation($createDonationInput: CreateDonationInput!) {
    createDonation(createDonationInput: $createDonationInput) {
      id
      count
      displayName
      email
    }
  }
`;

const Create = () => {
  const [createDonation, { data, loading, error }] = useMutation(CREATE_DONATION);

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
