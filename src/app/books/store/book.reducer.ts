import { Book } from './../shared/models/book';
import { Action, createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';

export const bookFeatureKey = 'book';

export interface State {
  books: Book[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false,
};

export const bookReducer = createReducer(
  initialState,

  on(BookActions.loadBooks, (state) => {
    return { ...state, loading: true };
  }),
  on(BookActions.loadBooksSuccess, (state, action) => {
    return { ...state, loading: false, books: action.data };
  }),
  on(BookActions.loadBooksFailure, (state, action) => {
    return { ...state, loading: false };
  })
);
