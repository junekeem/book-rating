import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Book } from '../shared/models/book';

// Start loading of book list
export const loadBooks = createAction(
  '[Book] Load Books'
);

// Book list arrived back from the server
export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ data: Book[] }>()
);

// An error occured during loading of the book list
export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: any }>()
);

export const createBook = createAction(
  '[Book] Create Book',
  props<{ data: Book }>()
);

export const createBookSuccess = createAction(
  '[Book] Create Book Success',
  props<{ data: Book }>()
);

export const createBookFailure = createAction(
  '[Book] Create Book Failure',
  props<{ error: HttpErrorResponse }>()
);
