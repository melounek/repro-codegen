export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  thisIsHotUpdating?: Maybe<IsHotUpdating>;
  thisIsNOThotUpdating?: Maybe<IsNoThotUpdating>;
};

export type IsHotUpdating = {
   __typename?: 'IsHotUpdating';
  name?: Maybe<Scalars['String']>;
};

export type IsNoThotUpdating = {
   __typename?: 'IsNOThotUpdating';
  name?: Maybe<Scalars['String']>;
};
