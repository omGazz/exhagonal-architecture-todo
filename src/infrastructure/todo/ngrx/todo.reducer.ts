import { todoDTO } from 'src/domains/todo/domain/types/to-do.model';
import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
export interface State {
  list: todoDTO[];
  test: number;
}

export const initialState: State = {
  list: [],
  test: 0,
};
export const todoReducer = createReducer(
  initialState,
  on(
    TodoActions.addTodo,
    (state): State => ({ ...state, test: state.test + 1 })
  )
);
