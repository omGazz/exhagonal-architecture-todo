import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoShellRoutingModule } from './todo-shell-routing.module';
import { TodoPort } from '../../domain/ports/todo.port';
//import { BrowserStoreTodoAdapter } from 'src/infrastructure/todo/adapters/browser-store-todo.adapter';
import { SignalStoreTodoAdapter } from 'src/infrastructure/todo/adapters/signal-store-todo.adapter';
import { TodoStore } from 'src/infrastructure/todo/+state/todo.store';

@NgModule({
  declarations: [],
  imports: [CommonModule, TodoShellRoutingModule],
  //providers: [{ provide: TodoPort, useClass: BrowserStoreTodoAdapter }],
  providers: [
    //Use a port also for the store
    { provide: TodoStore, useClass: TodoStore },
    { provide: TodoPort, useClass: SignalStoreTodoAdapter },
  ],
})
export class TodoShellModule {}
