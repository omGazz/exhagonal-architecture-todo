import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoShellRoutingModule } from './todo-shell-routing.module';
import { TodoPort } from '../../domain/ports/todo.port';
import { FakeTodoAdapter } from '../../infrastructure/adapters/fake-todo.adapter';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoShellRoutingModule
  ],
  providers: [{ provide: TodoPort, useClass: FakeTodoAdapter }],
})
export class TodoShellModule { }
