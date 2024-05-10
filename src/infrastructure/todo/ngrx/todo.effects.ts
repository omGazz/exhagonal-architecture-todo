import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import * as todoActions from './todo.actions';
import { HttpClient } from '@angular/common/http';
import { todoDTO } from 'src/domains/todo/domain/types/to-do.model';

@Injectable()
export class TodoEffects {

  addTodo$ = createEffect(() => { return this.actions$.pipe(
    ofType(todoActions.addTodo),
    exhaustMap((data) => this.api.post<todoDTO>('http://localhost:3000/todos', data.item)
      .pipe(
        map(data => (todoActions.addTodoSuccess({ item: data}))),
        catchError(() => EMPTY)
      ))
    ) }
  );

  constructor(
    private actions$: Actions,
    private api: HttpClient
  ) {}
}