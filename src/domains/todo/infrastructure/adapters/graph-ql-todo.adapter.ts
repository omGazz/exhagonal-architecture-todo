import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { data } from '../../../../core/utils/fake-data';
import { TodoPort } from '../../domain/ports/todo.port';
import { todoDTO } from '../../domain/types/to-do.model';

@Injectable({
  providedIn: 'root',
})
export class GraphQlTodoAdapter implements TodoPort{

  getList(): Observable<todoDTO[]> {
    //Put here GraphQL query to get data from server
    return of<todoDTO[]>(data).pipe(delay(1500));
  }

  getDetail(id: number): Observable<todoDTO> {
    //Put here GraphQL query to get data from server
    return of<todoDTO>(data.filter((item) => item.id === id)[0]).pipe(delay(1500));
  }
}
