import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cat = {
  __typename?: 'Cat';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getCats?: Maybe<Array<Maybe<Cat>>>;
  findOneById?: Maybe<Cat>;
  custom?: Maybe<CustomModuleVo>;
};


export type QueryFindOneByIdArgs = {
  id: Scalars['Int'];
};

export type CreateCatInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCat?: Maybe<Cat>;
};


export type MutationCreateCatArgs = {
  createCatInput?: Maybe<CreateCatInput>;
};

export type Subscription = {
  __typename?: 'Subscription';
  catCreated?: Maybe<Cat>;
};

export type CustomModuleVo = {
  __typename?: 'CustomModuleVO';
  a: Scalars['String'];
  b: Scalars['String'];
};

export type CustomQueryVariables = {};


export type CustomQuery = (
  { __typename?: 'Query' }
  & { custom?: Maybe<(
    { __typename?: 'CustomModuleVO' }
    & Pick<CustomModuleVo, 'a' | 'b'>
  )> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cat: ResolverTypeWrapper<Cat>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  CreateCatInput: CreateCatInput;
  Mutation: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  CustomModuleVO: ResolverTypeWrapper<CustomModuleVo>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Cat: Cat;
  Int: Scalars['Int'];
  Query: {};
  CreateCatInput: CreateCatInput;
  Mutation: {};
  Subscription: {};
  CustomModuleVO: CustomModuleVo;
};

export type CatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cat'] = ResolversParentTypes['Cat']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCats?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cat']>>>, ParentType, ContextType>;
  findOneById?: Resolver<Maybe<ResolversTypes['Cat']>, ParentType, ContextType, RequireFields<QueryFindOneByIdArgs, 'id'>>;
  custom?: Resolver<Maybe<ResolversTypes['CustomModuleVO']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCat?: Resolver<Maybe<ResolversTypes['Cat']>, ParentType, ContextType, RequireFields<MutationCreateCatArgs, never>>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  catCreated?: SubscriptionResolver<Maybe<ResolversTypes['Cat']>, "catCreated", ParentType, ContextType>;
};

export type CustomModuleVoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomModuleVO'] = ResolversParentTypes['CustomModuleVO']> = {
  a?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  b?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Cat?: CatResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  CustomModuleVO?: CustomModuleVoResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const CustomDocument = gql`
    query Custom {
  custom {
    a
    b
  }
}
    `;
export type CustomComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CustomQuery, CustomQueryVariables>, 'query'>;

    export const CustomComponent = (props: CustomComponentProps) => (
      <ApolloReactComponents.Query<CustomQuery, CustomQueryVariables> query={CustomDocument} {...props} />
    );
    
export type CustomProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CustomQuery, CustomQueryVariables>
    } & TChildProps;
export function withCustom<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CustomQuery,
  CustomQueryVariables,
  CustomProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CustomQuery, CustomQueryVariables, CustomProps<TChildProps, TDataName>>(CustomDocument, {
      alias: 'custom',
      ...operationOptions
    });
};

/**
 * __useCustomQuery__
 *
 * To run a query within a React component, call `useCustomQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CustomQuery, CustomQueryVariables>) {
        return ApolloReactHooks.useQuery<CustomQuery, CustomQueryVariables>(CustomDocument, baseOptions);
      }
export function useCustomLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CustomQuery, CustomQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CustomQuery, CustomQueryVariables>(CustomDocument, baseOptions);
        }
export type CustomQueryHookResult = ReturnType<typeof useCustomQuery>;
export type CustomLazyQueryHookResult = ReturnType<typeof useCustomLazyQuery>;
export type CustomQueryResult = ApolloReactCommon.QueryResult<CustomQuery, CustomQueryVariables>;