import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type CreateDonationInput = {
  count: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayName: Scalars['String'];
  email: Scalars['String'];
  message?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Scalars['String']>;
};

export type Donation = {
  __typename?: 'Donation';
  count: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  displayName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDonation: Donation;
};


export type MutationCreateDonationArgs = {
  createDonationInput: CreateDonationInput;
};

export type OrderByParams = {
  direction?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  donation?: Maybe<Donation>;
  donations: Array<Maybe<Donation>>;
  totalDonations: Scalars['Int'];
};


export type QueryDonationArgs = {
  id: Scalars['Int'];
};


export type QueryDonationsArgs = {
  orderBy?: InputMaybe<OrderByParams>;
};

export type Result = {
  __typename?: 'Result';
  total: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  totalUpdated?: Maybe<Result>;
};

export type DonationsQueryVariables = Exact<{
  orderBy?: InputMaybe<OrderByParams>;
}>;


export type DonationsQuery = { __typename?: 'Query', totalDonations: number, donations: Array<{ __typename?: 'Donation', id: number, count: number, displayName: string, createdAt?: any | null | undefined } | null | undefined> };


export const DonationsDocument = gql`
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

/**
 * __useDonationsQuery__
 *
 * To run a query within a React component, call `useDonationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDonationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDonationsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useDonationsQuery(baseOptions?: Apollo.QueryHookOptions<DonationsQuery, DonationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DonationsQuery, DonationsQueryVariables>(DonationsDocument, options);
      }
export function useDonationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DonationsQuery, DonationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DonationsQuery, DonationsQueryVariables>(DonationsDocument, options);
        }
export type DonationsQueryHookResult = ReturnType<typeof useDonationsQuery>;
export type DonationsLazyQueryHookResult = ReturnType<typeof useDonationsLazyQuery>;
export type DonationsQueryResult = Apollo.QueryResult<DonationsQuery, DonationsQueryVariables>;