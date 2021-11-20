import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
