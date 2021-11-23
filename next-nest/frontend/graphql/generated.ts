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
};

export type CreateTodoInput = {
  detail?: InputMaybe<Scalars['String']>;
  task: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  toggleTodoCompleted?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  createTodoInput: CreateTodoInput;
};


export type MutationToggleTodoCompletedArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  todo?: Maybe<Todo>;
  todos: Array<Maybe<Todo>>;
};


export type QueryTodoArgs = {
  id: Scalars['Int'];
};

export type Todo = {
  __typename?: 'Todo';
  detail?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isCompleted: Scalars['Boolean'];
  task: Scalars['String'];
};

export type CreateTodoMutationVariables = Exact<{
  createTodoInput: CreateTodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: number, task: string, detail?: string | null | undefined, isCompleted: boolean } };

export type ToggleTodoCompletedMutationVariables = Exact<{
  toggleTodoCompletedId: Scalars['Int'];
}>;


export type ToggleTodoCompletedMutation = { __typename?: 'Mutation', toggleTodoCompleted?: { __typename?: 'Todo', id: number, task: string, detail?: string | null | undefined, isCompleted: boolean } | null | undefined };

export type TodoQueryVariables = Exact<{
  todoId: Scalars['Int'];
}>;


export type TodoQuery = { __typename?: 'Query', todo?: { __typename?: 'Todo', id: number, task: string, detail?: string | null | undefined, isCompleted: boolean } | null | undefined };

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: number, task: string, detail?: string | null | undefined, isCompleted: boolean } | null | undefined> };


export const CreateTodoDocument = gql`
    mutation CreateTodo($createTodoInput: CreateTodoInput!) {
  createTodo(createTodoInput: $createTodoInput) {
    id
    task
    detail
    isCompleted
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      createTodoInput: // value for 'createTodoInput'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const ToggleTodoCompletedDocument = gql`
    mutation ToggleTodoCompleted($toggleTodoCompletedId: Int!) {
  toggleTodoCompleted(id: $toggleTodoCompletedId) {
    id
    task
    detail
    isCompleted
  }
}
    `;
export type ToggleTodoCompletedMutationFn = Apollo.MutationFunction<ToggleTodoCompletedMutation, ToggleTodoCompletedMutationVariables>;

/**
 * __useToggleTodoCompletedMutation__
 *
 * To run a mutation, you first call `useToggleTodoCompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleTodoCompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleTodoCompletedMutation, { data, loading, error }] = useToggleTodoCompletedMutation({
 *   variables: {
 *      toggleTodoCompletedId: // value for 'toggleTodoCompletedId'
 *   },
 * });
 */
export function useToggleTodoCompletedMutation(baseOptions?: Apollo.MutationHookOptions<ToggleTodoCompletedMutation, ToggleTodoCompletedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleTodoCompletedMutation, ToggleTodoCompletedMutationVariables>(ToggleTodoCompletedDocument, options);
      }
export type ToggleTodoCompletedMutationHookResult = ReturnType<typeof useToggleTodoCompletedMutation>;
export type ToggleTodoCompletedMutationResult = Apollo.MutationResult<ToggleTodoCompletedMutation>;
export type ToggleTodoCompletedMutationOptions = Apollo.BaseMutationOptions<ToggleTodoCompletedMutation, ToggleTodoCompletedMutationVariables>;
export const TodoDocument = gql`
    query Todo($todoId: Int!) {
  todo(id: $todoId) {
    id
    task
    detail
    isCompleted
  }
}
    `;

/**
 * __useTodoQuery__
 *
 * To run a query within a React component, call `useTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoQuery({
 *   variables: {
 *      todoId: // value for 'todoId'
 *   },
 * });
 */
export function useTodoQuery(baseOptions: Apollo.QueryHookOptions<TodoQuery, TodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodoQuery, TodoQueryVariables>(TodoDocument, options);
      }
export function useTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodoQuery, TodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodoQuery, TodoQueryVariables>(TodoDocument, options);
        }
export type TodoQueryHookResult = ReturnType<typeof useTodoQuery>;
export type TodoLazyQueryHookResult = ReturnType<typeof useTodoLazyQuery>;
export type TodoQueryResult = Apollo.QueryResult<TodoQuery, TodoQueryVariables>;
export const TodosDocument = gql`
    query Todos {
  todos {
    id
    task
    detail
    isCompleted
  }
}
    `;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
      }
export function useTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;