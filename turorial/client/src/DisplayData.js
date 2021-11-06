import React, { useState } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
      yearOfPublication
    }
  }
`;

const DisplayData = () => {
  const [movieSearched, setMovieSearched] = useState('');
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  const [fetchMovie, { data: movieSearchedData, error: MovieError }] = useLazyQuery(GET_MOVIE_BY_NAME);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }
  if (MovieError) {
    console.log(MovieError);
  }
  return (
    <div>
      {data.users.map((user, i) => {
        return (
          <div key={i}>
            <h1>Name: {user.name}</h1>
            <h1>Username: {user.username}</h1>
            <h1>Age: {user.age}</h1>
          </div>
        );
      })}

      <div>
        <input
          type='text'
          placeholder='Interstellar,,,'
          onChange={(event) => {
            setMovieSearched(event.target.value);
          }}
        />
        <button
          onClick={() => {
            fetchMovie({
              variables: {
                name: movieSearched,
              },
            });
          }}
        >
          Fetch Data
        </button>
        <div>
          {movieSearchedData && (
            <div>
              <h1>MovieName: {movieSearchedData.movie.name}</h1>
              <h1>Year Of Publication: {movieSearchedData.movie.yearOfPublication}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
