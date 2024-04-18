import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toDo } from '../../../models/to-do.model';
import { UiListComponent } from '../../ui/ui-list/ui-list.component';
import { ListToDoFacade } from 'src/domains/todo/presentational/pages/page-list/list-todo.facade';

@Component({
  selector: 'list-page',
  standalone: true,
  imports: [CommonModule, UiListComponent],
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent {
  facade = inject(ListToDoFacade);
  list = computed(() => this.facade.list());
  isPending = computed(() => this.facade.isPendingList());

  addItem() {
    this.facade.addItem({
      id: 100,
      title: 'New Item',
      description: 'New Item Description',
    } as toDo);
  }
  deleteItem(id: number) {
    this.facade.removeItem(id);
  }
  refreshList() {
    this.facade.getList();
  }
}
