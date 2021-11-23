import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  create(createTodoInput: CreateTodoInput) {
    return this.prisma.todo.create({
      data: createTodoInput,
    });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({
      where: {
        id,
      },
    });
  }
}
