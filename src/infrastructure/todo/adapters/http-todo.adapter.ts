import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { data } from '../../../core/utils/fake-data';
import { toDo } from '../models/types/to-do.model';
import { TodoPort } from '../ports/todo.port';



@Injectable({
  providedIn: 'root',
})
export class HttpTodoAdapter implements TodoPort{

  getList(): Observable<toDo[]> {
    //Use HTTP client to get data from server
    return of<toDo[]>(data).pipe(delay(1500));
  }

  getDetail(id: number): Observable<toDo> {
    //Use HTTP client to get data from server
    return of<toDo>(data.filter((item) => item.id === id)[0]).pipe(delay(1500));
  }
}
