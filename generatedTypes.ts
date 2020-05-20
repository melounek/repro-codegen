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
  myQuery?: Maybe<MyType>;
  myQuery2?: Maybe<MyType>;
};

export type MyType = {
  __typename?: 'MyType';
  name?: Maybe<Scalars['String']>;
};
