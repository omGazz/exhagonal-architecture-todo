import { Injectable, computed, inject } from '@angular/core';
import { DetailService } from '../../../application/services/detail.service';

@Injectable({
  providedIn: 'root',
})
export class DetailToDoFacade {
  detailService = inject(DetailService);

  public readonly isPendingDetail = computed(() =>
    this.detailService.isPending()
  );

  public readonly detail = computed(() => this.detailService.detail());

  getDetail(id: number): void {
    this.detailService.getById(id);
  }
}
