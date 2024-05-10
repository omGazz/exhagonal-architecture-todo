import { createAction, props } from '@ngrx/store';
import { todoDTO } from 'src/domains/todo/domain/types/to-do.model';

export const addTodo = createAction(
  '[Todo List Page] Add Item',
  props<{ item: todoDTO }>()
);

export const addTodoSuccess = createAction(
  '[Todo List Page] Add Item Success',
  props<{ item: todoDTO }>()
);

export const removeTodoById = createAction(
  '[Todo List Page] Remove Item By Id',
  props<{ id: number }>()
);

export const selectTodoById = createAction(
  '[Todo List Page] Select Item By Id',
  props<{ id: number }>()
);