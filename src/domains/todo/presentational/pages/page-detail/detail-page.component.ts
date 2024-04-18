import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ToDoFacade } from '../../../services/todo.facade';

@Component({
  selector: 'lazy-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailPageComponent { 
  facade = inject(ToDoFacade)
  item = computed(() => this.facade.detail());
}
