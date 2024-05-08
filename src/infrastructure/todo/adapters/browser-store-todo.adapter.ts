import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { data } from '../../../core/utils/fake-data';
import { TodoPort } from 'src/domains/todo/domain/ports/todo.port';
import { todoDTO } from '../../../domains/todo/domain/types/to-do.model';

@Injectable({
  providedIn: 'root',
})
export class BrowserStoreTodoAdapter implements TodoPort {
  constructor() {
    localStorage.setItem('data', JSON.stringify(data));
  }

  add(item: todoDTO): Observable<todoDTO[]> {
    const data = JSON.parse(localStorage.getItem('data') || '[]') as todoDTO[];
    const newData = [...data, item];
    
    localStorage.setItem('data', JSON.stringify(newData));
    const newList = JSON.parse(
      localStorage.getItem('data') || '[]'
    ) as todoDTO[];

    return of<todoDTO[]>(newList).pipe(delay(1500));
  }

  remove(id: number): Observable<todoDTO[]> {
    const data = JSON.parse(localStorage.getItem('data') || '[]') as todoDTO[];
    const newList = data.filter((item) => item.id !== id);

    localStorage.setItem('data', JSON.stringify(newList));
    const newData = JSON.parse(
      localStorage.getItem('data') || '[]'
    ) as todoDTO[];

    return of<todoDTO[]>(newData).pipe(delay(1500));
  }

  getList(): Observable<todoDTO[]> {
    const list = JSON.parse(localStorage.getItem('data') || '[]') as todoDTO[];
    return of<todoDTO[]>(list).pipe(delay(1500));
  }

  getDetail(id: number): Observable<todoDTO> {
    const list = JSON.parse(localStorage.getItem('data') || '[]') as todoDTO[];
    return of<todoDTO>(list.filter((item) => item.id === id)[0]).pipe(
      delay(1500)
    );
  }
}
