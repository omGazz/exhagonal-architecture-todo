import { inject } from '@angular/core';
import { ToDoFacade } from '../../services/todo.facade';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ListService } from '../../services/list.service';

export const todoDetailResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(ToDoFacade).getDetail(Number(route.paramMap.get('id')));
};

export const todoListResolver: ResolveFn<void> = () => {
  const service = inject(ToDoFacade);
  const listService = inject(ListService);
  if (listService.hasFetched) return;
  return service.getList();
};
