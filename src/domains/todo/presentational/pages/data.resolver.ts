import { inject } from '@angular/core';
import { DetailToDoFacade } from './page-detail/detail-todo.facade';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ListService } from '../../services/list.service';
import { ListToDoFacade } from './page-list/list-todo.facade';

export const todoDetailResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(DetailToDoFacade).getDetail(Number(route.paramMap.get('id')));
};

export const todoListResolver: ResolveFn<void> = () => {
  const service = inject(ListToDoFacade);
  const listService = inject(ListService);
  if (listService.hasFetched) return;
  return service.getList();
};
