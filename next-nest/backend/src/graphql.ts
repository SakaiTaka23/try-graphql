/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateTodoInput {
  task: string;
  detail?: Nullable<string>;
}

export class Todo {
  id: number;
  task: string;
  detail?: Nullable<string>;
  isCompleted: boolean;
}

export abstract class IQuery {
  abstract todos(): Nullable<Todo>[] | Promise<Nullable<Todo>[]>;

  abstract todo(id: number): Nullable<Todo> | Promise<Nullable<Todo>>;
}

export abstract class IMutation {
  abstract createTodo(createTodoInput: CreateTodoInput): Todo | Promise<Todo>;
}

type Nullable<T> = T | null;
