import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { UiListComponent } from '../../ui/ui-list/ui-list.component';
import { ListToDoFacade } from 'src/domains/todo/presentational/pages/page-list/list-todo.facade';
import { ToDo } from 'src/domains/todo/domain/entities/todo.entity';
import { UiFormComponent } from '../../ui/ui-form/ui-form.component';
import { todoDTO } from 'src/domains/todo/domain/types/to-do.model';

@Component({
  selector: 'list-page',
  standalone: true,
  imports: [CommonModule, UiListComponent, UiFormComponent],
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent {
  facade = inject(ListToDoFacade);
  list = computed(() => this.facade.list());
  isPending = computed(() => this.facade.isPendingList());

  addItem(item: todoDTO) {
    const id = Math.floor(Math.random() * 1000);
    const entity = new ToDo(id, item.title, item.description, item.status, item.tags);
    this.facade.addItem(entity.toDto());
  }
  deleteItem(id: number) {
    this.facade.removeItem(id);
  }
  refreshList() {
    this.facade.getList();
  }
}
