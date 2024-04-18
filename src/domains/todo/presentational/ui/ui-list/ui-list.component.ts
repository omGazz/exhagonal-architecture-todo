import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';
import { toDo } from '../../../models/to-do.model';
import { RouterLink } from '@angular/router';
import { FakeTodoAdapter } from 'src/domains/todo/adapters/fake-todo.adapter';
import { TodoPort } from 'src/domains/todo/ports/todo.port';

@Component({
  selector: 'ui-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ui-list.component.html',
  styleUrl: './ui-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  //providers: [{ provide: TodoPort, useClass: FakeTodoAdapter }],
})
export class UiListComponent {
  @Output() onRemoveItemEvent = new EventEmitter<number>();

  readonly list = input.required<toDo[]>();
  readonly isPending = input.required<boolean>();

  deleteItem(id: number) {
    this.onRemoveItemEvent.emit(id);
  }
}
