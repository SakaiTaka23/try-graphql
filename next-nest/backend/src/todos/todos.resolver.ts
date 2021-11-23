import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { CreateTodoInput } from './dto/create-todo.input';

@Resolver('Todo')
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Mutation('createTodo')
  create(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todosService.create(createTodoInput);
  }

  @Query('todos')
  findAll() {
    return this.todosService.findAll();
  }

  @Query('todo')
  findOne(@Args('id') id: number) {
    return this.todosService.findOne(id);
  }
}
