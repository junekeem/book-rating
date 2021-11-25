import { BookRatingService } from './../shared/book-rating.service';
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

  // rs = new BookRatingService(); // Don't do this; Dependancy Injection, Inversion of Control(IoC)

  constructor(
    private rs: BookRatingService // by writing access modifier, no need to define property again (Day 1)
  ) { // From Angular 12, not in ngOnInit, but in constructor; Strict blah..
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

  trackBook(index: number, item: Book) {
    return index;
  }

  onRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  onRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book) {
    this.books = this.books.map(book => book.isbn === ratedBook.isbn ? ratedBook : book);
  }

}
