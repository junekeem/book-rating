import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of, tap } from 'rxjs';

import * as BookActions from './book.actions';
import { BookStoreService } from '../shared/services/book-store.service';
import { Router } from '@angular/router';

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

  createBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.createBook),
      tap(e => console.log('Log', e)),
      concatMap((action) =>
        this.bookStoreService.create(action.data).pipe(
          map((book) => BookActions.createBookSuccess({ data: book })),
          tap((book)=>this.router.navigate(['/books', book.data.isbn])),
          catchError((err) => of(BookActions.createBookFailure({ error: err })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private bookStoreService: BookStoreService,
    private router: Router
  ) { }
}
