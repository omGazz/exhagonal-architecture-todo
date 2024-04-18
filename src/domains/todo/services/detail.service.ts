import { Injectable, inject, signal } from '@angular/core';
import { TodoPort } from '../ports/todo.port';
import { Loading } from 'src/core/utils/loading.decorator';
import { ToDo } from '../models/entities/todo.entity';
import { todoDTO } from '../models/types/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  public readonly detail = signal({} as todoDTO);
  public readonly isPending = signal(true);
  protected readonly port  = inject(TodoPort);

  getById(id: number): void {
    this.port.getDetail(id).subscribe((item) => {
      const entity = new ToDo(item.id, item.title, item.description, item.status, item.tags);

      this.detail.set(entity.toDto<todoDTO>());
      this.isPending.set(false);
    });
  }
}
