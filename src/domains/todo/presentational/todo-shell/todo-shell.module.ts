import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoShellRoutingModule } from './todo-shell-routing.module';
import { TodoPort } from '../../domain/ports/todo.port';
//import { BrowserStoreTodoAdapter } from 'src/infrastructure/todo/adapters/browser-store-todo.adapter';
//import { SignalStoreTodoAdapter } from 'src/infrastructure/todo/adapters/signal-store-todo.adapter';
//import { TodoStore } from 'src/infrastructure/todo/+state/todo.store';
import { StoreModule } from '@ngrx/store';
import {
  TODO_FEATURE_KEY,
  todoReducer,
} from 'src/infrastructure/todo/ngrx/todo.reducer';
import { NgrxTodoAdapter } from 'src/infrastructure/todo/adapters/ngrx-todo.adapter';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from 'src/infrastructure/todo/ngrx/todo.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoShellRoutingModule,
    StoreModule.forFeature(TODO_FEATURE_KEY, todoReducer),
    EffectsModule.forFeature(TodoEffects),
    HttpClientModule
  ],
  providers: [{ provide: TodoPort, useClass: NgrxTodoAdapter }],
})
export class TodoShellModule {}
