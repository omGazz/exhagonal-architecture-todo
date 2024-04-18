import { Injectable, inject, signal } from '@angular/core';
import { toDo } from '../models/to-do.model';
import { TodoPort } from '../ports/todo.port';
import { Loading } from 'src/core/utils/loading.decorator';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  public readonly detail = signal({} as toDo);
  public readonly isPending = signal(true);
  protected readonly port  = inject(TodoPort);

  getById(id: number): void {
    this.port.getDetail(id).subscribe((item) => {
      this.detail.set(item);
      this.isPending.set(false);
    });
  }

}
