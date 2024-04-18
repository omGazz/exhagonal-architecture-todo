import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { data } from '../../../core/utils/fake-data';
import { toDo } from '../models/to-do.model';
import { TodoPort } from '../ports/todo.port';

@Injectable({
  providedIn: 'root',
})
export class GraphQlTodoAdapter implements TodoPort{

  getList(): Observable<toDo[]> {
    //Put here GraphQL query to get data from server
    return of<toDo[]>(data).pipe(delay(1500));
  }

  getDetail(id: number): Observable<toDo> {
    //Put here GraphQL query to get data from server
    return of<toDo>(data.filter((item) => item.id === id)[0]).pipe(delay(1500));
  }
}
