import { Injectable, inject, signal } from '@angular/core';
import { TodoPort } from '../../domain/ports/todo.port';
import { ToDo } from '../../domain/entities/todo.entity';
import { todoDTO } from '../../domain/types/to-do.model';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  public readonly detail = signal({} as todoDTO);
  public readonly isPending = signal(true);
  protected readonly port = inject(TodoPort);

  getById(id: number): void {
    this.isPending.set(true);

    this.port.getDetail(id).subscribe((item) => {
      const entity = new ToDo(
        item.id,
        item.title,
        item.description,
        item.status,
        item.tags
      );

      this.detail.set(entity.toDto<todoDTO>());
      this.isPending.set(false);
    });
  }
}
