import { todoDTO } from 'src/domains/todo/domain/types/to-do.model';
import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';

export const TODO_FEATURE_KEY = 'todo';
export interface TodoState {
  list: todoDTO[];
  detail: todoDTO;
}

export const initialState: TodoState = {
  list: [],
  detail: {} as todoDTO,
};
export const todoReducer = createReducer(
  initialState,
  on(
    TodoActions.addTodo,
    (state, data): TodoState => ({ ...state, list: state.list.concat(data.item) })
  ),
  on(
    TodoActions.removeTodoById,
    (state, data): TodoState => ({ ...state, list: state.list.filter((item) => item.id !== data.id)})
  ),
  on(
    TodoActions.selectTodoById,
    (state, data): TodoState => ({ ...state, detail: state.list.find((item) => item.id === data.id) || {} as todoDTO})
  )
);
