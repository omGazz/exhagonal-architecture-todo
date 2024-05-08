import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoShellRoutingModule } from './todo-shell-routing.module';
import { TodoPort } from '../../domain/ports/todo.port';
import { BrowserStoreTodoAdapter } from 'src/infrastructure/todo/adapters/browser-store-todo.adapter';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoShellRoutingModule
  ],
  providers: [{ provide: TodoPort, useClass: BrowserStoreTodoAdapter }],
})
export class TodoShellModule { }
