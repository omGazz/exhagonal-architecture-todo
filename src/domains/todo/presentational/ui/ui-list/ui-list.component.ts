import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { todoDTO } from 'src/domains/todo/models/types/to-do.model';

@Component({
  selector: 'ui-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ui-list.component.html',
  styleUrl: './ui-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiListComponent {
  @Output() onRemoveItemEvent = new EventEmitter<number>();

  readonly list = input.required<todoDTO[]>();
  readonly isPending = input.required<boolean>();

  deleteItem(id: number) {
    this.onRemoveItemEvent.emit(id);
  }
}
