import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lazy-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent { }
