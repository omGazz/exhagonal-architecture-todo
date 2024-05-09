import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoPort } from 'src/domains/todo/domain/ports/todo.port';
import { todoDTO } from '../../../domains/todo/domain/types/to-do.model';
import { Store } from '@ngrx/store';
import * as todoActions from '../ngrx/todo.actions';
import { selectTodoDetail, selectTodoList } from '../ngrx/todo.selectors';

@Injectable({
  providedIn: 'root',
})
export class NgrxTodoAdapter implements TodoPort {
  store = inject(Store);

  add(item: todoDTO): Observable<todoDTO[]> {
    this.store.dispatch(todoActions.addTodo({ item: item }));

    return this.store.select(selectTodoList);
  }

  remove(id: number): Observable<todoDTO[]> {
    this.store.dispatch(todoActions.removeTodoById({ id: id }));
    return this.store.select(selectTodoList);
  }

  getList(): Observable<todoDTO[]> {
    return this.store.select(selectTodoList);
  }

  getDetail(id: number): Observable<todoDTO> {
    this.store.dispatch(todoActions.selectTodoById({ id: id }));
    return this.store.select(selectTodoDetail);
  }
}
