import { Book } from './../shared/book';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, Observable, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {

  searchControl = new FormControl('');

  books$: Observable<Book[]>;

  constructor(private bookStoreService: BookStoreService) {
    this.books$ = this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      filter((term) => term.length >= 3 || term.length === 0),
      switchMap((term) => this.bookStoreService.search(term))
    );
  }

  /**
   * Typeahead-Search
   * - Search term min 3 characters (with RxJS)
   * - Do not search after every typing
   * - Search books from the Server (HTTP)
   * - Display the results
   * - AsyncPipe
   */

  ngOnInit(): void {}
}
