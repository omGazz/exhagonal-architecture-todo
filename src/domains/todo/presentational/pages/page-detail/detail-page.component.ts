import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DetailToDoFacade } from './detail-todo.facade';

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
  facade = inject(DetailToDoFacade)
  item = computed(() => this.facade.detail());
}
