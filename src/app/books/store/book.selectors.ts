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
  (createState) => createState.book
);

export const createSelectLoading = createSelector(
  createBookState,
  (createState) => createState.loading
);

// export const getSelectedBook = createSelector(
//   selectEntities,
//   selectIsbn,
//   (entities, isbn) => entities[isbn]
//   );
