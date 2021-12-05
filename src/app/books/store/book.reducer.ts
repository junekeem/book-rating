import { Book } from './../shared/models/book';
import { Action, createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';

export const bookFeatureKey = 'book';

export interface State {
  books: Book[];
  loading: boolean;
}

export interface CreateState {
  book: Book;
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false,
};

export const initialCreateState: CreateState = {
  book: { isbn:'', title: '', description: '', price: 0, rating: 5},
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

export const bookCreateReducer = createReducer(
  initialCreateState,

  on(BookActions.createBook, (state) => {
    return { ...state, loading: true };
  }),
  on(BookActions.createBookSuccess, (state, action) => {
    return { ...state, loading: false, book: action.data };
  }),
  on(BookActions.createBookFailure, (state, action) => {
    return { ...state, loading: false };
  })
);
