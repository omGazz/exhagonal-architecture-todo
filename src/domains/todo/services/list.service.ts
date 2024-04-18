import { Injectable, inject, signal } from '@angular/core';
import { todoDTO } from '../models/types/to-do.model';
import { TodoPort } from '../ports/todo.port';
import { Loading } from 'src/core/utils/loading.decorator';
import { ToDo } from '../models/entities/todo.entity';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public readonly list = signal([] as todoDTO[]);
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
  addItem(item: todoDTO): void {
    const entity = new ToDo(item.id, item.title, item.description, item.status, item.tags);

    this.list.update((list) => [...list, entity.toDto<todoDTO>()]);
  }

  @Loading('isPending')
  removeItem(id: number): void {

    this.list.update((list) => list.filter((item) => item.id !== id));
  }
}
