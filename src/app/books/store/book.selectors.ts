import { createFeatureSelector, createSelector } from '@ngrx/store';
import { bookFeatureKey, CreateState, State } from './book.reducer';

export const selectBookState = createFeatureSelector<State>(bookFeatureKey);
export const createBookState = createFeatureSelector<CreateState>(bookFeatureKey);


export const selectBooks = createSelector(
  selectBookState,
  (state) => state.books
);

export const selectLoading = createSelector(
  selectBookState,
  (state) => state.loading
);

export const createSelectBook = createSelector(
  createBookState,
  (state) => state.book
);

export const createSelectLoading = createSelector(
  createBookState,
  (state) => state.loading
);

// export const getSelectedBook = createSelector(
//   selectEntities,
//   selectIsbn,
//   (entities, isbn) => entities[isbn]
//   );
