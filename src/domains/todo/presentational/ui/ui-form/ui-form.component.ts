import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { todoDTO } from 'src/domains/todo/domain/types/to-do.model';

@Component({
  selector: 'ui-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ui-form.component.html',
  styleUrl: './ui-form.component.scss',
})
export class UiFormComponent {
  @Output() addItemEvent = new EventEmitter<todoDTO>();

  title = new FormControl('');
  description = new FormControl('');
  status = new FormControl('pending');
  tags = new FormControl(['new']);

  addItem() {
    const item = {
      title: this.title.value,
      description: this.description.value,
      status: this.status.value,
      tags: this.tags.value,
    } as todoDTO;
    
    this.addItemEvent.emit(item);
  }
}
