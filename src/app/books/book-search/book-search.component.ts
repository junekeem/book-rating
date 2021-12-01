import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges.subscribe( e => {
      console.log(e);
    })
  }

  /**
   * Typeahead-Search
   * - Search term min 3 characters (with RxJS)
   * - Do not search after every typing
   * - Search books from the Server (HTTP)
   * - Display the results
   * - AsyncPipe
   */

  ngOnInit(): void {
  }

}
