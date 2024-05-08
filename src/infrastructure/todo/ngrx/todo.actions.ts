import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo List Page] Add Item',
  props<{ id: number }>()
);