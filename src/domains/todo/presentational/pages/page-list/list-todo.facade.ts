import { Injectable, computed, inject } from '@angular/core';
import { toDo } from '../../../models/to-do.model';
import { ListService } from '../../../services/list.service';

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

  addItem(item: toDo): void {
    this.listService.addItem(item);
  }

  removeItem(id: number): void {
    this.listService.removeItem(id);
  }
}
