import { Book } from '../shared/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // books?: Book[];
  // books : Book[] | undefined;
  books: Book[] = [];

  constructor() { // From Angular 12, not in ngOnInit, but in constructor; Strict blah..
    this.books = [
      {
        isbn: '111',
        title: 'Angular',
        description: 'Angular AtoZ',
        rating: 5,
        price: 38.90
      },
      {
        isbn: '222',
        title: 'TypeScript',
        description: 'TypeScript AtoZ',
        rating: 4,
        price: 25.90
      }
    ];
  }

  ngOnInit(): void { // LifeCycle Hook; Handle when the component starts
  }

  onRateUp(book: Book) {
    book.rating++;
    console.log('UP', book);
  }

  onRateDown(book: Book) {
    book.rating--;
    console.log('Down', book);
  }

}
