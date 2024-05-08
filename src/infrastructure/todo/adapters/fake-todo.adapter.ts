import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { data } from '../../../core/utils/fake-data';
import { TodoPort } from 'src/domains/todo/domain/ports/todo.port';
import { todoDTO } from '../../../domains/todo/domain/types/to-do.model';



@Injectable({
  providedIn: 'root',
})
export class FakeTodoAdapter implements TodoPort{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public add(item: todoDTO): Observable<todoDTO[]> {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public remove(id: number): Observable<todoDTO[]> {
    throw new Error('Method not implemented.');
  }

  public getList(): Observable<todoDTO[]> {
    return of<todoDTO[]>(data).pipe(delay(1500));
  }

  public getDetail(id: number): Observable<todoDTO> {
    return of<todoDTO>(data.filter((item) => item.id === id)[0]).pipe(delay(1500));
  }
}
