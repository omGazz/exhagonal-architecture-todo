import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toDoList } from '../models/to-do.model';
import { SignalStateService } from '../services/signal-state.service';

@Component({
  selector: 'lazy-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { 
  facade = inject(SignalStateService)
  list =  computed(() => this.facade.list());
  test = ['ciao', 'mondo']

  constructor() {
    console.log('ListComponent created');
    this.facade.getList();
  }
}
