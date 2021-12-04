import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of, tap } from 'rxjs';

import * as BookActions from './book.actions';
import { BookStoreService } from '../shared/services/book-store.service';

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBooks), // filter actions
      tap((e) => console.log('Log', e)), // Side Effect: Logging
      concatMap(() =>
        this.bookStoreService.getAll().pipe( // Side Effect: HTTP
          map((books) => BookActions.loadBooksSuccess({ data: books })), // map to new action
          catchError((err) => of(BookActions.loadBooksFailure({ error: err })))
        )
      )
    ); // The resulting Action will be dispatched automatically!
  });

  constructor(
    private actions$: Actions,
    private bookStoreService: BookStoreService
  ) {}
}
