import { BookStoreService } from './../shared/book-store.service';
import { BookRatingService } from './../shared/book-rating.service';
import { Book } from '../shared/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // books?: Book[];
  // books : Book[] | undefined;
  books: Book[] = [];

  // rs = new BookRatingService(); // Don't do this; Dependancy Injection, Inversion of Control(IoC)

  constructor(
    private rs: BookRatingService, // by writing access modifier, no need to define property again (Day 1),
    private bookStoreService: BookStoreService
  ) {
    // From Angular 12, not in ngOnInit, but in constructor; Strict blah..
    this.bookStoreService.getAll().subscribe((books) => {
      this.books = books;
    });
  }

  ngOnInit(): void {
    // LifeCycle Hook; Handle when the component starts
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

  onDelete(book: Book) {
    console.log(book.isbn);
    this.bookStoreService.delete(book.isbn).subscribe((response) => {
      console.log(response);
    });
  }

  private updateList(ratedBook: Book) {
    this.books = this.books.map((book) =>
      book.isbn === ratedBook.isbn ? ratedBook : book
    );
  }
}
