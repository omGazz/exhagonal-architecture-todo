import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { todoDTO } from 'src/domains/todo/domain/types/to-do.model';

type TodoState = {
  list: todoDTO[];
  selected: todoDTO | null;
};

const initialState: TodoState = {
  list: [],
  selected: null,
};

export const TodoStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    addItem(item: todoDTO): void {
      patchState(store, (state) => ({ list: [...state.list, item] }));
    },
    removeItemById(id: number): void {
      patchState(store, (state) => ({
        list: [...state.list.filter((item) => item.id !== id)],
      }));
    },
    setDetailById(id: number): void {
      patchState(store, (state) => ({
        selected: state.list.find((item) => item.id === id) || null,
      }));
    },
  }))
);
