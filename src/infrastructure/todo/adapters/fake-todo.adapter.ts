import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { data } from '../../../core/utils/fake-data';
import { todoDTO } from '../models/types/to-do.model';
import { TodoPort } from '../ports/todo.port';



@Injectable({
  providedIn: 'root',
})
export class FakeTodoAdapter implements TodoPort{

  public getList(): Observable<todoDTO[]> {
    return of<todoDTO[]>(data).pipe(delay(1500));
  }

  public getDetail(id: number): Observable<todoDTO> {
    return of<todoDTO>(data.filter((item) => item.id === id)[0]).pipe(delay(1500));
  }
}
