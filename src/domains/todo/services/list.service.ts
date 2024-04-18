import { Injectable, inject, signal } from '@angular/core';
import { toDo } from '../models/to-do.model';
import { TodoPort } from '../ports/todo.port';
import { Loading } from 'src/core/utils/loading.decorator';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public readonly list = signal([] as toDo[]);
  public readonly isPending = signal(true);

  protected readonly port  = inject(TodoPort);

  public hasFetched = false;

  getList(): void {
    this.port.getList().subscribe((list) => {
      this.list.set(list);
      this.isPending.set(false);
      this.hasFetched = true;
    });
  }

  @Loading('isPending')
  addItem(item: toDo): void {
    this.list.update((list) => [...list, item]);
  }

  @Loading('isPending')
  removeItem(id: number): void {
    this.list.update((list) => list.filter((item) => item.id !== id));
  }


}
