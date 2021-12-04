import { createFeatureSelector, createSelector } from '@ngrx/store';
import { bookFeatureKey, State } from './book.reducer';

export const selectBookState = createFeatureSelector<State>(bookFeatureKey);

export const selectBooks = createSelector(
  selectBookState,
  (state) => state.books
);

export const selectLoading = createSelector(
  selectBookState,
  (state) => state.loading
);

// export const getSelectedBook = createSelector(
//   selectEntities,
//   selectIsbn,
//   (entities, isbn) => entities[isbn]
//   );
