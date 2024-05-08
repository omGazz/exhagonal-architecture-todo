import { Injectable, inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { TodoPort } from 'src/domains/todo/domain/ports/todo.port';
import { todoDTO } from '../../../domains/todo/domain/types/to-do.model';
import { TodoStore } from '../+state/todo.store';

@Injectable({
  providedIn: 'root',
})
export class SignalStoreTodoAdapter implements TodoPort {
  store = inject(TodoStore)

  add(item: todoDTO): Observable<todoDTO[]> {
    
    this.store.addItem(item);   
    const newList = this.store.list()
    console.log(newList)

    return of<todoDTO[]>(newList).pipe(delay(1500));
  }

  remove(id: number): Observable<todoDTO[]> {
    this.store.removeItemById(id);

    return of<todoDTO[]>(this.store.list()).pipe(delay(1500));
  }

  getList(): Observable<todoDTO[]> {
    const list = this.store.list()
    return of<todoDTO[]>(list).pipe(delay(1500));
  }

  getDetail(id: number): Observable<todoDTO> {
    this.store.setDetailById(id)
    const selected = this.store.selected() || {} as todoDTO
    return of<todoDTO>(selected).pipe(
      delay(1500)
    );
  }
}
