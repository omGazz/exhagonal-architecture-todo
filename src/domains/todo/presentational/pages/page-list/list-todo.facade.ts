import { Injectable, computed, inject } from '@angular/core';
import { ListService } from '../../../services/list.service';
import { todoDTO } from 'src/domains/todo/models/types/to-do.model';

@Injectable({
  providedIn: 'root',
})
export class ListToDoFacade {
  listService = inject(ListService);

  public readonly isPendingList = computed(() => this.listService.isPending());
  public readonly list = computed(() => this.listService.list());

  getList(): void {
    this.listService.getList();
  }

  addItem(item: todoDTO): void {
    this.listService.addItem(item);
  }

  removeItem(id: number): void {
    this.listService.removeItem(id);
  }
}
