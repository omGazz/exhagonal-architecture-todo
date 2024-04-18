import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-ui-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ui-detail.component.html',
  styleUrl: './ui-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDetailComponent { }
