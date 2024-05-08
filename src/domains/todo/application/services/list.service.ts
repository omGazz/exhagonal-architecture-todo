import { Injectable, inject, signal } from '@angular/core';
import { todoDTO } from '../../domain/types/to-do.model';
import { TodoPort } from '../../domain/ports/todo.port';
import { Loading } from 'src/core/utils/loading.decorator';
import { ToDo } from '../../domain/entities/todo.entity';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  public readonly list = signal([] as todoDTO[]);
  public readonly isPending = signal(true);

  protected readonly port = inject(TodoPort);

  public hasFetched = false;

  @Loading('isPending')
  getList(): void {
    this.port.getList().subscribe((list) => {
      this.list.set(list);
      this.hasFetched = true;
    });
  }

  @Loading('isPending')
  addItem(item: todoDTO): void {
    const entity = new ToDo(
      item.id,
      item.title,
      item.description,
      item.status,
      item.tags
    );

    this.port.add(entity.toDto<todoDTO>()).subscribe((res) => {
      console.log(res);
      this.list.update(() => [...res]);
    });
  }

  @Loading('isPending')
  removeItem(id: number): void {
    this.list.update((list) => list.filter((item) => item.id !== id));
    this.port.remove(id).subscribe((res) => {
      this.list.update(() => [...res]);
    });
  }
}
