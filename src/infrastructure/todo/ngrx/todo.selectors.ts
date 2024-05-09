import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODO_FEATURE_KEY, TodoState } from './todo.reducer';

export const selectTodoFeature =
  createFeatureSelector<TodoState>(TODO_FEATURE_KEY);

export const selectTodoList = createSelector(
  selectTodoFeature,
  (state: TodoState) => state.list
);

export const selectTodoDetail = createSelector(
  selectTodoFeature,
  (state: TodoState) => state.detail
);
